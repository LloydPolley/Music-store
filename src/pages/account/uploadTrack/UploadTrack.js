import React from "react";

import { connect } from "react-redux";
import { removeProduct } from "../../../actions/products";
import { addProduct, fireAddProduct } from "../../../actions/products";
import EditTrack from "../editTrack/EditTrack";

import './uploadTrack.scss';

const ProductAdder = props => {
  const removeProductHandler = id => {
    props.dispatch(removeProduct(id));
    console.log("remove button clicked");
  };

  return (
    <div className="productAdder">
      <h1>Add product</h1>
      <EditTrack dispatchFunction={fireAddProduct}/>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(ProductAdder);
