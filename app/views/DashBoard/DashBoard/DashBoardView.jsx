import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import styles from 'global-styles';
import { MuiBox, MuiGrid, MuiTypography } from 'components';
import {
    PersonIcon,
    RedeemIcon
} from 'helpers/Icons';

const totalOverview = [
    { title: 'Total Sales', number: 2545, icon: RedeemIcon },
]

function DashBoardView(props) {

    return (
        <MuiBox className='overviewMainWrap'>
            <MuiGrid container spacing={2}>
                <MuiGrid item md={3} sm={6} xs={12}>
                    <MuiBox>
                        <MuiTypography variant='h6'>Total Sales</MuiTypography>
                    </MuiBox>
                </MuiGrid>
            </MuiGrid>
        </MuiBox>
    );
}

DashBoardView.propTypes = {
    classes: PropTypes.any,
};

export default withStyles(styles)(DashBoardView);