import {createStore, combineReducers} from 'redux';
import productsReducer from '../reducers/products';
import basketReducer from '../reducers/basket';

//Test imports
// import {addProduct, populateProducts, removeProduct, editProduct} from '../actions/products';
import {populateProducts} from '../actions/products';
import {populateBasket} from '../actions/basket';

const store = createStore(
    combineReducers({
        products: productsReducer,
        basket: basketReducer
    })
)

const testProductsArray = [
    {id: 1, artist: 'Artbat', songTitle: 'Oz', price: 150},
    {id: 2, artist: 'Tale of us', songTitle: 'Swallow', price: 175},
    {id: 3, artist: '&ME', songTitle: 'Garden', price: 109},
    {id: 4, artist: 'Jimi Jules', songTitle: 'Fool', price: 159},
    {id: 5, artist: 'Bicep', songTitle: 'Aura', price: 139},
    {id: 6, artist: 'Colyn', songTitle: 'Resolve', price: 169},
    {id: 7, artist: 'HOSH', songTitle: 'Midnight', price: 129},
    {id: 8, artist: 'Mathame', songTitle: 'Skywalking', price: 109}
]
// const testBasketArray = [
//     {id: 2, productName: 'test product2', productPrice: 2},
//     {id: 3, productName: 'test product2', productPrice: 2}
// ]

// const testProduct = {id: 4, productName: 'test product4', productPrice: 4};

store.subscribe(()=>{
    console.log('Sub', store.getState());
});


store.dispatch(populateProducts(testProductsArray));
// store.dispatch(populateBasket(testBasketArray));
// store.dispatch(addProduct(testProduct));
// store.dispatch(removeProduct(2));
// store.dispatch(removeProduct(3));
// store.dispatch(editProduct(1, {productName: 'edited name', productPrice: 5}))


export default store;