import React from 'react';
import '../Style/Header.css';
import { Nav, NavDropdown, Navbar, Form, FormControl, Button } from 'react-bootstrap';

export default function Header() {
    return (
        <div className = "header">
            <Navbar collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand href="/Home">MySource</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/nav/Java">Java</Nav.Link>
                <Nav.Link href="/nav/Spring Boot">Spring Boot</Nav.Link>
                <Nav.Link href="/nav/MongoDB">MongoDB</Nav.Link>
                <Nav.Link href="/nav/JavaScript">JavaScript</Nav.Link>
                <Nav.Link href="/nav/CICD">CI/CD</Nav.Link>
                <Nav.Link href="/nav/Design Pattern">Design Pattern</Nav.Link>
                
                <NavDropdown title="Others" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/nav/Data Structure and Algorithms">Data Structure and Algorithms</NavDropdown.Item>
                    <NavDropdown.Item href="/nav/Microservice">Microservice</NavDropdown.Item>
                    <NavDropdown.Item href="/nav/Cloud">Cloud</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/nav/Interview">Interview</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
