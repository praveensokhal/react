
import {Link, Router, withRouter} from "react-router-dom";
function  Pagenotfound(){
    return (
        <>
           <div className="page-not-found col-md-8 offset-md-2">
               <img src="https://tse4.mm.bing.net/th?id=OIP.8okaQtk13YwFNLd-eKS9YQHaDt&pid=Api&P=0&w=332&h=166" alt="OOPS"/>
           <h1>Page Not Found</h1> 
            <Link to="/"><button className="btn btn-primary">Home Page</button></Link>
           </div>
        </>
    )
}
Pagenotfound = withRouter(Pagenotfound)
export default Pagenotfound