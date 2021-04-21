// import React from 'react'

// const Info = ({firstname,lastname}) => {
//     return (
//         <div>
//             <p>{firstname} {lastname}</p>
//         </div>
//     )
// }

// export default Info

import React, { Component } from 'react';

class Info extends Component {
    componentDidMount(){
        console.log("Component Mounted Successfully")
    }

    componentWillUnmount(){
        console.log("Component Unmount")
    }
    render() {
        return (
            <div>
                <p>{this.props.firstName} {this.props.lastName}</p>
            </div>
        );
    }
}

export default Info;