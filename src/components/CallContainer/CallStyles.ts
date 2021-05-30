import { makeStyles } from '@material-ui/core';

const useCallStyles = ({ width, height }: {
  width: number,
  height: number,
}) => makeStyles({
  box: {
    padding: '24px 24px',
    width: '100%',
    height: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'relative',

  },
  card: {
    width,
    height,
    border: '1px solid black',
    zIndex: 1,
    margin: '5px',
    position: 'relative',
  },
});

export default useCallStyles;
