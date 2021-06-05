import querystring from 'query-string'

import Card from './Card.js';
import axios from "axios";
import { useEffect, useState } from 'react';

function Search(props){

    var query = querystring.parse(props.location.search)
var apiurl = process.env.REACT_APP_BASE_API_URL+"searchcakes?q="+query.q
    var [islodding,setLodding]=useState(true)
    var [data,setData]=useState([]);
    useEffect(()=>{
    axios({method:"GET",url:apiurl,data:JSON}).then((response)=>{
        console.log("propcale..",response.data.data)
        setLodding(false)
        setData(response.data.data)

    },(error)=>{
        console.log("error..",error.data.data)
        setLodding(false)
    });

    },islodding)
    return(
      
        <>
        <label>dasdas</label>
            { data.map((each,index)=>{   
                return ( 
                <Card data={each} index ={index}></Card>
                
                )
        
            })}

        </>

    )
}
export default Search