
const productsReducerDefaultState = []

const productsReducer = (state = productsReducerDefaultState, action) => {
    switch(action.type){
        case "POPULATE_PRODUCTS":
            return action.products;
        case "ADD_PRODUCT": 
            return [
                ...state,
                action.product
            ]
        case 'EDIT_PRODUCT':
            return state.map((product)=> {
                if(product.id === action.id){
                    return{
                        ...product,
                        ...action.updates
                    }
                }else{return product}
            })
        case "REMOVE_PRODUCT":
            // console.log(action.id)
            return state.filter((product)=>{
               return product.id !== action.id
            })
        default:
            return state;
    }
}

export default productsReducer;