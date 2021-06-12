import React, { Children, useEffect, useState } from "react";
import "./component.css";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import AuthReducer from "../reduxstore/AuthReducer";
import {loginmiddleware} from "../reduxstore/middlewares"
let  Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messagedisplay, setMessageDisplay] = useState();
  const [fetchData, setFetch] = useState(false);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }


 var onSubmithandler = (e) =>{ 
      e.preventDefault();
      var data= {email:email,password:password}
      // console.log("dataaaa", this.login)
     props.dispatch(loginmiddleware(data))
   
  }

  return (
    <div className="container  ">
      <div className="row justify-content-center ">
      <div className="card login mt-5">
        <h2 className="card-title text-center">Login</h2>
          <div className="card-body  ">
   
          <form className=" login" onSubmit ={onSubmithandler} >
          <p style = {{"color":"red"}}>{messagedisplay}</p>
            <div className="login form-group" size="lg" controlId="email">
              <label>Email</label>
              <input className="login form-control" autoFocus type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email address"/>
            </div>
            <div className="login form-group" size="lg" controlId="password" >
              <label>Password</label>
              <input className="login form-control"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}  placeholder="Enter your password"
              />
              {/* {props.detail} */}
            </div>
            <button className=" signup btn btn-primary" size="lg" type="submit"     disabled={!validateForm()}>
              Login
            </button>
            <div>
            <label> new user  ?  <Link to="/signup">
             <a >create account</a></Link></label>
             </div>
          </form>
  
    </div>
        </div>
      </div>
    </div>
  );
}
Login =connect(function(state,props){
	// alert("props lognnn" + JSON.stringify(state.AuthReducer))
  if(state.AuthReducer?.isloggedin==true){
      props.history.push("/")
  }else{
	  return {
		  isloading:state.AuthReducer?.isloading
	  }
  }
})(Login) 
// i passed login to withRouter it return me Login with some addional things
// then i exported modified Login
export default withRouter(Login)
//connect add  a props in login 