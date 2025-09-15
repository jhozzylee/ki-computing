import React  from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EmailCapture from "../components/EmailCaptureSection";
import TermsOfService from "../components/TermsOfService";
import TopBanner from "../components/TopBanner";

export default function Blog() {

  return (
    <>
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
