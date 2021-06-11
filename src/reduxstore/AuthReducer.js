function AuthReducer(state={
  
isloggedin:localStorage.token?true:false,
username:undefined,
token:localStorage.token,
isloading:false
},action){
    switch(action.type){
        case "LOGIN":{
            state = {...state}
            state["token"] = action.payload?.token
            // alert(state.token)
            state["isloggedin"]=true
            return state
        }
        default:
         return state
    }


}
export default AuthReducer

