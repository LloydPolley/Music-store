import React, { useState, useReducer } from "react";
import productsReducer from "../reducers/products";
import ProductsContext from "../context/productsContext";

const AdminProductAdder = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  return (
    <div className="productAdder">
      <h1>Add product</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log("form submit", productName);

          //   dispatch({action: 'POPULATE_PRODUCTS', productName})
        }}
      >
        <input
          value={productName}
          onChange={e => setProductName(e.target.value)}
        />
        <button>Add product</button>
      </form>
    </div>
  );
};

export default AdminProductAdder;
