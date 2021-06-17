import axios from "axios";
import { useState } from "react";
import { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";
import Paginations from "./Pagination";

function AllProducts(props){
    const [currentPage, setCurrentPage] = useState(1);
   
    if (!localStorage.token ||props.User_role!=="ashu.lekhi0540@gmail.com" && props.User_role !== "kaurswt21@gmail.com" ) {
        toast.warning("Oops you are not permitted to access this")
        props.history.push('/login')
    }
    var [isloading,setLoading]=useState(true)
    var [data, setData] = useState([])
    useEffect(()=>{
        axios({
            method:"get",
            url:process.env.REACT_APP_BASE_API_URL+"/allcakes",
            data:JSON
        }).then((response)=>{
            // alert("hi")
            console.log("allPRoducts",response.data.data)
            props.dispatch({
                type:"ALLCAKES",
                payload:{
                    cakedata:response.data.data
                }
            })
            // setData(response.data.data)
            setLoading(false)
        })
    },isloading)
    let NUM_OF_RECORDS = props.all_cakes.length;
    let LIMIT = 6;
  
    const onPageChanged = useCallback(
      (event, page) => {
        event.preventDefault();
        setCurrentPage(page);
      },
      [setCurrentPage]
    );
// useEffect((page)=>{
//     setCurrentPage(page);
// }, [setCurrentPage])
    
    const currentData = props.all_cakes.slice(
      (currentPage - 1) * LIMIT,
      (currentPage - 1) * LIMIT + LIMIT
    );
 
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
       
    }
    }
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
                    <option value="name">by alphabets</option>   
                    <option value="reset">Reset</option>
                </select>
            </div>
       </div>
        <div className="container card mt-5 p-5">
            <div className="table-responsive ">
            <table className=" table table-striped">
                 <thead>
                    <tr>
                        <th className="text-center ">
                            Cakes
                        </th>
                        <th className="text-center">
                            Created by
                        </th>
                        <th className="text-center">
                            Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                   {currentData.map((value,index)=>{
                       return (
                        <tr>
                        <td >
                            <div className="product-box " >
                                <div className="product-image ml-4">
                                    <img src={value.image} alt="cake" height="100px" width="100px"/>
                                    <div className="d-inline-block">
                                        <span className="d-block ml-5">
                                            <small style={{fontFamily:"cursive",fontSize:"18px"}}> {value.name}</small>
                                        </span>
                                        <span  className="d-block ml-5">
                                            <small style={{fontFamily:"cursive"}}>Rs {value.price} /-</small>
                                        </span>
                                    </div>
                                </div>
                                
                            </div>
                        </td>
                        <td className="text-center p-5">
                            <>
                                <div className="creator-details ">
                                    <strong>   created by : Praveen</strong>
                                    <div className="d-block">
                                        created on : 21/1/21
                                    </div>
                                </div>
                            </>
                        </td>
                        <td className="text-center p-5">
                            <div className="products-actions">
                                <span><a href="/admin/cakes/update" ><button className="btn btn-primary"><i class="fa fa-wrench" aria-hidden="true"></i></button></a></span>
                                <span><a href="/admin/cakes/delete" ><button className="btn btn-primary ml-5"><i class="fa fa-trash" aria-hidden="true"></i></button></a></span>
                            
                            </div>
                        </td>
              
                    </tr>
                       )
                       
                   })}
                   </tbody>
                </table>
               
            </div>
           
        </div>
        {props.all_cakes&&props.all_cakes.length>currentPage?
        <div className="pagination-wrapper">
                       <Paginations
                           totalRecords={NUM_OF_RECORDS}
                           pageLimit={LIMIT}
                           pageNeighbours={2}
                           onPageChanged={onPageChanged}
                           currentPage={currentPage}
                       />
                   </div>
       :null}
      
        </>
    )
}
AllProducts = connect(
    function(state,props){
        console.log("Admin form ",state.cartReducer)
        return{
            User_role:state.AuthReducer?.User_role,
            all_cakes :state.cartReducer?.cakes
        }
    }
)(AllProducts)
// connect
export default withRouter(AllProducts)