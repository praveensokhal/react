import './component.css';

let Card = (props) =>{
    if(props.data){
        return (
            <div>
    <div className="card border zoom m-5" style={{"width":" 20rem","height":"30rem","margin":"auto" }}>
        <img className="card-img-top img-fluid rounded image-size" src={props.data.image} alt="Card image cap"/>
        <div className="card-body">
        <p className="card-text">{props.data.title}</p>
        <small className="text-muted " style = {{"color":"red"}}> Rs {props.data.price}</small>
              <span style ={{"text-align":"right", "padding":"15px"}}>size <small className=" text-muted ">  {props.data.Season}</small></span>
              <div>
              { props.data.category ? <span style ={{"text-align":"right"}}>Category : {props.data.category}</span> :'' }

              </div>
     
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