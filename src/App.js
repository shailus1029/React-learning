import "./App.css";
import Dashboard from "./Components/Dashboard.tsx";
import Home from "./Components/Home.tsx";
import User from "./Components/User.tsx";
import UserList from "./Components/Users.tsx";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar.tsx";
import NoMatch from "./Components/NoMatch.tsx"

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/usersList" element={<UserList />} />
        <Route path="/userDetails" element={<User />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};

export default App;
