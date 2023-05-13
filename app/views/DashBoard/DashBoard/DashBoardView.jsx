import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import styles from 'global-styles';
import { MuiBox, MuiGrid, MuiTypography } from 'components';
import { PersonIcon, RedeemIcon, ChecklistIcon, KeyboardReturnIcon } from 'helpers/Icons';

const totalOverview = [
    { title: 'Total Sales', number: 2545, icon: <RedeemIcon />, color: '#fcf0d3' },
    { title: 'Customers', number: 4731, icon: <PersonIcon />, color: '#b2e1e9' },
    { title: 'Refunded', number: 1987, icon: <KeyboardReturnIcon />, color: '#fac7ef' },
    { title: 'Total Order', number: 6073, icon: <ChecklistIcon />, color: '#afffde' },
]

function DashBoardView(props) {

    return (
        <MuiBox className='overviewMainWrap'>
            <MuiGrid container spacing={2}>
                {totalOverview.map((item, index) => (
                    <MuiGrid item md={3} sm={6} xs={12} key={index}>
                        <MuiBox className='overviewCardWrap whiteBoxWrap' display='flex'>
                            <MuiBox className='iconWrap' sx={{
                                '& svg': {
                                    backgroundColor: item.color
                                }
                            }}>{item.icon}</MuiBox>
                            <MuiBox className='cntntWrap'>
                                <MuiTypography variant='h6'>
                                    {item.title}
                                </MuiTypography>
                                <MuiTypography variant='h4'>{item.number}</MuiTypography>
                            </MuiBox>
                        </MuiBox>
                    </MuiGrid>
                ))}
            </MuiGrid>

            <MuiBox className='whiteBoxWrap'>
                <MuiBox className='commonTableWrap'>
                    <MuiBox component='table'>
                        <MuiBox component='thead'>
                            <MuiBox component='tr'>
                                <MuiBox component='th'>Products</MuiBox>
                                <MuiBox component='th'>Category</MuiBox>
                                <MuiBox component='th'>Orders</MuiBox>
                                <MuiBox component='th'>Refund</MuiBox>
                            </MuiBox>
                        </MuiBox>

                        <MuiBox component='tbody'>
                            <MuiBox component='tr'>
                                <MuiBox component='td'>Rerum consectetur modi impedit</MuiBox>
                                <MuiBox component='td'>Guiter</MuiBox>
                                <MuiBox component='td'>267</MuiBox>
                                <MuiBox component='td'>16</MuiBox>
                            </MuiBox>
                            <MuiBox component='tr'>
                                <MuiBox component='td'>Rerum consectetur modi impedit</MuiBox>
                                <MuiBox component='td'>Guiter</MuiBox>
                                <MuiBox component='td'>267</MuiBox>
                                <MuiBox component='td'>16</MuiBox>
                            </MuiBox>
                            <MuiBox component='tr'>
                                <MuiBox component='td'>Rerum consectetur modi impedit</MuiBox>
                                <MuiBox component='td'>Guiter</MuiBox>
                                <MuiBox component='td'>267</MuiBox>
                                <MuiBox component='td'>16</MuiBox>
                            </MuiBox>
                        </MuiBox>
                    </MuiBox>
                </MuiBox>
            </MuiBox>
        </MuiBox>
    );
}

DashBoardView.propTypes = {
    classes: PropTypes.any,
};

export default withStyles(styles)(DashBoardView);