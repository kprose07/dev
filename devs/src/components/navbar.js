import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";
// CSS
import "../css/navbar.css";
// Images
import navLogo from "../imgs/logo.png";

function NavBar() {
  return (
    <>
      <Navbar className="main_navbar" data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/Home">
            <img src={navLogo} id="navlogo" alt="KD" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-collapse" />
          <Navbar.Collapse id="navbar-collapse">
            <Nav className="me-auto nav_text">
              <Nav.Link as={Link} to="/Home" className="navLink">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/Services" className="navLink">
                Services
              </Nav.Link>
              {/* <Nav.Link as={Link} to="/FAQ" className="navLink">
                FAQ's
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default NavBar;
