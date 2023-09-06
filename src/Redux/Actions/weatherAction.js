
import {
  FETCH_WEATHER,
  FETCH_WEATHER_FAILURE,
  FETCH_WEATHER_SUCCESS
} from "../../constants";

export const fetchWeather = (city) => ({
  type: FETCH_WEATHER,
  payload: { city }
});

export const fetchWeatherSuccess = (data) => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: { data }
});

export const fetchWeatherFailure = (error) => ({
  type: FETCH_WEATHER_FAILURE,
  payload: { error }
});
