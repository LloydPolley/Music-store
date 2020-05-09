import React from "react";
import ListItemSmall from "./ListItemSmall";
import ProductItem from "./ProductItem";

const ProductListSmall = props => {
  // console.log(props, 'small')
  return (
    <div className="productListSmall">
      <div className="productListingSmall__list">
        {props.likes === undefined ? (
          <h1>No likes</h1>
        ) : (
            props.likes.map(like => {
              return (
                <ProductItem
                  key={like.id}
                  product={like}
                  dispatch={like.dispatch}
                  location={like.location}
                />
            );
            })
          )}
      </div>
    </div>
  );
};

export default ProductListSmall;
