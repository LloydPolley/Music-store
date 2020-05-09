import React from "react";
import { connect } from "react-redux";
import ProductList from '../../../components/tracks/trackList/TrackList';

const ProductListingPage = props => {
  return (
    <div className="productListings">
      <h1>Latest releases</h1>
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
