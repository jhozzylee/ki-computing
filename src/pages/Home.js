import React, { useState } from "react";
import TopBanner from "../components/TopBanner";
import Header from "../components/Header";
import Hero from "../components/Hero";
import WhoWeAre from "../components/WhoWeAre";
import BookCall from "../components/BookCall";
import WhatWeDo from "../components/WhatWeDo";
import WhyChooseUs from "../components/WhyUs";
import WorkProcess from "../components/Process";
import TestimonialSection from "../components/Testemonials";
import EmailCapture from "../components/EmailCaptureSection";
import Footer from "../components/Footer";

export default function Home() {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  const handleOpenBookCall = () => setIsBookCallOpen(true);
  const handleCloseBookCall = () => setIsBookCallOpen(false);

  return (
    <>
      <TopBanner />
      <Header />
      <Hero onOpenBookCall={handleOpenBookCall} />
      <WhoWeAre />
      <WhatWeDo />
      <WhyChooseUs onOpenBookCall={handleOpenBookCall} />
      <WorkProcess />
      <TestimonialSection />
      <EmailCapture />
      <Footer />

      {/* Book a Call Modal */}
      <BookCall isOpen={isBookCallOpen} onClose={handleCloseBookCall} />
    </>
  );
}
