import { useState } from 'react';

const cityName = '';

const WeatherComponent = () => {
    const [city, setCity] = useState(cityName);
    const [temp, setTemp] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const apiKey = 'aa77f92a48bf59db8f58131ea9d8af1f';

    const getWeatherData = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=ru`);
            const data = await response.json();
            setWeatherData(data);
            setTemp(Math.floor(data.main.temp));
        } catch {
            console.error('ERROR');
        }
        setCity('');

    }

    const onValueChange = (e) => {
        setCity(e.target.value) 
    }

    return (
        <div>
            <h1>Weather APP</h1>
            <input type="text" placeholder='Enter city' onChange={onValueChange} value={city}/>
            <button onClick={(e) => getWeatherData(e)}>Get Weathert</button>
            {weatherData && (
                <div>
                    <h2>Weather Details</h2>
                    <div>{`${weatherData.weather[0].description} and ${temp}°C`}</div>
                </div>
            )}
        </div>
    )
}

export default WeatherComponent;