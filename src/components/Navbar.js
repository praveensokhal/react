import {useState} from "react";
import {Link, Router} from "react-router-dom";


let Navbar= (props)=>{
  let searchstring
  let searchem =""
  let  search = (event)=>{
    event.preventDefault()
    if(searchstring != null){
      searchem = searchstring;
      alert(searchstring);
      console.log("...",searchem)
    }
    else{
      alert("please enter");
    }
  }

  let getserchText = (event)=>{
    searchstring = event.target.value;
  }

  var [isloggedin,setUser] = useState(props.isloggedin);

 let logout = ()=>{
  setUser(false);
 }

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container">
          <div className="col-6">
              <Link to="/">
            <a className="navbar-brand" href="#">{props.details.projectname}</a>
              </Link> 
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
          </div>
          <div className="col-6">

          <div className="collapse navbar-collapse align-items-end" id="navbarSupportedContent">
              
              <form className="d-flex align-items-end">
                <input className="form-control me-2" onChange = {getserchText} type="search" placeholder="Search" aria-label="Search"/>
              
                <button className="search btn btn-outline-success" onClick={search} type="submit">Search</button>
              </form>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active pull-right" aria-current="page" href="#"> {props.details.username}</a>

                </li>
                </ul>
                {/* {!props.isloggedin && <Link to="/signup">
                  <button className="search btn btn-outline-success"  type="button">Singup</button>
                </Link> } */}
                {!props.isloggedin && <Link to="/login">
                  <button className="search btn btn-primary"  type="button">Login</button>
                </Link>}

                {props.isloggedin && <Link to="/login">
                  <button className="search btn btn-danger" onClick={logout} type="button">Logout</button>
                </Link> }
                
            </div>
          </div>
        
        </div>
      </nav>
    )
}

export default Navbar;