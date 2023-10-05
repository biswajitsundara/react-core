import { useEffect } from "react";
import UserContext from "./UserContext";
import { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import SideBar from "./SideBar";

const AppUpdate = () => {
  const [userName, setUserName] = useState();

  //Authentication
  useEffect(() => {
    const data = {
      name: "Biswajit Sundara",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="App">
        <Header />
        <SideBar />
        <Body />
      </div>
    </UserContext.Provider>
  );
};

export default AppUpdate;
