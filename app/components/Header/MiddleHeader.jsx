import React, { useState } from 'react';
import { MuiBadge, MuiBox, MuiDivider, MuiInputAdornment, MuiLink, MuiMenu, MuiMenuItem, MuiTypography } from 'components';
import Logo from 'images/logo.png';
import { FavoriteBorderOutlinedIcon, PersonOutlineOutlinedIcon, SearchIcon, ShoppingBasketOutlinedIcon } from 'helpers/Icons';
import MuiInputField from 'components/Input';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { IsEmpty } from 'helpers';

function MiddleHeader(props) {

    const { user } = props;

    const history = useHistory();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        if (IsEmpty(user)) {
            history.push('/login');
        } else {
            setAnchorEl(event.currentTarget);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <MuiBox className='middleHeaderMainWrap'>
            <MuiBox className='middleHeaderLeft'>
                <MuiLink component={Link} to='/'>
                    <img src={Logo} />
                </MuiLink>
            </MuiBox>
            <MuiBox className='middleHeaderCenter'>
                <MuiInputField
                    name='searchProduct'
                    placeholder='Search for a Product here...'
                    InputProps={{
                        endAdornment: (
                            <MuiInputAdornment position='end'>
                                <SearchIcon />
                            </MuiInputAdornment>
                        ),
                    }}
                />
            </MuiBox>
            <MuiBox className='middleHeaderRight'>
                <MuiBox onClick={handleClick} className="rightCircle" sx={{ background: '#E8F8F7' }}>
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

            {open &&
                <MuiMenu
                    id="basic-menu"
                    className='profileMenu'
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MuiMenuItem sx={{ fontSize: '16px !important', color: '#000' }} onClick={() => { }}>Profile</MuiMenuItem>
                    <MuiMenuItem sx={{ fontSize: '16px !important', color: '#000' }} onClick={() => { }}>My account</MuiMenuItem>
                    <MuiDivider />
                    <MuiMenuItem sx={{ fontSize: '16px !important', color: '#000' }} onClick={() => { }}>Logout</MuiMenuItem>
                </MuiMenu>}
        </MuiBox>
    )
}

const mapStateToProps = (state) => ({
    user: state.login.userLogin,
})

export default connect(mapStateToProps)(MiddleHeader);