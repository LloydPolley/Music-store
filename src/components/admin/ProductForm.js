import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addProduct } from "../../actions/products";

import {firebase, storage} from '../../firebase/firebase';

const ProductForm = props => {
  const [songTitle, setSongTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [price, setPrice] = useState("");
  const [audioFile, setAudioFile] = useState("");
  const [artworkFile, setArtworkFile] = useState("");

  useEffect(() => {
    //For editing
    if(props.product !== undefined){
      setSongTitle(props.product[0].songTitle);
      setArtist(props.product[0].artist);
      setPrice(props.product[0].price);
      setAudioFile(props.product[0].audioFile);
      setArtworkFile(props.product[0].artworkFile);
    }
  }, []);

  const handleUploadAudio = (e) => {
    let file = e.target.files[0];
    var storageRef = storage.ref(`artists/${artist}/${songTitle}/audio/${file.name}`);
    storageRef.put(file);
    setAudioFile(`artists/${artist}/${songTitle}/audio/${file.name}`)
  }
  const handleUploadArtwork = (e) => {
    let file = e.target.files[0];
    var storageRef = storage.ref(`artists/${artist}/${songTitle}/artwork/${file.name}`);
    storageRef.put(file);
    setArtworkFile(`artists/${artist}/${songTitle}/artwork/${file.name}`)
  }

  return (
    <form
      className="productAdderForm"
      onSubmit={e => {
        e.preventDefault();
        setSongTitle("");
        setArtist("");
        setPrice("");
        props.dispatch(
          props.dispatchFunction({ songTitle, artist, price, audioFile, artworkFile })
        );
      }}
    >
      <div className="productName">
        <label>Song title</label>
        <input value={songTitle} onChange={e => setSongTitle(e.target.value)} />
      </div>
      <div className="productName">
        <label>Artist</label>
        <input value={artist} onChange={e => setArtist(e.target.value)} />
      </div>
      <div className="productPrice">
        <label>Product Price</label>
        <input
          value={price}
          onChange={e => setPrice(parseInt(e.target.value))}
        />
      </div>
      <div className="productPrice">
        <label>Audio file</label>
        <input
          type="file"
          // value={audioFile}
          accept='audio/*'
          onChange={(e) => {
            handleUploadAudio(e);
          }}
        />
      </div>
      <div className="productPrice">
        <label>Artwork</label>
        <input
          type="file"
          // value={artworkFile}
          accept='image/*'
          onChange={e => {
            handleUploadArtwork(e);
          }}
        />
      </div>
      <button>Add product</button>
    </form>
  );
};

const mapStateToProps = (state, props) => {
  return {
    state
  };
};

export default connect(mapStateToProps)(ProductForm);
