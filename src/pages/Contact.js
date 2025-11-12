import React, { useState } from "react";
import { Helmet } from "react-helmet";
import BookCall from "../components/BookCall";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EmailCapture from "../components/EmailCaptureSection";
import ContactForm from "../components/ContactForm";
import TopBanner from "../components/TopBanner";

export default function Contact() {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  const handleOpenBookCall = () => setIsBookCallOpen(true);
  const handleCloseBookCall = () => setIsBookCallOpen(false);

  return (
    <>
      <Helmet>
        {/* ✅ Localized SEO for Wyoming */}
        <title>Managed IT Services in Wyoming | Ki Computing</title>
        <meta
          name="description"
          content="Ki Computing provides IT services in Wyoming for medical offices, dental practices, and nonprofits. Specializing in HIPAA compliance, cybersecurity, cloud backups, and managed IT support."
        />
        <link rel="canonical" href="https://www.kicomputing.com/services" />

        {/* ✅ Open Graph */}
        <meta
          property="og:title"
          content="Managed IT Services in Wyoming | Ki Computing"
        />
        <meta
          property="og:description"
          content="Serving Wyoming medical practices, dental offices, and nonprofits — Ki Computing offers HIPAA-compliant IT solutions, cloud backup, and cybersecurity services."
        />
        <meta property="og:url" content="https://www.kicomputing.com/services" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content="https://www.kicomputing.com/og-image.jpg"
        />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Managed IT Services in Wyoming | Ki Computing"
        />
        <meta
          name="twitter:description"
          content="Comprehensive IT solutions for Wyoming businesses — HIPAA compliance, cybersecurity, cloud backups, and IT support."
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
            priceRange: "$$",
            department: [
              {
                "@type": "ProfessionalService",
                name: "Managed IT Services",
                serviceType: [
                  "HIPAA Compliance",
                  "Cybersecurity",
                  "Data Backup",
                  "IT Support",
                  "Cloud Solutions",
                ],
                areaServed: {
                  "@type": "State",
                  name: "Wyoming",
                },
                offers: {
                  "@type": "Offer",
                  url: "https://www.kicomputing.com/contact",
                  price: "0",
                  priceCurrency: "USD",
                  category: "Consultation",
                  description:
                    "Free consultation for Wyoming healthcare providers, dental practices, and nonprofits seeking managed IT solutions.",
                },
              },
            ],
          })}
        </script>

        {/* ✅ Professional Service Schema for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Managed IT Services - Ki Computing",
            url: "https://www.kicomputing.com/contact",
            logo: "https://www.kicomputing.com/og-image.jpg",
            description:
              "Managed IT services, HIPAA compliance, and cybersecurity support for Wyoming medical offices, dental clinics, and nonprofits.",
            serviceType: [
              "Managed IT",
              "HIPAA Compliance",
              "Cybersecurity",
              "Cloud Backup",
              "Data Protection",
            ],
            areaServed: ["Wyoming"],
            telephone: "(307) 254-9944",
            sameAs: [
              "https://www.facebook.com/kicomputing",
              "https://www.linkedin.com/company/k.i.-computing/",
              "https://www.instagram.com/kicomputing/",
              "https://twitter.com/computing_i",
            ],
            serviceAudience: {
              "@type": "Audience",
              audienceType:
                "Healthcare providers, Dental practices, Nonprofit organizations",
            },
          })}
        </script>
      </Helmet>

      {/* ✅ Page Content */}
      <div>
        <TopBanner />
        <Header />
        <ContactForm onOpenBookCall={handleOpenBookCall} />
        <EmailCapture />
        <Footer />
      </div>

      {/* ✅ Book a Call Modal */}
      <BookCall isOpen={isBookCallOpen} onClose={handleCloseBookCall} />
    </>
  );
}
