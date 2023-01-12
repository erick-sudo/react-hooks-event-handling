import React from "react";

function MultiButton() {
  function handleClick(number) {
    alert(`Button ${number.target.textContent} was clicked`);
  }

  return (
    <div>
      <button onClick={handleClick}>Button 1</button>
      <button onClick={handleClick}>Button 2</button>
      <button onClick={handleClick}>Button 3</button>
    </div>
  );
}

export default MultiButton;
