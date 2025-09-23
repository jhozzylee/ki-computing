import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
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
        <title>Data Backup & Recovery in Wyoming | Ki Computing</title>
        <meta
          name="description"
          content="Protect your business from data loss with Ki Computing’s backup & disaster recovery services in Wyoming. Trusted by medical offices, dental practices, and nonprofits."
        />
        <link rel="canonical" href="https://www.kicomputing.com/backup-recovery" />

        {/* ✅ Open Graph */}
        <meta property="og:title" content="Data Backup & Recovery in Wyoming | Ki Computing" />
        <meta
          property="og:description"
          content="Ki Computing provides reliable data backup and disaster recovery solutions for Wyoming businesses, including healthcare and nonprofits."
        />
        <meta property="og:url" content="https://www.kicomputing.com/backup-recovery" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.kicomputing.com/og-backup.jpg" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Data Backup & Recovery in Wyoming | Ki Computing" />
        <meta
          name="twitter:description"
          content="Wyoming IT experts in secure data backup & disaster recovery for medical offices, dental practices, and nonprofits."
        />
        <meta name="twitter:image" content="https://www.kicomputing.com/og-backup.jpg" />

        {/* ✅ Theme Color */}
        <meta name="theme-color" content="#0A66C2" />
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
