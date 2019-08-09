import React, { useState, useReducer, useEffect } from "react";
import {connect} from 'react-redux';
import ProductListItem from '../products/ProductListItem';

import {addProduct, removeProduct} from '../../actions/products';

const AdminProductAdder = (props) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [id, setId] = useState("");
  // const [products, setProducts] = useState([]);


  const removeProductHandler = (id) => {
    props.dispatch(removeProduct(id));
    console.log('remove button clicked')
  }

  return (
    <div className="productAdder">
      <h1>Add product</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          setProductName('');
          setProductPrice('');
          props.dispatch(addProduct({id: id, productName, productPrice}))
        }}
      >
        <input
          value={id}
          onChange={e => setId(e.target.value)}
        />
        <input
          value={productName}
          onChange={e => setProductName(e.target.value)}
        />
        <input
          value={productPrice}
          onChange={e => setProductPrice(e.target.value)}
        />
        <button>Add product</button>
      </form>
      {props.products.map((product)=>{
        return(
          <ProductListItem key={product.id} id={product.id} productName={product.productName} productPrice={product.productPrice} removeProduct={removeProductHandler}/>
        )
      })}
    </div>
  );
};


const mapStateToProps = (state) =>{
  return{
    products: state.products
  }
}

export default connect(mapStateToProps)(AdminProductAdder);
// export default AdminProductAdder;
