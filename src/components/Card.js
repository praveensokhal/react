import './component.css';

let Card = (props) =>{
    if(props.data){
        return (
        <div className="card" style={{"width":" 20rem","margin":"auto"}}>
        <img className="card-img-top image-size" src={props.data.image} alt="Card image cap"/>
        <div className="card-body">
        {/* <h5 className="card-title">Card title</h5> */}
        <p className="card-text">{props.data.title}</p>
        <small className="text-muted " style = {{"color":"red"}}> Rs {props.data.price}</small>
              <span style ={{"text-align":"right", "padding":"15px"}}>size <small className=" text-muted ">  {props.data.Season}</small></span>
              <div>
              { props.data.category ? <span style ={{"text-align":"right"}}>Category : {props.data.category}</span> :'' }

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