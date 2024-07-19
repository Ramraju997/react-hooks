import React, { useState, useMemo } from "react";

const UsememoHook = () => {
  const [counter, setCounter] = useState(0);
  let [NumberList, setNumberlist] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const calculateSum = useMemo(() => {
    console.log("calculated called");
    return NumberList.reduce((total, num) => total + num, 0);
  }, [NumberList]);
  return (
    <div>
      <h2>Use Memo hook</h2>
      <div>{counter}</div>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment Counter
      </button>
      <div>Sum {calculateSum}</div>
      <button
        onClick={() => {
          setNumberlist([...NumberList, 12]);
        }}
      >
        modify numberlist
      </button>
    </div>
  );
};

export default UsememoHook;
