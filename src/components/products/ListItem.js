import React, { } from "react";
import { Link } from "react-router-dom";

const ProductListItem = props => {
  return (
    <div className="productListItem">
      <Link to={`product/${props.id}`}>
        <h1>{props.productName}</h1>
        <p>{props.productPrice}</p>
      </Link>
    </div>
  );
};

export default ProductListItem;
