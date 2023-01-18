import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Landing from "./components/Landing";
import Skills from "./components/Skills";
import Project from "./components/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <div>
      <Header />
      <Landing />
      <div className="aboutGrouping">
        <About />
        <Skills />
      </div>
      <Project />
    </div>
  );
};

export default App;
