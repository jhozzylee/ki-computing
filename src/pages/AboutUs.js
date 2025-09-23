import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import BookCall from "../components/BookCall";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EmailCapture from "../components/EmailCaptureSection";
import About from "../components/About";
import AboutPage from "../components/Recognition";
import TopBanner from "../components/TopBanner";

export default function AboutUs() {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  const handleOpenBookCall = () => setIsBookCallOpen(true);
  const handleCloseBookCall = () => setIsBookCallOpen(false);

  return (
    <>
      <Helmet>
        {/* ✅ Localized SEO for Wyoming */}
        <title>About Ki Computing | Local IT Experts in Wyoming</title>
        <meta
          name="description"
          content="Learn about Ki Computing, a Wyoming-based IT provider specializing in HIPAA-compliant support for medical offices, dental practices, and nonprofits."
        />
        <link rel="canonical" href="https://www.kicomputing.com/about" />

        {/* ✅ Open Graph */}
        <meta property="og:title" content="About Ki Computing | Local IT Experts in Wyoming" />
        <meta
          property="og:description"
          content="Meet the team at Ki Computing. We provide trusted IT and cybersecurity services to healthcare providers, dental practices, and nonprofits across Wyoming."
        />
        <meta property="og:url" content="https://www.kicomputing.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.kicomputing.com/og-about.jpg" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Ki Computing | Local IT Experts in Wyoming" />
        <meta
          name="twitter:description"
          content="Wyoming IT experts specializing in HIPAA-compliant support for medical offices, dental practices, and nonprofits."
        />
        <meta name="twitter:image" content="https://www.kicomputing.com/og-about.jpg" />

        {/* ✅ Theme Color */}
        <meta name="theme-color" content="#0A66C2" />
      </Helmet>

      <div>
        <TopBanner />
        <Header />
        <About />
        <AboutPage onOpenBookCall={handleOpenBookCall} />
        <EmailCapture />
        <Footer />
      </div>

      {/* Book a Call Modal */}
      <BookCall isOpen={isBookCallOpen} onClose={handleCloseBookCall} />
    </>
  );
}
