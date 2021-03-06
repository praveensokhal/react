
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom';
import "./component.css"

import Paginations from "./Pagination";

import { toast } from 'react-toastify';

function Orders(props){

    const [currentPage, setCurrentPage] = useState(1);
    var [data,setData] = useState([])
    var [isloading,setLoading] = useState(true)

    // useCallback
    useEffect(()=>{
        if(localStorage.token){
            axios({method:"POST",
        url:process.env.REACT_APP_BASE_API_URL+"/cakeorders",
        headers:{authtoken:localStorage.token},data:JSON}).then((response)=>{
            // console.log("ordersss.....",response.data)
            setData(response.data.cakeorders)
            setLoading(false)
        },(error)=>{
            setLoading(false)
        });
        }
        else{
            toast.warning("please login")
            props.history.push("/login")
        }

},isloading)

let NUM_OF_RECORDS = data.length;
let LIMIT = 6;

const onPageChanged = useCallback(
  (event, page) => {
    event.preventDefault();
    setCurrentPage(page);
  },
  [setCurrentPage]
);


const currentData = data.slice(
  (currentPage - 1) * LIMIT,
  (currentPage - 1) * LIMIT + LIMIT
);
return (
<div className="container mt-5 p-2">
    <div className="card m-2">
       <div className="card-title">
       <strong className="font-style-change"> Your Orders</strong>
       </div>
       <div className="card-body p-4 orders">
     {data && data.length>0?
     <>
      {
           currentData.map((value,index)=>{
                   return(
                    <div className="accordion" id={`accordionExample${index}`}>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id={`headingOne${index}`}>
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOne${index}`} aria-expanded="true" aria-controls="collapseOne">
                              <strong> Orders {value.orderid}</strong>
                            </button>
                            </h2>
                            <div id={`collapseOne${index}`} className="accordion-collapse collapse show" aria-labelledby={`headingOne${index}`} data-bs-parent={`#accordionExample${index}`}>
                            <div className="accordion-body">
                                <table>
                                    <tr>
                                        <td>
                                            {value.cakes.map((cakevalue,cakeidex)=>{
                                                return(
                                                   <div className="image ">
                                                       <div className="image-orders-zoom"> <Link to={`/cake/${cakevalue.cakeid}`}><img src={cakevalue.image} alt={cakevalue.name} height="20px" width="20px"/></Link></div>
                                                       <div className="cake-order-details">
                                                       <span><small style={{color:"#a3a314", "font-size":"20px"}}>{cakevalue.name}</small></span>
                                                       <span> <small>Quantity : {cakevalue.quantity}</small> </span>
                                                       <span> <small>Price : ???{cakevalue.price}</small> </span>
                                                       <span> <small>weight : {cakevalue.weight} kg</small> </span>
                                                       </div>
                                                   </div>
                                                )
                                            })}
                                        </td>
                                        <td className="text-left p-4">
                                            <div className="order-person-details d-inline-block">
                                                <span>
                                                   <strong style={{textTransform:"uppercase"}}> {value.name}</strong> |<small className="order-date" value={value.orderdate}> {value.orderdate} </small>
                                                </span>
                                                <span>
                                                    <small>contact: {value.phone}</small>
                                                </span>
                                                <span>
                                                    <small>email: {value.email}</small>
                                                </span>
                                                <span>
                                                   <small>address:  {value.city} {value.address} {value.pincode}</small>
                                                </span>

                                            </div>

                                        </td>
                                        <td className="text-right">
                                          
                                               <div className="order-payment-mode">
                                               <span><strong>Payment mode:</strong> {value.mode}</span>
                                                <span><strong>Total Amount:</strong> ??? {value.price}</span>
                                               </div>
                                            
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            </div>
                        </div>
                    </div>
                   )
                })
            }

        {data&&data.length>currentPage?
                <div className="pagination-wrapper">
                            <Paginations
                                totalRecords={NUM_OF_RECORDS}
                                pageLimit={LIMIT}
                                pageNeighbours={2}
                                // pageCount={ Math.ceil(data.length/currentPage)}
                                onPageChanged={onPageChanged}
                                currentPage={currentPage}
                            />
                        </div>
            :null}
     </>
     
     :<center><img src="/asset/cart-empty.png" style={{width:'500px'}} alt="empty" />
    <p>You hav no orders. <Link to="/"><strong>Click here </strong></Link>to see Cakes</p></center>} 
       </div>
   </div>
 
</div>
)

}

export default connect()( withRouter(Orders))