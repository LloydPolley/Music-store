//Basket functionality

export const populateBasket = (products) => ({
    type: 'POPULATE_BASKET',
    products
});
export const addProductBasket = (product) => ({
    type: 'ADD_PRODUCT_BASKET',
    product
});
export const removeProductBasket = (id) => ({
    type: 'REMOVE_PRODUCT_BASKET',
    id
});