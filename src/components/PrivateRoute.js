import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authContext } from '../middlewares/Auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { auth } = useContext(authContext);
    const { loading } = auth;

    if (loading) {
        return (
        <Route
            {...rest}
            render={() => {
            return <p>Loading...</p>;
            }}
        />
        );
    }

    return (
        <Route
        {...rest}
        render={routeProps => {
            return auth.data ? (<Component {...routeProps} />) : (<Redirect to="/login" />);
        }}
        />
    );
};

export default PrivateRoute;