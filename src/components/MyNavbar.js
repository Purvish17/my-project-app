import React from "react";
import Container from "react-bootstrap/Container";
// import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="sm">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src="./crypto.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          {/* <NavbarToggle aria-controls='my-nav'/> */}

          <Navbar.Brand>Crypto currency</Navbar.Brand>
          <NavbarToggle aria-controls="my-nav" />
          <Navbar.Collapse id="my-nav">
            <Nav className="me-auto fw-bold">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/signup">
                Sign Up
              </Nav.Link>
              <Nav.Link as={Link} to="/Login">
                Login
              </Nav.Link>
              {/* <Link > <Nav.Link to="/about">About</Nav.Link> </Link> */}
              {/* <Nav.Link href="#features">Features</Nav.Link>
            <Link to="/about"><button>Features</button></Link>  */}

              <Nav.Link as={Link} to="/pricing">
                Price
              </Nav.Link>
              {/* <Nav.Link to="/pricing">Price</Nav.Link> */}
              {/* <Nav.Link  as={Link} to="/signup">Sign Up</Nav.Link> 
             <Nav.Link  as={Link} to="/Login" type="button">Login</Nav.Link>  */}
              {/* style="float:right" */}
            </Nav>
          </Navbar.Collapse>
          {/* <Nav  style={{marginRight:+ 'em'}} >
            <Nav.Link  as={Link} to="/signup">Sign Up</Nav.Link>
            <Nav.Link as={Link} to="/Login" >
              Login 
            </Nav.Link>
          </Nav> */}
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
