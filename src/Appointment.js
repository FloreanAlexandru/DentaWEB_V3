import "./Appointment.css"
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Calendar from 'react-calendar';

export default class Appointment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date1: "",
            medic: "",
        };
    }
    
    onChange = date1 => this.setState({date1})

    onClickAppointment =() =>{
        const{medic,date1} = this.state;
        axios
            .put(
                "http://localhost:8080/patient/app?patientId="+localStorage.getItem("data")+"&doctor="+medic+"&programare="+date1,{
                    doctor: medic,
                    programare: date1
                }
            )
            .then((response)=> {
                console.log(response);
            });
    }
    render() {
        const handleChange = (event) => {
            this.setState({ medic: event.target.value });
        };

        return (

            <div className="Appointment">

                <div>
                    <h1 className="title-app"> Appointment </h1>
                    
                    <div>
                        <Calendar
                        onChange={this.onChange}
                        value={this.state.date1}
                        />
                    </div>

                    <div className="containerForm1">
                        <form ame="myform">
                            <div className="col-8 form-group pt-2 mx-auto">
                                <FormControl className="service-form">
                                    <InputLabel id="input-form">Medici</InputLabel>
                                    <Select
                                        labelId="label-id"
                                        id="id-select"
                                        value={this.state.medic}
                                        onChange={handleChange}>

                                        <MenuItem value={"Dr. Mircea Radu"}>Dr. Mircea Radu</MenuItem>
                                        <MenuItem value={"Dr. Constatin Ciuce"}>Dr. Constatin Ciuce</MenuItem>
                                        <MenuItem value={"Dr. Cristina Zaciu"}>Dr. Cristina Zaciu</MenuItem>
                                        <MenuItem value={"Dr. Georgiana Ilici"}>Dr. Georgiana Ilici</MenuItem>

                                    </Select>
                                </FormControl>
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <div className="col-8 pt-5 ">
                                    <Link exact to="/Profile">
                                        <input type="submit" className="btn btn-info" value="Back to profile"></input>
                                    </Link>
                                </div>
                            </div>

                            <div onClick={this.onClickAppointment} className="col-8 form-group pt-2 mx-auto">
                                <div className="col-8 pt-1">
                                    <Link exact to="/Appointment">
                                        <input type="submit" className="btn btn-info" value="Make appointment"></input>
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