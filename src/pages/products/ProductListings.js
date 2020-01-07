import React from "react";
import ListItem from "../../components/products/ListItem";
import { connect } from "react-redux";
import ProductList from '../../components/products/ProductList';

const ProductListingPage = props => {
  return (
    <div className="productListings">
      <h1>Products/ProductListing</h1>
      <ProductList products={props.products} dispatch={props.dispatch} location="products"/>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(ProductListingPage);
