import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Map } from 'helpers';
import styles from 'global-styles';
import { MuiAppBar, MuiBox, MuiCssBaseline, MuiDrawer, MuiIconButton, MuiToolbar } from 'components';
import logo from 'images/logo.png'

function DashboardLayout(props) {

  const { childrens, classes, container, ...restProps } = props;
  const drawerWidth = 230;
  const headerHeight = '52px';
  const dashboardBgColor = '#f4f7fe';

  const [state, setState] = useState({
    mobileOpen: false
  })

  const { mobileOpen } = state;

  const handleDrawerToggle = () => {
    setState((state) => ({ mobileOpen: !state.mobileOpen }));
    if (mobileOpen === false) {
      document.body.classList.add('sidebarClose');
    } else {
      document.body.classList.remove('sidebarClose');
    }
  };

  return (
    <MuiBox className={classes.headerFooterLayoutMainWrap}>
      <MuiCssBaseline />
      <MuiAppBar
        position="fixed"
        sx={[
          (theme) => ({
            backgroundColor: 'primary.main',
            transition: '0.4s',
            boxShadow: 'none',
            pr: '0 !important',
            width: '100%',
            '& .MuiToolbar-root': {
              minHeight: headerHeight,
              padding: '5px 20px',
            }
          }),
        ]}
      >
        <MuiToolbar
          sx={[
            (theme) => ({
              backgroundColor: 'primary.contrastText',
              boxShadow: '0 0 15px #00000024',
              transition: '0.4s',
              width: '100%',
              '& .logoImg': {
                width: '45px',
                margin: '0 0 0 25px',
              }
            }),
          ]}
        >
          <MuiIconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              ml: 0,
              backgroundColor: 'transparent !important',
              transform: mobileOpen ? 'rotate(180deg)' : 'unset',
              transition: '0.4s',
              '& img': {
                width: 30,
              },
            }}
          >
            <MuiBox className={`animatedMenuBar ${mobileOpen && 'open'}`}>
              <MuiBox className="menuBarLine half start"></MuiBox>
              <MuiBox className="menuBarLine"></MuiBox>
              <MuiBox className="menuBarLine half end"></MuiBox>
            </MuiBox>
          </MuiIconButton>
          <img src={logo} style={{ width: 150 }} alt="Logo" className='logoImg' />

          <MuiBox display="flex" alignItems="center" justifyContent="flex-end" sx={{
            width: '100%',
            '& .MuiBreadcrumbs-li': {
              '& p': {
                backgroundColor: 'info.light',
                color: 'primary.dark',
                padding: '0 12px',
                borderRadius: '2px',
                fontSize: 14,
                fontWeight: 400,
              }
            }
          }}>
            {/* <MuiUserMenu {...restProps} logoutFunc={() => this.handLogout()} /> */}
          </MuiBox>
        </MuiToolbar>
      </MuiAppBar>
      <MuiBox
        component="nav"
        sx={{
          width: {
            lg: !mobileOpen ? drawerWidth : 0,
          },
          flexShrink: {
            lg: 0,
          },
        }}
      >
        <MuiDrawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keeMuiounted: true,
          }}
          sx={[
            (theme) => ({
              display: {
                md: 'block',
                lg: 'none',
              },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                // backgroundColor: customTheme.sidebarColor.background,
                border: 'none',
                transition: '0.4s',
                overflow: 'hidden',
                width: {
                  lg: !mobileOpen ? drawerWidth : 0,
                },
                [theme.breakpoints.down('lg')]: {
                  width: drawerWidth,
                },
              },
            }),
          ]}
        >
          {/* <MuiDrawerMain {...this.props} /> */}
        </MuiDrawer>
        <MuiDrawer
          variant="permanent"
          open
          sx={[
            (theme) => ({
              display: 'block',
              [theme.breakpoints.down('md')]: {
                display: 'none',
              },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                // backgroundColor: customTheme.sidebarColor.background,
                border: 'none',
                transition: '0.4s',
                overflow: 'hidden',
                marginTop: headerHeight,
                width: {
                  md: !mobileOpen ? 0 : drawerWidth,
                  lg: !mobileOpen ? drawerWidth : 0,
                },
              },
            }),
          ]}
        >
          {/* <MuiDrawerMain {...this.props} /> */}
        </MuiDrawer>
      </MuiBox>

      <MuiBox
        component="main"
        sx={[
          (theme) => ({
            flexGrow: 1,
            marginTop: headerHeight,
            transition: '0.4s',
            p: '20px',
            backgroundColor: dashboardBgColor,
            [theme.breakpoints.up('lg')]: {
              borderRadius: mobileOpen ? 0 : 0,
              width: !mobileOpen ? `calc(100% - ${drawerWidth}px)` : '100%',
              ml: !mobileOpen ? `${drawerWidth}px` : 0,
            },
          }),
        ]}
      >
        <MuiBox
          sx={[
            (theme) => ({
              borderRadius: '10px',
              [theme.breakpoints.up('lg')]: {
                minHeight: mobileOpen ? 'calc(100vh - 160px)' : 'calc(100vh - 152px)',
              },
            }),
          ]}
        >
          <Switch>
            {Map(childrens, (route, index) => {
              return (
                <Route
                  key={index}
                  exact={route.exact}
                  path={route.path}
                  render={(rProps) => (
                    !route.redirect ? (
                      <route.component {...restProps} {...rProps} childrens={route.childrens} />
                    ) : (
                      <Redirect to={route.redirect || '/admin/dashboard'} />
                    )
                  )}
                />
              );
            })}
          </Switch>
        </MuiBox>
      </MuiBox>
    </MuiBox>
  );
}

DashboardLayout.propTypes = {
  classes: PropTypes.any,
};

export default withStyles(styles)(DashboardLayout);
