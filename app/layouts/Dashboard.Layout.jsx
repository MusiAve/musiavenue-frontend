import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Map } from 'helpers';
import styles from 'global-styles';
import { BottomHeader, MiddleHeader, TopHeader } from 'components/Header';
import { BottomFooter, TopFooter } from 'components/Footer';
import { MuiBox } from 'components';

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
    <MuiBox>
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
  );
}

DashboardLayout.propTypes = {
  classes: PropTypes.any,
};

export default withStyles(styles)(DashboardLayout);
