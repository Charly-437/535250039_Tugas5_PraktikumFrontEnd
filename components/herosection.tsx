"use client";
import { Carousel } from "react-bootstrap";

export default function HeroSection() {
  return (
    <Carousel className="mb-5 shadow-sm">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/banner_01.jpg"
          alt="Banner Mochi 1"
          style={{ height: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3 className="fs-2 fw-bold text-shadow">Mochi Kenyal & Lezat</h3>
          <p className="text-shadow">Dibuat dengan bahan premium pilihan setiap hari.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/banner_02.jpg"
          alt="Banner Mochi 2"
          style={{ height: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3 className="fs-2 fw-bold text-shadow">Varian Rasa Terbaru</h3>
          <p className="text-shadow">Coba sensasi Matcha dan Strawberry Daifuku kami.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/banner_03.jpg"
          alt="Banner Mochi 3"
          style={{ height: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3 className="fs-2 fw-bold text-shadow">Pesan Sekarang!</h3>
          <p className="text-shadow">Nikmati mochi segar langsung ke depan pintu Anda.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}