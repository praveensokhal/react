
// import data from './data';
import './component.css';
import axios from "axios";

import Card from './Card.js';
import { useEffect, useState } from 'react';
var apiurl = process.env.REACT_APP_BASE_API_URL+"/allcakes";
// var apiurl = "https://fakestoreapi.com/products";

let Cardlist = (props)=>{

    var [islodding,setLodding]=useState(true)
    var [data,setData]=useState([]);
   
useEffect(()=>{
    axios({method:"GET",url:apiurl,data:JSON}).then((response)=>{
        console.log("propcale..",response.data.data)
        // pageCount = Math.ceil(data.total_count / data.limit)
      
        setLodding(false)
        setData(response.data.data)
  
      },(error)=>{
          console.log("error..",error.data.data)
          setLodding(false)
      });
    
},islodding)
    return(
   
        <div className="container" >
        <div className="card-groups "  >
      {islodding &&  <div class="container text-center loaderbody">
                        <p className="loader-text"> loading....</p>
                        <div class="loader4">
                        </div>
                    </div>}
            { data.map((each,index)=>{   
                return ( <>
                <Card data={each} index ={index}></Card>
              
              </>
                )
        
            })}
           
       
    
      </div>
    
      </div>
    )
   
}
export default Cardlist