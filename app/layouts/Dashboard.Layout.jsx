import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Map } from 'helpers';

function DashboardLayout(props) {

  const { childrens, ...restProps } = props;

  return (
    <Fragment>
      DashboardLayout
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
    </Fragment>
  );
}

export default DashboardLayout;
