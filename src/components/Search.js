import querystring from 'query-string'

import Card from './Card.js';
import axios from "axios";
import { useEffect, useState } from 'react';

function Search(props){

    var query = querystring.parse(props.location.search)
var apiurl = `https://apibyashu.herokuapp.com/api/searchcakes?q=${query.q}`
    
    var [data,setData]=useState([]);
    useEffect(()=>{
    axios({method:"GET",url:apiurl,data:JSON}).then((response)=>{
        console.log("propcale..",response.data.data)
       
        setData(response.data.data)

    },(error)=>{
        console.log("error..",error.data.data)
     
    });

    })
    return(
      
        <>
        <div className="container card-groups">
      
            { data.map((each,index)=>{   
                return ( 
                <Card data={each} index ={index}></Card>
                
                )
        
            })}
            </div>

        </>

    )
}
export default Search