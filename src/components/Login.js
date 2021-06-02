import React, { useState } from "react";
import "./component.css";
import axios from "axios";

const apiurl="https://apibyashu.herokuapp.com/api/login"
let  Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {

    axios({method:"POST",url:apiurl,data:{email:"praveen.sokhal@neosoftmail.com",password:"123456"}}).then((response)=>{
 
       alert("successful");
       console.log("login",response.data);
      
       },(error)=>{});
    
  }

 var login = (e) =>{ 
      e.preventDefault();
      handleSubmit();
    //  alert("login pafe");
    props.callme();
  }

  return (
    <div className="container Login ">
      <div className="row justify-content-center">
      <div className="card">
        <h2 className="card-title text-center">Login</h2>
          <div className="card-body  ">
    
          <form className="login form" >
            <div className="login form-group" size="lg" controlId="email">
              <label>Email</label>
              <input className="login form-control" autoFocus type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter a EMAIL"/>
            </div>
            <div className="login form-group" size="lg" controlId="password" >
              <label>Password</label>
              <input className="login form-control"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}  placeholder="password"
              />
              {/* {props.detail} */}
            </div>
            <button className=" signup btn btn-primary" size="lg" type="submit" onClick={login} disabled={!validateForm()}>
              Login
            </button>
          </form>
  
    </div>
        </div>
      </div>
    </div>
  );
}
export default Login