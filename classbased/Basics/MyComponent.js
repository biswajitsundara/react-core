import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log("Constrctor is called.");
  }
  render() {
    const { name, age } = this.props;
    console.log("Render is called.");
    return (
      <>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count+ 1 });
          }}
        >+</button>
        <h1>name: {name}</h1>
        <p>age: {this.props.age}</p>
      </>
    );
  }
}

export default MyComponent;
