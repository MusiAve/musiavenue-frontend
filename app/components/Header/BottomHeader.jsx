import React from 'react';
import { MuiBox, MuiLink, MuiTypography } from 'components';

function BottomHeader() {
    return (
        <MuiBox className='bottomHeaderMainWrap'>
            <MuiLink to='#'>Guiter/Bass</MuiLink>
            <MuiLink to='#'>Keyboard/Pianos</MuiLink>
            <MuiLink to='#'>AMPS/effects</MuiLink>
            <MuiLink to='#'>Live sound</MuiLink>
            <MuiLink to='#'>Recording studio</MuiLink>
            <MuiLink to='#'>DJ/Lighting</MuiLink>
            <MuiLink to='#'>Drums/Percussion</MuiLink>
            <MuiLink to='#'>Orchestal</MuiLink>
            <MuiLink to='#'>Accessories</MuiLink>
            <MuiLink to='#'>Shop by brand</MuiLink>
        </MuiBox>
    )
}

export default BottomHeader