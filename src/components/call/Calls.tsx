import React from 'react';
import { Grid } from '@material-ui/core';
import useCalls from './useCalls';
import CallCard from './Card';

function CallLayout() {
  const { calls } = useCalls(5);
  return (
    <Grid
      container
      spacing={1}
      style={{ padding: '24px 60px' }}
    >
      {calls.map((call) => (
        <CallCard key={call.id} call={call} />
      ))}
    </Grid>
  );
}

export default CallLayout;
