import React from 'react';
import { MuiBox, MuiLink, MuiTypography } from 'components';
import Logo from 'images/logo.png';

function MiddleHeader() {
    return (
        <MuiBox className='middleHeaderMainWrap'>
            <MuiBox className='middleHeaderLeft'>
                <MuiLink to='#'>
                    <img src={Logo} />
                </MuiLink>
            </MuiBox>
            <MuiBox className='middleHeaderCenter'>
                <MuiTypography>
                    Free australia wide shipping on order above <MuiBox component='span'>$49</MuiBox>
                </MuiTypography>
            </MuiBox>
            <MuiBox className='middleHeaderRight'>
                <MuiTypography>
                    We're here to help! Call Us Now: <MuiBox component='span'>(02) 9755 9999</MuiBox>
                </MuiTypography>
            </MuiBox>
        </MuiBox>
    )
}

export default MiddleHeader