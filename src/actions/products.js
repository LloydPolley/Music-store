import database, { storage } from "../firebase/firebase";

export const populateProducts = products => ({
  type: "POPULATE_PRODUCTS",
  products
});

export const firePopulateProducts = () => {
  return dispatch => {
    return database
      .ref("artists")
      .once("value")
      .then(snapshot => {
        const products = [];
        snapshot.forEach(snap => {
          const arrayArtists = Object.keys(snap.val()).map(i => snap.val()[i]);
          let value = snap.val();
          let productsArray = [];
          for (let prop in value) {
            //spread out and push to array below
            // console.log(prop, value[prop]);
            products.push({
              id: prop,
              ...value[prop]
            });
          }
        });
        // console.log(products)
        dispatch(populateProducts(products));
      });
  };
};

export const addProduct = product => ({
  type: "ADD_PRODUCT",
  product
});

export const fireAddProduct = product => {
  // console.log(product)
  return dispatch => {
    database
      .ref(`artists/${product.artist}`)
      .push({ ...product })
      .then(ref => {
        dispatch(
          addProduct({
            id: ref.key,
            ...product
          })
        );
      });
  };
};

export const editProduct = (id, updates) => ({
  type: "EDIT_PRODUCT",
  id,
  updates
});

export const removeProduct = id => ({
  type: "REMOVE_PRODUCT",
  id
});

//UPLOADING
export const fireUploadAudioFile = (artist, songTitle, audioFile) => {
  const storageRef = storage.ref(
    `artists/${artist}/${songTitle}/audio/${audioFile.name}`
  );
  storageRef.put(audioFile);
};

export const fireUploadArtwork = (artist, songTitle, artwork) => {
  const storageRef = storage.ref(
    `artists/${artist}/${songTitle}/artwork/${artwork.name}`
  );
  storageRef.put(artwork);
  console.log("uploade artwork", artwork);
};

// //DOWNLOADING
export const fireDownloadArtwork = url => {
  return storage
    .ref()
    .child(`/${url}`)
    .getDownloadURL();
};

export const fireDownloadAudio = url => {
  return storage
    .ref()
    .child(`/${url}`)
    .getDownloadURL();
};

