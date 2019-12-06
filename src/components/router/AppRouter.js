import React from "react";
import { Router, Route, Switch, BrowserRouter } from "react-router-dom";

import Navigation from './Navigation';
import HomePage from "../HomePage";
import MyAccount from '../userInfo/MyAccount';
import MyBookings from '../userInfo/MyBookings';
import ProductListingPage from '../products/ProductListingsPage';
import AdminProductAdder from '../admin/AdminProductAdder';
import AdminProductEditor from "../admin/AdminProductEditor";
import ProductPage from '../products/ProductPage';


const AppRouter = () => (
  <BrowserRouter>
    <Navigation/>
    <div className='app'>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/products" component={ProductListingPage} exact={true} />
        <Route path="/bookings" component={MyBookings} exact={true} />
        <Route path="/account" component={MyAccount} exact={true} />
        <Route path="/addProduct" component={AdminProductAdder} exact={true} />
        <Route path='/editProduct/:id' component={AdminProductEditor}/>
        <Route path='/product/:id' component={ProductPage}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
