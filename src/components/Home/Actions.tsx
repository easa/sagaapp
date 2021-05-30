import React from 'react';
import { Box, IconButton } from '@material-ui/core';
import { hangup } from '../../helpers/icon';
import useAction from './useAction';
import useActionStyles from './ActionsStyles';

function Actions() {
  const { onActionClick } = useAction();
  const styles = useActionStyles(hangup)();
  return (
    <Box
      p={1}
      textAlign="center"
      className={styles.box}
    >
      <IconButton
        onClick={onActionClick}
        className={styles.button}
      />
    </Box>
  );
}

export default Actions;
