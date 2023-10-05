import { useContext } from "react";
import UserContext from "./UserContext";
import "./Style.css";

const Body = () => {

  const {setUserName, loggedInUser} = useContext(UserContext);
  return (
    <div className="Body">
      <p>{`These are the action items for you ${loggedInUser}`}</p>
      <label htmlFor="">{"Username"}</label>
      <input type="text" value={loggedInUser} onChange={(e)=> setUserName(e.target.value)}/>
    </div>
  );
};

export default Body;
