import React, { lazy, Suspense } from "react";
import Home from "./Components/Home.tsx";
import User from "./Components/User.tsx";
import UserList from "./Components/Users.tsx";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar.tsx";
import NoMatch from "./Components/NoMatch.tsx";
import "./App.css";

/* Lazy loading routing */
const Dashboard = lazy(() => import("./Components/Dashboard.tsx"));
const ProductDetails = lazy(() => import("./Components/ProductDetails.tsx"));

const App = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<div className="container">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/usersList" element={<UserList />} />
          <Route path="/userDetails" element={<User />} />
          <Route path="/products/:slug" element={<ProductDetails />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
