import React from "react";

const MyList = (props) => {
  console.log(props.items);

  return (
    <ul className="my-list">
      <li>MyList is imported and used as a component with {"<MyList />"}</li>
      <li>
        Component name starts with capital letter to differ from normal HTML
        elements
      </li>
      <li>
        styles in App.css are still applied but you can create a MyList.css and add
        styles there
      </li>
      <li>
        props.items is passed to this component, press F12 to open DevTools if
        you are using Chrome
      </li>
      <li>
        go to the Console panel and you see {"▶ (4) [{…}, {…}, {…}, {…}]"}
      </li>
      <li>click the ▶ to expand</li>
      <li>Below are elements rendered dynamically with {"{props.items.map((item) => {return <li key={item.id}>{item.text}</li>;})}"}</li>
      {props.items.map((item) => {
        return <li key={item.id}>{item.text}</li>;
      })}
    </ul>
  );
};

export default MyList;
