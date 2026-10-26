"use client";
import Carousel from 'react-bootstrap/Carousel'; 25.1k (gzipped: 8.5k)

interface Slide {
  title: string;
  subtitle: string;
  imageUrl: string;
} // <- #4-8 interface Slide

const HeroSection = () => {
  const slides: Slide[] = [
    {
      title: "First slide label",
      subtitle: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      imageUrl: "/images/banner_01.jpg",
    }, // <- #12-16 { title: "First slide label", subtitle: "Nulla vitae elit lib...
    {
      title: "Second slide label",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "/images/banner_02.jpg",
    }, // <- #17-21 { title: "Second slide label", subtitle: "Lorem ipsum dolor s...
    {
      title: "Third slide label",
      subtitle: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
      imageUrl: "/images/banner_03.jpg",
    }, // <- #22-26 { title: "Third slide label", subtitle: "Praesent commodo cur...
  ]; // <- #11-27 const slides: Slide[] = [

  return (
    <Carousel fade interval={4000} data-bs-theme="dark">
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <div   CSS inline styles should not be used, move styles to an external
            style={{
              backgroundImage: `url(${slide.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "60vh"
            }} // <- #34-39 style=
          ></div>
          <Carousel.Caption>
            <h1 className="display-4 fw-bold">{slide.title}</h1>
            <p className="lead">{slide.subtitle}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))} // <- #31-46 <Carousel fade interval={4000}
    </Carousel>
  ); // <- #29-48 return
}; // <- #10-49 const HeroSection = () =>

export default HeroSection;