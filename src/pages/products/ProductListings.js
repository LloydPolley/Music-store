import React from "react";
import ListItem from "../../components/products/ListItem";
import { connect } from "react-redux";
import ProductList from '../../components/products/ProductList';

const ProductListingPage = props => {
  return (
    <div className="productListings">
      <h1>New on TrackSrc</h1>
      {/* <p>This website is still under development with features missing</p>
      <p>Upcoming features are:</p>
      <ul>
        <li>User accounts - persistant likes</li>
        <li>Editing uploaded track from user accounts</li>
        <li>Update styling - currently placeholder</li>
        <li>Artist pages displaying info with tracks</li>
        <li>Router redirects</li>
        <li></li>
      </ul> */}
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
