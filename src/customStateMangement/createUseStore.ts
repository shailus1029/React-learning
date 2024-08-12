import { useSyncExternalStore } from "react";
import { createStore } from './store.ts'

export function createUseStore<T>(initialState: T) {
  const store = createStore({ initialState });
  return () =>
    [
      useSyncExternalStore(store.subscribe, store.getState),
      store.setState,
    ] as const;
}

/*

useSyncExternalStore allowes react to use any external store.
 
useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)

Here's a breakdown of its parameters:

1. subscribe receives a callback as a parameter, and subscribes the callback to the external store,
 so that it is called when the store state changes, it needs to return an unsubscribe function.

2. getSnapshot gets the current snapshot of the store,
this snapshot must be a cached value as react compares this value on each render using Object.is(getSnapshot(), oldSnapshot),
providing a new value each time will cause an infinite loop.

3. getServerSnapshot (optional) allows us to return a snapshot when rendering on the server,
which can be helpful in certain cases where the external store or subscription source can't run on the server or needs specific handling to run on the server.

*/
