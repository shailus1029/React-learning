import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav>
      <ul style={{ display: "flex", gap: '20px' }}>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) => {
              return isActive ? "active-link" : "";
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/userDetails">User Details</NavLink>
        </li>
        <li>
          <NavLink to="/usersList">User List</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
