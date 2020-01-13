
const audioPlayerReducerDefaultState = []

const audioPlayerReducer = (state = audioPlayerReducerDefaultState, action) => {
    switch(action.type){
        case "LOAD_TRACK":
            return action.track;
        default:
            return state;
    }
}

export default audioPlayerReducer;