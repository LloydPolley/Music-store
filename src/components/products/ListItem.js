import React from "react";
import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { FiPlay } from "react-icons/fi";
import { addProductBasket } from "../../actions/basket";

// import image from props.product.artwork;

const ProductListItem = props => {
  const artwork = {
    backgroundImage: `url(${props.product.artwork})`
  };
  return (
    <div className="productListItem" style={artwork}>
      <div className="layer" to={`${props.location}/${props.product.id}`}>
        <Link to={`${props.location}/${props.product.id}`}>
          <h1>{props.product.songTitle}</h1>
        </Link>

        <div className="productListItem__bottom">
          <Link to={`product/${props.product.id}`}>
            <p>{props.product.artist}</p>
          </Link>
          <span>
            <GoPlus
              onClick={() => {
                props.dispatch(
                  addProductBasket({
                    id: props.product.id,
                    songTitle: props.product.songTitle,
                    artist: props.product.artist
                  })
                );4
              }}
            />
            <FiPlay />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
