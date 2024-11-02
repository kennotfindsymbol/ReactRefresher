import logo from "./logo.svg";
import "./App.css";
import React from "react";

import MyList from "./components/MyList";

function App() {
  const jsx1 =
    '<h2 className="my-h2" title="hovering me">Hover me with your cursor</h2>';
  const jsx2 =
    ' gets translated to React.createElement("h2", {title: "hovering me", className: "my-h2"}, "Hover me with your cursor");';
  const listItems = [
    { id: "li1", text: "😀 List Item 1 Items above are hard coded" },
    { id: "li2", text: "😃 List Item 2 But we are loaded dynamically" },
    {
      id: "li3",
      text: '😄 List Item 3 listItems is passed as a prop named "items" to MyList',
    },
    {
      id: "li4",
      text: "😁 List Item 4 Use {} to merge JSX code (<MyList />) with some JS expression (listItems)",
    },
  ];

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>JSX syntax</h1>
      <h2 className="my-h2" title="hovering me">
        Hover me with your cursor
      </h2>
      <p>{jsx1}</p>
      <p>{jsx2}</p>

      <h1>Component</h1>
      <p>
        use className instead of class for CSS to differ from class in
        JavaScript{" "}
      </p>
      <MyList items={listItems} />
    </div>
  );
}

export default App;
