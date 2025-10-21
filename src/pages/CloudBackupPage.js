import React, { useState } from "react";
import { Helmet } from "react-helmet";
import BookCall from "../components/BookCall";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EmailCapture from "../components/EmailCaptureSection";
import CloudBackup from "../components/CloudBackup";
import TopBanner from "../components/TopBanner";

export default function CloudBackupPage() {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  const handleOpenBookCall = () => setIsBookCallOpen(true);
  const handleCloseBookCall = () => setIsBookCallOpen(false);

  return (
    <>
      <Helmet>
        {/* ✅ Localized SEO */}
        <title>Cloud Backup & Disaster Recovery in Wyoming | Ki Computing</title>
        <meta
          name="description"
          content="Ki Computing provides secure, HIPAA-compliant cloud backup and disaster recovery services in Wyoming. Protect your business, medical office, or nonprofit with reliable local IT experts."
        />
        <meta
          name="keywords"
          content="cloud backup Wyoming, data recovery Wyoming, HIPAA cloud backup, managed IT services Wyoming, disaster recovery Wyoming, secure data backup Wyoming, Ki Computing Wyoming"
        />
        <link rel="canonical" href="https://www.kicomputing.com/cloud" />

        {/* ✅ Open Graph */}
        <meta
          property="og:title"
          content="Cloud Backup & Disaster Recovery in Wyoming | Ki Computing"
        />
        <meta
          property="og:description"
          content="Secure and HIPAA-compliant cloud backup and recovery solutions for healthcare, dental, and nonprofit organizations in Wyoming."
        />
        <meta property="og:url" content="https://www.kicomputing.com/cloud" />
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
          content="Cloud Backup & Disaster Recovery in Wyoming | Ki Computing"
        />
        <meta
          name="twitter:description"
          content="Wyoming IT experts in HIPAA-compliant cloud backup and disaster recovery. Trusted by healthcare providers and nonprofits."
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
        <CloudBackup onOpenBookCall={handleOpenBookCall} />
        <EmailCapture />
        <Footer />
      </div>

      {/* Book a Call Modal */}
      <BookCall isOpen={isBookCallOpen} onClose={handleCloseBookCall} />
    </>
  );
}
