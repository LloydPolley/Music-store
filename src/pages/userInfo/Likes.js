import React from "react";
import ListItem from "../../components/products/ListItem";
import { connect } from "react-redux";
import ProductList from '../../components/products/ProductList';

const Likes = props => {
  console.log('likes', props)
  return (
    <div className="LikesContainer">
      <h1>Likes</h1>
      {/* <ProductListSmall likes={props.likes} dispatch={props.dispatch} location="products"/> */}
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
