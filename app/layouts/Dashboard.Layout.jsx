import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import { styled, useTheme } from '@mui/material/styles';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Map } from 'helpers';
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
    marginLeft: 0,
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
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
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <MuiBox className={classes.dashboardLayoutMainWrap}>
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
