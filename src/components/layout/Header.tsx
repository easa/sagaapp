import { Grid, Typography } from '@material-ui/core';
import React from 'react';

function Layout() {
  return (
    <Grid container alignItems="center">
      <Grid item xs={4} sm={4} md={4}>
        classIcon
      </Grid>
      <Grid item xs={8} sm={8} md={8}>
        <Typography display="inline" align="center">
          case of Kennedy murder
        </Typography>
        { ' ' }
        <Typography color="primary" display="inline">
          (59:30)
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Layout;
