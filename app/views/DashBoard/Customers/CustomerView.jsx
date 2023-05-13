import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { styled, useTheme } from '@mui/material/styles';
import { withStyles } from '@mui/styles';
import styles from 'global-styles';
import { MuiBox, MuiAppBar, MuiTypography } from 'components';

function CustomerView(props) {

    const { classes } = props;

    return (
        <MuiBox className={classes.dashboardLayoutMainWrap} sx={{ display: 'flex' }}>
            <MuiTypography>Customers</MuiTypography>
        </MuiBox>
    );
}

CustomerView.propTypes = {
    classes: PropTypes.any,
};

export default withStyles(styles)(CustomerView);