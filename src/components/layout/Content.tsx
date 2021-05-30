import React from 'react';
import { Grid } from '@material-ui/core';
import Calls from '../CallContainer';
import Header from './Header';
import Actions from './Actions';
import useContentStyle from './ContentStyles';

function Layout() {
  const styles = useContentStyle();
  return (
    <Grid container className={styles.container}>
      <Grid item xs={12} sm={8} md={9} className={styles.item}>
        <Header />
        <Calls />
        <Actions />
      </Grid>
      <Grid item xs={12} sm={4} md={3} />
    </Grid>
  );
}

export default Layout;
