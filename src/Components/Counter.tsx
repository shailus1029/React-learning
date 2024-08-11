import React, { useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../actions/counterAction";
import { connect } from "react-redux";

/* Importing reducer */
import counterReducer from "../reducers/countReducer";

const Counter = (props) => {
  /* Method 1 */
  const counter = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  /* Method 2 */
  // const [counter, dispatch] = useReducer(counterReducer, { count: 0 });

  /* Using in Method 3 */
  // const { counter, increment } = props;

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

/* Method 3 */
// const mapStateToProps = (state) => ({
//   counter: state.counterReducer,
// });

// //Using function notation
// const mapDispatchToProps = (dispatch) => ({
//   increment: () => dispatch(increment()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
