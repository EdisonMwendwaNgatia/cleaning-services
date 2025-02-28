import React from "react";
import Navbar from "../components/Navbar";
import ImageSlider from "../components/ImageSlider";
import About from "../components/About";
import Services from "../components/Services";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

const Home = () => {
  return (
    <>
      <Navbar />
      <ImageSlider />
      <About />
      <Services />
      <ContactForm />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default Home;
