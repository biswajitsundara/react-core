import "./Style.css";
import { useContext } from "react";
import UserContext from "./UserContext";

const SideBar = () => {
    const data = useContext(UserContext);

  return (
    <div className="sidebar">
      <h4>{`Profile`}</h4>
      <p>{data.loggedInUser}</p>
    </div>
  );
};

export default SideBar;
