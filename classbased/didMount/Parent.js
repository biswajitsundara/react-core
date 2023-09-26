import React from "react";
import MyComponent from "./MyComponent";

class Parent extends React.Component {
  constructor() {
    super();
    console.log("Constructor Called From Parent");
  }

  componentDidMount() {
    console.log("Component did mount called from Parent");
  }

  render() {
    console.log("Render Called From Parent");
    return (
      <>
        <MyComponent name="Biswajit" />
        <MyComponent name="Priyanka" />
      </>
    );
  }
}

export default Parent;
