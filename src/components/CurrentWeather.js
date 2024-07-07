import React from 'react';
import { Box, Card, CardContent, Container, Typography } from '@mui/material';

const CurrentWeather = ({ weather }) => {
  return (
    <Container maxWidth="md" sx={{ marginY: '20px', width: "30%" }}>
      <Card>
        <CardContent>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            <Typography variant="h5">{weather.name}</Typography>
            <Typography variant="body2">Temperature: {weather.main.temp} °C</Typography>
            <Typography variant="body2">Humidity: {weather.main.humidity} %</Typography>
            <Typography variant="body2">Wind Speed: {weather.wind.speed} m/s</Typography>
            <Typography variant="body2">Condition: {weather.weather[0].description}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CurrentWeather;
