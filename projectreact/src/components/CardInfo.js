// import React, { Component } from 'react';
import './CardInfo.css';
import logo from "./vk.jpg";

const CardInfo = ({firstname,lastname, index, editPerson, deletePerson}) => {
    return (    
    <div className="Card">
        <div className="upper-container">
        <div className="image-container">
            <img src={logo} alt="Logo" height="100px" width="100px" />
        </div>
        </div>
        <div className="lower-container">
            <h3>{firstname} {lastname}</h3>
            <button onClick = {() => deletePerson(index)}>Delete</button>
            <button onClick = {() => editPerson(index)}>Edit</button>
        </div>
    </div>
    );
}

export default CardInfo;