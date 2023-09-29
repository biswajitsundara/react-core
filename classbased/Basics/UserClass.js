import React from "react";

class UserClass extends React.Component {

    constructor(props){
      super(props);
      console.log(props);

      this.state = {
        count: 0,
        count2: 1
      }
    }
  render() {

    const {name, location} = this.props;
    const {count, count2} = this.state;

    return (
      <div className="user-card">
        <h1>{this.state.count}</h1>
        <button onClick={()=>{this.setState({
            count: this.state.count + 1
        })}}>Count increase</button>
        <h2>Name: {name}</h2>
        <h3>Location: {this.props.location}</h3>
        <h3>Contact: 23987482742</h3>
      </div>
    );
  }
}

export default UserClass;