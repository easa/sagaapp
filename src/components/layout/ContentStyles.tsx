import { makeStyles } from '@material-ui/core';

const useContentStyle = makeStyles({
  container: {
    background: '#333',
    height: '100vh',
    maxHeight: '100vh',
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
  },
  item: {
    height: '100%',
    minHeight: '100%',
    maxHeight: '100%',
  },
});

export default useContentStyle;
