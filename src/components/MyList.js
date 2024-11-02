import React from "react";

const MyList = () => {
  return (
    <ul className="my-list">
      <li>MyList is imported and used as a component with {"<MyList />"}</li>
      <li>
        Component name starts with capital letter to differ from normal HTML
        elements
      </li>
      <li>styles in App.css are still applied but you create a MyList.css and add styles there</li>
    </ul>
  );
};

export default MyList;
