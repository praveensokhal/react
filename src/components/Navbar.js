import {useState} from "react";


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

  var [isloggedin,setUser] = useState(localStorage.isloggedin);

 let logout = ()=>{
  setUser(false);
 }

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.details.projectname}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Men</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Women</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">{props.children}</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Home Decor</a></li>
                  <li><a className="dropdown-item" href="#">furniture</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#"> </a></li>
                </ul>
              </li>
            
            </ul>
            <form className="d-flex align-items-end">
              <input className="form-control me-2" onChange = {getserchText} type="search" placeholder="Search" aria-label="Search"/>
           
              <button className="search btn btn-outline-success" onClick={search} type="submit">Search</button>
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active pull-right" aria-current="page" href="#"> {props.details.username}</a>

             </li>
              </ul>
              {!props.isloggedin && <button className="search btn btn-outline-success"  type="button">Login</button>}

             {props.isloggedin && <button className="search btn btn-outline-danger"  onClick={logout} type="button">Logout</button>}
              
          </div>
        </div>
      </nav>
    )
}

export default Navbar;