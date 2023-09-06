import React, { useState } from "react";
import styles from './selectCity.module.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../Redux/Actions/weatherAction";
import NotFound from "./NotFound";
const SelectCity = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.weather.loading);
  const error = useSelector((state) => state.weather.error);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  
  const handleSearch = () => {
    if (city) {
      dispatch(fetchWeather(city));
    }
    setCity("");
  };

  return (
    <div className={styles.container}>
        <div className={styles.form}>
     
      <input
         className={styles.searchinput}
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={handleCityChange}
      />
      <button className={styles.button} onClick={handleSearch} disabled={loading}>
       
        {loading ? "Searching..." : "Search"}
      </button>
      {error && <NotFound error={error}/>}
      </div>
    </div>
  );
};

export default SelectCity;
