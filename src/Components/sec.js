import React, {Component} from 'react';
import Win from './win.js';
import Loss from './loss.js';
import axios from "axios";
import {BaseURL, CreateAccount, red} from "../constants";
import './styles.css';



class Account extends Component {

  constructor(props) {
      super(props);

      this.state = {
          accountNum: '',
          prize: 0
      }
  }

  render() {
      return (



      <body id="LoginForm">



            <div className="container">

            <h1 className="form-heading"></h1>
          <div className="login-form">
          <div className="main-div">
              <div className="panel">
               <h1 style={{color:"yellow"}}>Login</h1>
               <p/>
       <div id="Login">

              <div className="form-group">
                      <input className='form-control' placeholder={"Email"} id='eMail' type='text' required/>

      </div>

              <div className="form-group">

                      <input className='form-control' placeholder={"Password"} id='passWord' type='text' required/>

              </div>

                  <button id="submitBtn" type="submit" className='btn btn-primary' onClick={this.props.theClick}>Login</button>

                      </div>
          <a href="/CreateAccount" style={{color:"yellow"}}>Create an Account</a>
      </div>
              </div>
              </div>
              </div>
             </body>
      );
  }
}

export default Account;
