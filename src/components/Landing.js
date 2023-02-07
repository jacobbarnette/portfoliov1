import React from "react";
import {
  BsGithub,
  BsLinkedin,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
const Landing = () => {
  return (
    <section id="home" className=" landingSection">
      <div className="introContainer">
        <p className="helloTxt">HI, MY NAME IS</p>
        <h1 className="py-2">JACOB BARNETTE</h1>
        <p className="developerTxt">FRONT END DEVELOPER</p>
      </div>
      <div className="mx-auto px-3 socialIconContainer">
        <div className="socialIconsRow">
          <div className="socialIcons">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1DLzFIZ-lZBEiGjmY0D97RhD7MBN28wdy/view?usp=sharing"
            >
              <BsFillFileEarmarkTextFill
                onClick={() => console.log("hl")}
                size={25}
              />
            </a>
          </div>
          <div className="socialIcons">
            <a target="_blank" href="https://github.com/jacobbarnette">
              <BsGithub size={25} />
            </a>
          </div>
          <div className="socialIcons">
            <a
              target="_blank"
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
