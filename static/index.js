const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello React"
);

const parentDiv = React.createElement(
  "div",
  { id: "parent" },
  [ React.createElement(
    "div",
    { id: "child1" },
    [React.createElement("h1", {}, "Hello World"),
    React.createElement("h2", {}, "Hello Bharat")]
  ),
  React.createElement(
    "div",
    { id: "child2" },
    [React.createElement("h1", {}, "Hello World"),
    React.createElement("h2", {}, "Hello Bharat")]
  )]
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parentDiv);
// console.log(heading);


ReactDOM.render(parentDiv, document.getElementById("root"));