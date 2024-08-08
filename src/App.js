import React, { lazy, Suspense } from "react";
import Dashboard from "./Components/Dashboard.tsx";
// import User from "./Components/User.tsx";
import UserList from "./Components/Users.tsx";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar.tsx";
import NoMatch from "./Components/NoMatch.tsx";
import "./App.css";

/* Lazy loading routing */
const User = lazy(() => import('./Components/User.tsx'))
const Home = lazy(() => import("./Components/Home.tsx"));
const ProductDetails = lazy(() => import("./Components/ProductDetails.tsx"));

const App = () => {
  return (
    <>
      <NavBar />
      <div className="main">
        <div className="left">Left Section</div>
        <div className="right">
          <Suspense fallback={<div className="container">Loading...</div>}>
            <Routes>
              {/* Default Route */}
              <Route path="/" element={<Dashboard />} />

              {/* Static Route */}
              <Route path="/home" element={<Home />} />
              <Route path="/usersList" element={<UserList />} />
              <Route path="/userDetails" element={<User />} />

              {/* Dynamic Route */}
              <Route path="/products/:slug" element={<ProductDetails />} />

              {/* Not Found Route */}
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default App;
