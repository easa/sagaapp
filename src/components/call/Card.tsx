import React from 'react';
import {
  Box, CardMedia, Grid, Typography,
} from '@material-ui/core';
import useCardStyles from './Card.styles';
import { Call } from './call.types';

function CallCard({ call }: { call: Call }) {
  const styles = useCardStyles();
  return (
    <Grid item xs={6} sm={4} md={3}>
      <CardMedia image={call.photo} className={styles.card}>
        <Box className={styles.box} textAlign="center">
          <Typography className={styles.text}>
            {call.name}
          </Typography>
        </Box>
      </CardMedia>
    </Grid>
  );
}

export default CallCard;
