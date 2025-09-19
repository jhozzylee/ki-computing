import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EmailCapture from "../components/EmailCaptureSection";
import TopBanner from "../components/TopBanner";
import SingleBlog from "../components/SingleBlog";

export default function SingleBlogPage() {
  return (
    <div>
      <TopBanner />
      <Header />
      <SingleBlog />   {/* 👈 single post */}
      <EmailCapture />
      <Footer />
    </div>
  );
}
