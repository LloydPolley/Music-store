import React from "react";
import { connect } from "react-redux";
// import { useState, useEffect } from "react";
import {addProductBasket} from '../../actions/basket';


const ProductPage = props => {
  return (
    <div>
      <h1>Products / Product Page - {props.stateProduct[0].id}</h1>
      <p>{props.stateProduct[0].productName}</p>
      <p>{props.stateProduct[0].productPrice}</p>
      <button onClick={()=>{
        props.dispatch(addProductBasket({id: props.stateProduct[0].id, productName: props.stateProduct[0].productName, productPrice: props.stateProduct[0].productPrice}))
      }}>Add</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {  
  const stateProduct = state.products.filter(product => {
    if (product.id === parseInt(props.match.params.id)) {
      return product;
    }
  });
  return {stateProduct};
};

export default connect(mapStateToProps)(ProductPage);
