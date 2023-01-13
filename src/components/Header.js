import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home"> JB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="navLink" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="navLink" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="navLink" href="#projects">
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;