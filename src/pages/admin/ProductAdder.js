import React from "react";
// import ProductList from "../../components/products/ProductList";
import ProductForm from "../../components/admin/ProductForm";

import { connect } from "react-redux";
import { removeProduct } from "../../actions/products";
import { addProduct, fireAddProduct } from "../../actions/products";



const ProductAdder = props => {
  const removeProductHandler = id => {
    props.dispatch(removeProduct(id));
    console.log("remove button clicked");
  };

  return (
    <div className="productAdder">
      <h1>Add product</h1>
      <ProductForm dispatchFunction={fireAddProduct}/>
      {/* <ProductList products={props.products} dispatch={props.dispatch} location="addProduct"/> */}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(ProductAdder);
// export default ProductAdder;
