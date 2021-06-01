
import data from './data';
import './component.css';

import Card from './Card.js';
let Cardlist = (props)=>{
  
    return(
        <div className="list-container" >
        <div className="card-groups"  >
    {data.map((each,index)=>{   
        return (    
                 <Card data={each} index ={index}></Card>
         )
 
     })}
  
      </div>
    
      </div>
    )
   
}
export default Cardlist