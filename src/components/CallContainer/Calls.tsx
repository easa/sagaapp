import React, { useRef } from 'react';
import { Grid } from '@material-ui/core';
import Draggable from 'react-draggable';
import useCalls from './useCalls';
import CallCard from '../CallCard';
import useCallStyles from './CallStyles';

function CallLayout() {
  const ref = useRef<HTMLDivElement | null>(null);
  const {
    calls, onStart, onStop, calculatePosition, width, height,
  } = useCalls({ containerElementRef: ref });
  const styles = useCallStyles({ width, height })();
  return (
    <Grid
      ref={ref}
      className={styles.box}
      container
      spacing={1}
      alignItems="center"
      justify="center"
    >
      {calls.map((call) => (
        <Draggable
          key={call.id}
          onStart={onStart}
          onStop={onStop}
          bounds="parent"
          defaultPosition={calculatePosition(call.id)}
        >
          <div className={styles.card} data-id={call.id}>
            <CallCard call={call} />
          </div>
        </Draggable>
      ))}
    </Grid>
  );
}

export default CallLayout;
