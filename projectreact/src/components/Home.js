import React, { Component } from 'react'
import CardInfo from './CardInfo';
// import Info from "./Info";
import Navbar from "./Navbar";

class Home extends Component {
    state = {
        title : "Welcome to react",
        firstname : "",
        lastname : "",
        userInput:"CREATE",
        newIndex :'',
        persons : []
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name] :e.target.value
        })
    }
    // CREATE USER
    onButtonClick = () => {
        if(this.state.userInput === 'CREATE'){
            let personsArray = [...this.state.persons];
            let newUser = {
                firstname : this.state.firstname,
                lastname : this.state.lastname
            }
        personsArray.push(newUser);
        this.setState({
            persons: personsArray,
            firstname : "",
            lastname : ""
        })
        }else{
            let personsArray = [...this.state.persons];
            // let updateUser ={...personsArray[this.state.index]};
            // personsArray[this.state.newIndex]=updateUser;
            // updateUser.firstname = this.state.firstname;
            // updateUser.lastname = this.state.lastname; 
            let updateUser = {
                firstname: this.state.firstname,
                lastname:this.state.lastname
            }
            personsArray[this.state.newIndex]=updateUser;
            this.setState({
                userInput : "CREATE",
                persons : personsArray,
                firstname : "",
                lastname : ""    
        })
        }
    }

    // DELETE USER
    deletePerson = (index) => {
        let personsArray = [...this.state.persons];
        personsArray.splice(index,1)
        this.setState({
            persons :personsArray
        })
    }

    // EDIT USER
    editPerson = (index) =>{
        let personsArray = [...this.state.persons];
        let updateUser = {...personsArray[index]};
        personsArray[index] = updateUser;
        this.setState({
            persons: personsArray,
            userInput:'UPDATE',
            firstname:updateUser.firstname,
            lastname:updateUser.lastname,
            newIndex:index
        })
    }

    // DELETE ALL USERS

    // delAllPerson = () => {
    //     let personsArray = [...this.state.persons];
    //     for (var i = personsArray.length; i >= 0; i--) 
    //         personsArray.splice(i, 1);
    //     console.log(personsArray.length);

    // }


    render() {
        return (
            <div>
                <Navbar />
                <input 
                type="text" 
                name="firstname" 
                value={this.state.firstname}
                placeholder="First Name"
                onChange={(e) => this.handleInput(e)}
                />
                <input 
                type="text" 
                name="lastname" 
                value={this.state.lastname}
                placeholder="Last Name"
                onChange={(e) => this.handleInput(e)}
                />
                <button onClick={() => this.onButtonClick()}>{this.state.userInput}</button>
                {/* <button onClick = {() => this.delAllPerson()}>Delete All</button> */}
                {
                    this.state.persons?.map((person,index) => (
                    <CardInfo
                    key={index}
                    firstname = {person.firstname}
                    lastname = {person.lastname}
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

export default Home
