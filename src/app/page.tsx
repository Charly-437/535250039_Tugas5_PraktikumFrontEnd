import Navbar from "../../components/navbar";
import HeroSection from "../../components/herosection";
import WorkSection from "../../components/worksection";     
import ServiceSection from "../../components/servicesection";
import ContactSection from "../../components/contactsection";
import Footer from "../../components/footer";

import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <HeroSection />
        <Container className="my-5 py-4" id="about">
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <Image src="/images/about-mochi.jpg" alt="About Mochi" width={500} height={500} className="img-fluid rounded-4 shadow-sm" />
            </Col>
            <Col md={6} className="ps-md-5">
              <h2 className="fw-bold" style={{ color: '#d63384' }}>Tentang Kami</h2>
              <h6 className="text-muted mb-3">Apa yang Kami Buat?</h6>
              <p className="text-secondary" style={{ lineHeight: '1.8' }}>
                Kami adalah toko mochi artisan yang berdedikasi untuk membuat mochi paling lembut dan kenyal. 
                Menggunakan resep turun-temurun dan bahan-bahan alami pilihan, setiap gigitan mochi kami 
                memberikan pengalaman rasa yang tak terlupakan.
              </p>
              <Button className="btn-pink mt-3 px-4 py-2">Pelajari Lebih Lanjut</Button>
            </Col>
          </Row>
        </Container>
        <section className="py-5" style={{ backgroundColor: '#fdf2f8' }} id="products">
          <WorkSection />
        </section>
        <ServiceSection />
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </>
  );
}