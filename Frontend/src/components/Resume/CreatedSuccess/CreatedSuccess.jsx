import React from 'react';
import { Typography } from '@material-ui/core';

function CheckoutSuccess() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Thank you for using MY RESUME MAKER.
      </Typography>
      <Typography variant="subtitle1">
        Please Wait
        Your download will begin in few seconds
      </Typography>
    </React.Fragment>
  );
}

export default CheckoutSuccess;