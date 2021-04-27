import './CardInfo.css';
import logo from "./vk.jpg";

import React, { Component } from 'react';

class CardInfo extends Component {
    componentDidMount() {
        console.log("Component Mounted Successfully")
    }
    componentWillUnmount() {
        console.log("Component Unmounted")
    }
    render() {
        return (
            <div className="Card">
                <div className="upper-container">
                    <div className="image-container">
                        <img src={logo} alt="Logo" height="100px" width="100px" />
                    </div>
                </div>
                <div className="lower-container">
                    Name: {this.props.firstname} {this.props.lastname}
                    <div>
                        Email: {this.props.email}
                    </div>
                    <div>
                        Designation: {this.props.designation}
                    </div>
                    <div>
                        Number: {this.props.number}
                    </div>
                    <button className="card-del" onClick = {() => this.props.deletePerson(this.props.index)}>Delete</button>
                    <button className="card-edit" onClick = {() => this.props.editPerson(this.props.index,
                        this.props.firstname,
                        this.props.lastname,
                        this.props.email,
                        this.props.designation,
                        this.props.number)}>Edit</button>
                </div>
            </div>
        );
    }
}

export default CardInfo;