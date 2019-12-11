import React from "react";
import { connect } from "react-redux";
import AdminProductListItem from "../admin/AdminProductListItem";

import { removeProduct } from "../../actions/products";
import AdminProductForm from "./AdminProductForm";

const AdminProductAdder = props => {
  const removeProductHandler = id => {
    props.dispatch(removeProduct(id));
    console.log("remove button clicked");
  };

  return (
    <div className="productAdder">
      <h1>Add product</h1>
      <AdminProductForm />
      <div className="productListings__list">
        {props.products.map(product => {
          return (
            <AdminProductListItem
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

export default connect(mapStateToProps)(AdminProductAdder);
// export default AdminProductAdder;
