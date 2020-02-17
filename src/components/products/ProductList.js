import React from "react";
import ListItem from './ListItem';

const ProductList = (props) => (
    
  <div className="productList">
    <div className="productListings__list">
      {props.products.map(product => {
        return (
          <ListItem
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
