function AuthReducer(state={
  
isloggedin:localStorage.token?true:false,
User_role:localStorage.email?localStorage.email:null,
token:localStorage.token,
isloading:false,
// details:[]
},action){
    switch(action.type){
        case "LOGIN":{
            state = {...state}
            state["token"] = action.payload?.token
            state["message"] = action.payload?.message
             state["User_role"] = action.payload?.User_role
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
        case "LOGOUT":{
            state = {...state}
            state["token"] = action.payload?.token
            state["message"] = action.payload?.message
            state["isloggedin"]=false
            state["isloading"] = false
            return state
        }
        case "USERDETAILS":{
            state = {...state}
            // state["User_role"] = action.payload?.User_role
            return state
        }
        default:
         return state
    }


}
export default AuthReducer

