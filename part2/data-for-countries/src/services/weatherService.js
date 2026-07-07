import axios from 'axios' 

const weather_api_key = import.meta.env.VITE_WEATHER_API_KEY

const getWeather = (country) => {
    return (
        axios
        //example: .get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=445b10d12f9f775406440817d6847646")
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${country}&APPID=${weather_api_key}`)
            .then(response=> response.data
             )
    )
}

export default {getWeather}