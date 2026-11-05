"use client";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

export default function ContactSection() {
  return (
    <Container id="contact" className="my-5 py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="text-center p-4 shadow border-0 rounded-4">
            <h2 className="fw-bold" style={{ color: '#d63384' }}>
              Pesan Mochi Favoritmu
            </h2>

            <p className="text-muted">
              Tertarik mencoba mochi kami? Isi formulir di bawah untuk pemesanan atau pertanyaan.
            </p>

            <Form className="mt-3 p-3 text-start">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label className="fw-medium">Nama Pemesan</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan nama kamu"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label className="fw-medium">Nomor WhatsApp</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Contoh: 08xxxxxxxxxx"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="fw-medium">Email (Opsional)</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Masukkan alamat email kamu"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label className="fw-medium">Detail Pesanan</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Contoh: 2 box Matcha Mochi dan 1 box Strawberry Daifuku. Sertakan juga jumlah dan catatan pengiriman."
                  required
                />
              </Form.Group>

              <Button className="btn-pink px-4 py-2 w-100" type="button">
                Kirim Pesanan
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}