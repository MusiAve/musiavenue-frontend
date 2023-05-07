import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Map } from 'helpers';
import styles from 'global-styles';
import { BottomHeader, MiddleHeader, TopHeader } from 'components/Header';
import { MuiBox } from 'components';

function DashboardLayout(props) {

  const { childrens, classes, ...restProps } = props;

  return (
    <MuiBox className={classes.headerFooterLayoutMainWrap}>
      <TopHeader />
      <MiddleHeader />
      <BottomHeader />

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
