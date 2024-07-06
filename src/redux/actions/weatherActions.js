import axios from 'axios';
const API_KEY = 'a9a7ff1d940396c6933ed27f9729e68b';


export const fetchCountryWeather = (country) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${API_KEY}&units=metric`
    );
    dispatch({
      type: 'FETCH_COUNTRY_WEATHER_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    console.error('Error fetching country weather data:', error);
    dispatch({
      type: 'FETCH_COUNTRY_WEATHER_ERROR',
      payload: error.message,
    });
  }
};

export const fetchCountryForecast = (country) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${country}&appid=${API_KEY}&units=metric`
    );
    dispatch({
      type: 'FETCH_COUNTRY_FORECAST_SUCCESS',
      payload: response.data.list,
    });
  } catch (error) {
    console.error('Error fetching country forecast data:', error);
    dispatch({
      type: 'FETCH_COUNTRY_FORECAST_ERROR',
      payload: error.message,
    });
  }
};