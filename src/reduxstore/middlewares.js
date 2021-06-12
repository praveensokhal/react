

import axios from "axios";

export function loginmiddleware(data){
  
    return function (dispatch){
        axios({method:"POST",url:process.env.REACT_APP_BASE_API_URL+"/login",data:{email:data.email,password:data.password}}).then((response)=>{
          console.log(response.data)
            if(response.data.message === "Invalid Credentials"){
              // errormessage = "INVALID CREDENTIAL"
                dispatch({
                    type:"LOGIN_ERROR",
                    payload:{
                      message:"INVALID CREDENITAL"
                    }
                  })
            }else{
              console.log(response.data)
              localStorage.token = response.data.token
             dispatch({
                type:"LOGIN",
                payload:{
                  token:response.data.token,
                  message:"LOGIN SUCCESSFULl"
                }
              })
              
           
            }
        
      
         },(error)=>{
          console.log(error.data)
           //setMessageDisplay(error.data)
          
         });
    }
}

// export default loginmiddleware