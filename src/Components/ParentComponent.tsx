import React, { useState, useCallback } from "react";
import List from "./List.tsx";

const ParentComponent = () => {
  const [state, setState] = useState(false);
  const [dep] = useState(false);
  
  console.log("Parent Component redered");

  const handler = useCallback(
    (event) => {
      console.log("You clicked ", event.currentTarget);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dep]
  );

  const statehanddler = () => {
    setState(!state);
  };
  return (
    <>
      <button onClick={statehanddler}>Change State Of Parent Component</button>
      <List handler={handler} />
    </>
  );
};

export default ParentComponent;
