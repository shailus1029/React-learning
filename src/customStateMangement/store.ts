import reducer from "./countReducer.ts";

type Listener = () => void;

export const createStore = ({ initialState }) => {
  /* Defining store initial state */
  let state = initialState;

  /*
   - Defining subscribers for updating state
   - Subscribers is an array of listeners that our store will notify on every change of the store's state.
  */
  let subscribers: Listener[] = [];

  const notifyStateChanged = () => {
    subscribers.forEach((fn) => fn());
  };

  return {
    getState() {
      return state;
    },
    setState(newState) {
      state = newState;
      notifyStateChanged();
    },
    subscribe(fn: Listener) {
      subscribers.push(fn);
      return () => {
        subscribers = subscribers.filter((listener) => listener !== fn);
      };
    },
    dispatch(action) {
      state = reducer(state, action);
      notifyStateChanged();
    },
  };
};
