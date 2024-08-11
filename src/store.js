import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index";

/* Creating redux store */
const store = configureStore({ reducer: rootReducer });

export default store;

// const store =  configureStore({ reducer: {
//     userReducer: userReducer,
//     productReducer: productReducer,
// } });