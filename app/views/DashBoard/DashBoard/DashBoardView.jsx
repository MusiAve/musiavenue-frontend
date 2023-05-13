import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { styled, useTheme } from '@mui/material/styles';
import { withStyles } from '@mui/styles';
import styles from 'global-styles';
import { Link } from 'react-router-dom';
import Logo from 'images/logo.png';
import { MuiBox, MuiCssBaseline, MuiDrawer, MuiAppBar, MuiToolbar, MuiTypography, MuiIconButton, MuiLink } from 'components';
import { ChevronRightIcon, ChevronLeftIcon, MenuIcon } from 'helpers/Icons';
import UserMenu from 'components/Dashboard/UserMenu';
import SidebarContent from 'components/Dashboard/SidebarContent';

function DashBoardView(props) {

    const { classes } = props;

    return (
        <MuiBox>
            overview
        </MuiBox>
    );
}

DashBoardView.propTypes = {
    classes: PropTypes.any,
};

export default withStyles(styles)(DashBoardView);