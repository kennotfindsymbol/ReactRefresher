import logo from "./logo.svg";
import "./App.css";
import React from "react";

import MyList from "./components/MyList";

function App() {
  const jsx1 = '<h2 className="my-h2" title="hovering me">Hover me with your cursor</h2>';
  const jsx2 =
    ' gets translated to React.createElement("h2", {title: "hovering me", className: "my-h2"}, "Hover me with your cursor");';
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>JSX syntax</h1>
      <h2 className="my-h2" title="hovering me">
        Hover me with your cursor
      </h2>
      <p>{jsx1}</p>
      <p>{jsx2}</p>
      <p>use className instead of class for CSS to differ from class in JavaScript </p>
      <MyList />
    </div>
  );
}

export default App;
