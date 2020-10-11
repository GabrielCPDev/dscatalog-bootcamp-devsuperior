import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Adimin from './pages/Admin';
import Catalog from './pages/Catalog';
import ProductDetails from './pages/Catalog/components/ProductDetails';
import Home from './pages/Home';

const Routes = () => (
    <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
            <Route path="/" exact>
                <Home></Home>
            </Route>
            <Route path="/products" exact>
                <Catalog></Catalog>
            </Route>
            <Route path="/products/:productId">
                <ProductDetails />
            </Route>
            <Route path="/admin">
                <Adimin></Adimin>
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;