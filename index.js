import React from "react";
import ReactDOM from "react-dom/client";
import Styledemo from "./styles/styledemo"
import MyComponent from './styles/MyComponent'
import StateDemo from './State/StateDemo'
import UserApp from "./classbased/UserApp";
import ExecApp from "./classbased/didMount/ExcApp";

//React Element
// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello React"
// );

const Title = () => {
  return <h1>Title</h1>;
};

// React Component
const HeadingComponent = () => {
  return (
    <div>
      <Title />
      <h1>Hello World</h1>;
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ExecApp />);
