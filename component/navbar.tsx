'use client';
import { use } from 'react'; // 4.1k (gzipped: 1.8k)
import Button from 'react-bootstrap/Button'; // 4.2k (gzipped: 1.9k)
import Container from 'react-bootstrap/Container'; // 2.4k (gzipped: 1.2k)
import Form from 'react-bootstrap/Form'; // 8.4k (gzipped: 3.2k)
import Nav from 'react-bootstrap/Nav'; // 20.5k (gzipped: 6.1k)
import Navbar from 'react-bootstrap/Navbar'; // 39k (gzipped: 12.5k)
import NavDropdown from 'react-bootstrap/NavDropdown'; // 64.4k (gzipped: 20.4k)

function navbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  ); // <- #11-50 return
} // <- #10-51 function navbar()

export default navbar;