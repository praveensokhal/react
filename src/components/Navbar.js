import {useState,useEffect} from "react";
import {Link, Router, withRouter} from "react-router-dom";
import { connect } from "react-redux";
// import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { UserDetails } from "../reduxstore/middlewares";

let Navbar= (props)=>{
  var [admin,setAdmin] = useState()
  var [isloading,setLoading]=useState(true)
  // const [message,setMessageDisplay]=useState(props.AuthReducer?.message)
  let searchstring=""
 console.log(props)
  useEffect(()=>{
  props.dispatch(UserDetails(localStorage.token))
  setLoading(false)
  },isloading);
  let  search = (event)=>{
   
    event.preventDefault()
    
    if(searchstring != null && searchstring !==""){
        var url = "/search?q="+searchstring
        props.history.push(url)
    }
  }

  let getserchText = (event)=>{
    searchstring = event.target.value;
  }
 
 let logout = ()=>{

  console.log("login",props)
  props.dispatch({
    type:"LOGOUT",
    payload:{
      token:undefined,
      isloggedin:false
    }
  })
  localStorage.clear();
  props.history.push("/login")
 }

    return(
     <>
     <div>
       <ToastContainer autoClose={1000} />
     </div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
        <div className="container">
          <div className="col-6">
              <Link to="/">
            <a className="navbar-brand" href="#"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR35BYDTAQyRHRn4bT3iT1QgKLGJdxfnTatA&usqp=CAU" width="30" height="30" alt=""/> {props.projectname}</a>
          
           

              </Link> 
              {props.User_role === "kaurswt21@gmail.com" || props.User_role === "ashu.lekhi0540@gmail.com" &&
              <>
               <div class="dropdown d-inline-block ">
               <button class="btn btn-primary dropdown-toggle" style={{"marginRight":"13px"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               <i class="fa fa-user-md" aria-hidden="true"></i> Admin
               </button>
               <div class="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
               {/* <a class="dropdown-item" style={{color:"white"}} href="/admin">Home</a> */}
                 <a class="dropdown-item" style={{color:"white"}} href="/admin/addcakes">Add New Cake</a>
                 <a class="dropdown-item" style={{color:"white"}} href="/admin/allproducts">view Cakes</a>
               </div>
             </div> 
              </> }
                
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
          </div>
          <div className="col-6">
      
                <div className="collapse navbar-collapse align-items-end" id="navbarSupportedContent">
               
              <form className="d-flex align-items-end">
                <input className="form-control me-2" onChange = {getserchText} type="search"  placeholder="Search" aria-label="Search"/>
              
                <button className="search btn btn-outline-success" onClick={search} type="submit">Search</button>
              </form>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                </li>
                </ul>
                {props.token && <Link to="/cart">
                <button className="search btn btn-primary " style={{"marginRight":"13px"}}><i class="fa fa-shopping-cart pl-0"></i></button>
                </Link> }
                
                {!props.token && <Link to="/login">
                  <button className="search btn btn-primary"  type="button">Login</button>
                </Link>}
                {props.token &&<Link to="/orders"><button className="search btn btn-primary "style={{"marginRight":"13px"}}><i class="fa fa-shopping-bag" aria-hidden="true"></i></button></Link>}
                {props.token && 
                  <button className="search btn btn-danger" type="button" onClick={logout} type="button">Logout</button>
                 }
                
            </div>
          </div>
        
        </div>
      
      </nav>
       
     </>
    
    )
}


// Navbar = withRouter(Navbar)
Navbar =connect(function(state,props){
  // console.log("props navbar " + JSON.stringify(state.AuthReducer))
	  return {
      token:state.AuthReducer?.token,
		  isloading:state.AuthReducer?.isloading,
      User_role:state.AuthReducer?.User_role

	  }
  
})(Navbar) 
export default  withRouter(Navbar); 
