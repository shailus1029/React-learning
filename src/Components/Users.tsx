import React from "react";
import { useNavigate } from "react-router-dom";


const UserList = () => {
  const navigate = useNavigate()
  return (
    <div
      style={{
        width: "90%",
        height: "50vh",
        backgroundColor: "palegoldenrod",
        margin: "5%",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Users Component
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};

export default UserList;
