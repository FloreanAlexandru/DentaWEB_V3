import "./LogIn.css"
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          text: "",
          password: "",
          uuid: '' 
        };
      }

onClickLogIn=()=>{
    const {text,password} = this.state;
  
    axios
      .post(
        "http://localhost:8080/account",
        {
          username: text,
          password: password,
        }
      )
      .then((response) => {
        console.log(response);
        if(response.status==200){
            localStorage.setItem("data", response.data.uuid);
        }else if(response.status==400){
            return
        }
        })

       .catch(err => {
           if(err.response){
            console.log("WARNING",err.response);
           }else if (err.request){

           }else{

           }
       })
}

    render() {
        const {text,password,uuid} = this.state;
        console.log("Test",this.state);
        console.log(this.props)
        return (
            
            <div className="LogIn">

                <div>
                    <h1 className="title-logIn"> Log In </h1>

                    <div className="containerForm">
                        <form name="myform">
                            <div className="row pt-5 mx-auto">
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <input value={text} onChange={(e)=>this.setState({text:e.target.value})} type="text" className="form-control" placeholder="Nume de utilizator / Username / Usernamen" />
                                </div>
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <input value={password} onChange={(e)=>this.setState({password:e.target.value})} type="password" className="form-control" placeholder="Parola / Password / Parollen" name />
                                </div>
                                <div onClick={this.onClickLogIn} className="col-8 pt-3 mx-auto">
                                    <Link exact to="/Profile">
                                        <input type="submit" className="btn btn-info" value="Log In"></input>
                                    </Link>
                                </div>
                                <div className="col-8 pt-3 mx-auto">
                                    <Link exact to="/Register">
                                        <input type="submit" className="btn btn-info" value="Register"></input>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}