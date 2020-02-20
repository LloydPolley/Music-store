
const basketReducerDefaultState = []

const basketReducer = (state = basketReducerDefaultState, action) => {
    switch(action.type){
        case "POPULATE_BASKET":
            return action.products;
        case "ADD_PRODUCT_BASKET": 
            // console.log(action.product.id, 'aType')
            // for(let i = 0; i < state.length; i++){
            //     if(state[i].id === action.product.id){
            //         console.log('matching ids')
            //         return
            //     }
            // }
            // console.log(state.includes(a))
            // if(actionProduct.id)
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