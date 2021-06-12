
import {Link, Redirect, Route, useRouteMatch, withRouter} from "react-router-dom";
import Confirm from "./Confirm";
import Order from "./Order";
import {  useState } from 'react';
import Summary from "./Summary";
import { useEffect } from "react";

function Checkout(props){
    var {path} =  useRouteMatch()
    var[data,setdata] = useState()
  useEffect(() => {
        if(props.total==-1){
           props.history.push('/')
        }
      }, [props.total]);

    // useEffect
    useEffect(() => {
           props.history.push(path)
      }, []);

    const[tab1,settab1] = useState(true);
    const[tab2,settab2] = useState(false);
    const[tab3,settab3] = useState(false);
    var SummaryTabChange =()=>{
        settab2(true)
    }
    var OrderTabChange =()=>{
        setdata(data)
        settab3(true)
    }
    // alert(path)
    return(
        <div className="container-full  card-groups  mt-5">
           <nav>
            <ul className="card sidenav d-flex align-items-center col-4">
                    <li>
                        <Link className={`${tab1==true?'nav-link active ':'nav-link disabled'}`} to={path+'/summary'}>
                        <button type="button " className="btn btn-outline-primary checkout-button" ><strong>Order Summary</strong></button>
                        </Link>
                        <Link  className={`${tab2==true?'nav-link active':'nav-link disabled'}`}  to={path+'/order'}>
                        <button type="button " className="btn btn-outline-primary checkout-button" ><strong>Place Order</strong></button>
                        </Link>
                        <Link  className={`${tab3==true?'nav-link active':'nav-link disabled'}`}  to={path+'/confirm'}>
                        <button type="button " className="btn btn-outline-primary checkout-button" ><strong> Confirm Details</strong></button>
                        </Link>
                    </li>
                </ul>
           </nav>
           
            <div className="container col-md-8 checkout   m-5 mb-5">
                <div className="row   ">
                <Route exact path={path}><Redirect to={path+"/summary"}></Redirect></Route>
                   <Route exact path={path+"/order"} ><Order click={OrderTabChange}></Order></Route>
                   <Route exact path={path+"/summary"}><Summary click={SummaryTabChange}></Summary></Route>
                   <Route exact path={path+"/confirm"} component={Confirm}></Route>
                </div>
            </div>
      </div>
    )
}

Checkout = withRouter(Checkout)
export default Checkout