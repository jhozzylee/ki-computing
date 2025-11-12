import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EmailCapture from "../components/EmailCaptureSection";
import TermsOfService from "../components/TermsOfService";
import TopBanner from "../components/TopBanner";

export default function Terms() {
  return (
    <>
      <Helmet>
        {/* ✅ Local SEO for Terms of Service (Wyoming Focus) */}
        <title>Terms of Service | KI Computing | Wyoming IT Solutions</title>
        <meta
          name="description"
          content="Review the Terms of Service for KI Computing, Wyoming’s trusted IT solutions and cybersecurity provider. Learn about our policies, compliance, and service standards for clients across Cheyenne, Casper, and Laramie."
        />
        <meta
          name="keywords"
          content="Wyoming IT company terms, KI Computing Wyoming policies, IT services Wyoming, Cheyenne IT support, Casper IT company, Wyoming cybersecurity services"
        />
        <link rel="canonical" href="https://www.kicomputing.com/terms" />

        {/* ✅ Open Graph */}
        <meta
          property="og:title"
          content="Terms of Service | KI Computing | Wyoming IT Solutions"
        />
        <meta
          property="og:description"
          content="Learn about KI Computing’s Terms of Service — providing transparent IT and cybersecurity solutions to Wyoming businesses."
        />
        <meta property="og:url" content="https://www.kicomputing.com/terms" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.kicomputing.com/og-image.jpg"
        />
        <meta property="og:locale" content="en_US" />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Terms of Service | KI Computing | Wyoming IT Solutions"
        />
        <meta
          name="twitter:description"
          content="Read KI Computing’s Terms of Service. Transparent policies for IT and cybersecurity solutions across Wyoming."
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
              "https://g.page/ki-computing", // <-- link your Google Business Profile if available
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
        <TermsOfService />
        <EmailCapture />
        <Footer />
      </div>
    </>
  );
}
