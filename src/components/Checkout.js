
import {Link, Redirect, Route, useRouteMatch, withRouter} from "react-router-dom";
import Confirm from "./Confirm";
import Order from "./Order";
import Summary from "./Summary";

function Checkout(){
    var {path} =  useRouteMatch()
    // alert(path)
    return(
        <div class="container-full  card-groups  mt-5">
           <nav>
            <ul className="card sidenav d-flex align-items-center col-4">
                    <li>
                        <Link to={path+'/summary'}>
                        <button type="button " class="btn btn-outline-primary checkout-button "><strong>Order Summary</strong></button>
                        </Link>
                        <Link to={path+'/order'}>
                        <button type="button " class="btn btn-outline-primary checkout-button "><strong>Place Order</strong></button>
                        </Link>
                        <Link to={path+'/confirm'}>
                        <button type="button " class="btn btn-outline-primary checkout-button "><strong> Confirm Details</strong></button>
                        </Link>
                    </li>
                </ul>
           </nav>
           
            <div class="container col-md-8 checkout   ">
                <div class="row justify-content-center card ">
                <Route exact path={path}><Redirect to={path+"/summary"}></Redirect></Route>
                   <Route exact path={path+"/order"} component={Order}></Route>
                   <Route exact path={path+"/summary"}component={Summary}></Route>
                   <Route exact path={path+"/confirm"} component={Confirm}></Route>
                </div>
            </div>
      </div>
    )
}

Checkout = withRouter(Checkout)
export default Checkout