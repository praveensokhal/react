import {useState} from "react";
import {Link, Router, withRouter} from "react-router-dom";

// import axios from "axios";

const apiurl="https://apibyashu.herokuapp.com/api/logout"
let Navbar= (props)=>{
  console.log("local",localStorage)
  let searchstring=""
  let  search = (event)=>{
    event.preventDefault()
    
    if(searchstring != null){
      // alert(searchstring);
      if(searchstring !==""){
        var url = "/search?q="+searchstring
        props.history.push(url)
      }
    }
    else{
      alert("please enter");
    }
  }

  let getserchText = (event)=>{
    searchstring = event.target.value;
  }
  var isloggedin=  props.isloggedin
  var [isloggedin,setLogin] = useState(props.isloggedin);
  // isloggedin=  props.isloggedin
 let logout = ()=>{
  localStorage.clear();
  setLogin(false);
  props.history.push("/login")
 }

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
        <div className="container">
          <div className="col-6">
              <Link to="/">
            <a className="navbar-brand" href="#">    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR35BYDTAQyRHRn4bT3iT1QgKLGJdxfnTatA&usqp=CAU" width="30" height="30" alt=""/> {props.details.projectname}</a>
          


              </Link> 
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
          </div>
          <div className="col-6">

          <div className="collapse navbar-collapse align-items-end" id="navbarSupportedContent">
              
              <form className="d-flex align-items-end">
                <input className="form-control me-2" onChange = {getserchText} type="search"  placeholder="Search" aria-label="Search"/>
              
                <button className="search btn btn-outline-success" onClick={search} type="submit">Search</button>
              </form>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active pull-right" aria-current="page" href="#"> {localStorage.name && localStorage.name}</a>

                </li>
                </ul>
                {/* {!props.isloggedin && <Link to="/signup">
                  <button className="search btn btn-outline-success"  type="button">Singup</button>
                </Link> } */}
                {!localStorage.loggedin && <Link to="/login">
                  <button className="search btn btn-primary"  type="button">Login</button>
                </Link>}

                {localStorage.loggedin && 
                  <button className="search btn btn-danger" onClick={logout} type="button">Logout</button>
                 }
                
            </div>
          </div>
        
        </div>
      
      </nav>
    
    )
}


Navbar = withRouter(Navbar)
export default Navbar;