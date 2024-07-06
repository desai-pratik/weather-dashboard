import React from 'react';
import { Grid } from '@mui/material';

const AppLayout = ({ children }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
};

export default AppLayout;
