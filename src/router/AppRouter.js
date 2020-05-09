import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Navigation from './Navigation';
import HomePage from "../pages/HomePage";
import Likes from '../pages/userInfo/Likes';
import ProductListingPage from '../pages/products/ProductListings';
import ProductAdder from '../pages/admin/ProductAdder';
import ProductEditor from "../pages/admin/ProductForm";
import ProductPage from '../pages/products/ProductPage';
// import Footer from '../components/footer/Footer';
import AudioPlayer from "../components/audioPlayer/AudioPlayer";
// import 
import { connect } from "react-redux";



const AppRouter = (props) => {
    // console.log(props.state.audioPlayer, 'approuter')
  return (

  <BrowserRouter>
    <Navigation/>
    <AudioPlayer/>
    <div className='app'>
      <Switch>
        {/* <Route path="/" component={HomePage} exact={true} /> */}
        <Route path="/" component={ProductListingPage} exact={true} />
        <Route path="/likes" component={Likes} exact={true} />
        <Route path="/addProduct" component={ProductAdder} exact={true} />
        <Route path='/addProduct/:id' component={ProductEditor}/>
        <Route path='/products/:id' component={ProductPage}/>
      </Switch>
      {/* <Footer/> */}
    </div>
  </BrowserRouter>
)};

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps)(AppRouter);
