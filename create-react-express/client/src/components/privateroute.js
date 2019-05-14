import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
            sessionStorage.getItem("authenticated")
            ? <Component {...props} />
            : <Redirect to='/signin' />
    )} />
)