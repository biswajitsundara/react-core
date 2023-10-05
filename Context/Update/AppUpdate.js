import { useEffect } from "react";
import UserContext from "./UserContext";
import { useState } from "react";
import Header from "./Header";
import Body from "./Body";

const AppUpdate = () => {
  const [userName, setUserName] = useState();

  //Authentication
  useEffect(() => {
    const data = {
      name: "Biswajit",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName }}>
      <div className="App">
        <h1>{"Hello"}</h1>
        <UserContext.Provider value={{ loggedInUser: "Priyanka" }}>
          <Header />
        </UserContext.Provider>
        <Body />
      </div>
    </UserContext.Provider>
  );
};

export default AppUpdate;
