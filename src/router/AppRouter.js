import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Navigation from './Navigation';
import HomePage from "../pages/HomePage";
import Account from '../pages/userInfo/Login';
import Basket from '../pages/basket/Basket';
import ProductListingPage from '../pages/products/ProductListings';
import ProductAdder from '../pages/admin/ProductAdder';
import ProductEditor from "../pages/admin/ProductForm";
import ProductPage from '../pages/products/ProductPage';
import Footer from '../components/footer/Footer';


const AppRouter = () => (
  <BrowserRouter>
    <Navigation/>
    <div className='app'>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/products" component={ProductListingPage} exact={true} />
        <Route path="/basket" component={Basket} exact={true} />
        <Route path="/account" component={Account} exact={true} />
        <Route path="/addProduct" component={ProductAdder} exact={true} />
        <Route path='/addProduct/:id' component={ProductEditor}/>
        <Route path='/products/:id' component={ProductPage}/>
      </Switch>
      <Footer/>
    </div>
  </BrowserRouter>
);

export default AppRouter;
