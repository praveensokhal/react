
import axios from 'axios';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'



function Orders(){
    // axios
    var [data,setData] = useState([])
var [isloading,setLoading] = useState(true)
// useEffect
    useEffect(()=>{
        axios({method:"POST",
        url:process.env.REACT_APP_BASE_API_URL+"/cakeorders",
        headers:{authtoken:localStorage.token},data:JSON}).then((response)=>{
            console.log("ordersss.....",response.data)
            setData(response.data.cakeorders)
            // alert(JSON.stringify(data))
            // console.log(data.cakeorders)
            setLoading(false)
        },(error)=>{
            setLoading(false)
        });

},isloading)

return (
<div className="container mt-5 p-2">
    <div className="card m-2">
       <div className="card-title">
        Your Orders
       </div>
       <div className="card-body p-4">
       {
           data.map((value,index)=>{
                   return(
                    <div class="accordion" id={`accordionExample${index}`}>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id={`headingOne${index}`}>
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOne${index}`} aria-expanded="true" aria-controls="collapseOne">
                               Orders {value.orderid}
                            </button>
                            </h2>
                            <div id={`collapseOne${index}`} class="accordion-collapse collapse show" aria-labelledby={`headingOne${index}`} data-bs-parent={`#accordionExample${index}`}>
                            <div class="accordion-body">
                                <table>
                                    <tr>
                                        <td>
                                            {value.cakes.map((cakevalue,cakeidex)=>{
                                                return(
                                                   <div className="image">
                                                       <span> <img src={cakevalue.image} alt={cakevalue.name} height="20px" width="20px"/></span>
                                                   </div>
                                                )
                                            })}
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
       </div>
   </div>
   {/* address: "chandigarh"
cakes: [{quantity: 2,…}]
city: "kharar"
compeleted: false
email: "kaurswt21@gmail.com"
mode: "cash"
name: "praveen"
orderdate: "2021-06-13T03:59:52.183Z"
orderid: 1623590986993
pending: true
phone: "8837834727"
pincode: 140301
price: 1120
__v: 0
_id: "60c6084a81d16400224b1ea9" */}
</div>
)
}

export default connect()( withRouter(Orders))