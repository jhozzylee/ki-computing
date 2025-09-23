import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EmailCapture from "../components/EmailCaptureSection";
import TermsOfService from "../components/TermsOfService";
import TopBanner from "../components/TopBanner";

export default function Terms() {
  return (
    <>
      <Helmet>
        {/* ✅ SEO for Terms of Service */}
        <title>Terms of Service | Ki Computing</title>
        <meta
          name="description"
          content="Review the Terms of Service for Ki Computing. Learn about our IT services, usage policies, and compliance standards in Wyoming."
        />
        <link rel="canonical" href="https://www.kicomputing.com/terms" />

        {/* ✅ Open Graph */}
        <meta property="og:title" content="Terms of Service | Ki Computing" />
        <meta
          property="og:description"
          content="Read the Terms of Service for Ki Computing. Our policies ensure clarity, compliance, and protection for all clients."
        />
        <meta property="og:url" content="https://www.kicomputing.com/terms" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.kicomputing.com/og-terms.jpg"
        />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms of Service | Ki Computing" />
        <meta
          name="twitter:description"
          content="Review the Terms of Service for Ki Computing. Clear, transparent policies for IT services in Wyoming."
        />
        <meta
          name="twitter:image"
          content="https://www.kicomputing.com/og-terms.jpg"
        />

        {/* ✅ Theme color */}
        <meta name="theme-color" content="#0A66C2" />
      </Helmet>

      <div>
        <TopBanner />
        <Header />
        <TermsOfService />
        <EmailCapture />
        <Footer />
      </div>
    </>
  );
}
