import React from "react";
import ListItemSmall from "./ListItemSmall";

const ProductListSmall = props => {
  // console.log(props, 'small')
  return (
    <div className="productListSmall">
      <div className="productListingSmall__list">
        {props.likes === undefined ? (
          <h1>No likes</h1>
        ) : (
          props.likes.map(like => {
            return (
              <ListItemSmall
                key={like.id}
                like={like}
                // dispatch={props.dispatch}
                // location={props.location}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default ProductListSmall;
