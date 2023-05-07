import React from 'react';
import { MuiBadge, MuiBox, MuiLink, MuiTypography } from 'components';
import Logo from 'images/logo.png';
import { FavoriteBorderOutlinedIcon, PersonOutlineOutlinedIcon, ShoppingBasketOutlinedIcon } from 'helpers/Icons';

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
                <MuiBox className="rightCircle" sx={{ background: '#E8F8F7' }}>
                    <PersonOutlineOutlinedIcon />
                </MuiBox>
                <MuiBox className="rightCircle" sx={{ background: '#F5F3E4' }}>
                    <MuiBadge badgeContent={1} showZero>
                        <FavoriteBorderOutlinedIcon />
                    </MuiBadge>
                </MuiBox>
                <MuiBox className="rightCircle" sx={{ background: '#F3E5DE' }}>
                    <MuiBadge badgeContent={1} showZero>
                        <ShoppingBasketOutlinedIcon />
                    </MuiBadge>
                </MuiBox>
                <MuiTypography>$0.00</MuiTypography>
            </MuiBox>
        </MuiBox>
    )
}

export default MiddleHeader