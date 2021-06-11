

import axios from "axios";

export function loginmiddleware(data){
    return function (dispatch){
        axios({method:"POST",url:process.env.REACT_APP_BASE_API_URL+"/login",data:{email:data.email,password:data.password}}).then((response)=>{
     
            if(response.data.message === "Invalid Credentials"){
    
                dispatch({
                    type:"LOGIN",
                    payload:{
                      token:response.data.token
                    }
                  })
            }else{
              console.log(response.data)
              localStorage.token = response.data.token
             dispatch({
                type:"LOGIN",
                payload:{
                  token:response.data.token
                }
              })
              
           
            }
        
      
         },(error)=>{
           //setMessageDisplay(error.data)
          
         });
    }
}

// export default loginmiddleware