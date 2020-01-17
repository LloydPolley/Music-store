import database from '../firebase/firebase';

export const populateProducts = (products) => ({
    type: 'POPULATE_PRODUCTS',
    products
})

export const addProduct = (product) => ({
    type: 'ADD_PRODUCT',
    product
});

export const fireAddProduct = (product) => {
    console.log(product)
    return (dispatch) => {
        database.ref(`artists/${product.artist}/tracks`).push({...product}).then((ref)=>{
            dispatch(addProduct({
                id: ref.key,
                ...product
            }))
        })
    }
}

export const editProduct = (id, updates) => ({
    type:'EDIT_PRODUCT',
    id,
    updates
})

export const removeProduct = (id) => ({
    type: 'REMOVE_PRODUCT',
    id
});


