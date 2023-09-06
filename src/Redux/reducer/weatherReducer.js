// reducers.js
import {
  FETCH_WEATHER,
  FETCH_WEATHER_FAILURE,
  FETCH_WEATHER_SUCCESS
} from "../../constants";

const initialState = {
  weatherData: null,
  loading: false,
  error: null
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        weatherData: action.payload.data,
        loading: false,
        error: null
      };
    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        weatherData: null,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default weatherReducer;
