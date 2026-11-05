import Navbar from "../../components/navbar";
import HeroSection from "../../components/herosection";
import AboutSection from "../../components/aboutsection";
import WorkSection from "../../components/worksection";
import ServiceSection from "../../components/servicesection";
import ContactSection from "../../components/contactsection";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />

        {/* Hero */}
        <HeroSection />

        {/* About Us */}
        <AboutSection />

        {/* Daftar Produk Mochiiw */}
        <section className="products-section py-5">
          <WorkSection />
        </section>

        {/* Keunggulan Layanan */}
        <ServiceSection />

        {/* Form Pemesanan */}
        <section className="contact-section">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </>
  );
}
