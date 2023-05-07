import React from 'react';
import { MuiBox, MuiLink } from 'components';

function TopHeader() {
    return (
        <MuiBox className='topHeaderMainWrap'>
            <MuiBox>
                <MuiLink to='#'>About Us</MuiLink>
                <MuiLink to='#'>Contact</MuiLink>
                <MuiLink to='#'>Order Support</MuiLink>
                <MuiLink to='#'>Store Locator</MuiLink>
            </MuiBox>
            <MuiBox></MuiBox>
            <MuiBox></MuiBox>
        </MuiBox>
    )
}

export default TopHeader