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
            state["message"] = action.payload?.message
            state["isloggedin"]=true
            state["isloading"] = false
            return state
        }
        case "LOGIN_ERROR":{
            state = {...state}
            state["token"] = undefined
            state["message"] = action.payload?.message
            state["isloggedin"]=false
            state["isloading"] = true
            return state
        }
        default:
         return state
    }


}
export default AuthReducer

