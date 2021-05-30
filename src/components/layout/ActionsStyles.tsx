import { makeStyles } from '@material-ui/core';

const useActionStyles = (hangupIcon: string) => makeStyles({
  box: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
  button: {
    width: '39px',
    height: '39px',
    borderRadius: '50%',
    background: `url(${hangupIcon}) right center / cover no-repeat`,
    backgroundSize: '100px',
    backgroundPosition: '-54px',
  },
});

export default useActionStyles;
