import React, { useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';
// import * as THREE from 'three';
import { useDispatch } from 'react-redux';
import { fetchCountryForecast, fetchCountryWeather } from '../redux/actions/weatherActions';
import { Box, Typography } from '@mui/material';

const GlobeMap = () => {
  const globeEl = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    const globe = globeEl.current;
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.1;
  }, []);

  const handleCountryClick = async (coords) => {
    const { lat, lng } = coords;
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`);
      const data = await response.json();
      if (data && data.address && data.address.country) {
        const country = data.address.country;
        dispatch(fetchCountryWeather(country));
        dispatch(fetchCountryForecast(country));
      } else {
        alert("Couldn't find a country at this location.");
      }
    } catch (error) {
      console.error('Error fetching country data:', error);
    }
  };

  return (
    <div style={{ height: '90vh', overflow: "hidden" }}>
      <Box
        display="flex"
        justifyContent="center"
      >
        <Typography variant="h6" component="h6">
          Click on Country
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
      >
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        showGraticules={true}
        showAtmosphere={true}
        atmosphereColor="rgba(255,255,255,0.5)"
        atmosphereAltitude={0.25}
        enablePointerInteraction={true}
        onGlobeClick={({ lat, lng }) => handleCountryClick({ lat, lng })}
      />
      </Box>
    </div>
  );
};

export default GlobeMap;
