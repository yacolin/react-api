import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';



function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes} />
            )}
        />
    )
}

export default function RouteConfig(routes) {
    return (
        <div>
            <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route}/>
                ))}
            </Switch>
        </div>
    )
}
