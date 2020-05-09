import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Navigation from './Navigation';
import Home from "../pages/home/Home";
import Likes from '../pages/userInfo/Likes';
import TrackHome from '../pages/tracks/trackHome/TrackHome.js';
import ProductAdder from '../pages/account/uploadTrack/UploadTrack';
import ProductEditor from "../pages/account/editTrack/EditTrack";
import ProductPage from '../pages/tracks/trackPage/trackPage';
import AudioPlayer from "../components/audioPlayer/AudioPlayer";
import { connect } from "react-redux";



const AppRouter = (props) => {
    // console.log(props.state.audioPlayer, 'approuter')
  return (

  <BrowserRouter>
    <Navigation/>
    <AudioPlayer/>
    <div className='app'>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/tracks" component={TrackHome} exact={true} />
        <Route path="/likes" component={Likes} exact={true} />
        <Route path="/addProduct" component={ProductAdder} exact={true} />
        <Route path='/addProduct/:id' component={ProductEditor}/>
        <Route path='/products/:id' component={ProductPage}/>
      </Switch>
    </div>
  </BrowserRouter>
)};

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps)(AppRouter);
