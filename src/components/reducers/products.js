const productsReducer = (state, action) => {
    switch(action.type){
        case "POPULATE_PRODUCTS":
            return action.products;
        case "ADD_PRODUCT": 
            return [
                ...state,
                {productTitle: action.productTitle}
            ]
        default:
            return state;
    }
}

export default productsReducer;