import {useState} from "react";
import {Link, Router, withRouter} from "react-router-dom";
import { connect } from "react-redux";
// import axios from "axios";

let Navbar= (props)=>{
  const [message,setMessageDisplay]=useState(props.AuthReducer?.message)
  let searchstring=""
  console.log("login",props)
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
    type:"LOGIN",
    payload:{
      token:undefined
    }
  })
  localStorage.clear();
  props.history.push("/login")
 }

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
        <div className="container">
          <div className="col-6">
              <Link to="/">
            <a className="navbar-brand" href="#">    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR35BYDTAQyRHRn4bT3iT1QgKLGJdxfnTatA&usqp=CAU" width="30" height="30" alt=""/> {props.details.projectname}</a>
          
            <alert>{message}</alert>

              </Link> 
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
                  <a className="nav-link active pull-right" aria-current="page" href="#"> {localStorage.name && localStorage.name}</a>

                </li>
                </ul>
                {localStorage.token && <Link to="/cart">
                <button className="search btn btn-primary " style={{"marginRight":"13px"}}><i class="fa fa-shopping-cart pl-0"></i></button>
                </Link> }
                
                {!localStorage.token && <Link to="/login">
                  <button className="search btn btn-primary"  type="button">Login</button>
                </Link>}

                {localStorage.token && 
                  <button className="search btn btn-danger" onClick={logout} type="button">Logout</button>
                 }
                
            </div>
          </div>
        
        </div>
      
      </nav>
    
    )
}


// Navbar = withRouter(Navbar)
Navbar =connect(function(state,props){

  if(state.AuthReducer?.message==true){
     this.setMessageDisplay(state.AuthReducer?.message)
     alert("props navbar" + JSON.stringify(state.AuthReducer))
  }else{
	  return {
		  isloading:state.AuthReducer?.isloading
	  }
  }
})(Navbar) 
export default  withRouter(Navbar); 