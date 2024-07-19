import React, { useRef } from "react";

const UseRefHook = () => {
  let inputFocus = useRef(null);
  const handleInputFocus = () => {
    inputFocus.current.focus();
  };

  return (
    <div>
      <h2>UseRef Hook</h2>
      <input type="text" ref={inputFocus}></input>
      <button onClick={handleInputFocus}>Focus</button>
    </div>
  );
};

export default UseRefHook;
