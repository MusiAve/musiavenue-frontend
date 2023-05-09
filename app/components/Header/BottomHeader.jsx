import React from 'react';
import { MuiBox, MuiLink } from 'components';
import { Link } from 'react-router-dom';

function BottomHeader() {
    return (
        <MuiBox className='bottomHeaderMainWrap'>
            <MuiLink component={Link} to='#'>Guiter/Bass</MuiLink>
            <MuiLink component={Link} to='#'>Keyboard/Pianos</MuiLink>
            <MuiLink component={Link} to='#'>AMPS/effects</MuiLink>
            <MuiLink component={Link} to='#'>Live sound</MuiLink>
            <MuiLink component={Link} to='#'>Recording studio</MuiLink>
            <MuiLink component={Link} to='#'>DJ/Lighting</MuiLink>
            <MuiLink component={Link} to='#'>Drums/Percussion</MuiLink>
            <MuiLink component={Link} to='#'>Orchestal</MuiLink>
            <MuiLink component={Link} to='#'>Accessories</MuiLink>
            <MuiLink component={Link} to='#'>Shop by brand</MuiLink>
        </MuiBox>
    )
}

export default BottomHeader