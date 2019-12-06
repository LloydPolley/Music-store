
const basketReducerDefaultState = []

const basketReducer = (state = basketReducerDefaultState, action) => {
    switch(action.type){
        case "POPULATE_BASKET":
            return action.products;
        case "ADD_PRODUCT_BASKET": 
            return [
                ...state,
                action.product
            ]
        case "REMOVE_PRODUCT_BASKET":
            // console.log(action.id)
            return state.filter((product)=>{
               return product.id !== action.id
            })
        default:
            return state;
    }
}

export default basketReducer;