import './component.css';
import {Component} from "react";
import React, { useState } from "react";

import axios from "axios";
// const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;

const apiurl="https://apibyashu.herokuapp.com/api/register"
class Signup extends Component {

constructor(){
    super()
    this.state = {
        emailError:'',
        email:'',
        name:'',
        password:'',
  
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
            email: evt.target.value,
            
          });
     
     
      }
       validateForm() {
       return this.state.email !='' && this.state.password !='' && this.state.name !='';
      }
      formsubmit(event){
      
          event.preventDefault();
          axios({method:"POST",url:apiurl,data:{name:"praveen",email:"praveen.sokhal@neosoftmail.com",password:"123456"}}).then((response)=>{
          // console.log("sasa", response.data);
          return alert("successful");
          //      console.log("apiii.......",response.data)
           },(error)=>{});
        
      }
      setPassword = (evt)=>{
        this.setState({
          password: evt.target.value,
          
        });
      }
      setName = (evt)=>{
        this.setState({
          name: evt.target.value,
          
        });
      }
     render(){
         return(
            <div className="container signup ">
              <div className="row justify-content-center">
                <div className="col-md-5">
                  <div className="card">
                  <h2 className="card-title text-center">Register</h2>
                    <div className="card-body  ">
                    <form autocomplete="off"  onSubmit={this.formsubmit} >
                        <div className="form-group">
                          <input type="text" className="signup form-control" id="name" onChange={this.setName} value={this.state.name}  placeholder="Name"/>
                      </div>
                      <div className="form-group">
                          <input type="text" className="signup form-control" name="email"  value={this.state.email} onChange={this.changeEmail} placeholder="Email"/>
                          <p class="help-block help-block-error">{this.state.emailError}</p>
                                          </div>
                        <div className="form-group">
                          <input type="password" className="signup form-control" id="password" onChange={this.setPassword} value={this.state.password} placeholder="Password"/>
                        </div>
                      
                        <div className="d-flex flex-row align-items-center justify-content-between">
                        <button className=" signup btn btn-primary" disabled={!this.validateForm()}>Create Account</button>
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