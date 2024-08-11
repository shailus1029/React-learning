/* Initial state of reducer */
const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "INCREMENT_BY_AMOUNT":
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
};

export default counterReducer;
