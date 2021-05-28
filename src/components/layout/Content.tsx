import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Header from './Header';
import { Calls } from '../call';
import Actions from './Actions';

function Layout() {
  useEffect(() => {

  }, []);
  // const item;
  return (
    <Grid container style={{ background: '#333', height: '100vh', overflow: 'hidden' }}>
      <Grid item xs={12} sm={8} md={9}>
        <Header />
        <Calls />
        <Actions />
      </Grid>
      <Grid item xs={12} sm={4} md={3} />
    </Grid>
  );
}

export default Layout;
