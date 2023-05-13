import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { Map } from 'helpers';
import { styled, useTheme } from '@mui/material/styles';
import styles from 'global-styles';
import { MuiBox, MuiCssBaseline, MuiDrawer, MuiAppBar, MuiToolbar, MuiTypography, MuiIconButton, MuiLink } from 'components';
import { ChevronLeftIcon, ChevronRightIcon, MenuIcon } from 'helpers/Icons';
import Logo from 'images/logo.png';
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

function DashboardLayout(props) {

  const { childrens, classes, container, ...restProps } = props;

  const theme = useTheme();

  const [state, setState] = useState({
    open: true
  })

  const { open } = state;

  const handleDrawerToggle = () => {
    setState((prev) => ({ ...prev, open: !state.open }));
    if (open === false) {
      document.body.classList.add('sidebarClose');
    } else {
      document.body.classList.remove('sidebarClose');
    }
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
                onClick={handleDrawerToggle}
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
            <MuiIconButton onClick={handleDrawerToggle}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </MuiIconButton>
          </DrawerHeader>
        </MuiBox>

        <SidebarContent />
      </MuiDrawer>
      <Main open={open}>
        <MuiBox className='dashboardContentMainWrap'>
          <DrawerHeader />
          <Switch>
            {Map(childrens, (route, index) => {
              return (
                <Route
                  key={index}
                  exact={route.exact}
                  path={route.path}
                  render={(rProps) => (!route.redirect ?
                    (<route.component {...restProps} {...rProps} childrens={route.childrens} />) :
                    (<Redirect to={route.redirect || '/'} />))}
                />
              );
            })}
          </Switch>
        </MuiBox>
      </Main>
    </MuiBox>







  );
}

DashboardLayout.propTypes = {
  classes: PropTypes.any,
};

export default withStyles(styles)(DashboardLayout);
