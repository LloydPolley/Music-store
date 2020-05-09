import React, { useEffect, useState } from "react";
import { fireDownloadArtwork, fireDownloadAudio } from "../../../actions/products";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

import { connect } from "react-redux";
// import { useState, useEffect } from "react";
import { FiPlay, FiPause, FiPlusCircle } from "react-icons/fi";
import { addProductBasket } from "../../../actions/basket";
import { loadTrack } from "../../../actions/audioPlayer";

import './trackPage.scss';

const ProductPage = props => {
  const p = props.stateProduct[0];
  const [artworkFile, setArtworkFile] = useState("");
  const [audioFile, setAudioFile] = useState("");
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (p !== undefined) {
      const downloadArtwork = fireDownloadArtwork(p.artworkFilePath).then(
        url => {
          setArtworkFile(url);
        }
      );
      const downloadAudio = fireDownloadAudio(p.audioFilePath).then(url => {
        setAudioFile(url);
      });
    }
  }, [p]);

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
      {p === undefined ? (
        <h1>Loading</h1>
      ) : (
        <div className="hero">
          <div className="productInfo">
            <div className="productInfo__top">
              <h1>{props.stateProduct[0].songTitle}</h1>
              <h2>{props.stateProduct[0].artist}</h2>
            </div>
            <div className="productInfo__image">
              <img src={artworkFile} />
              <FiPlay className="media-controls__play" onClick={play} />
            </div>
            {/* <div className="productInfo__bottom">
              {!liked ? (
                <MdFavoriteBorder
                  onClick={() => {
                    props.dispatch(addProductBasket(p));
                    setLiked(true);
                  }}
                />
              ) : (
                <MdFavorite />
              )}
              <FiPlay className="media-controls" onClick={play} />
            </div> */}
          </div>
        </div>
      )}
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
