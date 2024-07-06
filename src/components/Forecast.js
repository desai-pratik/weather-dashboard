import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const Forecast = ({ forecast }) => {
  return (
    <Grid container spacing={2}>
      {forecast.map((day, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="body2">{new Date(day.dt_txt).toDateString()}</Typography>
              <Typography variant="body2">Temperature: {day.main.temp} °C</Typography>
              <Typography variant="body2">Condition: {day.weather[0].description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Forecast;
