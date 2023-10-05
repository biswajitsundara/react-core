import { useContext } from "react";
import UserContext from "./UserContext";

const Body = () => {
  const data = useContext(UserContext);
  return (
    <p>{`These are the action items for you user ${data.loggedInUser}`}</p>
  );
};

export default Body;
