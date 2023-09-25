import { useState } from "react";

const EventDemo = () => {
  const [count, setCount] = useState(0);
  const handleClick = (event) => {
    console.log("Button clicked");
    console.log(event);
    setCount(count + 1);
  };
  return (
    <>
      <p>{count}</p>
      <button onClick={(e)=>handleClick(e)}>Counter</button>
    </>
  );
};

export default EventDemo;
