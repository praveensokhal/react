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
import './components/component.css'
import Footer from './components/Footer';
import Cart from './components/Cart';
import Orders from './components/Orders';

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
          <div className="full-container bg-light main-layout" style={{"backgroundColor":"#666"}}>
              <Switch>
             
                <Route exact path="/" component={Home}></Route>

                <Route exact path="/login" component={ (props)=><Login {...props} callme={myphone}/>}></Route>
                <Route exact path ="/search" component ={Search}></Route>
                <Route exact path = "/cake/:cakeid" component = {Carddetails}></Route>
                <Route  path="/cart" component= {Cart}></Route>
                <Route  path="/checkout" component= {Checkout}></Route>
                <Route exact path="/signup" component={ Signup }></Route>

                <Route exact path="/orders" component={Orders}></Route>
                <Route exact path="/*" component={Pagenotfound}></Route>
              </Switch>
          </div>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
