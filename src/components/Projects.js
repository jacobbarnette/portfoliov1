import React from "react";
import { Container } from "react-bootstrap";
import project1 from "../assets/ecommerce.png";
import project2 from "../assets/campbuddy.png";
import project3 from "../assets/loanCalculator.png";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
const Projects = () => {
  return (
    <section id="projects" className="projects">
      <Container>
        <h2 className="subSectionHeader text-center py-5">My Projects</h2>
        <div class="card mb-5">
          <div class="row ">
            <div class="col-md-6">
              <img
                src={project1}
                class="card-img"
                alt="fakeStore landing page"
              />
            </div>
            <div class="col-md-6 py-5 px-5">
              <div class="card-body">
                <h2 class="card-title py-2">FakeStore</h2>
                <p class="card-text">
                  A minimal e-commerce website with cart functionality. This
                  project was developed as a solution to The Odin Project's
                  Shopping Cart Project.
                </p>
                <p>Technologies used:</p>
                <p>
                  React, React-Router, React-Redux, React-Bootstrap, FakeStore
                  API
                </p>
                <button>
                  <a href="https://github.com/jacobbarnette/ecommerceRedux">
                    {" "}
                    View Code <FaGithub />
                  </a>
                </button>
                <button>
                  <a href="https://ecommerce-redux-omega.vercel.app/">
                    View Website <GoLinkExternal />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-5">
          <div class="row">
            <div class="col-md-6 px-5">
              <div class="card-body">
                <h2 class="card-title">CampBuddy</h2>
                <p class="card-text">
                  This project was inspired by Colt Steele's Web Dev Bootcamp
                  capstone project. I built this application using different
                  technologies then the course. The goal of this website is to
                  serve as a YellowPages for campsites
                </p>
                <p>Technologies used:</p>
                <p>
                  React, React-Router, React-Redux, React-Bootstrap, FakeStore
                  API
                </p>
                <button>
                  <a href="https://github.com/jacobbarnette/campBuddy">
                    {" "}
                    View Code <FaGithub />
                  </a>
                </button>
                <button>
                  <a href="https://camp-buddy-soow.onrender.com/">
                    View Website <GoLinkExternal />
                  </a>
                </button>
              </div>
            </div>
            <div class="col-md-6">
              <img
                src={project2}
                class="card-img"
                alt="campbuddy landing page"
              />
            </div>
          </div>
        </div>
        <div class="card mb-5">
          <div class="row ">
            <div class="col-md-6">
              <img
                src={project3}
                class="card-img"
                alt="fakeStore landing page"
              />
            </div>
            <div class="col-md-6 py-5 px-5">
              <div class="card-body">
                <h2 class="card-title py-2">Loan Calculator</h2>
                <p class="card-text">
                  A loan calculator for amoritized loans made with React and
                  ChartJS to visualize the data.
                </p>
                <p>Technologies used:</p>
                <p>React, React-Bootstrap, ChartJS, React-Chart-JS-2</p>
                <button>
                  <a href="https://github.com/jacobbarnette/amorization-table">
                    {" "}
                    View Code <FaGithub />
                  </a>
                </button>
                <button>
                  <a href="https://amorizationtable.onrender.com/">
                    View Website <GoLinkExternal />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
