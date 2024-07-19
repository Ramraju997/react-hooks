import React, { useState, useCallback } from 'react';

const UseCallbackHook = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  // Using useCallback to memoize the addItem function
  const addItem = useCallback(() => {
    setItems([...items, `Item ${items.length + 1}`]);
  }, [items]);

  return (
    <div>
      <h1>Use callback Hook</h1>
      <button onClick={incrementCount}>Increment Count: {count}</button>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseCallbackHook;
