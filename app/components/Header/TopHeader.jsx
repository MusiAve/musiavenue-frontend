import React from 'react';
import { MuiBox, MuiLink, MuiTypography } from 'components';
import Theme from 'theme/Theme';
import { Link } from 'react-router-dom';

function TopHeader() {
    return (
        <MuiBox className='topHeaderMainWrap'>
            <MuiBox className='topHeaderLeft'>
                <MuiLink component={Link} to='/about-us' variant="subtitle2">About Us</MuiLink>
                <MuiLink component={Link} to='#' variant="subtitle2">Contact</MuiLink>
                <MuiLink component={Link} to='#' variant="subtitle2">Order Support</MuiLink>
                <MuiLink component={Link} to='#' variant="subtitle2">Store Locator</MuiLink>
            </MuiBox>
            <MuiBox className='topHeaderCenter'>
                <MuiTypography variant='subtitle2' style={{ textTransform: 'uppercase' }}>
                    Free australia wide shipping on order above <MuiBox component='span'
                        style={{ color: Theme.palette.secondary.main, fontWeight: 500 }}>$49</MuiBox>
                </MuiTypography>
            </MuiBox>
            <MuiBox className='topHeaderRight'>
                <MuiTypography variant='subtitle2'>
                    We're here to help! Call Us Now: <MuiBox component='span' style={{ fontWeight: 600 }}>(02) 9755 9999</MuiBox>
                </MuiTypography>
            </MuiBox>
        </MuiBox>
    )
}

export default TopHeader