import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <Container>
      <section className="aboutSection">
        <h2 className="text-center subSectionHeader">About Me</h2>
        <p className="aboutMe">
          Hi, I am Jacob Barnette. I am a highly motivated and enthuisatic
          junior web developer with a strong passion for learning. Although, I
          am new to the field, I have a solid understanding of web development
          through self-study and personal projects. I am eager to apply the
          knowledge I have obtained and grow within the field of Web
          development. I believe with my willigness to learn and adapt, I can be
          a valuable asset to any team and make a positive impact on any
          project.
        </p>
        <br />
        {/*<p className="aboutMe">
          Other than coding, I enjoy spending my free time outside, hiking or
          hanging by the pool. If i am not outside, you can more than likely
          find me playing World of Warcraft or watching football.
  </p> */}
      </section>
    </Container>
  );
};

export default About;
