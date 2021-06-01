import './component.css';
import {Component} from "react";
// const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;
   
class Signup extends Component {
   
constructor(){
    super()
    this.state = {
        emailError:'',
        email:''
  
      };
    }

    EmailValidate = () => {
        if(this.state.email == '' || this.state.email == null){
          this.setState({
          emailError: "Email cannot be empty"
        });
        }
         if (!emailPattern.test(this.state.email) ) {
            
          this.setState({
            emailError: "Enter a valid email"
          });
        }
        if(emailPattern.test(this.state.email)){
            this.setState({
                emailError: ""
              });
        }      
      };
    
      changeEmail = (evt) => {
         
       this.EmailValidate();
          this.setState({
            email: evt.target.value
          });
     
     
      }
    
     render(){
         return(
            <div className="container signup ">
            <div className="row justify-content-center">
            <div className="col-md-5">
             <div className="card">
               <h2 className="card-title text-center">Register</h2>
                <div className="card-body py-md-4">
                 <form autocomplete="off" >
                    <div className="form-group">
                       <input type="text" className="signup form-control" id="name" placeholder="Name"/>
                  </div>
                  <div className="form-group">
                       <input type="text" className="signup form-control" name="email"  value={this.state.email} onChange={this.changeEmail} placeholder="Email"/>
                       <p class="help-block help-block-error">{this.state.emailError}</p>
                                      </div>
                                      
                                    
             <div className="form-group">
               <input type="password" className="signup form-control" id="password" placeholder="Password"/>
             </div>
             <div className="form-group">
                <input type="password" className="signup form-control" id="confirm-password" placeholder="confirm-password"/>
             </div>
             <div className="d-flex flex-row align-items-center justify-content-between">
            <button className=" signup btn btn-primary"  >Create Account</button>
                    </div>
                 </form>
               </div>
            </div>
          </div>
          </div>
          </div>
         )
     }
}

export default Signup
// $props.cake.discount ?? 'discount: ' {$props.cake.discount}