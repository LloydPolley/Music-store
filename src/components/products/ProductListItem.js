import React, { useState, useReducer, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductListItem = props => {

  const [admin, setAdmin] = useState('');
  useEffect(()=>{
    setAdmin(props.admin)
  })

  return (
    <div className="productListItem">
      <Link to={`${admin}/${props.id}`}>
        <h1>{props.productName}</h1>
        <p>{props.productPrice}</p>
      </Link>

      {/* Admin console bit */}
      {props.removeProduct ? (
          <button
            onClick={() => {
              props.removeProduct(props.id);
            }}>Remove Product
          </button>
        ) : (
          false
        )}
    </div>
  );
};

export default ProductListItem;
