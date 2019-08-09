import React, {useReducer} from "react";
import productsReducer from '../../reducers/products';
import ProductListItem from './ProductListItem';
import { connect } from "react-redux";

const ProductListingPage = (props) => {
  return (
    <div className="productListingPageContainer">
      <h1>ProductListing</h1>
      {props.products.map((product)=> {
        return <ProductListItem key={product.id} id={product.id} productName={product.productName} productPrice={product.productPrice}/>
      })}
    </div>
  );
};


const mapStateToProps = (state) => {
  return{
    products: state.products
  }
}

export default connect(mapStateToProps)(ProductListingPage);
