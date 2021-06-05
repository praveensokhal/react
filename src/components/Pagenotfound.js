import { withRouter } from "react-router"

function  Pagenotfound(){
    return (
        <>
            <h1>Page Not Found</h1> 
            <button className="btn btn-primary">Home Page</button>
        </>
    )
}
Pagenotfound = withRouter(Pagenotfound)
export default Pagenotfound