import React from 'react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import DaveMarshallSection from './DaveMarshallSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import Chatbot from './Chatbot';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Navigation />
      <main>
        <HeroSection />
        <section id="about">
          <AboutSection />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="dave">
          <DaveMarshallSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
      <div className="fixed top-4 right-4 z-50">
        <Chatbot />
      </div>
    </div>
  );
}