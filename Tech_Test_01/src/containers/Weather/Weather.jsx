import React, { useEffect, useState } from "react";
import styles from "./Weather.module.scss";
import Card from "../Card"

const Weather = () => {

  const [weather, storeWeather] = useState([]);

  let weatherArray = []

  const fetchWeather = (location) => {
    console.log(location);
    
    const proxyUrl = "https://cors-anywhere.herokuapp.com/"
    fetch( proxyUrl + `http://api.openweathermap.org/data/2.5/weather?id=${location}&appid=f87b6b7c050ce6906064d80bc9a9de71`)
    .then(result => result.json())
    .then(result => weatherArray.push(result))
    .catch(error => console.log(error));
  }

  const getWeather = locations => {
    locations.map(loc => fetchWeather(loc));
    storeWeather(weatherArray);
    printCards();
  }

  // const printCards = () => weather.map(locationData => console.log(locationData)
  // )
  const printCards = () => weather.forEach(locationData => <Card cardType="weather" result={locationData} />)

  return (
    <>
    <button onClick={() => getWeather([2654675, 2643741, 3169070])}>Get Weather</button>
      {/* {printCards()} */}
    </>
  );
};

export default Weather;
