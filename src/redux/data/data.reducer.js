import { DataActionType } from "./data.types"
const INITIAL_STATE = {
    currentUser2:"hello "
}

const dataReducer = (state= INITIAL_STATE, action)=>{
    switch(action.type){
        case DataActionType.SET_USER:
            return{
                ...state,
                currentUser2: action.payload
            }
        default:
             return state;
    }
}
export default dataReducer