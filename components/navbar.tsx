"use client";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function MochiiwNavbar() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <Navbar expand="lg" className="custom-navbar shadow-sm py-3">
      <Container fluid>
        <Navbar.Brand href="#home" className="fw-bold fs-4" style={{ color: '#d63384' }}
          onClick={() => setActiveSection('home')}>
          🍡 Mochiiw
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 fw-medium"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link
              href="#home"
              active={activeSection === 'home'}
              onClick={() => setActiveSection('home')}
            >
              Home
            </Nav.Link>

            <Nav.Link
              href="#about"
              active={activeSection === 'about'}
              onClick={() => setActiveSection('about')}
            >
              About Us
            </Nav.Link>

            <NavDropdown
              title="Products"
              id="navbarScrollingDropdown"
              active={activeSection === 'products'}
            >
              <NavDropdown.Item
                href="#matcha"
                onClick={() => setActiveSection('products')}
              >
                Matcha Mochi
              </NavDropdown.Item>

              <NavDropdown.Item
                href="#strawberry"
                onClick={() => setActiveSection('products')}
              >
                Strawberry Daifuku
              </NavDropdown.Item>

              <NavDropdown.Item
                href="#choco"
                onClick={() => setActiveSection('products')}
              >
                Choco Lava Mochi
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              href="#contact"
              active={activeSection === 'contact'}
              onClick={() => setActiveSection('contact')}
            >
              Contact
            </Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Cari mochi..."
              className="me-2"
              aria-label="Search"
              style={{ borderColor: '#f8bbd0' }}
            />
            <Button className="btn-pink" type="button">
              Cari
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}