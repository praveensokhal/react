
import Cart from "./Cart";
import {Link} from "react-router-dom"

function Summary(props){
    
 


  return (

    <>
    <Cart show={false} click={props.click}></Cart>
  
   </>
  )
}




export default Summary