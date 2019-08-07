import React, {useReducer} from "react";
import productsReducer from '../reducers/products';
import ProductListItem from './ProductListItem';

const ProductListingPage = () => {
  return (
    <div className="productListingPageContainer">
      <h1>ProductListing</h1>
      {/* <button onClick={()=>{console.log('products state', products)}}>Print</button> */}
    </div>
  );
};

export default ProductListingPage;
