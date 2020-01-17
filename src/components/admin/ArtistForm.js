import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addProduct } from "../../actions/products";

const ProductForm = props => {
  const [songTitle, setSongTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [price, setPrice] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    if(props.product !== undefined){
      setArtist(props.product[0].songTitle);
    }
  }, []);

  return (
    <form
      className="productAdderForm"
      onSubmit={e => {
        e.preventDefault();
        setSongTitle("");
        setArtist("");
        setPrice("");
        props.dispatch(
          props.dispatchFunction({ songTitle, artist, price })
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
      <button>Add artist</button>
    </form>
  );
};

const mapStateToProps = (state, props) => {
  return {
    state
  };
};

export default connect(mapStateToProps)(ProductForm);
