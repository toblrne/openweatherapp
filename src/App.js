import React, { useState } from 'react'
import axios from 'axios'

export default function App() {

  const [data, setData] = useState({})

  const [location, setLocation] = useState("")

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`

  function getWeatherData() {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    setLocation("")
  }

  function handleChange(event) {
    setLocation(event.target.value)
  }

  return (
    <div>
      <input
        value={location}
        type="text"
        onChange={handleChange} />
      <button onClick={getWeatherData}> get weather data</button>
      {data.main ? <h1>{data.main.temp}</h1> : null}
    </div>

  )
}


