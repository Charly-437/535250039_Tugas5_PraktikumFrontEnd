"use client";
import { Carousel } from "react-bootstrap";

export default function HeroSection() {
  return (
    <Carousel id="home" className="hero-carousel mb-5 shadow-sm">
      <Carousel.Item>
        <img
          className="d-block w-100 hero-image"
          src="/images/banner_01.jpg"
          alt="Banner Mochi 1"
        />
        <Carousel.Caption className="hero-caption">
          <h3 className="fw-bold">Mochi Kenyal & Lezat</h3>
          <p>Dibuat dengan bahan premium pilihan setiap hari.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 hero-image"
          src="/images/banner_02.jpg"
          alt="Banner Mochi 2"
        />
        <Carousel.Caption className="hero-caption">
          <h3 className="fw-bold">Varian Rasa Terbaru</h3>
          <p>Coba sensasi Matcha dan Strawberry Daifuku kami.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 hero-image"
          src="/images/banner_03.jpg"
          alt="Banner Mochi 3"
        />
        <Carousel.Caption className="hero-caption">
          <h3 className="fw-bold">Pesan Sekarang!</h3>
          <p>Nikmati mochi segar langsung ke depan pintu Anda.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}