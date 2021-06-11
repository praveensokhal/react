function cartReducer (state={
   state:null
},action){
    switch(action.type){
        case "ADDTOCART":{
            state = {...state}
            state.data = action.payload?.data
            return state
        }
        default: return state
    }


}
export default cartReducer