import React from "react";
import ListItem from "../../components/products/ListItem";
import { connect } from "react-redux";
import ProductListSmall from '../../components/products/ProductListSmall';

const Likes = props => {
  // console.log('likes', props)
  return (
    <div className="LikesContainer">
      <h1>Likes</h1>
      <ProductListSmall likes={props.likes} dispatch={props.dispatch} location="products"/>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    likes: state.basket
  };
};

export default connect(mapStateToProps)(Likes);
