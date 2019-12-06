import React, { useState, useEffect } from "react";
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
    </div>
  );
};

export default ProductListItem;
