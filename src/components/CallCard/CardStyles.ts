import { makeStyles } from '@material-ui/core';

const useCardStyles = makeStyles({
  card: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    placeContent: 'flex-end',
  },
  box: {
    // alignSelf: 'end',
    textAlign: 'center',
  },
  text: {
    background: '#0c0c0c80',
    color: '#fff',
    padding: '0 .4em',
    borderRadius: '1em',
    marginBottom: '.1em',
    fontSize: '.8em',
  },
});

export default useCardStyles;
