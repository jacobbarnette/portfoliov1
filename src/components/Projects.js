import React from "react";
import { Container } from "react-bootstrap";
import project1 from "../assets/ecommerce.png";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
const Projects = () => {
  return (
    <section className="projects">
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
            <div class="col-md-6 px-5">
              <div class="card-body">
                <h2 class=" card-title">FakeShop</h2>
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
      </Container>
    </section>
  );
};
/* A */
export default Projects;
