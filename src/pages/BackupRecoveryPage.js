import React, { useState } from "react";
import { Helmet } from "react-helmet";
import BookCall from "../components/BookCall";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EmailCapture from "../components/EmailCaptureSection";
import Backup from "../components/BackupRecovery";
import TopBanner from "../components/TopBanner";

export default function BackupRecoveryPage() {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  const handleOpenBookCall = () => setIsBookCallOpen(true);
  const handleCloseBookCall = () => setIsBookCallOpen(false);

  return (
    <>
      <Helmet>
        {/* ✅ Localized SEO for Wyoming */}
        <title>Data Backup & Disaster Recovery in Wyoming | Ki Computing</title>
        <meta
          name="description"
          content="Ki Computing provides secure data backup and disaster recovery services in Wyoming. Protect your business, medical office, or nonprofit from data loss and downtime with expert local IT support."
        />
        <link rel="canonical" href="https://www.kicomputing.com/backup" />

        {/* ✅ Local Keywords */}
        <meta
          name="keywords"
          content="data backup Wyoming, disaster recovery Wyoming, managed IT Wyoming, HIPAA backup services Wyoming, medical IT support Wyoming, IT disaster recovery Wyoming, Ki Computing Wyoming"
        />

        {/* ✅ Open Graph */}
        <meta
          property="og:title"
          content="Data Backup & Disaster Recovery in Wyoming | Ki Computing"
        />
        <meta
          property="og:description"
          content="Reliable data backup and recovery services for Wyoming businesses. Ki Computing keeps your data secure and your systems running smoothly."
        />
        <meta
          property="og:url"
          content="https://www.kicomputing.com/backup"
        />
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
          content="Data Backup & Disaster Recovery in Wyoming | Ki Computing"
        />
        <meta
          name="twitter:description"
          content="Wyoming IT experts specializing in secure data backup, recovery, and HIPAA-compliant protection for medical offices and nonprofits."
        />
        <meta
          name="twitter:image"
          content="https://www.kicomputing.com/og-image.jpg"
        />

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
        <Backup onOpenBookCall={handleOpenBookCall} />
        <EmailCapture />
        <Footer />
      </div>

      {/* Book a Call Modal */}
      <BookCall isOpen={isBookCallOpen} onClose={handleCloseBookCall} />
    </>
  );
}
