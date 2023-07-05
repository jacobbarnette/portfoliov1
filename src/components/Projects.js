import React from "react";
import { Container } from "react-bootstrap";
import project1 from "../assets/ecommerce.png";
import project2 from "../assets/campbuddy.png";
import project3 from "../assets/loanCalculator.png";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="projects mt-5 ">
      <Container>
        <h2 className="subSectionHeader text-center py-5">My Projects</h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          <div className="card">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <img
                  src={project1}
                  className="card-img"
                  alt="fakeStore landing page"
                />
              </div>
              <div className="col-md-12 col-lg-6 py-5 px-5">
                <div className="card-body">
                  <h2 className="card-title py-2">FakeStore</h2>
                  <p className="card-text">
                    A minimal e-commerce website with cart functionality. This
                    project was developed as a solution to The Odin Project's
                    Shopping Cart Project.
                  </p>
                  <p>Technologies used:</p>
                  <p>
                    React, React-Router, React-Redux, React-Bootstrap, FakeStore
                    API
                  </p>
                  <div className="row">
                    <button className="">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/jacobbarnette/ecommerceRedux"
                      >
                        {" "}
                        View Code <FaGithub />
                      </a>
                    </button>
                    <button>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://fakestore-f4gt.onrender.com/"
                      >
                        View Website <GoLinkExternal />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          <div className="card mb-5">
            <div className="row">
              <div className="col-md-12 col-lg-6 py-5 px-5">
                <div className="card-body">
                  <h2 className="card-title py-2">CampBuddy</h2>
                  <p className="card-text">
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
                  <div className="row">
                    <button>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/jacobbarnette/campBuddy"
                      >
                        {" "}
                        View Code <FaGithub />
                      </a>
                    </button>
                    <button>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://camp-buddy-soow.onrender.com/"
                      >
                        View Website <GoLinkExternal />
                      </a>
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-12 col-lg-6">
                <img
                  src={project2}
                  className="card-img"
                  alt="campbuddy landing page"
                />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          <div className="card mb-5">
            <div className="row ">
              <div className="col-md-12 col-lg-6">
                <img
                  src={project3}
                  className="card-img"
                  alt="fakeStore landing page"
                />
              </div>
              <div className="col-md-12 col-lg-6 py-5 px-5">
                <div className="card-body">
                  <h2 className="card-title py-2">Loan Calculator</h2>
                  <p className="card-text">
                    A loan calculator for amoritized loans made with React and
                    ChartJS to visualize the data.
                  </p>
                  <p>Technologies used:</p>
                  <p>React, React-Bootstrap, ChartJS, React-Chart-JS-2</p>
                  <div className="row">
                    <button>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/jacobbarnette/amorization-table"
                      >
                        {" "}
                        View Code <FaGithub />
                      </a>
                    </button>
                    <button>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://amorizationtable.onrender.com/"
                      >
                        View Website <GoLinkExternal />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;
