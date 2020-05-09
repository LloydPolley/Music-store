import React from "react";
import ProductItem from '../trackItem/TrackItem';

import './trackList.scss';

const ProductList = (props) => (
    
  <div className="productList">
    <div className="productListings__list">
      {props.products.map(product => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            dispatch={props.dispatch}
            location={props.location}
          />
        );
      })}
    </div>
  </div>
);

export default ProductList;
