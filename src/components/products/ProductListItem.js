import React from "react";

const ProductListItem = props => {
  return (
    <div className="productListItem">
      <h1>{props.productName}</h1>
      <p>{props.productPrice}</p>

      {props.removeProduct ? (
        <button
          onClick={() => {
            props.removeProduct(props.id);
          }}
        >
          Remove Product
        </button>
      ) : (
        false
      )}
    </div>
  );
};

export default ProductListItem;
