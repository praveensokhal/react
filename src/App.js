// import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Login from './components/Login';
import { BrowserRouter as Router ,Route, Switch} from "react-router-dom";
import Pagenotfound from './components/Pagenotfound';
import Home from "./components/Home"
import Search from './components/Search';
import Carddetails from './components/Carddetails';
import Checkout from './components/Checkout';

var details = {
  username :"",
  projectname : "BakeHouse"
}

function App() {
  var [login,setLogin] = useState();
  // setLogin = true;
  let myphone = ()=> {
    // alert("d appjs myphone");
    setLogin(true);
  }
console.log("apii env",process.env)
  return (
    <div >
      <Router>

      <Navbar isloggedin = {login} details = {details} >Kids</Navbar>
       
        <Switch>
          <Route exact path="/" component={Home}><Home></Home> </Route>

          <Route exact path="/login" component={ (props)=><Login {...props} callme={myphone}/>}></Route>
          <Route exact path ="/search" component ={Search}></Route>
          <Route exact path = "/cake/:cakeid" component = {Carddetails}></Route>

          <Route  exact path="/checkout" component={Checkout} >  </Route>
          <Route exact path="/signup" component={ Signup }>  <Signup/> </Route>
          <Route exact path="/*" component={Pagenotfound}> <Pagenotfound></Pagenotfound> </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
