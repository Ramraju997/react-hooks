import React from "react";
import { useContext } from "react";
import { counterContext } from "../App";

const UseContextHook = () => {
  const { counter, increment } = useContext(counterContext);
  return (
    <div>
      <h2>UseContext</h2>
      <h3>Counter: {counter}</h3>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default UseContextHook;
