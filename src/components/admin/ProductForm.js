import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  addProduct,
  fireUploadAudioFile,
  fireUploadArtwork
} from "../../actions/products";

import { firebase, storage } from "../../firebase/firebase";

const ProductForm = props => {
  const [songTitle, setSongTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [price, setPrice] = useState("");

  //SET FILES
  const [audioFile, setAudioFile] = useState("");
  const [artworkFile, setArtworkFile] = useState("");

  //SET FILE PATHS
  const [artworkFilePath, setArtworkFilePath] = useState("");
  const [audioFilePath, setAudioFilePath] = useState("");

  useEffect(() => {
    //For editing
    if (props.product !== undefined) {
      setSongTitle(props.product[0].songTitle);
      setArtist(props.product[0].artist);
      setPrice(props.product[0].price);
      setAudioFile(props.product[0].audioFile);
      setArtworkFile(props.product[0].artworkFile);
      setArtworkFilePath(props.product[0].artworkFile);
      setAudioFilePath(props.product[0].artworkFile);
    }
  }, []);

  const handleUploadAudio = e => {
    setAudioFilePath(
      `artists/audio/${e.target.files[0].name}`
    );
    setAudioFile(e.target.files[0]);
  };
  const handleUploadArtwork = e => {
    setArtworkFilePath(
      `artists/artwork/${e.target.files[0].name}`
    );
    setArtworkFile(e.target.files[0]);
  };

  // const filePathGenerators = () => {
  //   setAudioFilePath(`artists/${artist}/${songTitle}/audio/${audioFile.name}`);
  //   setArtworkFilePath(`artists/${artist}/${songTitle}/artwork/${artworkFile.name}`);
  //   console.log("run", audioFilePath, artworkFilePath);
  // };

  const formSubmitHandler = () => {
    props.dispatch(
      props.dispatchFunction({
        songTitle,
        artist,
        price,
        audioFilePath,
        artworkFilePath
      })
    );
  };

  const resetStateHandler = () => {
    setSongTitle("");
    setArtist("");
    setPrice("");
    setAudioFilePath("");
    setArtworkFilePath("");
    setPrice("");
  };

  const firebaseUploadHandler = () => {
    fireUploadAudioFile(artist, songTitle, audioFile);
    fireUploadArtwork(artist, songTitle, artworkFile);
  };

  function promiseHandler(param, callback) {}

  return (
    <form
      className="productAdderForm"
      onSubmit={e => {
        e.preventDefault();

        //Generates file paths
        // filePathGenerators();
        //Dispatch
        formSubmitHandler();
        //Fireupload
        firebaseUploadHandler();
        //Resets state
        resetStateHandler();
      }}
    >
      <div className="productName">
        <label>Song title</label>
        <input
          required
          value={songTitle}
          onChange={e => setSongTitle(e.target.value)}
        />
      </div>
      <div className="productName">
        <label>Artist</label>
        <input
          required
          value={artist}
          onChange={e => setArtist(e.target.value)}
        />
      </div>
      <div className="productPrice">
        <label>Product Price</label>
        <input
          required
          type="number"
          value={price}
          onChange={e => setPrice(parseInt(e.target.value))}
        />
      </div>
      <div className="productPrice">
        <label>Audio file</label>
        <input
          required
          type="file"
          accept="audio/*"
          onChange={e => {
            handleUploadAudio(e);
          }}
        />
      </div>
      <div className="productPrice">
        <label>Artwork</label>
        <input
          required
          type="file"
          accept="image/*"
          onChange={e => {
            handleUploadArtwork(e);
          }}
        />
      </div>
      <button className='cta cta__blue'>ADD</button>
    </form>
  );
};

const mapStateToProps = (state, props) => {
  return {
    state
  };
};

export default connect(mapStateToProps)(ProductForm);
