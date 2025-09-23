import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EmailCapture from "../components/EmailCaptureSection";
import PrivacyPolicy from "../components/PrivacyPolicy";
import TopBanner from "../components/TopBanner";

export default function Policy() {
  return (
    <>
      <Helmet>
        {/* ✅ SEO for Privacy Policy */}
        <title>Privacy Policy | Ki Computing</title>
        <meta
          name="description"
          content="Read the privacy policy of Ki Computing to understand how we protect your data and ensure compliance with HIPAA and industry regulations."
        />
        <link rel="canonical" href="https://www.kicomputing.com/policy" />

        {/* ✅ Open Graph */}
        <meta property="og:title" content="Privacy Policy | Ki Computing" />
        <meta
          property="og:description"
          content="Learn how Ki Computing protects your data. Our privacy policy ensures HIPAA compliance and security for all clients."
        />
        <meta property="og:url" content="https://www.kicomputing.com/policy" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.kicomputing.com/og-privacy.jpg"
        />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | Ki Computing" />
        <meta
          name="twitter:description"
          content="Read the privacy policy of Ki Computing to understand how we protect and secure client data."
        />
        <meta
          name="twitter:image"
          content="https://www.kicomputing.com/og-privacy.jpg"
        />

        {/* ✅ Theme color */}
        <meta name="theme-color" content="#0A66C2" />
      </Helmet>

      <div>
        <TopBanner />
        <Header />
        <PrivacyPolicy />
        <EmailCapture />
        <Footer />
      </div>
    </>
  );
}
