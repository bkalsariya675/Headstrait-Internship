import React, { Component } from 'react';
import Navbar from './Navbar';
import CardInfo from './CardInfo';
import logo from "./reactjs.jpg";
class Body extends Component {
    state = {
        name:"Virat",
        branch: "EXTC"
    }
    render() {
        return (
            <>
                <Navbar/>
                <div className="body-content">
                    <p className="para">
                    <img src={logo} alt="Logo" />
                    React has been designed from the start for gradual adoption, 
                    and you can use as little or as much React as you need. Whether
                    you want to get a taste of React, add some interactivity to a simple
                    HTML page, or start a complex React-powered app, the links in this
                    section will help you get started.
                    When starting a React project, a simple HTML page with script tags might
                    still be the best option. It only takes a minute to set up!
                    As your application grows, you might want to consider a more integrated
                    setup. There are several JavaScript toolchains we recommend for larger
                    applications. Each of them can work with little to no configuration 
                    and lets you take full advantage of the rich React ecosystem.
                    eact has been designed from the start for gradual adoption, 
                    and you can use as little or as much React as you need. Whether
                    you want to get a taste of React, add some interactivity to a simple
                    HTML page, or start a complex React-powered app, the links in this
                    section will help you get started.
                    When starting a React project, a simple HTML page with script tags might
                    still be the best option. It only takes a minute to set up!
                    As your application grows, you might want to consider a more integrated
                    setup. There are several JavaScript toolchains we recommend for larger
                    applications. Each of them can work with little to no configuration 
                    and lets you take full advantage of the rich React ecosystem.
                    When starting a React project, a simple HTML page with script tags might
                    still be the best option. It only takes a minute to set up!
                    When starting a React project, a simple HTML page with script tags might
                    still be the best option. It only takes a minute to set up!
                    </p>
                </div>
                <div className="display">
                    <CardInfo name="Bhavin" branch="COMPS"/>
                    <CardInfo name={this.state.name} branch={this.state.branch}/>
                    <CardInfo name="Rohit" branch="MECH"/>
                    <CardInfo name="Hardik" branch="CIVIL"/>
                    <CardInfo name="SKY" branch="IT"/>
                </div>
            </>
        );
    }
}
export default Body;