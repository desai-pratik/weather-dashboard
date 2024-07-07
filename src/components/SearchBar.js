import React, { useState } from 'react';
import { Container, TextField } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: '15px' }}>
      <TextField
        label="Search Country"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
        fullWidth
      />
    </Container>
  );
};

export default SearchBar;