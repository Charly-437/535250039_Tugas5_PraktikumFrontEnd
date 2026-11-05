"use client";
import { Container, Row, Col, Image } from 'react-bootstrap';

export default function ServiceSection() {
  return (
    <Container id="services" className="my-5">
      <Row>
        <Col md={4} className="mb-3 text-center py-3">
          <Image src="/images/delivery-icon.png" alt="Pengiriman" fluid className="service-img" />
          <h3>Pengiriman Cepat</h3>
          <p>Dikirim dengan box pendingin agar tetap segar</p>
        </Col>

        <Col md={4} className="mb-3 text-center py-3">
          <Image src="/images/ingredient-icon.png" alt="Bahan Premium" fluid className="service-img" />
          <h3>Bahan Premium</h3>
          <p>Hanya menggunakan bahan-bahan berkualitas tinggi</p>
        </Col>

        <Col md={4} className="mb-3 text-center py-3">
          <Image src="/images/fresh-icon.png" alt="Selalu Baru" fluid className="service-img" />
          <h3>Selalu Baru</h3>
          <p>Dibuat fresh setiap hari tanpa pengawet</p>
        </Col>
      </Row>
    </Container>
  );
}