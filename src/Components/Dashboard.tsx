import React from "react";
import ParentComponent from "./ParentComponent.tsx";

const Dashboard = () => {
  return (
    <div
      style={{
        width: "90%",
        height: "50vh",
        backgroundColor: "antiquewhite",
        margin: "5%",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'column'
      }}
    >
      <ParentComponent />
    </div>
  );
};

export default Dashboard;
