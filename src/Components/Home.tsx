import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "90%",
        height: "50vh",
        backgroundColor: "yellow",
        margin: "5%",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div>Home Component</div>
      <div>
        <button className="btn" onClick={() => navigate("/usersList")}>
          Go to Users List
        </button>
      </div>
    </div>
  );
};

export default Home;
