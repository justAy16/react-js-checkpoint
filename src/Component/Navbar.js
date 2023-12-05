import React from 'react';
// imported tags from bootstrap library
import { Nav, Navbar, Container, Form, Button, NavDropdown } from 'react-bootstrap';


const NavBar = () => {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky='top'>
            <Container fluid>
                <Navbar.Brand href="#">Piper.com</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Away</Nav.Link>
                        <NavDropdown title="Request" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Home experience</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Escort</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Video Call</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>Don't click</Nav.Link>
                    </Nav>
                     {/* made use of form */}
                    <Form className="d-flex">
                        <Form.Control type="search" placeholder="...input search here" className="me-2" aria-label="Search"/>
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
)
}

export default NavBar