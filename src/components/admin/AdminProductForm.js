import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// import ProductListItem from "../products/ProductListItem";
import { addProduct } from "../../actions/products";

const AdminProductForm = (props) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [id, setId] = useState("");


  useEffect(()=>{
    // setProductName(props.productName);
    // setProductPrice(props.productPrice);
    // setId(props.productId);
    // console.log(props.match.params.id)
    console.log(props)
  })

  return (
    <form
      className="productAdderForm"
      onSubmit={e => {
        e.preventDefault();
        setProductName("");
        setProductPrice("");
        setId("");
        props.dispatch(addProduct({ id: id, productName, productPrice }));
      }}
    >
      <div className="productId">
        <label>Product ID</label>
        <input value={id} onChange={e => setId(parseInt(e.target.value))} />
      </div>
      <div className="productName">
        <label>Product Name</label>
        <input
          value={productName}
          onChange={e => setProductName(e.target.value)}
        />
      </div>
      <div className="productPrice">
        <label>Product Price</label>
        <input
          value={productPrice}
          onChange={e => setProductPrice(parseInt(e.target.value))}
        />
      </div>

      <button>Add product</button>
    </form>
  );
};


const mapStateToProps = (state,props) => {
  return {
    state
  };
};

export default connect(mapStateToProps)(AdminProductForm);