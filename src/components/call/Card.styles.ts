import { makeStyles } from '@material-ui/core';

const useCardStyles = makeStyles({
  card: {
    height: 200,
    width: 180,
    display: 'grid',
  },
  box: {
    alignSelf: 'end',
    textAlign: 'center',
  },
  text: {
    background: '#0c0c0c80',
    color: '#fff',
    display: 'inline-block',
    padding: '0 .4em',
    borderRadius: '1em',
    marginBottom: '.1em',
    fontSize: '.8em',
  },
});

export default useCardStyles;
