// sagas.js
import { call, put, takeEvery } from "redux-saga/effects";

import {
  fetchWeatherSuccess,
  fetchWeatherFailure,
} from "./Actions/weatherAction";
import { FETCH_WEATHER } from "../constants/index";
// Function to fetch weather data from the API
function fetchWeatherApi(city) {
   
console.log(import.meta.env.VITE_APIKEY, "apikey saga");
  //get the api key from .env file
  const apiKey = import.meta.env.VITE_APIKEY
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`City not found: ${city}`);
      }
      return response.json();
    })
    .catch((error) => {
      // Handle the error here
      console.error("Error fetching weather data:", error);
      throw error; // Rethrow the error to propagate it further if needed
    });
}

// Saga to handle fetching weather data
function* fetchWeather(action) {
  try {
    const { city } = action.payload;
    const weatherData = yield call(fetchWeatherApi, city);
    yield put(fetchWeatherSuccess(weatherData));
  } catch (error) {
    yield put(fetchWeatherFailure(error));
  }
}

// Watcher saga
function* watchFetchWeather() {
  yield takeEvery(FETCH_WEATHER, fetchWeather);
}

export default watchFetchWeather;
