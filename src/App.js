import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Landing from "./components/Landing";
import Skills from "./components/Skills";
import Project from "./components/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "./components/ContactForm";
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
      <ContactForm />
    </div>
  );
};

export default App;
