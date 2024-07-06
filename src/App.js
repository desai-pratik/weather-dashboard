import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary';
import AppLayout from './components/AppLayout';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import WeatherChart from './components/WeatherChart';
import Forecast from './components/Forecast'; 
import GlobeMap from './components/GlobeMap';
import { fetchCountryForecast, fetchCountryWeather } from './redux/actions/weatherActions';

function App() {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.weatherData);
  const forecastData = useSelector((state) => state.weather.forecastData);

  const handleSearch = (country) => {
    dispatch(fetchCountryWeather(country));
    dispatch(fetchCountryForecast(country));
  };

  return (
    <ErrorBoundary>
    <AppLayout>
      <GlobeMap />
      <SearchBar onSearch={handleSearch} />
      {weatherData && <CurrentWeather weather={weatherData} />}
      {forecastData.length > 0 && <Forecast forecast={forecastData} />}
      {forecastData.length > 0 && <WeatherChart data={forecastData} />}
    </AppLayout>
  </ErrorBoundary>
  );
}

export default App;
