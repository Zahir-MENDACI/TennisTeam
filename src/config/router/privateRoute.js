import React from 'react';
import {Redirect, Route} from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                    localStorage.getItem('Authentification') ? (
                        <Redirect to='/accueil'></Redirect>
                    ) : (
                        <Component {...props} />
                    )
            }
        >
        </Route>
    );
};

export default PrivateRoute;