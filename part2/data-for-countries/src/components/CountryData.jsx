import { useState, useEffect } from 'react'
import weatherService from '../services/weatherService'

const CountryData = ({country}) => {
    const [weather, setWeather] = useState(null)
    const firstCountry = country[0] //asumiendo que solo se pasa un país

    const languagesArray = Object.values(firstCountry.languages)

    const fetchWeather = ()=> { 
      weatherService.getWeather(firstCountry.capital[0])
      .then(getWeatherResponse => setWeather(getWeatherResponse))
    }

    console.log(weather)

    useEffect(fetchWeather, [firstCountry])


    return(
    <>
        <h1>{firstCountry.name.common}</h1>
        <p>{firstCountry.capital}</p>
        <p>Area {firstCountry.area}</p>
        <h3>Languages</h3>
        <ul>
        {languagesArray.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
        </ul>
        <img 
          src={firstCountry.flags.svg} 
          alt={firstCountry.flags.alt || `Flag of ${firstCountry.name.common}`} 
          style={{ width: '150px', border: '1px solid #ccc' }} 
          
        />
     
        <h3>Weather in {firstCountry.capital[0]}</h3>

        {weather === null 
        ? (<p>Loading Weather...</p>) 
        : (<div>
            <p>Temperature {(weather.main.temp - 273.15).toFixed(2)} Celsius</p>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img>
            <p>Wind {weather.wind.speed} m/s</p>

          </div>)}
    </>
    )
}

export default CountryData