import React from 'react'
import "./Weather.css"
function weather() {
  return (
    <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Weather Card</title>
  <link rel="stylesheet" href="weather.css" />
  <div className="weather-card">
    <h1>83° Dallas</h1>
    <h2>United States, Texas</h2>
    <p>Tuesday, July 2, 2024</p>
    <p>Feels like: 83°</p>
    <p>Humidity: 40%</p>
    <p>Precipitation: 0%</p>
    <p>Low: 72° / High: 88°</p>
    <div className="forecast">
      <div className="day">
        <h3>Wednesday</h3>
        <p>74° / 89°</p>
        <p>☁️</p>
      </div>
      <div className="day">
        <h3>Thursday</h3>
        <p>77° / 92°</p>
        <p>🌧️</p>
      </div>
      <div className="day">
        <h3>Friday</h3>
        <p>80° / 98°</p>
        <p>☁️</p>
      </div>
      <div className="day">
        <h3>Saturday</h3>
        <p>81° / 97°</p>
        <p>☁️</p>
      </div>
    </div>
  </div>
</div>

  )
}

export default weather
