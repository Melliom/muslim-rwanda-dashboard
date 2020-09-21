/* eslint-disable no-nested-ternary */
import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import routes from 'routes/paths';
import { isAuthenticated } from 'helpers/getToken';
import Dashboard from 'pages';

const Routes = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.name}
            exact
            path={route.path}
            component={() =>
              route.protected ? (
                isAuthenticated() ? (
                  <Dashboard>
                    <route.component />
                  </Dashboard>
                ) : (
                  <Redirect to="/login" />
                )
              ) : (
                <route.component />
              )
            }
          />
        ))}
      </Switch>
    </Router>
  );
};

export default Routes;
