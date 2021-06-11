import axios from "axios";

import { useEffect, useState } from 'react';

function Summary(){
  var [islodding,setLodding]=useState(true)
  var [data,setData] = useState([])
  useEffect(()=>{
    axios({method:"POST",url:process.env.REACT_APP_BASE_API_URL+"/cakecart",headers:{authtoken:localStorage.token},data:{JSON}}).then((response)=>{
     
   
      console.log("tanu 1",response.data.data)
      setData(response.data.data)
      // alert(JSON.stringify(dt))
      setLodding(false)
   

 },(error)=>{
   //setMessageDisplay(error.data)
  
 });

  },islodding)











    return(
        <>
            <div class="shopping-cart card">

<div class="title">
  Shopping Bag
</div>

{data.map((value,index)=>{
  return (
    <div class="item">
 

  <div class="image">
    <img src={data.image} alt="" />
  </div>

  <div class="description">
    <span>Common Projects</span>
    <span>Bball High</span>
    <span>White</span>
  </div>

  <div class="quantity">
    <button class="plus-btn" type="button" name="button">
      <img src="plus.svg" alt="" />
    </button>
    <input type="text" name="name" value="1"/>
    <button class="minus-btn" type="button" name="button">
      <img src="minus.svg" alt="" />
    </button>
  </div>

  <div class="total-price">$549</div>
</div>
  )
})}
</div>
        </>
    )
}

export default Summary