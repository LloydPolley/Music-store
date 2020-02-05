import {createStore, combineReducers, applyMiddleware} from 'redux';
import productsReducer from '../reducers/products';
import basketReducer from '../reducers/basket';
import audioPlayerReducer from '../reducers/audioPlayer';
import thunk from 'redux-thunk';

//Test imports
// import {addProduct, populateProducts, removeProduct, editProduct} from '../actions/products';
import {populateProducts} from '../actions/products';
import {populateBasket} from '../actions/basket';
import {loadTrack} from '../actions/audioPlayer';

const store = createStore(
    combineReducers({
        products: productsReducer,
        basket: basketReducer,
        audioPlayer: audioPlayerReducer
    }),
    applyMiddleware(thunk)
)

// const testProductsArray = [
//     {id: 1, artist: 'Artbat', songTitle: 'Oz', price: 150, musicFile: require('../musicFiles/sounds/Monolink-Swallow-(Tale Of Us Remix).mp3'), artwork: require('../musicFiles/artwork/artbat.jpg'), promo: false},
//     {id: 2, artist: 'Tale of us', songTitle: 'Swallow', price: 175, musicFile: require('../musicFiles/sounds/Monolink-Swallow-(Tale Of Us Remix).mp3'), artwork: require('../musicFiles/artwork/swallow.jpg'), promo: false},
//     {id: 3, artist: '&ME', songTitle: 'Garden', price: 109, musicFile: '', artwork: require('../musicFiles/artwork/garden.jpg'), promo: false},
//     {id: 4, artist: 'Jimi Jules', songTitle: 'Fool', price: 159, musicFile: '', artwork: require('../musicFiles/artwork/fool.jpg'), promo: false},
//     {id: 5, artist: 'Bicep', songTitle: 'Aura', price: 139, musicFile: '', artwork: require('../musicFiles/artwork/bicepaura.jpg'), promo: false},
//     {id: 6, artist: 'Colyn', songTitle: 'Resolve', price: 169, musicFile: '', artwork: require('../musicFiles/artwork/colynresolve.jpg'), promo: false},
//     {id: 7, artist: 'HOSH', songTitle: 'Midnight', price: 129, musicFile: '', artwork: require('../musicFiles/artwork/midnight.jpg'), promo: false},
//     {id: 8, artist: 'Mathame', songTitle: 'Skywalking', price: 109, musicFile: '', artwork: require('../musicFiles/artwork/skywalking.jpg'), promo: false}
// ]
// const testBasketArray = [
//     {id: 2, productName: 'test product2', productPrice: 2},
//     {id: 3, productName: 'test product2', productPrice: 2}
// ]

// const testProduct = {id: 4, productName: 'test product4', productPrice: 4};

store.subscribe(()=>{
    // console.log('Sub', store.getState());
});


// store.dispatch(populateProducts(testProductsArray));
// store.dispatch(loadTrack('../musicFiles/sounds/Monolink-Swallow-(Tale Of Us Remix).mp3'));
// store.dispatch(populateBasket(testBasketArray));
// store.dispatch(addProduct(testProduct));
// store.dispatch(removeProduct(2));
// store.dispatch(removeProduct(3));
// store.dispatch(editProduct(1, {productName: 'edited name', productPrice: 5}))


export default store;