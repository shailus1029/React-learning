import React, { lazy, Suspense } from "react";
import Dashboard from "./Components/Dashboard.tsx";
// import User from "./Components/User.tsx";
import UserList from "./Components/Users.tsx";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar.tsx";
import NoMatch from "./Components/NoMatch.tsx";
import "./App.css";

/* Importing MovieProvider */
import MovieProvider from "./context/MovieProvider.tsx";

/* Provider componet provides redux store to entire application or wrrappedIn components */
import { Provider } from "react-redux";

/* Importing Redux store */
import store from "./store";

/* Lazy loading routing */
const Movie = lazy(() => import("./Components/Movies.tsx"));
const User = lazy(() => import("./Components/User.tsx"));
const Home = lazy(() => import("./Components/Home.tsx"));
const ProductDetails = lazy(() => import("./Components/ProductDetails.tsx"));

const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <div className="main">
          <div className="left">Left Section</div>
          <div className="right">
            <MovieProvider>
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

                  <Route path="/movies" element={<Movie />} />

                  {/* Not Found Route */}
                  <Route path="*" element={<NoMatch />} />
                </Routes>
              </Suspense>
            </MovieProvider>
          </div>
        </div>
      </Provider>
    </>
  );
};

export default App;
