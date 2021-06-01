import React, { useState } from "react";
import "./component.css";

let  Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

 var login = (e) =>{ 
      e.preventDefault();
    //  alert("login pafe");
    props.callme();
  }

  return (
    <div className="Login">
      <form className="login form" onSubmit={handleSubmit}>
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
        <button block size="lg" type="submit" onClick={login} disabled={!validateForm()}>
          Login
        </button>
      </form>
    </div>
  );
}
export default Login