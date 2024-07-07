import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { format } from 'date-fns';
import { Container } from '@mui/material';

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const WeatherChart = ({ data }) => {
  const chartData = {
    labels: data.map((day) => format(new Date(day.dt_txt), 'MM-dd HH:mm')),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: data.map((day) => day.main.temp),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <Container fixed>
      <Line data={chartData} />
    </Container>
  );
};

export default WeatherChart;
