import React from "react";
import { connect } from "react-redux";
import ProductList from '../../components/tracks/trackList/TrackList';

const Likes = props => {
  console.log('likes', props)
  return (
    <div className="LikesContainer">
      <h1>Likes</h1>
      <ProductList products={props.likes} dispatch={props.dispatch} location="products"/>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    likes: state.basket
  };
};

export default connect(mapStateToProps)(Likes);
