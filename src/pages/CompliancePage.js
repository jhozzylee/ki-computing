import React, { useState } from "react";
import { Helmet } from "react-helmet";
import BookCall from "../components/BookCall";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EmailCapture from "../components/EmailCaptureSection";
import Compliance from "../components/Compliance";
import TopBanner from "../components/TopBanner";

export default function CompliancePage() {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);

  const handleOpenBookCall = () => setIsBookCallOpen(true);
  const handleCloseBookCall = () => setIsBookCallOpen(false);

  return (
    <>
      <Helmet>
        {/* ✅ Localized SEO */}
        <title>HIPAA & IT Compliance Services in Wyoming | Ki Computing</title>
        <meta
          name="description"
          content="Ki Computing provides HIPAA-compliant IT solutions for Wyoming medical practices, dental offices, and nonprofits. Protect patient data, meet compliance standards, and avoid costly fines."
        />
        <link rel="canonical" href="https://www.kicomputing.com/compliance" />

        {/* ✅ Open Graph */}
        <meta
          property="og:title"
          content="HIPAA & IT Compliance Services in Wyoming | Ki Computing"
        />
        <meta
          property="og:description"
          content="Ensure HIPAA compliance with Ki Computing's IT services for Wyoming healthcare providers, dental practices, and nonprofits serving the developmentally disabled."
        />
        <meta property="og:url" content="https://www.kicomputing.com/compliance" />
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
          content="HIPAA & IT Compliance Services in Wyoming | Ki Computing"
        />
        <meta
          name="twitter:description"
          content="Protect sensitive patient and nonprofit data with HIPAA-compliant IT solutions from Ki Computing in Wyoming."
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
                name: "HIPAA & IT Compliance Services",
                serviceType: "HIPAA Compliance, IT Security, Data Protection",
                areaServed: {
                  "@type": "State",
                  name: "Wyoming",
                },
                availableChannel: {
                  "@type": "ServiceChannel",
                  serviceUrl: "https://www.kicomputing.com/compliance",
                  availableLanguage: ["English"],
                },
                offers: {
                  "@type": "Offer",
                  url: "https://www.kicomputing.com/contact",
                  price: "0",
                  priceCurrency: "USD",
                  category: "Consultation",
                  description:
                    "Free initial consultation for Wyoming medical and nonprofit organizations needing HIPAA compliance support.",
                },
              },
            ],
          })}
        </script>

        {/* ✅ Additional Service Schema (explicit ProfessionalService entry) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "HIPAA & IT Compliance Services - Ki Computing",
            url: "https://www.kicomputing.com/compliance",
            logo: "https://www.kicomputing.com/og-image.jpg",
            description:
              "Ki Computing helps Wyoming healthcare providers, dental offices, and nonprofits achieve HIPAA compliance through security audits, policy development, and technical controls.",
            serviceType: [
              "HIPAA Compliance Consulting",
              "Security Risk Assessment",
              "Policy & Procedure Development",
              "Technical Safeguards Implementation"
            ],
            providerMobility: "static",
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
              audienceType: "Healthcare providers, Dental practices, Nonprofit organizations"
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Compliance Services Catalog",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "HIPAA Compliance Assessment",
                  description: "Comprehensive HIPAA security risk assessment tailored to Wyoming healthcare providers.",
                  url: "https://www.kicomputing.com/compliance#assessment"
                },
                {
                  "@type": "Offer",
                  name: "Policy & Procedure Package",
                  description: "Documented policies and procedures to meet HIPAA administrative requirements.",
                  url: "https://www.kicomputing.com/compliance#policies"
                },
                {
                  "@type": "Offer",
                  name: "Technical Safeguards Implementation",
                  description: "Implementation of encryption, access controls, and backup strategies.",
                  url: "https://www.kicomputing.com/compliance#technical"
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <div>
        <TopBanner />
        <Header />
        <Compliance onOpenBookCall={handleOpenBookCall} />
        <EmailCapture />
        <Footer />
      </div>

      {/* Book a Call Modal */}
      <BookCall isOpen={isBookCallOpen} onClose={handleCloseBookCall} />
    </>
  );
}
