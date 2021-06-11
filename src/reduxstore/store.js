import {createStore , combineReducers, applyMiddleware} from "redux"
import AuthReducer from "./AuthReducer"
import cartReducer from "./cartReducer"
import thunk from "redux-thunk"


let middle = store=>next=>action=>{
    alert("riswat do")
    next(action)
}
var reducers = combineReducers({AuthReducer ,cartReducer})

let store = createStore(reducers,applyMiddleware(middle,thunk))

export default store


