import React from "react";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        name: "dummy name",
        location: "default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/biswajitsundara");
    const info = await data.json();

    this.setState({
      userInfo: info,
    });
  }

  componentDidUpdate() {
    console.log("Component did update is called.");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component did update is called.");
  }

  render() {
    //debugger
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <>
        <img src={avatar_url} alt="profile_photo" />
        <h2>{name}</h2>
        <p>{location}</p>
      </>
    );
  }
}

export default Profile;
