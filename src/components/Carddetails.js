import { useParams } from "react-router"
import "./component.css";

import axios from "axios";
import { useEffect, useState } from 'react';


function Carddetails(props){
var params = useParams(props)

var apiurl=process.env.REACT_APP_BASE_API_URL+"/cake/"+params.cakeid
var cakeid = params.cakeid
var [data,setData]=useState([]);
var [islodding,setLodding]=useState(true)
        useEffect(()=>{
            axios({method:"GET",url:apiurl,data:JSON}).then((response)=>{
                console.log("response",response.data.data)
                setData(response.data.data)
                setLodding(false)
            },(error)=>{
        
                console.log("error..",error)
                setLodding(false)
            });
    
},islodding)
    return(
      
        <>
          {islodding &&  <div class="container text-center loaderbody">
                        <p className="loader-text"> loading....</p>
                        <div class="loader4">
                        </div>
                    </div>}
{!islodding && <div className="container ">
    <div className=" row card m-5">
            <div className="card-block">
                <div className="row">
                    <div className="col ">
                        <img className="img-fluid carddetails mb-3"  src={data.image}  alt="image"/>
                        <p className="card-text">{data.name}</p>
                    
                    </div>
                    <div className="col">
                    <div class="container">
                    <span id="rateMe4"  class="feedback">{data.rating}dddddddddddddd</span>
                    </div>
                    <script src="js/addons/rating.js"></script>
                    <p className="card-text">{data.name}</p>
                    <p className="text " style = {{"color":"red"}}> Rs {data.price}</p>
                    <p className="card-text">{data.description}</p>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>}
        </>

    )
}

export default Carddetails