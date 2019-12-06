import React from "react";
import { connect } from "react-redux";
import { useState, useEffect } from "react";


const ProductPage = props => {
  useEffect(() => {
    console.log('pp', props.products, props.match.params.id)
    props.products.map(product => {
        // console.log(product.id, parseInt(props.match.params.id));
        if(product.id === parseInt(props.match.params.id)){
            return product;
        }else{
            console.log('invalid id')
        }
    })
  });

  return (
    <div>
      <h1>Products / Product Page - {console.log(props.match.params.id)}</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(ProductPage);
