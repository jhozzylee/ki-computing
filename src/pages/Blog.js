import React  from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EmailCapture from "../components/EmailCaptureSection";
import BlogIntro from "../components/BlogPost";
import TopBanner from "../components/TopBanner";

export default function Blog() {

  return (
    <>
      <div>
        <TopBanner />
        <Header />
        <BlogIntro />
        <EmailCapture />
        <Footer />
      </div>

      
    </>
  );
}
