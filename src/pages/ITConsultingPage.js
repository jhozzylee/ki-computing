import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import BookCall from "../components/BookCall";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EmailCapture from "../components/EmailCaptureSection";
import ITConsulting from "../components/ITConsulting";
import TopBanner from "../components/TopBanner";

export default function ITConsultingPage() {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  const handleOpenBookCall = () => setIsBookCallOpen(true);
  const handleCloseBookCall = () => setIsBookCallOpen(false);

  return (
    <>
      <Helmet>
        {/* ✅ Localized SEO for IT Consulting in Wyoming */}
        <title>IT Consulting Services in Wyoming | Ki Computing</title>
        <meta
          name="description"
          content="Ki Computing offers IT consulting services in Wyoming for medical practices, dental offices, and nonprofits. Get expert IT strategy, compliance support, and reliable technology solutions."
        />
        <link rel="canonical" href="https://www.kicomputing.com/it-consulting" />

        {/* ✅ Open Graph */}
        <meta
          property="og:title"
          content="IT Consulting Services in Wyoming | Ki Computing"
        />
        <meta
          property="og:description"
          content="Optimize your technology with IT consulting services from Ki Computing. Serving Wyoming medical and dental practices, and nonprofits with compliance-ready solutions."
        />
        <meta
          property="og:url"
          content="https://www.kicomputing.com/it-consulting"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.kicomputing.com/og-it-consulting.jpg"
        />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="IT Consulting Services in Wyoming | Ki Computing"
        />
        <meta
          name="twitter:description"
          content="Ki Computing provides expert IT consulting services in Wyoming — tailored for healthcare practices and nonprofits."
        />
        <meta
          name="twitter:image"
          content="https://www.kicomputing.com/og-it-consulting.jpg"
        />

        {/* ✅ Theme color */}
        <meta name="theme-color" content="#0A66C2" />
      </Helmet>

      <div>
        <TopBanner />
        <Header />
        <ITConsulting onOpenBookCall={handleOpenBookCall} />
        <EmailCapture />
        <Footer />
      </div>

      {/* Book a Call Modal */}
      <BookCall isOpen={isBookCallOpen} onClose={handleCloseBookCall} />
    </>
  );
}
