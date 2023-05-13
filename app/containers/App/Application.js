/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Filter, Map, Toast } from 'helpers';
import { withStyles } from '@mui/styles';
import styles from 'global-styles';
import '../../App.css';
import { useSnackbar } from 'notistack';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ROUTES } from 'routes';

function Application(props) {

  const { user, isAuthenticated } = props;

  // const user = {
  //   firstName: 'soumen',
  //   lastName: 'samanta',
  //   role: 'admin',
  //   email: 'soumen@gmail.com'
  // }

  // const localUser = user;

  // const isAdmin = Object.entries(localUser).length > 0 && localUser.role === 'admin';

  const isAdmin = Object.entries(user).length > 0 && user.role === 'admin';
  const isCustomer = Object.entries(user).length > 0 && user.role === 'customer';

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  useEffect(() => {
    Toast.setSnackBar(enqueueSnackbar, closeSnackbar);
  }, []);

  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          {isAuthenticated && isAdmin &&
            Map(Filter(ROUTES, (item) => item.isAdminRoute), (route, index) => {
              return (
                <Route key={index} exact={route.exact} path={route.path} render={(rProps) => {
                  return (
                    <route.component {...props} {...rProps} childrens={route.childrens} />
                  );
                }}
                />
              );
            })}
          {isAuthenticated && (isAdmin || isCustomer) &&
            Map(Filter(ROUTES, (item) => item.auth), (route, index) => {
              return (
                <Route key={index} exact={route.exact} path={route.path} render={(rProps) => {
                  return (
                    <route.component {...props} {...rProps} childrens={route.childrens} />
                  );
                }}
                />
              );
            })}
          {!isAuthenticated && (isAdmin || isCustomer) &&
            Map(Filter(ROUTES, (item) => !item.auth), (route, index) => {
              return (
                <Route key={index} exact={route.exact} path={route.path} render={(rProps) => {
                  return (
                    <route.component {...props} {...rProps} childrens={route.childrens} />
                  );
                }}
                />
              );
            })}
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.login.userLogin.user,
    isAuthenticated: state.login.isAuthenticated,
  }
}

const mappedApplication = connect(mapStateToProps)(Application)

export default withStyles(styles)(mappedApplication);