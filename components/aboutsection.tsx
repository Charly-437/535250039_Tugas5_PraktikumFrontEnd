"use client";
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';

export default function AboutSection() {
  return (
    <Container id="about" className="my-5 py-4">
      <Row className="align-items-center g-4">

        {/* Judul untuk tab dan hp*/}
        <Col xs={12} className="d-lg-none text-center order-1">
          <h2 className="fw-bold" style={{ color: '#d63384' }}>
            Tentang Kami
          </h2>
        </Col>

        {/* Foto */}
        <Col lg={6} className="order-2 order-lg-1 text-center">
          <Image
            src="/images/about-mochi.jpg"
            alt="About Mochiiw"
            width={500}
            height={500}
            className="img-fluid rounded-4 shadow-sm about-image"
          />
        </Col>

        {/* Deskripsi*/}
        <Col lg={6} className="order-3 order-lg-2 ps-lg-5 text-center text-lg-start">

          {/* Judul untuk desktop */}
          <h2
            className="fw-bold mb-3 d-none d-lg-block"
            style={{ color: '#d63384' }}
          >
            Tentang Kami
          </h2>

          <h6 className="text-muted mb-3">
            Apa yang Kami Buat?
          </h6>

          <p className="text-secondary" style={{ lineHeight: '1.5' }}>
            Kami adalah toko mochi yang berdedikasi untuk membuat mochi paling lembut dan kenyal. 
            Mochi yang dibuat menggunakan resep pilihan, bahan-bahan berkualitas, dan penuh cinta. 
            Setiap gigitan mochi kami memberikan pengalaman rasa yang menyenangkan.
          </p>

          <p className="text-secondary" style={{ lineHeight: '1.5' }}>
            Mochiiw menghadirkan berbagai pilihan rasa, mulai dari
            Matcha Mochi, Strawberry Daifuku, hingga Choco Lava Mochi.
            Setiap mochi dibuat fresh agar pelanggan dapat menikmati
            kelezatan dan kesegarannya.
          </p>

          <Button href="#products" className="btn-pink mt-3 px-4 py-2">
            Lihat Produk Kami
          </Button>
        </Col>

      </Row>
    </Container>
  );
}
