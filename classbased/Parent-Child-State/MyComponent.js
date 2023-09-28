import React from "react";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor Called For" + this.props.name);
  }

  componentDidMount() {
    console.log("Component did mount called For " + this.props.name);
  }

  render() {
    console.log("Render Called For " + this.props.name);
    return (
      <>
        <h1>{this.state.count}</h1>
        <h2>{this.props.name}</h2>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count
        </button>
      </>
    );
  }
}

export default MyComponent;
