import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../actions/counterAction";

const Counter = () => {
  const counter = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{counter.count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
