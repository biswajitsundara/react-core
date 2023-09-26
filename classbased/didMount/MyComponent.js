import React from "react";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor Called For" + this.props.name);
  }

  componentDidMount() {
    console.log("Component did mount called For " + this.props.name);
  }

  render() {
    console.log("Render Called For "+ this.props.name);
    return <h1>Child</h1>;
  }
}

export default MyComponent;
