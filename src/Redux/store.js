import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";

import weatherReducer from "./reducer/weatherReducer";
import watchFetchWeather from "./saga.js";

// Combine reducers if have multiple reducers
const rootReducer = combineReducers({
  weather: weatherReducer,
 
});

const sagaMiddleware = createSagaMiddleware();

// Create the Redux store with middleware
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Run the rootSaga to handle sagas
sagaMiddleware.run(watchFetchWeather);

export default store;
