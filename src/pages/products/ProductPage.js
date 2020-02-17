import React, { useEffect, useState } from "react";
import { fireDownloadArtwork, fireDownloadAudio } from "../../actions/products";

import { connect } from "react-redux";
// import { useState, useEffect } from "react";
import { FiPlay, FiPause, FiPlusCircle } from "react-icons/fi";
import { addProductBasket } from "../../actions/basket";
import { loadTrack } from "../../actions/audioPlayer";

// import {}

const ProductPage = props => {
  // console.log(props.stateProduct[0], "q");
  const p = props.stateProduct[0];
  const [artworkFile, setArtworkFile] = useState("");
  const [audioFile, setAudioFile] = useState("");

  useEffect(() => {
    const downloadArtwork = fireDownloadArtwork(p.artworkFilePath).then(url => {
      setArtworkFile(url);
    });
    const downloadAudio = fireDownloadAudio(p.audioFilePath).then(url => {
      setAudioFile(url);
    });
  }, []);

  const play = () => {
    props.dispatch(
      loadTrack({
        artist: props.stateProduct[0].artist,
        title: props.stateProduct[0].songTitle,
        audio: audioFile,
        artwork: artworkFile
      })
    );
  };

  return (
    <div className="productPage">
      <div className="hero">
        <div className="productInfo">
          <div className="productInfo__top">
            <h1>{props.stateProduct[0].songTitle}</h1>
            <p>{props.stateProduct[0].artist}</p>
          </div>
          <div className="productInfo__bottom">
            <FiPlusCircle
              onClick={() => {
                props.dispatch(
                  addProductBasket({
                    id: props.stateProduct[0].id,
                    songTitle: props.stateProduct[0].songTitle,
                    artist: props.stateProduct[0].artist
                  })
                );
              }}
            />
            <FiPlay className="media-controls"  onClick={play} />
          </div>
        </div>
        <img src={artworkFile} />
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const stateProduct = state.products.filter(product => {
    if (product.id === props.match.params.id) {
      return { product };
    }
  });
  return { stateProduct };
};

export default connect(mapStateToProps)(ProductPage);
