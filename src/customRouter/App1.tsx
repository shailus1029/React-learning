import React from "react";

import Route from "./Route.tsx";
import Home from "./Home.tsx";
import About from "./About.tsx";
import Contact from "./Contact.tsx";
import Navbar from "./Navbar.tsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contacts" component={Contact} />
    </>
  );
};

export default App;