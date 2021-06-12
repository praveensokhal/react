
import {Component} from "react";



class Order extends Component {

    constructor(){
        super()
        this.state = {
            name:'',
            phone:'',
            address:'',
            city:'',
            phone:'',
            
        
            };
        }
        
        validateForm=()=>{

        }
    
   render(){
    return(
        <>
         <div className=" card">
             <div className="form-title text-center"> <strong> Your Details</strong> </div>
             <form className="address-details"    id="form">
                 <div class="form-group">
                     <label for="address_name">Name</label>
                     <input type="text" class="form-control" id="address_name" name="name" value={this.state.name} aria-describedby="emailHelp" placeholder="Enter your name"/>
                   
                 </div>
                 <div class="form-group">
                     <label for="address_address">Address</label>
                     <input type="text" class="form-control" id="address_address" aria-describedby="addressHelp" value={this.state.address} placeholder="Enter your address"/>
                     
                 </div>
                 <div class="form-group">
                     <label for="address_phone">Phone</label>
                     <input type="text" class="form-control" id="address_phone" aria-describedby="phoneHelp" value={this.state.phone} placeholder="Enter your phone"/>
                     
                 </div>
                 <div class="form-group">
                     <label for="address_city">City</label>
                     <input type="text" class="form-control" id="address_city" aria-describedby="cityHelp" value={this.state.city} placeholder="Enter your city"/>
                     
                 </div>
                 <div class="form-group">
                     <label for="address_pincode">Pincode</label>
                     <input type="text" class="form-control" id="address_pincode" aria-describedby="pincodeHelp" value={this.state.pincode} placeholder="Enter your pincode"/>
                     
                 </div>
                 <div class="form-group">
                     <label for="address_total_price">Total amount</label>
                     <input type="text" class="form-control" id="address_total_price" aria-describedby="totalpriceHelp" value={this.state.amount} placeholder="Enter your price"/>
                     
                 </div>
                
                 <button type="btn" class="btn btn-primary" onClick={this.validateForm}>Place Order</button>
             </form>
         </div>
         
        </>
     )
   }
}

export default Order