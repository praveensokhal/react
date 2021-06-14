
import axios from "axios";
import {Link, withRouter,Redirect} from "react-router-dom"
import { useEffect, useState } from 'react';
import $ from 'jquery'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from "react-redux";
import { CartListMiddleware,cartReducer,RemoveProductFromCartListMiddleware, AddProcutToCartListMiddleware } from "../reduxstore/middlewares";

function Cart(props){
    
  var [islodding,setLodding]=useState(true)

  useEffect(()=>{
    if(localStorage.token){
      props.dispatch(CartListMiddleware());
      setLodding(false)
    }else{
      toast.warning("Please login")
    }
  
  },islodding);
  var decreaseCakeItem=(e,cakedata)=>{
    let  apiurl =process.env.REACT_APP_BASE_API_URL+"/removeonecakefromcart";
    props.dispatch(RemoveProductFromCartListMiddleware(cakedata,apiurl)); 
  
  };
  var RemoveCakeItem=(e,cakedata)=>{
    let  apiurl =process.env.REACT_APP_BASE_API_URL+"/removecakefromcart";
    props.dispatch(RemoveProductFromCartListMiddleware(cakedata,apiurl)); 
  
  };
  var Removecart=(e)=>{

    axios(
      {
        method:"POST",
        url:process.env.REACT_APP_BASE_API_URL+"/clearcart",
        headers:{
          authtoken:localStorage.token
        },
        data:{
          // cakeid:cakeid
        }
      }).then((response)=>{
       toast.warning(response.data.message)
      props.dispatch(CartListMiddleware())
      props.dispatch(
        {
          type:"EMPTY_CART",
      
        }
      )
      
 },(error)=>{
   
  
 });

  }
  var addCakeItem=(e,cakedata)=>{
      let  apiurl =process.env.REACT_APP_BASE_API_URL+"/addcaketocart";
      props.dispatch(AddProcutToCartListMiddleware(cakedata,apiurl));
      // props.dispatch(CartListMiddleware());
  };
  var changeTab=()=>{
    props.click();
   
}
if(localStorage.token){

  return (
    <>
      <div>
        <ToastContainer autoClose={8000} />
      </div>
<div class={`${props.show==false?null:'container'}`}>

   {props.show==false?null:<div className="jumbotron mt-3 bg-dark mb-5">
       {props.cart && props.cart.length>0? <Link to="/checkout"><button className = "btn btn-primary pull-right"> checkout</button></Link>:null}
        <h1> Your Cart</h1>
    
      </div> }
{props.cart && props.cart.length>0? 
    <div className="checkout">
    <div  className="shopping-cart card">
      <div className="title">
       <h1>Shopping Bag</h1>

       
      </div>
        <table>
          <thead>
            <th > Item</th>
            <th  className="text-center">Quantity</th>
            {/* <th  className="text-center">Price</th> */}
            <th className="text-center">Total</th>
            <th  className="text-center"><button className="btn btn-outline-danger"><a onClick={(e)=>Removecart(e)}>Clear</a></button></th>
           
          </thead>
          

<tbody>
{props.cart.map((value,index)=>{
        
        return (
          <tr>
            <td style={{width:'500px'}}>
              <div className="image">
              <Link to={'/cake/'+value.cakeid}> <img src={value.image} alt="" /></Link>
               <div className="details">
               <span>{value.name}</span>
                <span><strong>Weight :</strong> {value.weight} kg</span>
                  <span>
                    {/* <Link to={'/cake/'+value.cakeid}>
                      <button className="btn btn-outline-danger btn-sm" type="button" name="button">
                        <i className="fa fa-eye" aria-hidden="true"></i>
                        </button>
                    </Link> */}
                  </span>
               </div>
              </div>
            </td>
            <td className="text-center" style={{width:'140px'}}>
              
                <span>
                  {value.quantity===1 ?null: <button className="  fa fa-minus" type="button" name="button" style={{marginRight:'14px'}} value={value.cakeid} onClick={(e)=>{decreaseCakeItem(e,value)}}> </button>}
                    <input type="text" disabled name="name" value={value.quantity}/>
                    <button className="  fa fa-plus" type="button" name="button"   style={{marginLeft:'14px'}}value={value.cakeid} onClick={(e)=>{addCakeItem(e,value)}}>
          
                    </button>
                </span>
               
            </td>
            {/* <td className="text-center" onChange={(e)=>CakeDetails(e,value.cakeid)}> ₹{cakeprice} </td> */}

            <td className="total-price text-center" value={value.price} >₹<strong className="price">{value.price}</strong></td>
            <td class="text-center">
              <a class="remove-from-cart" onClick={(e)=>RemoveCakeItem(e,value)} data-toggle="tooltip" title="" data-original-title="Remove item"><i class="fa fa-trash"></i></a></td>  
          </tr>
        )
        })}


</tbody>

        </table>

        <div className="shopping-cart-footer ">
          <Link to="/"> <button className="btn btn-outline-info mt-5">back to shopping</button></Link>
        <h3 className="pull-right">
        Total :   
          <strong> ₹
            <span id="total">
            {getTotal()}
            </span>
          </strong>
        </h3>
        </div>
      </div>
    {props.show==false?
<div className="jumbotron mt-3 bg-dark mb-5">
        <Link to="/checkout/details"><button className = "btn btn-primary pull-right" onClick={changeTab}> Confirm</button></Link>
        <h1> Final</h1>
    
      </div>:null }



    </div>
    :<center><img src="/asset/cart-empty.png" style={{width:'500px'}} alt="empty" />
    <p>Cart is Empty. <Link to="/"><strong>Click here </strong></Link>to see Cakes</p>
    </center>
}

   </div>
    </>
 
)
function getTotal(){
  var total = 0;

  $(document).ready(function(){
    $('.price').each(function(){
      total += parseFloat(this.innerHTML)
  });
  $('#total').text(total);
  localStorage.total_price=total
  // console.log(localStorage)
  })
}

}else{
  return  <Redirect to='/login' />
}



}


Cart =connect(function mapStateToProps(state,props){
 
  console.log("props cart" + JSON.stringify(state.cartReducer))
  return{
    message:state.cartReducer?.message,
    cart:state.cartReducer?.cart,
    isLoading:state.cartReducer?.isLoading,
    token:state.AuthReducer?.token,
    total:state.cartReducer?.totalprice,
  }
})(Cart)
export default withRouter(Cart)