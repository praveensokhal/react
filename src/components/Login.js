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
        console.log("loginnnnnprops",props)
        if(response.data.message === "Invalid Credentials"){
        console.log("loginnnnnprops",props)
          setMessageDisplay(response.data.message)
        }else{
          setMessageDisplay("login successfully")
          // props.callme();
          props.history.push({
            pathname: '/',
            // search: '?query=abc',
            state: { details : "r"
              
            }
          })
         
        }
    console.log("response login ..",response.data);
  
     },(error)=>{
      
       setMessageDisplay(error.data)
      
      console.log("error login ...",error.data);
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