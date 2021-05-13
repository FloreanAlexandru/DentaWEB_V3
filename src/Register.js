import "./Register.css"
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";

export default class Register extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			nume:"",
			address:"",
			gender:"",
			birth:"",
			services:"",
			username:"",
			password:""
		};
	}
	
	onClickRegister=()=>{
		const {nume,address,gender,birth,services,username,password} = this.state;
		axios
		.post(
			"http://localhost:8080/patient/",
			{
				name: nume,
				address: address,
				gender: gender,
				birthdate: birth,
				medicalRecord: services,
				username: username,
				password: password,
			}
		)
		.then((response)=> {
		console.log(response);
		localStorage.setItem("data",response.data);
		});
	}

    render(){
    const {nume,address,gender,birth,services,username,password} = this.state;
	return (
    <div className="Register">
    
    <div>
        <h1 className="title-Register"> Register </h1>
        
        <div className="containerForm">
            <form name="myform">
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input value={nume} onChange={(e)=>this.setState({nume:e.target.value})} type="" className="form-control" placeholder="Nume / Name / Name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input value={address} onChange={(e)=>this.setState({address:e.target.value})} type="" className="form-control" placeholder="Adresa / Address / Addressen"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input value={gender} onChange={(e)=>this.setState({gender:e.target.value})} type="" className="form-control" placeholder="Sex / Gender / Genter"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input value={birth} onChange={(e)=>this.setState({birth:e.target.value})} type="" className="form-control" placeholder="Zi de nastere / Birthdate / Geburstag"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input value={services} onChange={(e)=>this.setState({services:e.target.value})} type="" className="form-control" placeholder="Servicii / Services / Servicen"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input value={username} onChange={(e)=>this.setState({username:e.target.value})} type="" className="form-control" placeholder="Nume utilizator / Username / Usernamen"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input value={password} onChange={(e)=>this.setState({password:e.target.value})} type="password" className="form-control" placeholder="Parola / Password / Passworten"/>
                        </div>
                        <div onClick={this.onClickRegister} className="col-8 pt-3 mx-auto">
                        <Link exact to="/Profile">
                            <input type="submit" className="btn btn-info" value="Register"></input>
                        </Link>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <Link exact to="/LogIn">
                                <input type="submit" className="btn btn-info" value="Back to Log In"></input>
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
