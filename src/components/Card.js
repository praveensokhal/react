import './component.css';
import {Link} from "react-router-dom"

let Card = (props) =>{
    if(props.data){
        return (
            <div>
    <div className="card border zoom m-5" style={{"width":" 20rem","height":"26rem","margin":"auto" }}>
        <Link to={'/cake/'+props.data.cakeid}><img className="card-img-top img-fluid rounded image-size" src={props.data.image} alt="Card image cap"/></Link>
        <div className="card-body">
        <p className="card-text">{props.data.name}</p>
        <p className="text " style = {{"color":"red"}}> Rs {props.data.price}</p>
            
     
        </div>
        </div> 
      

        </div>
    
            )
        }
        else{
            return null
        }
}
export default Card