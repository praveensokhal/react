import { data } from "jquery";

function cartReducer (state={
//    state:null,
   cart:[],
   totalprice:0,
 all_cakes:[],
    // message:"",
   status:false,
},action){
    switch(action.type){
    
        case "ADDTOCART":{
            // state["message"]= action.payload?.message
            state = {...state};
          
            return state;
        }
        case "SHOW_CART" : {
            state = {...state}
            state["cart"] = [...action.payload?.cakedata]
          
            return state
        }
        case "REMOVE_CART_ITEM" : {
            // state["message"]= action.payload?.message
            state = {...state};
            state["status"]=action.payload?.status;
            
            return state
        }
        case "EMPTY_CART":{
             state={...state};
             state["cart"]=[];
         return state;
        }
     case "PLACEORDER":{
         state= {...state}
        // state["message"]= action.payload?.message
         return state
     }
     case "ALLCAKES":{
        state = {...state}
        state["all_cakes"] = [...action.payload?.cakedata];
         return state
     }
        default: return state
    }


}
export default cartReducer