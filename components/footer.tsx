"use client";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";

export default function Footer() {
  return (
    <footer id="footer" className="pt-5 pb-3 mt-5" style={{ backgroundColor: '#fdf2f8' }}>
      <Container>
        <Row>
          <Col md={3} className="mb-4">
            <h5 className="fw-bold mb-3">Produk Kami</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#matcha">Matcha Mochi</a></li>
              <li className="mb-2"><a href="#strawberry">Strawberry Daifuku</a></li>
              <li className="mb-2"><a href="#choco">Choco Lava</a></li>
            </ul>
          </Col>

          <Col md={3} className="mb-4">
            <h5 className="fw-bold mb-3">Tautan Cepat</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#home">Home</a></li>
              <li className="mb-2"><a href="#about">Tentang Kami</a></li>
              <li className="mb-2"><a href="#services">Layanan</a></li>
              <li className="mb-2"><a href="#contact">Kontak</a></li>
            </ul>
          </Col>

          <Col md={3} className="mb-4">
            <h5 className="fw-bold mb-3">Info & Bantuan</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#products">Informasi Produk</a></li>
              <li className="mb-2"><a href="#services">Informasi Pengiriman</a></li>
              <li className="mb-2"><a href="#contact">Pemesanan Mochi</a></li>
            </ul>
          </Col>

          <Col md={3} className="mb-4">
            <h5 className="fw-bold mb-3">Cari Disini</h5>
            <Form className="mb-4">
              <InputGroup>
                <Form.Control type="text" placeholder="Cari mochi..." />
                <Button className="btn-pink" type="button">Cari</Button>
              </InputGroup>
            </Form>

            <h5 className="fw-bold mb-3">Ikuti Kami</h5>
            <ul className="list-unstyled d-flex gap-3">
              {/* Ikon media sosial dapat diberi link kalo akun resmi tersedia. */}
              <li><i className="bi bi-facebook fs-5" aria-label="Facebook"></i></li>
              <li><i className="bi bi-twitter fs-5" aria-label="Twitter"></i></li>
              <li><i className="bi bi-instagram fs-5" aria-label="Instagram"></i></li>
              <li><i className="bi bi-youtube fs-5" aria-label="YouTube"></i></li>
            </ul>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={12} className="text-center">
            <hr />
            <p className="mb-0 text-muted">&copy; 2026 Mochiiw. All rights reserved.</p>
            <p className="mb-0 text-muted">&copy; Dibuat oleh Charly (535250039)</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}