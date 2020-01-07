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
      setSongTitle(props.product[0].songTitle);
      setArtist(props.product[0].artist);
      setPrice(props.product[0].price);
      setId(props.product[0].id);
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
        setId("");
        // props.dispatch(addProduct({ id, songTitle, artist, price }));
        props.dispatch(
          props.dispatchFunction({ id, songTitle, artist, price })
        );
      }}
    >
      <div className="productId">
        <label>Product ID</label>
        <input value={id} onChange={e => setId(parseInt(e.target.value))} />
      </div>
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
