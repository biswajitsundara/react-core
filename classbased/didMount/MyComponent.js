import React from "react";

class MyComponent extends React.Component {
  constructor() {
    super();
    console.log("Constructor Called From Child");
  }

  componentDidMount() {
    console.log("Component did mount called From Child");
  }

  render() {
    console.log("Render Called From Child");
    return <h1>Child</h1>;
  }
}

export default MyComponent;
