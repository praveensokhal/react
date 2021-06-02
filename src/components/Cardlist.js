
// import data from './data';
import './component.css';
import axios from "axios";

import Card from './Card.js';
import { useEffect, useState } from 'react';
// var apiurl = "https://apibyashu.herokuapp.com/api/allcakes";
var apiurl = "https://fakestoreapi.com/products";

let Cardlist = (props)=>{
    var [data,setData]=useState([]);
useEffect(()=>{
    axios({method:"GET",url:apiurl,data:JSON}).then((response)=>{
        setData(response.data)
      
      },(error)=>{});
    
}

)
    return(
   
        <div className="list-container" >
        <div className="card-groups"  >
     
    {data.map((each,index)=>{   
        return ( <Card data={each} index ={index}></Card>)
 
     })}
  
      </div>
    
      </div>
    )
   
}
export default Cardlist