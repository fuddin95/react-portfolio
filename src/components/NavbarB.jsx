import React from "react";
import { Link } from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button"
import Nav from "react-bootstrap/Nav"
import NavItem from "react-bootstrap/NavItem"
import NavDropdown from "react-bootstrap/NavDropdown"
import Container from "react-bootstrap/Container"

export default function NavbarB() {
    return (
        <>

            <Navbar id="nav-color"  variant="dark" sticky="top" collapseOnSelect expand="md">
                <Navbar.Brand as={Link} to="/">Fahad</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-middle">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/" className="innerNav">Home</Nav.Link>
                        <Nav.Link as={Link} to="/AboutMe" className="innerNav">About Me</Nav.Link>

                        <NavDropdown title="Skills" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/Mechanical">Mech Projects</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/WebApps">Web Apps</NavDropdown.Item>
                            <NavDropdown.Divider /> 
                            <NavDropdown.Item as={Link} to="/Upcoming">Upcoming Projects</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>

                    <Button variant="outline-success">Contact Me</Button>

                </Navbar.Collapse>
            </Navbar>

        </>
    );
}

