import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Counter from "./Counter.tsx";

const User = () => {
  const navigate = useNavigate();

  const productSlug = "ledTv";

  return (
    <>
      <div
        style={{
          width: "90%",
          height: "50vh",
          backgroundColor: "peachpuff",
          margin: "5%",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Users Component
        <button
          className="btn"
          onClick={() => navigate(`/products/${productSlug}`)}
        >
          Navigate to product details
        </button>
        <br />
        <div>
          <Counter />
        </div>
      </div>
    </>
  );
};

export default User;
