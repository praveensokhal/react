// import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Cardlist from './components/Cardlist';
import Coursel from './components/Coursel';
import Login from './components/Login';
import { useState } from 'react';
import { BrowserRouter as Router ,Route, Switch} from "react-router-dom";
import Pagenotfound from './components/Pagenotfound';
import Home from "./components/Home"
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
      <Router>

     <Navbar isloggedin = {login} details = {details} >Kids</Navbar>
        <Switch>
          <Route exact path="/" component={Home}><Home></Home> </Route>

          <Route exact path="/login" component={ Login }></Route>

          <Route exact path="/signup" component={ Signup }>  <Signup/> </Route>
          <Route exact path="/*" component={Pagenotfound}> </Route>
          </Switch>
      </Router>

      
      
      {/* <Pagenotfound exact path="/*"> </Pagenotfound> */}
     {/* <Navbar isloggedin = {login} details = {details} >Kids</Navbar>
    <Coursel></Coursel>
    
    <div className="row pb-5 ">
      <div className="col-xl-6 ">
      <Signup></Signup>
      </div>
      <div className="col-xl-6 ">
      <Login  callme = {myphone}> </Login> 
      </div>
    </div>
     
    <Cardlist></Cardlist> */}
   
   
    </div>
  );
}

export default App;
