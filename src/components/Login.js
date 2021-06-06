import React, { Children, useEffect, useState } from "react";
import "./component.css";
import axios from "axios";
import { Link } from "react-router-dom";

const apiurl="https://apibyashu.herokuapp.com/api/login"
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
      axios({method:"POST",url:apiurl,data:{email:email,password:password}}).then((response)=>{
     
        if(response.data.message === "Invalid Credentials"){

          setMessageDisplay(response.data.message)
        }else{
          console.log(response.data)
          setMessageDisplay("login successfully")
          localStorage.setItem('name',response.data.name);
          localStorage.setItem('loggedin',true);
          localStorage.setItem('token',response.data.token)
          props.history.push("/")
        }
    
  
     },(error)=>{
       setMessageDisplay(error.data)
      
     });
   
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
export default Login