import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { FiPlay } from "react-icons/fi";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { addProductBasket } from "../../actions/basket";
import { fireDownloadArtwork, fireDownloadAudio } from "../../actions/products";
import { storage } from "../../firebase/firebase";
import { loadTrack } from "../../actions/audioPlayer";
import { connect } from "react-redux";

import { downloadAudio, downloadArtwork } from "../../actions/download";

const ProductListItem = props => {
  const [artworkFile, setArtworkFile] = useState("");
  const [audioFile, setAudioFile] = useState("");
  const [liked, setLiked] = useState(false);
  const p = props.product;

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
        artist: p.artist,
        title: p.songTitle,
        audio: audioFile,
        artwork: artworkFile
      })
    );
  };

  const artwork = {
    backgroundImage: `url(${artworkFile})`
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
            {!liked ? (
              <MdFavoriteBorder
                onClick={() => {
                  console.log(props, 'liked state')
                  props.dispatch(addProductBasket(props.product));
                  setLiked(true);
                }}
              />
            ) : (
              <MdFavorite/>
            )}
            <FiPlay onClick={play} />
          </span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    // products: state.products
  };
};

export default connect(mapStateToProps)(ProductListItem);
