import React from "react";
import {
  BsGithub,
  BsLinkedin,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <section id="home" className=" landingSection">
      <div className="introContainer">
        <p className="helloTxt">HI, MY NAME IS</p>
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 2 }}
        >
          <h1 className="py-2">JACOB BARNETTE</h1>
        </motion.div>
        <p className="developerTxt">FRONT-END DEVELOPER</p>
      </div>

      <div className="mx-auto px-3 socialIconContainer">
        <div className="socialIconsRow">
          <div className="socialIcons">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1eKFEM8QCDsr0zI2wSj8yV-EobljmPKm7/view?usp=sharing"
            >
              <BsFillFileEarmarkTextFill size={25} />
            </a>
          </div>
          <div className="socialIcons">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/jacobbarnette"
            >
              <BsGithub size={25} />
            </a>
          </div>
          <div className="socialIcons">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/jacob-barnette-300275169/"
            >
              <BsLinkedin size={25} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
