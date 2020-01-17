import React from "react";
import { connect } from "react-redux";
// import { useState, useEffect } from "react";
import { FiPlay, FiPause } from "react-icons/fi";
import { addProductBasket } from "../../actions/basket";
import {loadTrack} from '../../actions/audioPlayer';

// import {}

const ProductPage = props => {
  console.log(props.stateProduct[0], 'q')
  const playTrack = () => {
   
  }
  const pauseTrack = () => {
  }
  return (
    <div className="productPage">
      <div className="hero">
        <div>
          <h1>{props.stateProduct[0].songTitle}</h1>
          <h2>{props.stateProduct[0].artist}</h2>
        </div>
        <FiPlay className="media-controls" onClick={playTrack}/>
        <FiPause className="media-controls" onClick={pauseTrack}/>
        <img src={props.stateProduct[0].artwork} />
      </div>

      <button
        onClick={() => {
          props.dispatch(
            addProductBasket({
              id: props.stateProduct[0].id,
              songTitle: props.stateProduct[0].songTitle,
              artist: props.stateProduct[0].artist
            })
          );
        }}
      >
        Add
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const stateProduct = state.products.filter(product => {
    if (product.id === props.match.params.id) {
      return {product};
    }
  });
  return { stateProduct };
};

export default connect(mapStateToProps)(ProductPage);
