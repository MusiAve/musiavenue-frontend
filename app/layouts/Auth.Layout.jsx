import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import styles from 'global-styles';
import { BottomHeader, MiddleHeader, TopHeader } from 'components/Header';
import { MuiBox } from 'components';

export default function AuthLayout() {

  return (
    <MuiBox>
      <TopHeader />
      <MiddleHeader />
      <BottomHeader />
    </MuiBox>
  );
}

// AuthLayout.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(AuthLayout);
