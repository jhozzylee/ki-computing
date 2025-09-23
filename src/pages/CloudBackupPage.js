import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
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
        <title>Cloud Backup & Data Recovery in Wyoming | Ki Computing</title>
        <meta
          name="description"
          content="Protect sensitive medical and nonprofit data with Ki Computing's secure cloud backup and disaster recovery services in Wyoming. HIPAA-compliant IT solutions for healthcare and dental practices."
        />
        <link rel="canonical" href="https://www.kicomputing.com/cloud" />

        {/* ✅ Open Graph */}
        <meta
          property="og:title"
          content="Cloud Backup & Data Recovery in Wyoming | Ki Computing"
        />
        <meta
          property="og:description"
          content="HIPAA-compliant cloud backup and data recovery for Wyoming medical offices, dental practices, and nonprofits serving the developmentally disabled."
        />
        <meta
          property="og:url"
          content="https://www.kicomputing.com/cloud"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.kicomputing.com/og-cloud-backup.jpg"
        />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Cloud Backup & Data Recovery in Wyoming | Ki Computing"
        />
        <meta
          name="twitter:description"
          content="Secure, HIPAA-compliant cloud backup solutions for healthcare providers, dental clinics, and nonprofits in Wyoming."
        />
        <meta
          name="twitter:image"
          content="https://www.kicomputing.com/og-cloud-backup.jpg"
        />

        {/* ✅ Theme color */}
        <meta name="theme-color" content="#0A66C2" />
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
