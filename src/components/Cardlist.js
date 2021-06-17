
// import data from './data';
import './component.css';
import axios from "axios";

import Card from './Card.js';
import { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Paginations from "./Pagination";
var apiurl = process.env.REACT_APP_BASE_API_URL+"/allcakes";
// var apiurl = "https://fakestoreapi.com/products";

let Cardlist = (props)=>{

    const [currentPage, setCurrentPage] = useState(1);
    var [islodding,setLodding]=useState(true)
    var [data,setData] = useState([])
useEffect(()=>{
    if(props.all_cakes.length===0) {
   
        axios({method:"GET",url:apiurl,data:JSON}).then((response)=>{
            console.log("propcale.............",response.data.data)
            
            props.dispatch({
                type:"ALLCAKES",
                payload:{
                    cakedata:response.data.data
                }
            })
            // setLodding(false)
            setData(response.data.data)
          },(error)=>{
              console.log("error all_Cakes")
          });
    }
    setLodding(false)
    
},islodding)
let NUM_OF_RECORDS = props.all_cakes.length;
let LIMIT = 6;

const onPageChanged = useCallback(
  (event, page) => {
    event.preventDefault();
    setCurrentPage(page);
  },
  [setCurrentPage]
);
// var [sorted,setSortType] = useState("")

const OnSorting = (e)=>{
let option = e.target.value;
switch(option){
    case "high":{
        const copy = [...props.all_cakes] // create copy of cases array (new array is created each time function is called)
        copy.sort((a, b) => b.price - a.price) // mutate copy array
        // setSortType(!sorted); // set new value for sortDown
      
        props.dispatch({
            type:"ALLCAKES",
            payload:{
                cakedata:copy
            }
        })
        break;
    }
    case "low":{
        const copy = [...props.all_cakes] // create copy of cases array (new array is created each time function is called)
        copy.sort((a, b) => a.price - b.price) // mutate copy array
        // setSortType(!sorted); // set new value for sortDown
      
        props.dispatch({
            type:"ALLCAKES",
            payload:{
                cakedata:copy
            }
        })
        break;
    }
    case "new":{
        const original = [...props.all_cakes]
        original.sort((a, b) => b.cakeid - a.cakeid) 
    
  
        props.dispatch({
            type:"ALLCAKES",
            payload:{
                cakedata:original
            }
        })
        break;
    }
    case "name":{
        // alert(option)
        const copy = [...props.all_cakes] // create copy of cases array (new array is created each time function is called)
        copy.sort((a, b) => a.name.localeCompare(b.name)) 
    
        props.dispatch({
            type:"ALLCAKES",
            payload:{
                cakedata:copy
            }
        })
        break;
    }
    case "reset":{
        const copy = [...props.all_cakes] // create copy of cases array (new array is created each time function is called)
        copy.sort((a, b) => a.cakeid - b.cakeid) 
    
        props.dispatch({
            type:"ALLCAKES",
            payload:{
                cakedata:copy
            }
        })
        break;
    }
   
}
}
const currentData = props.all_cakes.slice(
  (currentPage - 1) * LIMIT,
  (currentPage - 1) * LIMIT + LIMIT
);

    return(
   <>
        <div className="row mt-5 text-center">
            <div className="col-md-2 offset-md-8 ">
            {/* <i className="fa fa-sort" style={{position:"relative"}} aria-hidden="true"></i>  */}
         
   
            <select className="form-select selectpicker"   id="mySelect" onChange={OnSorting}  data-show-icon="true" aria-label="Default select example">
                    <option value="" selected>Sort by </option>

                    <option value="new">Whats New</option>
                    <option value="high">High to low</option>
                    <option value="low">Low to high</option>
                    <option value="name">By alphabetically</option>   
                    <option value="reset">Reset</option>
                </select>
            </div>
       </div>
            <div className="container" >
    
            <div className="card-groups "  >
          {islodding &&  <div className="container text-center loaderbody">
                            <p className="loader-text"> loading....</p>
                            <div className="loader4">
                            </div>
                        </div>}
                {currentData.map((each,index)=>{   
                    return ( <>
                        <Card data={each} index ={index}></Card>
                        
                  </>
                    )
            
                })}
               
           
        
          </div>
          {props.all_cakes&&props.all_cakes.length>currentPage?
            <div className="pagination-wrapper">
                           <Paginations
                               totalRecords={NUM_OF_RECORDS}
                               pageLimit={LIMIT}
                               pageNeighbours={2}
                               pageCount={ Math.ceil(props.all_cakes.length/currentPage)}
                               onPageChanged={onPageChanged}
                               currentPage={currentPage}
                           />
                       </div>
           :null}
          </div>
   </>
    )
   
}
Cardlist=connect(function(state,props){
    // console.log("carList ",state.cartReducer)
    return{
        all_cakes: state.cartReducer?.cakes
    }
})(Cardlist)
export default withRouter(Cardlist)