import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CurrentWeather = ({ weather }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{weather.name}</Typography>
        <Typography variant="body2">Temperature: {weather.main.temp} °C</Typography>
        <Typography variant="body2">Humidity: {weather.main.humidity} %</Typography>
        <Typography variant="body2">Wind Speed: {weather.wind.speed} m/s</Typography>
        <Typography variant="body2">Condition: {weather.weather[0].description}</Typography>
      </CardContent>
    </Card>
  );
};

export default CurrentWeather;
