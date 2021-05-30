import React from 'react';
import {
  Box, CardMedia, Typography,
} from '@material-ui/core';
import useCardStyles from './CardStyles';
import { Call } from './CallTypes';
// import useCard from './useCard';

function CallCard({ call }: { call: Call; }) {
  // const props = useCard({ id: call.id as number, count });
  const styles = useCardStyles();
  return (
    <CardMedia image={call.photo} className={styles.card}>
      <Box className={styles.box} textAlign="center">
        <Typography className={styles.text}>
          {call.name}
          {' + '}
          {call.id}
        </Typography>
      </Box>
    </CardMedia>
  );
}

export default CallCard;
