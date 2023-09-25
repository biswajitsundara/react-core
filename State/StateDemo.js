import { useState } from "react";

const StateDemo = () => {
  let fruitsdata = [
    { name: "Apple", symbol: "🍏" },
    { name: "Mango", symbol: "🥭" },
    { name: "Banana", symbol: "🍌" },
  ];

  const [fruits, setFruits] = useState(fruitsdata);

  const filterHandler = () => {
    const filteredFruits = fruits.filter((fruit) => fruit.name === "Banana");
    setFruits(filteredFruits);
    console.log(filteredFruits);
  };
  return (
    <div>
      {fruits.map((fruit, index) => (
        <h1 key={index}>{fruit.symbol}</h1>
      ))}
      <button onClick={filterHandler}>Only Banana</button>
    </div>
  );
};

export default StateDemo;
