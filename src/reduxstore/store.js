
import {createStore, combineReducers, applyMiddleware} from "redux";
import AuthReducer from "./AuthReducer";
import cartReducer from "./cartReducer";
import thunk from "redux-thunk";
import createSaga from "redux-saga"
import MainSaga from "./sagas";


let middle = store => next => action => {
    let currentDate = new Date()
    console.log(JSON.stringify(action.type) , 'action is dispatched at: ', currentDate)
    next(action)
}

let sagMiddleware = createSaga()

let reducers = combineReducers({AuthReducer, cartReducer})
let store = createStore(reducers, applyMiddleware(middle, thunk, sagMiddleware))

sagMiddleware.run(MainSaga)

export default store