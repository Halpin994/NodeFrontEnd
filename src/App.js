import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import axios from "axios";
import {BaseURL, CreateAccount, LinkAccountNumGen} from './constants'
import Form from "./Components/first";
import Account from "./Components/sec";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accountNum: '',
            prize: 0
        }
    }

      handleClick = () => {
        var eMail = document.getElementById("eMail").value;
        var passWord = document.getElementById("passWord").value;
        if (eMail && passWord) {
            axios.post(BaseURL + CreateAccount,
                {
                    eMail: eMail,
                    passWord: passWord
                }).then((response) => {
                this.setState({
                    accountNum: response.data.accountNumber
                });
                document.getElementById("generateNum").click();
            });
        }else {
            document.getElementById("eMail").style.border = "2px solid red";
            document.getElementById("passWord").style.border = "2px solid red";

       }

       if(eMail != ""){
            document.getElementById("eMail").style.border = "1px solid #d4d4d4";

       }

       if(passWord != ""){
            document.getElementById("passWord").style.border = "1px solid #d4d4d4";
       }



    };
    render() {
        return (
            <Router>
                <div className="App">
                    <Link to={LinkAccountNumGen} id='generateNum'/>
                    <Route exact path="/Login" render={() => <Account/>}/>
                    <Route exact path="/CreateAccount" render={() => <Form theClick={this.handleClick}/>}/>
                </div>
            </Router>
        );
    }
}

export default App;
