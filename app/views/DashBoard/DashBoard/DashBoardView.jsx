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

const drawerWidth = 270;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        backgroundColor: '#f3f6f9',
        padding: 15,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '5px 10px',
    ...theme.mixins.toolbar,
}));

function DashBoardView(props) {

    const { classes } = props;

    const theme = useTheme();
    const [open, setOpen] = useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <MuiBox className={classes.dashboardLayoutMainWrap} sx={{ display: 'flex' }}>
            <MuiCssBaseline />
            <MuiAppBar position="fixed" open={open} className={`dashboardHeaderWrap ${open && 'sidebarClosed'}`}
                sx={{
                    ...(open && {
                        width: `calc(100% - ${drawerWidth}px)`,
                        marginLeft: `${drawerWidth}px`,
                        transition: theme.transitions.create(['margin', 'width'], {
                            easing: theme.transitions.easing.easeOut,
                            duration: theme.transitions.duration.enteringScreen,
                        }),
                    })
                }}
            >
                <MuiToolbar>
                    <MuiBox className='dashHeaderInnerMain'>
                        <MuiBox className='headerLeft'>
                            <MuiIconButton
                                color="main"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{ mr: 2, ...(open && { display: 'none' }) }}
                            >
                                <MenuIcon />
                            </MuiIconButton>
                        </MuiBox>
                        <MuiBox className='headerRight'>
                            <MuiTypography variant="h6" noWrap component="div">
                                Persistent drawer
                            </MuiTypography>
                            <UserMenu />
                        </MuiBox>
                    </MuiBox>
                </MuiToolbar>
            </MuiAppBar>
            <MuiDrawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <MuiBox className='sidebarLogoWraper'>
                    <DrawerHeader>
                        <MuiLink component={Link} to='/'>
                            <img src={Logo} />
                        </MuiLink>
                        <MuiIconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </MuiIconButton>
                    </DrawerHeader>
                </MuiBox>

                <SidebarContent />
            </MuiDrawer>
            <Main open={open}>
                <MuiBox className='dashboardContentMainWrap'>
                    <DrawerHeader />
                    <MuiTypography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                        enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                        imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                        Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                        Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                        nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                        leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                        feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                        consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                        sapien faucibus et molestie ac.
                    </MuiTypography>
                </MuiBox>
            </Main>
        </MuiBox>
    );
}

DashBoardView.propTypes = {
    classes: PropTypes.any,
};

export default withStyles(styles)(DashBoardView);