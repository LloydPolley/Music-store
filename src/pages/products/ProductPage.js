import React from "react";
import { connect } from "react-redux";
// import { useState, useEffect } from "react";
import { addProductBasket } from "../../actions/basket";

const ProductPage = props => {
  console.log(props, 'q')
  return (
    <div className="productPage">
      <div className="hero">
        <div>
          <h1>{props.stateProduct[0].songTitle}</h1>
          <h2>{props.stateProduct[0].artist}</h2>
        </div>
        <audio controls><source src={props.stateProduct[0].musicFile}></source></audio>

        <img src={props.stateProduct[0].artwork} />
      </div>

      <button
        onClick={() => {
          props.dispatch(
            addProductBasket({
              id: props.stateProduct[0].id,
              songTitle: props.stateProduct[0].songTitle,
              artist: props.stateProduct[0].artist
            })
          );
        }}
      >
        Add
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const stateProduct = state.products.filter(product => {
    if (product.id === parseInt(props.match.params.id)) {
      return product;
    }
  });
  return { stateProduct };
};

export default connect(mapStateToProps)(ProductPage);
