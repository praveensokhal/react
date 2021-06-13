
import {Link, Router, useParams, withRouter} from "react-router-dom";
import "./component.css";
import StarRatings from 'react-star-ratings';
import axios from "axios";
import { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { CartListMiddleware , AddProcutToCartListMiddleware } from "../reduxstore/middlewares";
import { toast } from "react-toastify";



function Carddetails(props){
var params = useParams(props)
// console.log("proppp...........",props)
// /addcaketocart - { header:authtoken data:cakeid,name,image,price,weight } 
var apiurl=process.env.REACT_APP_BASE_API_URL+"/cake/"+params.cakeid
var [data,setData]=useState([]);
var [islodding,setLodding]=useState(true)
        useEffect(()=>{
            axios({method:"GET",url:apiurl,data:JSON}).then((response)=>{
                
                setData(response.data.data)
                setLodding(false)
            },(error)=>{
                setLodding(false)
            });
    
},islodding)


var addtocart= (e)=>{
  
   if(localStorage.token){
    let  apiurl =process.env.REACT_APP_BASE_API_URL+"/addcaketocart";
    props.dispatch(AddProcutToCartListMiddleware(data,apiurl)); 
    props.dispatch(CartListMiddleware());
   }else{
      
       props.history.push("/login")
       toast.warning("Please Login")
   }
}


    return(
<div className="container-full">
   
        <div className="container">

          {islodding &&  <div className=" text-center loaderbody">
                        <p className="loader-text"> loading....</p>
                        <div className="loader4">
                        </div>
                    </div>}
{!islodding &&
 <div className=" mt-5 card row mb-5 p-4 ">
            <div className="card-block">
                <div className="row">
                    <div className="col card-detail-image-block ">
                        <p  className="text-muted"><small ><Link to="/"><span style={{"color":"black"}}>back</span></Link></small></p>
                       <div className="carddetails">
                     
                       <img className=" carddetails-img  mb-3"  src={data.image}  alt="image"/>
                       {
                           data.eggless && <img className="veg-non-veg-type-img"  src="/asset/eggless.png"  alt="image"/>
                       }
                        {
                           !data.eggless && <img className="veg-non-veg-type-img"  src="/asset/nonveg.png"  alt="image"/>
                       }
                           </div>
                      
                        <div className="action m-5">
							<button className="add-to-cart btn btn-default" onClick={addtocart} type="button">add to cart</button>
							<button className="like btn btn-default" type="button"><span className="fa fa-heart">{data.likes}</span></button>
						</div>
                   
                    </div>
                    <div className="details description col-md-6">
                        <div className="row"> 
                        <h3 className="product-title">{data.name}</h3>
                        <small className="mb-2">by {data.owner.name} </small>
						<div className="rating">
                        <strong> Ratings : <StarRatings  rating={data.ratings}
                                                        starRatedColor="yellow"
                                                        numberOfStars={5}
                                                        name='rating'
                                                        starDimension="25px"
                                                        starSpacing="5px"
                                                        ></StarRatings></strong>
							
						</div>
                        <div className="review-no"><small>{data.reviews} <strong>reviews</strong></small></div>
                        {
                            data.description && 
                            <>
                             <p className="product-description"><strong>Discription : </strong><span> {data.description}</span></p>
                           
                            </>
                        }
                       
						<h4 className="price">current price: <span>Rs {data.price}</span></h4>
						
                         </div>
                       
                         
                      {
                            data.ingredients[0] &&
                            <>
                            <hr></hr>
                             <strong className="title">INGREDIENTS :</strong>
                          <div className = "ingriedent col-md-6">
                          <ul className="pl-3 .list-container">
                                
                                {data.ingredients.map((value,index)=>{
                                    return(
                                    <li key={index}>{value}</li>
                                    )   
                                })}
                                </ul>
                          </div>
                          

                            </>
                           
                        } 
                        <hr></hr>
                        {data.weight  && <p className="product-description"> <strong> Weight : </strong> <span>{data.weight} kg</span> </p>}
                        {data.type && <p className="product-description"> <strong> Occasion : </strong> <span>{data.type}</span> </p>}
                     {data.flavour &&    <p className="product-description"> <strong> Flavour : </strong> <span>{data.flavour}</span> </p>}
                      
						
					</div>
                 
                </div>
            </div>
      
    </div>}


   
        </div>
      
        </div>

    )
}


Carddetails =connect(function mapStateToProps(state,props){
 
    console.log("props cart" + JSON.stringify(state.cartReducer))
    return{
      message:state.cartReducer?.message,
      
    }
  })(Carddetails)
  export default withRouter(Carddetails)