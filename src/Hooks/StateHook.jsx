import React from "react";
import { useState } from "react";
import { flushSync } from "react-dom";

const StateHook = () => {
  let [counter, setCounter] = useState(0);
  return (
    <div>
      <h2>Use State Hook</h2>
      <h2>{counter}</h2>
      <button
        onClick={() => {
          flushSync(() => {
            setCounter(counter + 5);
          });
          setTimeout(() => {
            setCounter(counter + 1);
          }, 3000);

          setCounter(counter + 2);
        }}
      >
        +3
      </button>
    </div>
  );
};

export default StateHook;
