import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EmailCapture from "../components/EmailCaptureSection";
import BlogIntro from "../components/BlogIntro";
import TopBanner from "../components/TopBanner";

export default function Blog() {
  return (
    <>
      <Helmet>
        {/* ✅ Localized Blog SEO */}
        <title>IT Blog for Wyoming Businesses | Ki Computing</title>
        <meta
          name="description"
          content="Explore the Ki Computing IT Blog — your source for cybersecurity, HIPAA compliance, and data protection insights for Wyoming businesses, medical offices, and nonprofits."
        />
        <meta
          name="keywords"
          content="Wyoming IT blog, cybersecurity Wyoming, HIPAA compliance blog, IT management Wyoming, Ki Computing blog, data protection tips, IT news Wyoming"
        />
        <link rel="canonical" href="https://www.kicomputing.com/blog" />

        {/* ✅ Open Graph */}
        <meta
          property="og:title"
          content="IT Blog for Wyoming Businesses | Ki Computing"
        />
        <meta
          property="og:description"
          content="Stay ahead with Ki Computing’s blog — expert IT insights for Wyoming healthcare providers, dental offices, and nonprofits."
        />
        <meta property="og:url" content="https://www.kicomputing.com/blog" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.kicomputing.com/og-image.jpg"
        />
        <meta property="og:locale" content="en_US" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="IT Blog for Wyoming Businesses | Ki Computing"
        />
        <meta
          name="twitter:description"
          content="Wyoming’s trusted source for IT and cybersecurity insights. Learn HIPAA compliance, data protection, and cloud management tips."
        />
        <meta
          name="twitter:image"
          content="https://www.kicomputing.com/og-image.jpg"
        />

        {/* ✅ Theme Color */}
        <meta name="theme-color" content="#0A66C2" />

        {/* ✅ Structured Data (Blog Schema) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Ki Computing IT Blog",
            url: "https://www.kicomputing.com/blog",
            description:
              "IT and cybersecurity blog for Wyoming businesses, medical offices, and nonprofits by Ki Computing.",
            publisher: {
              "@type": "Organization",
              name: "Ki Computing",
              logo: {
                "@type": "ImageObject",
                url: "https://www.kicomputing.com/logo512.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.kicomputing.com/blog",
            },
            inLanguage: "en-US",
          })}
        </script>
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
