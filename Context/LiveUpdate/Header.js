import { useContext } from "react";
import UserContext from "./UserContext";
import './Style.css'

const Header = () => {
  const data = useContext(UserContext);

  return (
    <div className="header">
      <h1>{`Hello ${data.loggedInUser}`}</h1>
    </div>
  );
};

export default Header;
