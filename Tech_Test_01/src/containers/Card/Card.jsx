import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  const {cardType, weather} = props;

  // const weatherCard = new 

  console.log(weather, cardType);
  

  const printWeatherCard = loc => {
    return [<h2>{loc.name}</h2>,
    <p>Temperature: {loc.main.temp}</p>,
    <p>Humidity: {loc.main.humidity}</p>,
    <p>Max Temperature: {loc.main.temp_max}</p>,
    <p>Min Temperature: {loc.main.temp_min}</p>]
  }

  const printWeather = (cardType, weather) => {
    // if (cardType === "weather") {
      return weather.map(loc => printWeatherCard(loc))
      // }
  }

  return (
    <>
      {printWeather(weather)}
    </>
  );
};

export default Card;
