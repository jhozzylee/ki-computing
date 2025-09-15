import React  from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EmailCapture from "../components/EmailCaptureSection";
import PrivacyPolicy from "../components/PrivacyPolicy";
import TopBanner from "../components/TopBanner";

export default function Blog() {

  return (
    <>
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
