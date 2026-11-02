'use client';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function navbar() {
  return (
    <Navbar expand="lg" className="custom-navbar shadow-sm py-3">
      <Container fluid>
        <Navbar.Brand href="#home" className="fw-bold fs-4" style={{ color: '#d63384' }}>
          🍡 Mochiiw
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 fw-medium"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#home" className="active">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <NavDropdown title="Products" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#products">Matcha Mochi</NavDropdown.Item>
              <NavDropdown.Item href="#products">Strawberry Daifuku</NavDropdown.Item>
              <NavDropdown.Item href="#products">Choco Lava Mochi</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Cari mochi..."
              className="me-2"
              aria-label="Search"
              style={{ borderColor: '#f8bbd0' }}
            />
            <Button className="btn-pink">Cari</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;