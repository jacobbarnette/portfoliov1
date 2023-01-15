import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Landing from "./components/Landing";
import Skills from "./components/Skills";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <div>
      <Header />
      <Landing />
      <About />
      <Skills />
    </div>
  );
};

export default App;
