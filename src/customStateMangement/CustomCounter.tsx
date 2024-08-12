import React, { useState } from "react";
import { useCountStore } from "./counterStore.ts";

const CustomCounter = () => {
  const [count, setCount] = useCountStore();

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CustomCounter;
