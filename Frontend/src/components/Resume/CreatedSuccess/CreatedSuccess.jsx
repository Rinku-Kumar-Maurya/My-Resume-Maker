import React from 'react';
import { Typography } from '@material-ui/core';

function CheckoutSuccess() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Thank you for using my_Resume_maker.
      </Typography>
      <Typography variant="subtitle1">
        Please give it a start on github.
      </Typography>
    </React.Fragment>
  );
}

export default CheckoutSuccess;