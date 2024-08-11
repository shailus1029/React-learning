import { combineReducers } from "redux";

/* Importing counter reducer */
import counterReducer from "./countReducer"

// Combine Reducers
const rootReducer = combineReducers({
    counterReducer: counterReducer,
  // Add other reducers here if you have more
});

export default rootReducer;
