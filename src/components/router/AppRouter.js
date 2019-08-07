import React from "react";
import { Router, Route, Switch, BrowserRouter } from "react-router-dom";

import Navigation from './Navigation';
import HomePage from "../HomePage";
import MyAccount from '../userInfo/MyAccount';
import MyBookings from '../userInfo/MyBookings';
import ProductListings from '../products/ProductListings';


const AppRouter = () => (
  <BrowserRouter>
    <Navigation/>
    <>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/product-listings" component={ProductListings} exact={true} />
        <Route path="/bookings" component={MyBookings} exact={true} />
        <Route path="/account" component={MyAccount} exact={true} />
      </Switch>
    </>
  </BrowserRouter>
);

export default AppRouter;
