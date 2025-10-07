import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EmailCapture from "../components/EmailCaptureSection";
import BlogIntro from "../components/BlogIntro"; // ✅ make sure this file exists
import TopBanner from "../components/TopBanner";

export default function Blog() {
  return (
    <>
      <Helmet>
        {/* ✅ Localized Blog SEO */}
        <title>IT Blog for Wyoming Businesses | Ki Computing</title>
        <meta
          name="description"
          content="Stay updated with IT tips, cybersecurity news, HIPAA compliance, and data backup strategies for Wyoming businesses, medical offices, and nonprofits."
        />
        <link rel="canonical" href="https://www.kicomputing.com/blog" />

        {/* ✅ Open Graph */}
        <meta property="og:title" content="IT Blog for Wyoming Businesses | Ki Computing" />
        <meta
          property="og:description"
          content="Expert IT insights for Wyoming medical practices, dental offices, and nonprofits. Covering cybersecurity, HIPAA compliance, and IT best practices."
        />
        <meta property="og:url" content="https://www.kicomputing.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.kicomputing.com/og-blog.jpg" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IT Blog for Wyoming Businesses | Ki Computing" />
        <meta
          name="twitter:description"
          content="Read IT and cybersecurity tips tailored for Wyoming healthcare, dental, and nonprofit organizations."
        />
        <meta name="twitter:image" content="https://www.kicomputing.com/og-blog.jpg" />

        {/* ✅ Theme Color */}
        <meta name="theme-color" content="#0A66C2" />
      </Helmet>

      <div>
        <TopBanner />
        <Header />
        <BlogIntro />
        <EmailCapture />
        <Footer />
      </div>
    </>
  );
}
