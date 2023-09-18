// ParentComponent.js
import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const [message, setMessage] = useState("Hello from Parent");

  const changeMessage = () => {
    setMessage("Updated Message from Parent");
  };

  return (
    <div>
      <p>{message}</p>
      <button onClick={changeMessage}>Change Message</button>
      <ChildComponent message={message} />
    </div>
  );
}

export default ParentComponent;
