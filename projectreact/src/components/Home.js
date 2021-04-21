import React, { Component } from 'react'
import CardInfo from './CardInfo';
import Navbar from "./Navbar";
import { connect } from 'react-redux';
// import validator from 'validator';

import{
    createContact, deleteContact, editContact, deleteAllContact
} from '../actions/contactAction';

class Home extends Component {
    state = {
        title : "Welcome to react",
        firstname : "",
        lastname : "",
        email:"",
        designation:"",
        number:"",
        editMode : false,
        editIndex:""
    }
    componentDidUpdate(){
        console.log("Component Updated")
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name] :e.target.value
        })
    }

    // required = (value) => {
    //     if (!value.toString().trim().length) {
    //       // We can return string or jsx as the 'error' prop for the validated Component
    //         return 'require';
    //     }
    // }

    //     email = (value) => {
    //     if (!validator.isEmail(value)) {
    //         return `${value} is not a valid email.`
    //     }
    // };

    // CREATE USER
    onButtonClick = async () => {
        let payload = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            designation:this.state.designation,
            number: this.state.number
        }
        if(this.state.editMode === false){
            // console.log(payload)
            await this.props.createContact(payload);
            this.setState({
                firstname: "",
                lastname: "",
                email:"",
                designation:"",
                number:""
            })
        }else{
            let index= this.state.editIndex
            await this.props.editContact(payload, index);
            this.setState({
                editMode: false,
                editIndex:'',
                firstname:'',
                lastname:'',
                email:'',
                designation:'',
                number:''
            })
        }      
    }
    // DELETE USER
    deletePerson = async (index) => {
        // console.log(index)
        await this.props.deleteContact(index)
    }

    // EDIT USER
    editPerson = (index, firstname, lastname,email,designation,number) => {
        this.setState({
            editMode : true,
            firstname: firstname,
            lastname: lastname,
            email:email,
            designation:designation,
            number:number,
            editIndex: index
        })
    }

// CANCEL EDIT
    cancelEdit = () => {
        this.setState({
            firstname:'',
            lastname:'',
            email:'',
            designation:'',
            number:'',
            editMode:false
        })
    }

    delAll = () => {
        this.props.deleteAllContact()
    }

    render() {
        return (
            <div className="all-comp">
            <Navbar />
            <div className="form-cls">
                <input 
                type="text" 
                name="firstname" 
                value={this.state.firstname}
                placeholder=" First Name"
                onChange={(e) => this.handleInput(e)}
                // validations={[required]}
                // required 
                />
                <input 
                type="text" 
                name="lastname" 
                value={this.state.lastname}
                placeholder=" Last Name"
                onChange={(e) => this.handleInput(e)}
                />
                <input 
                type="text" 
                name="email" 
                value={this.state.email}
                placeholder=" example@gmail.com"
                onChange={(e) => this.handleInput(e)}
                // validations={[required, email]}
                />
                <input 
                type="text" 
                name="designation" 
                value={this.state.designation}
                placeholder=" Designation"
                onChange={(e) => this.handleInput(e)}
                />
                <input 
                type="phone" 
                name="number" 
                value={this.state.number}
                placeholder=" Number"
                onChange={(e) => this.handleInput(e)}
                />
                <button className="btn" onClick={() => this.onButtonClick()}>{this.state.editMode? "Update": "Create"}</button>
                <button className="edit" onClick={() => this.cancelEdit()}>Cancel</button>
                <button className="del" onClick={() => this.delAll()}>Delete All</button>
                </div>
                {
                    this.props.contacts?.map((person,index) => (
                    <CardInfo
                    key={index}
                    firstname = {person.firstname}
                    lastname = {person.lastname}
                    email={person.email}
                    designation={person.designation}
                    number={person.number}
                    index = {index}
                    deletePerson={this.deletePerson}
                    editPerson={this.editPerson}
                    />
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    contacts : state.contactReducer.contacts,
    success : state.contactReducer.success,
    error : state.contactReducer.error
})

export default connect(
    mapStateToProps,
    {
        createContact,
        deleteContact,
        editContact,
        deleteAllContact
    }
)(Home);
