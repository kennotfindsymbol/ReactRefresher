import React, { useState } from "react";

import "./NewItem.css";

const ComponentName = (props) => {
  const [enteredText, setEnteredText] = useState("");

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  const addItemHandler = (event) => {
    event.preventDefault();
    const newItem = {
      id: Math.random().toString(),
      text: enteredText,
    };
    props.onAddItem(newItem);
    setEnteredText("");
  };

  return (
    <form className="new-item" onSubmit={addItemHandler}>
      <input type="text" value={enteredText} onInput={textChangeHandler} />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default ComponentName;
