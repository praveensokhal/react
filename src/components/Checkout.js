
import {Link, Redirect, Route, useRouteMatch, withRouter} from "react-router-dom";
import Confirm from "./Confirm";
import Address from "./Address";
import {  useState } from 'react';
import Summary from "./Summary";
import { PlaceOrderMiddleware } from "../reduxstore/middlewares";
import { connect } from "react-redux";
// import { useEffect } from "react";

function Checkout(props){
    var {path} =  useRouteMatch()
    var[data,setdata] = useState()
  

    const[tab1,settab1] = useState(true);
    const[tab2,settab2] = useState(false);
    const[tab3,settab3] = useState(false);
    var SummaryTabChange =()=>{
        settab2(true)
    }
    var OrderTabChange =(data)=>{
        setdata(data)
        settab3(true)
    }
    
    var confirmTabChange=()=>{
    
         props.dispatch(PlaceOrderMiddleware(data,props.cart,localStorage.total_price));
         props.history.push("/") 
    }
//   if(localStorage.token)
    return(
        <div className="container-full  card-groups  mt-5">
           <nav>
            <ul className="card sidenav d-flex align-items-center col-4">
                    <li>
                        <Link className={`${tab1===true?'nav-link active ':'nav-link disabled'}`} to={path+'/summary'}>
                        <button type="button " className="btn btn-outline-primary checkout-button" ><strong>Order Summary</strong></button>
                        </Link>
                        <Link  className={`${tab2===true?'nav-link active':'nav-link disabled'}`}  to={path+'/details'}>
                        <button type="button " className="btn btn-outline-primary checkout-button" ><strong>Place Order</strong></button>
                        </Link>
                        <Link  className={`${tab3===true?'nav-link active':'nav-link disabled'}`}  to={path+'/confirm'}>
                        <button type="button " className="btn btn-outline-primary checkout-button" ><strong> Confirm Details</strong></button>
                        </Link>
                    </li>
                </ul>
           </nav>
           
            <div className="container col-md-8 checkout   m-5 mb-5">
                <div className="row   ">
                  <Route exact path={path}><Redirect to={path+"/summary"}></Redirect></Route>
                   <Route exact path={path+"/details"} ><Address click={OrderTabChange}></Address></Route>
                   <Route exact path={path+"/summary"}><Summary  click={SummaryTabChange}></Summary></Route>
                   <Route exact path={path+"/confirm"} ><Confirm click={confirmTabChange} data={data} ></Confirm></Route>
                </div>
            </div>
      </div>
    )
}

function mapStateToProps(state,props){
    return{
      cart:state.cartReducer?.cart,
    }
  };
  
export default connect(mapStateToProps)(withRouter(Checkout));
// connect