import React from "react";
import ListItem from "../../components/products/ListItem";
import { connect } from "react-redux";

const ProductListingPage = props => {
  return (
    <div className="productListings">
      <h1>Products/ProductListing</h1>
      <div className="productListings__list">
        {props.products.map(product => {
          return (
            <ListItem
              key={product.id}
              id={product.id}
              admin={"product"}
              artist={product.artist}
              songTitle={product.songTitle}
              price={product.price}
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
