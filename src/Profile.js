import "./Profile.css"
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            nume: "",
            address: "",
            gender: "",
            birth: "",
            services: "",
        };
    }

    onClickShowInfo = () => {

        axios.get("http://localhost:8080/patient/" + localStorage.getItem("data"))
            .then(res => {
                console.log(res);
                const person = res.data;
                this.setState({ person: res.data });
            })

    }

    onClickUpdateAccount = () => {
        const { nume, address, gender, birth, services } = this.state;
        axios
            .put(
                "http://localhost:8080/patient/" + localStorage.getItem("data"),
                {
                    name: nume,
                    address: address,
                    gender: gender,
                    birthdate: birth,
                    medicalRecord: services
                }
            )
            .then((response) => {
                console.log(response);
                localStorage.setItem("data", response.data);
            });
    }

    onChange(e) {
        let files = e.target.files;
        console.warn("data file", files);
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
    }

    onClickLogOut(){
        localStorage.removeItem("data");
    }

    render() {

        const handleChange = (event) => {
            this.setState({ services: event.target.value });
        };

        console.log(this.state.person);
        const { id, nume, address, gender, birth, person } = this.state;

        return (
            <div className="Profile">
                
                <div>
                    <h1 className="title-Profile"> Profile </h1>
                    <div className="alldata">
                    <div className="data">
                        Nume: {person ? person.name : ""}
                    </div>
                    <div className="data">
                        Adresa: {person ? person.address : ""}
                    </div>
                    <div className="data">
                        Gen {person ? person.gender : ""}
                    </div>
                    <div className="data">
                        Zi de nastere: {person ? person.birthdate : ""}
                    </div>
                    <div className="data">
                        Servicii: {person ? person.medicalRecord : ""}
                    </div>
                    <div className="data">
                        Doctor: {person ? person.doctor : ""}
                    </div>
                    <div className="data">
                        Data programarii: {person ? person.programare : ""}
                    </div>
                    
                    
                </div>
                    <div className="containerForm">
                        <form name="myform">
                            <div className="row pt-5 mx-auto">
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <input value={nume} onChange={(e) => this.setState({ nume: e.target.value })} type="" className="form-control" placeholder="Nume / Name / Name" />
                                </div>
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <input value={address} onChange={(e) => this.setState({ address: e.target.value })} type="" className="form-control" placeholder="Adresa / Address / Addressen" />
                                </div>
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <input value={gender} onChange={(e) => this.setState({ gender: e.target.value })} type="" className="form-control" placeholder="Sex / Gender / Genter" />
                                </div>
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <input value={birth} onChange={(e) => this.setState({ birth: e.target.value })} type="" className="form-control" placeholder="Zi de nastere / Birthdate / Geburstag" />
                                </div>

                                <div className="col-8 form-group pt-2 mx-auto">
                                    <FormControl className="service-form">
                                        <InputLabel id="input-form">Services</InputLabel>
                                        <Select
                                            labelId="label-id"
                                            id="id-select"
                                            value={this.state.services}
                                            onChange={handleChange}>

                                            <MenuItem value={"Consultație primară"}>Consultație primară</MenuItem>
                                            <MenuItem value={"Tratamente profilactice"}>Tratamente profilactice</MenuItem>
                                            <MenuItem value={"Obturații / Tratamente carie"}>Obturații / Tratamente carie</MenuItem>
                                            <MenuItem value={"Tratamente endodontice"}>Tratamente endodontice</MenuItem>
                                            <MenuItem value={"Protetică"}>Protetică</MenuItem>
                                            <MenuItem value={"Chirurgie Dento-Alveolară"}>Chirurgie Dento-Alveolară</MenuItem>
                                            <MenuItem value={"Albire dentară"}>Albire dentară</MenuItem>
                                            <MenuItem value={"Pedodonție"}>Pedodonție</MenuItem>

                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="col-8 form-group pt-2 mx-auto">Aici incarca fisierul pdf (GDPR)
                                <input type="file" name="file" onChange={(e) => this.onChange} />

                                </div>
                                <div onClick={this.onClickUpdateAccount} className="col-8 pt-3 mx-auto">
                                    <Link exact to="/Profile">
                                        <input type="submit" className="btn btn-info" value="Update"></input>
                                    </Link>
                                </div>
                                <div className="col-8 pt-3 mx-auto">
                                    <Link exact to="/Appointment">
                                        <input type="submit" className="btn btn-info" value="Make appointment"></input>
                                    </Link>
                                </div>
                                <div onClick={this.onClickShowInfo} className="col-8 pt-3 mx-auto">
                                    <Link exact to="/Profile">
                                        <input type="submit" className="btn btn-info" value="Show info"></input>
                                    </Link>
                                </div>
                                <div  onClick={this.onClickLogOut} className="col-8 pt-3 mx-auto">
                                    <Link exact to="/LogIn">
                                        <input type="submit" className="btn btn-info" value="LogOut"></input>
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
