
import {Component} from "react";
import { withRouter } from "react-router-dom";
// import { toast } from "react-toastify";



class Address extends Component {

    constructor(props){
        super(props)
        this.state = {
            name:'',
            phone:'',
            address:'',
           city:'',
            pincode:'',
            FormError:'',
           total_price:localStorage.token,
         
        
            };
        }
        
        handleInputChange=(e)=>{
           
            this.setState({[e.target.name]: e.target.value },() => { this.validateForm(e.target.name,e.target.value) })
        }
        handleInputSubmit=(e)=>{
            e.preventDefault();
            this.props.click(this.state) ; 
            console.log("address Props",this.props);
            this.props.history.push('/checkout/confirm');
          
        }
           
        validateForm=(fieldName,value)=>{
            console.log("address",this.props);
            return this.state.name !=="" && this.state.phone !==""  && this.state.city !==""  && this.state.address !==""  && this.state.total_price !==""  && this.state.phone !==""  ;
        }
        
   render(){
    // console.log('props are',this.state)
    return(
        <>
        
         <div className=" card">
             <div className="form-title text-center"> <strong> Your Details</strong> </div>
             <form className="address-details" onSubmit={this.handleInputSubmit}   id="form">
                 <div class="form-group">
                     <label for="address_name">Name</label>
                     <input type="text" class="form-control" id="address_name" name="name" value={this.state.name} onChange={this.handleInputChange} aria-describedby="emailHelp" placeholder="Enter your name"/>
                   
                 </div>
                 <div class="form-group">
                     <label for="address_address">Address</label>
                     <input type="text" class="form-control" id="address_address"  name="address"  onChange={this.handleInputChange} aria-describedby="addressHelp" value={this.state.address} placeholder="Enter your address"/>
                     
                 </div>
                 <div class="form-group">
                     <label for="address_phone">Phone</label>
                     <input type="text" class="form-control" id="address_phone" name="phone"  onChange={this.handleInputChange} aria-describedby="phoneHelp" value={this.state.phone} placeholder="Enter your phone"/>
                     
                 </div>
                 <div class="form-group">
                     <label for="address_city">City</label>
                     <input type="text" class="form-control" id="address_city"  name = "city"  onChange={this.handleInputChange} aria-describedby="cityHelp" value={this.state.city} placeholder="Enter your city"/>
                     
                 </div>
                 <div class="form-group">
                     <label for="address_pincode">Pincode</label>
                     <input type="text" class="form-control" id="address_pincode" name="pincode" onChange={this.handleInputChange}  aria-describedby="pincodeHelp" value={this.state.pincode} placeholder="Enter your pincode"/>
                     
                 </div>
                 <div class="form-group">
                     <label for="address_total_price">Total amount</label>
                     <input type="text" class="form-control" id="address_total_price" name="total_price" onChange={this.handleInputChange}  aria-describedby="totalpriceHelp" value={localStorage.total_price} placeholder="Enter your price"/>
                     
                 </div>
                
                 <button type="btn" class="btn btn-primary" disabled={!this.validateForm()}>Place Order</button>
             </form>
         </div>
         
        </>
     )
   }
}

export default withRouter(Address)