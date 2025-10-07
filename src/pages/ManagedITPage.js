import React, { useState } from "react";
import { Helmet } from "react-helmet";
import BookCall from "../components/BookCall";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EmailCapture from "../components/EmailCaptureSection";
import ManagedITServices from "../components/ManagedIT";
import TopBanner from "../components/TopBanner";

export default function ManagedITPage() {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  const handleOpenBookCall = () => setIsBookCallOpen(true);
  const handleCloseBookCall = () => setIsBookCallOpen(false);

  return (
    <>
      <Helmet>
        {/* ✅ Local SEO for Wyoming */}
        <title>Managed IT Services in Wyoming | Ki Computing</title>
        <meta
          name="description"
          content="Ki Computing provides managed IT services in Wyoming for medical offices, dental practices, and nonprofits. Get reliable IT support, cybersecurity, and compliance solutions."
        />
        <link
          rel="canonical"
          href="https://www.kicomputing.com/managed-it-services"
        />

        {/* ✅ Open Graph */}
        <meta
          property="og:title"
          content="Managed IT Services in Wyoming | Ki Computing"
        />
        <meta
          property="og:description"
          content="Comprehensive managed IT services for healthcare and nonprofits in Wyoming. Ki Computing ensures secure, compliant, and stress-free technology solutions."
        />
        <meta
          property="og:url"
          content="https://www.kicomputing.com/managed-it-services"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.kicomputing.com/og-managed-it.jpg"
        />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Managed IT Services in Wyoming | Ki Computing"
        />
        <meta
          name="twitter:description"
          content="Expert managed IT services in Wyoming for medical and dental practices, and nonprofits serving the developmentally disabled."
        />
        <meta
          name="twitter:image"
          content="https://www.kicomputing.com/og-managed-it.jpg"
        />

        {/* ✅ Theme color */}
        <meta name="theme-color" content="#0A66C2" />
      </Helmet>

      <div>
        <TopBanner />
        <Header />
        <ManagedITServices onOpenBookCall={handleOpenBookCall} />
        <EmailCapture />
        <Footer />
      </div>

      {/* Book a Call Modal */}
      <BookCall isOpen={isBookCallOpen} onClose={handleCloseBookCall} />
    </>
  );
}
