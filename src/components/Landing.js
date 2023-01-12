import React from "react";
import {
  BsGithub,
  BsLinkedin,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
const Landing = () => {
  return (
    <section className=" landingSection">
      <div className="introContainer">
        <p className="helloTxt">Hi, My name is</p>
        <h1>Jacob Barnette</h1>
        <p>Front End Developer</p>
      </div>
      <div className="mx-auto socialIconContainer">
        <div className="socialIconsRow">
          <div className="socialIcons">
            <a href="https://google.com">
              <BsFillFileEarmarkTextFill
                onClick={() => console.log("hl")}
                size={25}
              />
            </a>
          </div>
          <div className="socialIcons">
            <a href="https://github.com/jacobbarnette">
              <BsGithub size={25} />
            </a>
          </div>
          <div className="socialIcons">
            <a href="https://www.linkedin.com/in/jacob-barnette-300275169/">
              <BsLinkedin size={25} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
