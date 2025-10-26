import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EmailCapture from "../components/EmailCaptureSection";
import PrivacyPolicy from "../components/PrivacyPolicy";
import TopBanner from "../components/TopBanner";

export default function Policy() {
  return (
    <>
      <Helmet>
        {/* ✅ SEO for Privacy Policy (Wyoming Focused) */}
        <title>Privacy Policy | Ki Computing - Wyoming IT Services</title>
        <meta
          name="description"
          content="Read the privacy policy of Ki Computing, Wyoming’s trusted IT service provider. Learn how we protect client data and comply with HIPAA and state privacy laws."
        />
        <link rel="canonical" href="https://www.kicomputing.com/policy" />

        {/* ✅ Open Graph */}
        <meta
          property="og:title"
          content="Privacy Policy | Ki Computing - Wyoming IT Services"
        />
        <meta
          property="og:description"
          content="Learn how Ki Computing in Wyoming protects your data. Our privacy policy ensures HIPAA compliance and information security for all clients."
        />
        <meta property="og:url" content="https://www.kicomputing.com/policy" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.kicomputing.com/og-image.jpg"
        />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Privacy Policy | Ki Computing - Wyoming IT Services"
        />
        <meta
          name="twitter:description"
          content="Read Ki Computing’s privacy policy for clients across Wyoming — ensuring HIPAA compliance, data protection, and ethical technology practices."
        />
        <meta
          name="twitter:image"
          content="https://www.kicomputing.com/og-image.jpg"
        />

        {/* ✅ Theme color */}
        <meta name="theme-color" content="#0A66C2" />

        {/* ✅ Local Business Schema for Wyoming */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Ki Computing",
            image: "https://www.kicomputing.com/og-image.jpg",
            "@id": "https://www.kicomputing.com",
            url: "https://www.kicomputing.com",
            telephone: "(307) 254-9944",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1050 Lane 10",
              addressLocality: "Powell",
              addressRegion: "WY",
              postalCode: "82435",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "41.1400",
              longitude: "-104.8202",
            },
            sameAs: [
              "https://www.facebook.com/kicomputing",
              "https://www.linkedin.com/company/k.i.-computing/",
              "https://g.page/ki-computing",
              "https://www.instagram.com/kicomputing/",
              "https://twitter.com/computing_i",
            ],
            openingHours: "Mo-Fr 08:00-17:00",
          })}
        </script>
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
