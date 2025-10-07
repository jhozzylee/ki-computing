import React, { useState } from "react";
import { Helmet } from "react-helmet";
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
      <Helmet>
        {/* ✅ Localized SEO */}
        <title>
          Managed IT & Cybersecurity Services in Wyoming | Ki Computing
        </title>
        <meta
          name="description"
          content="Ki Computing provides HIPAA-compliant IT support, cybersecurity, cloud backup, and consulting for medical offices, dental practices, and nonprofits in Wyoming."
        />
        <link rel="canonical" href="https://www.kicomputing.com/" />

        {/* ✅ Open Graph */}
        <meta
          property="og:title"
          content="Managed IT & Cybersecurity Services in Wyoming | Ki Computing"
        />
        <meta
          property="og:description"
          content="Trusted IT services for Wyoming medical offices, dental practices, and nonprofits. HIPAA-compliant cybersecurity, cloud backup, and responsive local support."
        />
        <meta property="og:url" content="https://www.kicomputing.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.kicomputing.com/og-image.jpg"
        />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Managed IT & Cybersecurity Services in Wyoming | Ki Computing"
        />
        <meta
          name="twitter:description"
          content="Trusted IT services for Wyoming medical offices, dental practices, and nonprofits. HIPAA-compliant cybersecurity, cloud backup, and responsive local support."
        />
        <meta
          name="twitter:image"
          content="https://www.kicomputing.com/og-image.jpg"
        />

        {/* ✅ Theme Color */}
        <meta name="theme-color" content="#0A66C2" />
      </Helmet>

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
