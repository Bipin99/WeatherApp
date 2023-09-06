import React from "react";
import styles from "./display.module.css";
import { useSelector } from "react-redux";

const DisplayWeather = () => {
  const weather = useSelector((state) => state.weather);
  const weatherData = weather?.weatherData;
  const loading = weather?.loading;
  const error = weather?.error;
  const city=weatherData?.name;
  // console.log(weather, weatherData, loading);
  // console.log(error, " this is the error");

  //console.log(weatherData, loading);

  return (
    <div className={styles.display_container}>
      <p className={styles.weather}>Weather Forecast</p>
      {loading ? (
        <p>Loading...</p>
      ) : weatherData ? (
        <>
          <p> Weather in {city}</p>
          <p>Temperature : {weatherData?.main?.temp} °C</p>
          <p> Humidity : {weatherData?.main?.humidity} </p>
          <p> Weather Condition : {weatherData?.weather[0]?.main}</p>
        </>
      ) : (
        <p className={styles.paragraph}>Select a city to view weather data.</p>
      )}
    </div>
  );
};

export default DisplayWeather;
