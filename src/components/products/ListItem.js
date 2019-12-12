import React, { } from "react";
import { Link } from "react-router-dom";

const ProductListItem = props => {
  return (
    <div className="productListItem">
      <Link to={`product/${props.id}`}>
        <h1>{props.songTitle}</h1>
        <p>{props.artist}</p>
      </Link>
    </div>
  );
};

export default ProductListItem;
