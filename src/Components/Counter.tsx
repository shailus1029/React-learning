import React, { useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../actions/counterAction";


/* Importing reducer */
import counterReducer from "../reducers/countReducer";

const Counter = () => {

  /* Method 1 */
  // const counter = useSelector((state) => state.counterReducer);
  // const dispatch = useDispatch();

  /* Method 2 */
  const [counter, dispatch] = useReducer(counterReducer, { count: 0 })
  
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
