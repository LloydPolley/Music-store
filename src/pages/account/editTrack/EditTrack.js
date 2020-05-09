import React from "react";
import {} from "react-redux";
import ProductForm from "../../../components/admin/ProductForm";
import { connect } from "react-redux";

import { editProduct } from "../../../actions/products";

const EditTrack = props => {
  return (
    <div>
      <h1>Product Page - {props.match.params.id}</h1>
      <ProductForm
        editorId={props.match.params.id}
        dispatchFunction={editProduct}
        product={props.stateProduct}
      />
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

export default connect(mapStateToProps)(EditTrack);
