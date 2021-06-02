import React, { useEffect, useState } from "react";
import "./component.css";
import axios from "axios";

const apiurl="https://apibyashu.herokuapp.com/api/login"
let  Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messagedisplay, setMessageDisplay] = useState();
  const [fetchData, setFetch] = useState(false);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

// useEffect(()=>{
  
//       axios({method:"POST",url:apiurl,data:{email:email,password:password}}).then((response)=>
//         {
//           if(response.data.message === "Invalid Credentials"){
          
//             setMessageDisplay(response.data.message)
//           }else{
//             setMessageDisplay("login successfully")
//             props.callme();
//           }
//             console.log("response login ..",response.data);

//             },(error)=>{
              
//               setMessageDisplay(error.data)
              
//               console.log("error login ...",error.data);
//             });
  

//  },[]) 

    
  

 var onSubmithandler = (e) =>{ 
      e.preventDefault();
      axios({method:"POST",url:apiurl,data:{email:email,password:password}}).then((response)=>{
        if(response.data.message === "Invalid Credentials"){
        
          setMessageDisplnpay(response.data.message)
        }else{
          setMessageDisplay("login successfully")
          props.callme();
        }
    console.log("response login ..",response.data);
  
     },(error)=>{
      
       setMessageDisplay(error.data)
      
      console.log("error login ...",error.data);
     });
   
  }

  return (
    <div className="container Login ">
      <div className="row justify-content-center">
      <div className="card">
        <h2 className="card-title text-center">Login</h2>
          <div className="card-body  ">
   
          <form className="login form" onSubmit ={onSubmithandler} >
          <p style = {{"color":"red"}}>{messagedisplay}</p>
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
            <button className=" signup btn btn-primary" size="lg" type="submit"   disabled={!validateForm()}>
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