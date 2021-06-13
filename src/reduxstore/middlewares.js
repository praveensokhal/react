

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
    dispatch({
      type:"CARTITEMS"
    })
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
                   
                      dispatch({
                        type:'ADDTOCART',
                        payload:{
                          data:Data,
                          message:res.data?.message
                        }
                    }); 
                   dispatch(CartListMiddleware());
                  },(error)=>{
                    console.log(error.data)
                    });
  }
 

}
export function RemoveProductFromCartListMiddleware(data,Url){
  return function (dispatch){
    axios({method:"POST",url:Url,headers:{authtoken:localStorage.token},data:{cakeid:data.cakeid}}).then((response)=>{
     
      dispatch({
        type:"REMOVE_CART_ITEM",
        payload:{
          status:true,
          message:response.data.message
        }
      })
      dispatch(CartListMiddleware());
     },(error)=>{

     });
  }
}
export function CartListMiddleware(){
  return function (dispatch){
  dispatch({
    type:"CARTITEMS"
  })
    axios(
      {
          method:"POST",
          url:process.env.REACT_APP_BASE_API_URL+"/cakecart",
          headers:{
             authtoken:localStorage.token
          },
          data:{
                JSON
          }})
              .then(res => {
                const cartlist = res.data.data
                console.log("show cart data",cartlist)
              dispatch({
                      type:'SHOW_CART',
                      payload:{
                        cakedata:cartlist,
                      }
                  });
                
              },(error)=>{
                console.log(error.data)
                });
  }
}


export function PlaceOrderMiddleware(data,cart,price){
  return function(dispatch){
      axios(
          {
              method:"post",
              url:process.env.REACT_APP_BASE_API_URL+'/addcakeorder',
              headers:{
                 authtoken:localStorage.token
              },
              data:{
                city:data.city,
                name:data.name,
                address:data.address,
                pincode:data.pincode,
                phone:data.phone,
                cakes:cart,
                price:price
              }})
                  .then(res => {
                      const Data = res.data.error!=null?[]:res.data.data;
                      console.log(res.data)
                      dispatch({
                          type:'PLACEORDER',
                          payload:{
                           success:true,
                           message:res.data.messageg
                          }
                      });
                  },(error)=>{
                    console.log(error.data)
                  //   dispatch({
                  //     type:'ERRORINORDER',
                  //     payload:{
                  //      success:true,
                  //      message:error.data.message
                  //     }
                  // });
                  });
  }
}
// export default loginmiddleware