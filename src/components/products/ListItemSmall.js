import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { GoPlus } from "react-icons/go";
import { FiPlay } from "react-icons/fi";
import { addProductBasket } from "../../actions/basket";
import { fireDownloadArtwork, fireDownloadAudio } from "../../actions/products";
import { storage } from "../../firebase/firebase";
import { loadTrack } from "../../actions/audioPlayer";
import { connect } from "react-redux";

import { downloadAudio, downloadArtwork } from "../../actions/download";

const ListItemsSmall = props => {
  const [artworkFile, setArtworkFile] = useState("");
  const [audioFile, setAudioFile] = useState("");
  const p = props.like;
  // console.log(props.like, "small-list");

  // console.log(p, 'p')

  useEffect(() => {
    const downloadArtwork = fireDownloadArtwork(p.artworkFilePath).then(url => {
      setArtworkFile(url);
    });
    const downloadAudio = fireDownloadAudio(p.audioFilePath).then(url => {
      setAudioFile(url);
    });
  }, []);

  const play = () => {
    // console.log(p, audioFile, artworkFile);
    props.dispatch(
      loadTrack({
        artist: p.artist,
        title: p.songTitle,
        audio: audioFile,
        artwork: artworkFile
      })
    );
  };

  return (
    <div className="ListItemsSmall" key={props.like.id}>
      <div className="layer">
        <div className="layer__left">
          <div>
            <h1>{props.like.songTitle}</h1>
            <h2>{props.like.artist}</h2>
          </div>
          <div>
            <FiPlay onClick={play} />
          </div>
        </div>
        <img src={artworkFile} />
      </div>
      {/* <div className="layer" to={`${props.location}/${props.product.id}`}>
        <div className="">
          <Link to={`${props.location}/${props.product.id}`}>
            <h1>{props.product.songTitle}</h1>
          </Link>
          <Link to={`product/${props.product.id}`}>
            <p>{props.product.artist}</p>
          </Link>
          <span>
            <FiPlay onClick={play} />
          </span>
        </div>
        <img src={artworkFile} />
      </div> */}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    // products: state.products
  };
};

export default connect(mapStateToProps)(ListItemsSmall);
