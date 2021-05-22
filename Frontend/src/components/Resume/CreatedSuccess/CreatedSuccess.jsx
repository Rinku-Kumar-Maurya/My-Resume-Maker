import React from 'react';
import { Button, Typography } from '@material-ui/core';
import useStyles from '../styles.js'

function CheckoutSuccess() {
  const classes = useStyles();

  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Thank you for using MY RESUME MAKER.
        </Typography>
      <Typography variant="subtitle1">
        Please Wait
        Your download will begin in few seconds
          <Button
          onClick={refreshPage}
          className={classes.allignCenter}
          color="primary"
          variant="contained"
        >
          Make Another Resume
        </Button>
      </Typography>
    </React.Fragment>
  );
}

export default CheckoutSuccess;