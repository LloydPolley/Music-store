import React from "react";
import ProductListItem from "../../components/products/ProductListItem";
import { connect } from "react-redux";

const ProductListingPage = props => {
  return (
    <div className="productListings">
      <h1>Products/ProductListing</h1>
      <div className="productListings__list">
        {props.products.map(product => {
          return (
            <ProductListItem
              key={product.id}
              id={product.id}
              admin={"product"}
              productName={product.productName}
              productPrice={product.productPrice}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(ProductListingPage);
