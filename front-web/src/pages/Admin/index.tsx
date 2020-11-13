import PrivateRoute from 'core/components/Routes/PtrivateRoute';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';
import './styles.scss';

const Adimin = () => (

    <div className="admin-container">
        <Navbar />
        <div className="admin-content">
            <Switch>

                <PrivateRoute path="/admin/products">
                    <Products />
                </PrivateRoute>
                <PrivateRoute path="/admin/categories">
                    <h1>Categorias</h1>
                </PrivateRoute>
                <PrivateRoute path="/admin/users" allowedRoutes={['ROLE_ADMIN']}>
                    <h1>Usuarios</h1>
                </PrivateRoute>
            </Switch>

        </div>
    </div>
);

export default Adimin;