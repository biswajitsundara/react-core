import React, { Component } from "react";
import UserContext from "../Basics/UserContext";

class Contactus extends React.Component {
  render() {
    return (
      <div>
        <h1>{"About us"}</h1>
        <UserContext.Consumer>
            {/* {(data)=> console.log(data)} */}
            {({loggedInUser})=> <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default Contactus;
