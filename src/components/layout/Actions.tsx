import React from 'react';
import { Box, IconButton } from '@material-ui/core';
import { hangup } from '../../helpers/icon';
import useAction from './useAction';

function Actions() {
  const { onClick } = useAction();
  return (
    <Box p={1} textAlign="center">
      <IconButton
        onClick={onClick}
        style={{
          width: '39px',
          height: '39px',
          borderRadius: '50%',
          background: `url(${hangup}) right center / cover no-repeat`,
          backgroundSize: '100px',
          backgroundPosition: '-54px',
        }}
      />
    </Box>
  );
}

export default Actions;
