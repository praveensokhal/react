function cartReducer (state={
//    state:null,
   cart:[],
   totalprice:0,
   status:false,
},action){
    switch(action.type){
        case "ADDTOCART":{
            state = {...state};
     
           
            state["cart"]=[...state.cart, action.payload?.cakedata]
            if( state["cart"].length>0){
                state["cart"].forEach(function(x, index, arry){
                state["totalprice"] += x.price;
                });
            
            }
            
            return state;
        }
        case "SHOW_CART" : {
            state = {...state}
            state["cart"] = action.payload?.cakedata
            if( state["cart"].length>0){
                state["cart"].forEach(function(x, index, arry){
                state["totalprice"] += x.price;
                });
            
            }
            return state
        }
        case "REMOVE_ONE_CART_ITEM" : {
            state = {...state};
            state["status"]=action.payload?.status;
           
            return state
        }
     
        default: return state
    }


}
export default cartReducer