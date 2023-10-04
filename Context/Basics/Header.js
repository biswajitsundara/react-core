import { useContext } from "react";
import UserContext from "./UserContext";

const Header = () => {
  const data = useContext(UserContext);

  return (
    <div>
      <h1>{`Hello ${data.loggedInUser}`}</h1>
    </div>
  );
};

export default Header;
