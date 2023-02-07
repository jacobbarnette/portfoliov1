import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <Container>
      <section className="aboutSection">
        <h2 id="aboutSection" className="text-center py-2 subSectionHeader">
          About Me
        </h2>
        <p className="aboutMe">
          Hi, I am Jacob Barnette. A Juniour Front-End Web developer experienced
          with the MERN stack(Mongo, Express, React, Node) as well as various
          other JavaScript based frameworks and libraries. I am skilled at
          creating responsive and user friendly websites that deliver an optimal
          user experience. I am a quick learner, and always eager to learn new
          technologies. I am excited to bring my passion for web development and
          my skills to a company where I can continue to grow as a developer
          while contributing to the success of the team.
        </p>
        <br />
        <p className="aboutMe">
          Other than coding, I enjoy spending my free time outside, going on
          hikes with my wife and dog or hanging by the pool. If i am not
          outside, you can more than likely find me playing World of Warcraft or
          watching football.
        </p>
      </section>
    </Container>
  );
};

export default About;
