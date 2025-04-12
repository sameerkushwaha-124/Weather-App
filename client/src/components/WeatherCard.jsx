import React from 'react';

const WeatherCard = ({ data }) => {
  const { temperature, humidity, windSpeed, description, icon, city } = data;

  return (
    <div className='w-full px-5' >
      <h2 className='text-2xl font-bold mb-2'>{city}</h2>
      <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon" />
      <p className='text-sm mb-2'>{description}</p>
      <p>Temp: {temperature}°C</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind: {windSpeed} m/s</p>
    </div>
  );
};

export default WeatherCard;
