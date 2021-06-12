
import axios from "axios";
import {Link, withRouter} from "react-router-dom"
import { useEffect, useState } from 'react';
import $ from 'jquery'
import { connect } from "react-redux";
import { CartListMiddleware,cartReducer,RemoveProductFromCartListMiddleware, AddProcutToCartListMiddleware } from "../reduxstore/middlewares";

function Cart(props){
    
  var [islodding,setLodding]=useState(true)
  var [data,setData] = useState([])

  
  useEffect(()=>{
    // cartReducer
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
                setData(cartlist);
                
                 
                  props.dispatch({
                      type:'ADDTOCART',
                      payload:{
                        data:cartlist,
                        
                      }
                      
                  });
                  setLodding(false)
              },(error)=>{
                console.log(error.data)
                });

  },islodding)
  
  var decreaseCakeItem=(e,cakedata)=>{
    let  apiurl =process.env.REACT_APP_BASE_API_URL+"/removeonecakefromcart";
    props.dispatch(RemoveProductFromCartListMiddleware(cakedata,apiurl)); 
    };
  var Removecart=(e,cakeid)=>{

    axios({method:"POST",url:process.env.REACT_APP_BASE_API_URL+"/clearcart",headers:{authtoken:localStorage.token},data:{cakeid:cakeid}}).then((response)=>{
       console.log("response remove cart",response.data)
      
 },(error)=>{
   
  
 });

  }
  var addCakeItem=(e,cakedata)=>{

   
      let  apiurl =process.env.REACT_APP_BASE_API_URL+"/addcaketocart";
      props.dispatch(AddProcutToCartListMiddleware(cakedata,apiurl)); 
    
  
  };
  var changeTab=()=>{
    props.click();
   
}

return (
    <>

<div class={`${props.show==false?null:'container'}`}>

   {props.show==false?null:<div className="jumbotron mt-3 bg-dark mb-5">
        <Link to="/checkout"><button className = "btn btn-primary pull-right"> checkout</button></Link>
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
            <th  className="text-center">qty</th>
            <th  className="text-center">price</th>
            <th className="text-center">total</th>
            <th  className="text-center">delete</th>
           
          </thead>
          

<tbody>
{props.cart.map((value,index)=>{
        
        return (
          <tr>
            <td style={{width:'500px'}}>
              <div className="image">
                <img src={value.image} alt="" />
               <div className="details">
               <span>{value.name}</span>
                <span><strong>Weight :</strong> {value.weight} kg</span>
                  <span>
                    <Link to={'/cake/'+value.cakeid}>
                      <button className="btn btn-outline-danger btn-sm" type="button" name="button">
                        <i className="fa fa-eye" aria-hidden="true"></i>
                        </button>
                    </Link>
                  </span>
               </div>
              </div>
            </td>
            <td className="text-center" style={{width:'140px'}}>
              
                <span>
                  <button className="  fa fa-minus" type="button" name="button" style={{marginRight:'14px'}} value={value.cakeid} onClick={(e)=>{decreaseCakeItem(e,value)}}> </button>
                    <input type="text" disabled name="name" value={value.quantity}/>
                    <button className="  fa fa-plus" type="button" name="button"   style={{marginLeft:'14px'}}value={value.cakeid} onClick={(e)=>{addCakeItem(e,value)}}>
          
                    </button>
                </span>
               
            </td>
            <td className="text-center"> ₹ {Math.round((value.price / value.quantity),2)}</td>

            <td className="total-price text-center" value={value.price} >₹<strong className="price">{value.price}</strong></td>
            <td class="text-center"><a class="remove-from-cart"  onClick={(e)=>Removecart(e,value.cakeid)} data-toggle="tooltip" title="" data-original-title="Remove item"><i class="fa fa-trash"></i></a></td>  
          </tr>
        )
        })}


</tbody>

        </table>

        <div className="shopping-cart-footer ">
        <h3 className="pull-right">
        Total :   
          <strong> ₹
            <span id="total">
            {props.total}
            </span>
          </strong>
        </h3>
        </div>
      </div>
    {props.show==false?
<div className="jumbotron mt-3 bg-dark mb-5">
        <Link to="/checkout/order"><button className = "btn btn-primary pull-right" onClick={changeTab}> Confirm</button></Link>
        <h1> Final</h1>
    
      </div>:null }



    </div>
    :<center><img src="/asset/cart-empty.png" style={{width:'500px'}} />
    <p>Cart is Empty. <Link to="/"><strong>Click here </strong></Link>to see Cakes</p>
    </center>
}

   </div>
    </>
 
)
function getTotal(){
  var total = 0;

  $('.price').each(function(){
      total += parseFloat(this.innerHTML)
  });
  $('#total').text(total);
}


}


Cart= connect(function mapStateToProps(state,props){
 
  console.log("props cart" + JSON.stringify(state.cartReducer))
  return{
    // cartReducer
    cart:state.cartReducer,
    isLoading:state.cartReducer?.isLoading,
    token:state.AuthReducer?.token,
    total:state.cartReducer?.totalprice,
  }
})(Cart)
export default withRouter(Cart)