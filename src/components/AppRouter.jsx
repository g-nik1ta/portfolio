import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { publicRoutes, privateRoutes } from 'route';

const AppRouter = ({ auth }) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [location])


    return (
        <Routes>
            {
                (
                    auth
                        ?
                        [...publicRoutes, ...privateRoutes]
                        :
                        publicRoutes
                ).map(route =>
                    <Route
                        exact={route.exact}
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />
                )
            }
        </Routes>
    )
}

export default AppRouter;