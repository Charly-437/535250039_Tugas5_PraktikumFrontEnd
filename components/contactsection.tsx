"use client";
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

export default function ContactSection() {
  return (
    <Container className="my-5 py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="text-center p-4 shadow border-0 rounded-4">
            <h2 className="fw-bold" style={{ color: '#d63384' }}>Pesan Mochi Sekarang</h2>
            <p className="text-muted">Isi form di bawah untuk pemesanan atau pertanyaan.</p>
            <Form className="mt-3 p-3 text-start">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label className="fw-medium">Nama Lengkap</Form.Label>
                <Form.Control type="text" placeholder="Masukkan nama Anda" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="fw-medium">Nomor Telepon</Form.Label>
                <Form.Control type="text" placeholder="Masukkan nomor telepon Anda" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="fw-medium">Email</Form.Label>
                <Form.Control type="email" placeholder="Masukkan email Anda" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label className="fw-medium">Pesan / Pesanan</Form.Label>
                <Form.Control as="textarea" rows={6} placeholder="Contoh: 2 box matcha, 1 box strawberry..." />
              </Form.Group>
              <Button className="btn-pink px-4 py-2 w-100" type="submit">
                Kirim Pesanan
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}