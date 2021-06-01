// import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Cardlist from './components/Cardlist';
import Coursel from './components/Coursel';
import Login from './components/Login';
import { useState } from 'react';

var details = {
  username :"praveen Sokhal",
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
    <Login callme = {myphone}> </Login>
    <Cardlist></Cardlist>
      <Signup></Signup>
   
    </div>
  );
}

export default App;
