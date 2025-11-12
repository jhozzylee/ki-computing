import React, { useState } from "react";
import { Helmet } from "react-helmet";
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
        {/* ✅ Wyoming Local SEO */}
        <title>About Ki Computing | Trusted IT Experts in Wyoming</title>
        <meta
          name="description"
          content="Ki Computing is a trusted IT company in Wyoming providing HIPAA-compliant IT services, cybersecurity, and managed IT support for medical offices, dental practices, and nonprofits."
        />
        <link rel="canonical" href="https://www.kicomputing.com/about" />

        {/* ✅ Local Keywords */}
        <meta
          name="keywords"
          content="Wyoming IT services, IT support in Wyoming, Wyoming cybersecurity, managed IT Wyoming, HIPAA IT Wyoming, medical IT Wyoming, dental IT support Wyoming"
        />

        {/* ✅ Open Graph */}
        <meta property="og:title" content="About Ki Computing | Trusted IT Experts in Wyoming" />
        <meta
          property="og:description"
          content="Learn about Ki Computing, a Wyoming-based IT services provider helping healthcare, dental, and nonprofit organizations stay secure and compliant."
        />
        <meta property="og:url" content="https://www.kicomputing.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.kicomputing.com/og-image.jpg" />
        <meta property="og:locale" content="en_US" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Ki Computing | Trusted IT Experts in Wyoming" />
        <meta
          name="twitter:description"
          content="Wyoming IT experts specializing in secure, HIPAA-compliant IT support for medical and nonprofit organizations."
        />
        <meta name="twitter:image" content="https://www.kicomputing.com/og-image.jpg" />

        {/* ✅ Theme Color */}
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
