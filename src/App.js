// import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Cardlist from './components/Cardlist';
import Coursel from './components/Coursel';
import Login from './components/Login';
import { useState } from 'react';

var details = {
  username :"",
  projectname : "Rangeela"
}

function App() {

var [login,setLogin] = useState();
// setLogin = true;
let myphone = ()=> {
  // alert("d appjs myphone");
  setLogin(true);
}
  return (
    <div >
     <Navbar isloggedin = {login} details = {details} >Kids</Navbar>
    <Coursel></Coursel>
    
 
    <div className="row pb-5 ">
      <div className="col-xl-6 ">
      <Signup></Signup>
      </div>
      <div className="col-xl-6 ">
      <Login  callme = {myphone}> </Login> 
      </div>
    </div>
     
    {/* <Cardlist></Cardlist> */}
   
   
    </div>
  );
}

export default App;
