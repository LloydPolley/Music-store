import {createStore, combineReducers} from 'redux';
import productsReducer from '../reducers/products';

//Test imports
import {addProduct, populateProducts, removeProduct, editProduct} from '../actions/products';

const store = createStore(
    combineReducers({
        products: productsReducer
    })
)

const testProductsArray = [
    {id: 1, productName: 'test product', productPrice: 1},
    {id: 2, productName: 'test product2', productPrice: 2},
    {id: 3, productName: 'test product3', productPrice: 3}
]

// const testProduct = {id: 4, productName: 'test product4', productPrice: 4};

store.subscribe(()=>{
    console.log('Sub', store.getState());
});


store.dispatch(populateProducts(testProductsArray));
// store.dispatch(addProduct(testProduct));
// store.dispatch(removeProduct(2));
// store.dispatch(removeProduct(3));
// store.dispatch(editProduct(1, {productName: 'edited name', productPrice: 5}))


export default store;