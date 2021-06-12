

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
                  message:"LOGIN SUCCESSFULL"
                }
              })
              
           
            }
        
      
         },(error)=>{
          console.log(error.data)
           //setMessageDisplay(error.data)
          
         });
    }
}


export function AddProcutToCartListMiddleware(data,url){

  
  return function(dispatch){
      axios(
          {
              method:"POST",
              url:url,
              headers:{
                 authtoken:localStorage.token
              },
              data:{
                     cakeid:data.cakeid,
                     name:data.name,
                     image:data.image,
                     price:data.price,
                     weight:data.weight
              }})
                  .then(res => {
                      const Data = res.data.data;
                      console.log(res.data)
                      dispatch({
                        type:'ADDTOCART',
                        payload:{
                          data:Data,
                     
                        }
                        
                    }); 
                     
                      
                  },(error)=>{
                    console.log(error.data)
                    });
  }
 

}
export function RemoveProductFromCartListMiddleware(data,Url){
  return function (dispatch){
    axios({method:"POST",url:Url,headers:{authtoken:localStorage.token},data:{cakeid:data.cakeid}}).then((response)=>{
     
      dispatch({
        type:"REMOVE_ONE_CART_ITEM",
        payload:{
          status:true
        }
      })
    
     
     },(error)=>{

     });
  }
}
// export default loginmiddleware