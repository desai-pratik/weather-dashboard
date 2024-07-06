const initialState = {
  weatherData: null,
  forecastData: [],
  error: null,
};


const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_COUNTRY_WEATHER_SUCCESS':
      return {
        ...state,
        weatherData: action.payload,
        error: null,
      };
    case 'FETCH_COUNTRY_WEATHER_ERROR':
      return {
        ...state,
        weatherData: null,
        error: action.payload,
      };
    case 'FETCH_COUNTRY_FORECAST_SUCCESS':
      return {
        ...state,
        forecastData: action.payload,
        error: null,
      };
    case 'FETCH_COUNTRY_FORECAST_ERROR':
      return {
        ...state,
        forecastData: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;