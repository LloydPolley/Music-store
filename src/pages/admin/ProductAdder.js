import React from "react";
import ProductListItem from "../../components/admin/ProductListItem";
import ProductForm from "../../components/admin/ProductForm";

import { connect } from "react-redux";
import { removeProduct } from "../../actions/products";

const ProductAdder = props => {
  const removeProductHandler = id => {
    props.dispatch(removeProduct(id));
    console.log("remove button clicked");
  };

  return (
    <div className="productAdder">
      <h1>Add product</h1>
      <ProductForm />
      <div className="productListings__list">
        {props.products.map(product => {
          return (
            <ProductListItem
              key={product.id}
              id={product.id}
              admin={"editProduct"}
              productName={product.productName}
              productPrice={product.productPrice}
              removeProduct={removeProductHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(ProductAdder);
// export default ProductAdder;
