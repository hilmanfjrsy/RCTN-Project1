import React, { Component } from "react";
import {
  Container,
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  NavDropdown,
  Badge,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../Global-styles.css";

export default function Template({ children }) {
  const saved = useSelector((state) => state.saved.value);

  return (
    <Container fluid>
      <Navbar bg="light" expand="lg">
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Navbar.Text>
              <Link to="/">Home</Link>
            </Navbar.Text>
            <Navbar.Text>
              <Link to="/programming">Programming</Link>
            </Navbar.Text>
            <Navbar.Text>
              <Link to="/covid">COVID-19</Link>
            </Navbar.Text>
            <Navbar.Text>
              <Link to="/saved">Saved</Link>
              {saved.length > 0 ? (
                <Badge bg="warning">{saved.length}</Badge>
              ) : null}
            </Navbar.Text>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      {children}
    </Container>
  );
}
