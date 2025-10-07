import React, { useState } from "react";
import { Helmet } from "react-helmet";
import BookCall from "../components/BookCall";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EmailCapture from "../components/EmailCaptureSection";
import Cybersecurity from "../components/Cybersecurity";
import TopBanner from "../components/TopBanner";

export default function CybersecurityPage() {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  const handleOpenBookCall = () => setIsBookCallOpen(true);
  const handleCloseBookCall = () => setIsBookCallOpen(false);

  return (
    <>
      <Helmet>
        {/* ✅ Localized SEO for Cybersecurity in Wyoming */}
        <title>Cybersecurity Services in Wyoming | Ki Computing</title>
        <meta
          name="description"
          content="Ki Computing provides cybersecurity services in Wyoming for medical offices, dental practices, and nonprofits. Protect your data with HIPAA-compliant security, firewalls, and threat monitoring."
        />
        <link rel="canonical" href="https://www.kicomputing.com/cybersecurity" />

        {/* ✅ Open Graph */}
        <meta
          property="og:title"
          content="Cybersecurity Services in Wyoming | Ki Computing"
        />
        <meta
          property="og:description"
          content="Secure your Wyoming business with HIPAA-compliant cybersecurity solutions from Ki Computing — data protection, firewalls, backups, and 24/7 monitoring."
        />
        <meta
          property="og:url"
          content="https://www.kicomputing.com/cybersecurity"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.kicomputing.com/og-cybersecurity.jpg"
        />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Cybersecurity Services in Wyoming | Ki Computing"
        />
        <meta
          name="twitter:description"
          content="Ki Computing specializes in HIPAA-compliant cybersecurity solutions for Wyoming medical practices, dental offices, and nonprofits."
        />
        <meta
          name="twitter:image"
          content="https://www.kicomputing.com/og-cybersecurity.jpg"
        />

        {/* ✅ Theme color */}
        <meta name="theme-color" content="#0A66C2" />
      </Helmet>

      <div>
        <TopBanner />
        <Header />
        <Cybersecurity onOpenBookCall={handleOpenBookCall} />
        <EmailCapture />
        <Footer />
      </div>

      {/* Book a Call Modal */}
      <BookCall isOpen={isBookCallOpen} onClose={handleCloseBookCall} />
    </>
  );
}
