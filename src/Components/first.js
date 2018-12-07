import React, {Component} from 'react'
import './styles.css';

class Form extends Component {
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
                 <h1 style={{color:"yellow"}}>Create an Account</h1>
                 <p/>
         <div id="Login">

                <div className="form-group">
                        <input className='form-control' placeholder={"Email"} id='eMail' type='text' required/>

                        </div>

                <div className="form-group">

                        <input className='form-control' placeholder={"Password"} id='passWord' type='text' required/>

                        </div>

                <div className="form-group">

                        <input className='form-control' placeholder={"Re-Type Password"} id='rePassWord' type='text' required/>

                </div>

                    <button id="submitBtn" type="submit" className='btn btn-primary' onClick={this.props.theClick}>Submit</button>

                        </div>
						<p style={{color:"white"}}>Already have an account? <a href="/Login" style={{color:"yellow"}}>Login</a></p>
        </div>
                </div>
                </div>
                </div>
               </body>
        );
    }
}

export default Form;
