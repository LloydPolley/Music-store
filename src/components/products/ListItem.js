import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { FiPlay } from "react-icons/fi";
import { addProductBasket } from "../../actions/basket";
import { fireDownloadArtwork, fireDownloadAudio } from "../../actions/products";
import { storage } from "../../firebase/firebase";

// import image from props.product.artwork;

const ProductListItem = props => {
  const [artworkFile, setArtworkFile] = useState("");
  const [audioFile, setAudioFile] = useState("");

  useEffect(() => {
    console.log('props', props.product.artworkFilePath)
    const p = props.product;
    const storageRef = storage
      .ref()
      // .child(`/${p.artworkFilePath}`)
      .child("/artists/1/1/artwork/artbat.jpg")
      .getDownloadURL()
      .then((url) => {
        // This can be downloaded directly:
        var xhr = new XMLHttpRequest();
        xhr.responseType = "blob";
        xhr.onload = function(event) {
          var blob = xhr.response;
        };
        xhr.open("GET", url);
        // xhr.send();
        setArtworkFile(url)
      });
  
    // fireDownloadArtwork(props.product.artworkFilePath);
    // fireDownloadAudio(props.product.artworkFilePath);
  }, []);

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
            <GoPlus
              onClick={() => {
                props.dispatch(
                  addProductBasket({
                    id: props.product.id,
                    songTitle: props.product.songTitle,
                    artist: props.product.artist
                  })
                );
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
