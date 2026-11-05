"use client";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

export default function WorkSection() {
  return (
    <Container id="products" className="py-4">
      <Row className='mb-5 text-center'>
        <Col md={12}>
          <h2 className="fw-bold" style={{ color: '#d63384' }}>Varian Mochi Terbaik</h2>
          <p className="text-muted">Pilih rasa favoritmu hari ini!</p>
        </Col>
      </Row>

      <Row>
        <Col md={4} className="mb-4">
          <Card id="matcha" className="product-card h-100 shadow-sm border-0">
            <Card.Img
              variant="top"
              src="/images/matcha-mochi.jpg"
              alt="Matcha Mochi"
              className="product-img"
              style={{ height: '250px', objectFit: 'cover' }}
            />

            <Card.Body className="d-flex flex-column">
              <Card.Title className="fw-bold">Matcha Mochi</Card.Title>
              <Card.Text className="text-muted flex-grow-1">
                Mochi kenyal dengan isian pasta matcha premium asli Jepang yang lembut dan manis.
              </Card.Text>
              <Button href="#contact" className="btn-pink mt-3">
                Beli Sekarang
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card id="strawberry" className="product-card h-100 shadow-sm border-0">
            <Card.Img
              variant="top"
              src="/images/strawberry-mochi.jpg"
              alt="Strawberry Daifuku"
              className="product-img"
              style={{ height: '250px', objectFit: 'cover' }}
            />

            <Card.Body className="d-flex flex-column">
              <Card.Title className="fw-bold">Strawberry Daifuku</Card.Title>
              <Card.Text className="text-muted flex-grow-1">
                Mochi kenyal dengan isian stroberi segar utuh dan pasta kacang putih yang lembut.
              </Card.Text>
              <Button href="#contact" className="btn-pink mt-3">
                Beli Sekarang
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card id="choco" className="product-card h-100 shadow-sm border-0">
            <Card.Img
              variant="top"
              src="/images/choco-mochi.jpg"
              alt="Choco Lava Mochi"
              className="product-img"
              style={{ height: '250px', objectFit: 'cover' }}
            />

            <Card.Body className="d-flex flex-column">
              <Card.Title className="fw-bold">Choco Lava Mochi</Card.Title>
              <Card.Text className="text-muted flex-grow-1">
                Perpaduan mochi lembut dengan lelehan cokelat Belgia premium di dalamnya.
              </Card.Text>
              <Button href="#contact" className="btn-pink mt-3">
                Beli Sekarang
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}