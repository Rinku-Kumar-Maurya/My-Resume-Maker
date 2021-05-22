import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    marginTop: theme.spacing(5),
    display: 'flex',
    justifyContent: 'flex-end',
    color: 'white'
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  navBefore: {
    float: 'left'
  },
  navAfter: {
    float: 'right'
  },
  wrapper: {
    margin: theme.spacing(3),
    position: 'relative'
  },
  allignCenter: {
    marginTop: theme.spacing(5),
    display: 'flex',
    left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  }
}));