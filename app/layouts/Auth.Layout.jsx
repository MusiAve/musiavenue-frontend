import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import styles from 'global-styles';
import { BottomHeader, MiddleHeader, TopHeader } from 'components/Header';
import { MuiBox } from 'components';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Map } from 'helpers';

export default function AuthLayout(props) {

  const { childrens, ...restProps } = props;

  return (
    <MuiBox>
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

// AuthLayout.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(AuthLayout);
