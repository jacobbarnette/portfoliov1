import React from "react";
import { Container } from "react-bootstrap";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaLinux,
  FaNpm,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb, SiWebpack, SiExpress } from "react-icons/si";
import { MdComputer } from "react-icons/md";
const Skills = () => {
  return (
    <Container>
      <section className="skills">
        <h2 className="text-center subSectionHeader">
          My Toolkit <MdComputer />
        </h2>

        <div className="skillsContainer">
          <div className="skillColumn">
            <h2 className="skillColumnHeader">Front End</h2>
            <div className="skillTxtContainer">
              <p>
                <FaHtml5 /> HTML5
              </p>
              <p>
                <FaCss3Alt /> CSS
              </p>
              <p>
                <IoLogoJavascript /> JavaScript (ES6+)
              </p>
              <p>
                <FaReact /> React
              </p>
              <p>
                <FaBootstrap /> Bootstrap
              </p>
            </div>
          </div>
          <div className="skillColumn">
            <h2 className="skillColumnHeader">Back End</h2>
            <div className="skillTxtContainer">
              <p>
                <FaNodeJs /> NodeJS
              </p>
              <p>
                <SiMongodb /> MongoDB
              </p>
              <p>
                <SiExpress /> Express
              </p>
            </div>
          </div>
          <div className="skillColumn">
            <h2 className="skillColumnHeader">Technologies</h2>
            <div
              styles={{ borderRight: "none !important" }}
              className="skillTxtContainer technologies"
            >
              <p>
                <FaGitAlt /> Git
              </p>
              <p>
                <FaGithub /> Github
              </p>
              <p>
                <FaLinux /> Linux
              </p>
              <p>
                <SiWebpack /> Webpack
              </p>
              <p>
                <FaNpm /> npm
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Skills;
