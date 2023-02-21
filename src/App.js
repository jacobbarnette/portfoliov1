import React, { useState, useRef, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Landing from "./components/Landing";
import Skills from "./components/Skills";
import Project from "./components/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "./components/ContactForm";

const App = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [visitedSections, setVisitedSections] = useState([0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = parseInt(entry.target.dataset.index);

            if (sectionIndex !== activeSection) {
              setActiveSection(sectionIndex);
            }
            if (!visitedSections.includes(sectionIndex)) {
              setVisitedSections((visitedSections) => [
                ...visitedSections,
                sectionIndex,
              ]);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    sectionRefs.forEach((ref) => observer.observe(ref.current));

    return () => {
      observer.disconnect();
    };
  }, [sectionRefs, visitedSections, activeSection]);

  const dots = sectionRefs.map((ref, i) => {
    const isActive = i === activeSection;
    const isVisited = visitedSections.includes(i);

    return (
      <div
        key={i}
        className={`dot ${isVisited ? "visited" : ""} ${
          isActive ? "active" : ""
        }`}
      ></div>
    );
  });

  return (
    <div>
      <Header />
      <div ref={sectionRefs[0]} data-index="0">
        <Landing />
      </div>
      <div ref={sectionRefs[1]} data-index="1">
        <About />
      </div>
      <div ref={sectionRefs[2]} data-index="2">
        <Skills />
      </div>
      <div>
        <Project />
      </div>
      <div ref={sectionRefs[3]} data-index="3">
        {" "}
        <ContactForm />
      </div>

      <div className="dotsContainer row">
        <div className="dots">{dots}</div>
      </div>
    </div>
  );
};
export default App;
