import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EmailCapture from "../components/EmailCaptureSection";
import TopBanner from "../components/TopBanner";
import SingleBlog from "../components/SingleBlog";

export default function SingleBlogPage() {
  const { slug } = useParams(); // 👈 get slug from URL

  // 🔑 Ideally, fetch blog metadata from your CMS (Sanity, etc.)
  // For now, we can set defaults:
  const blogTitle = `Ki Computing Blog | ${slug.replace(/-/g, " ")}`;
  const blogDescription =
    "Read the latest IT tips, cybersecurity updates, and HIPAA compliance insights tailored for Wyoming healthcare providers, dental offices, and nonprofits.";
  const blogUrl = `https://www.kicomputing.com/blog/${slug}`;
  const blogImage = "https://www.kicomputing.com/og-blog.jpg"; // ✅ replace with blog image if available

  return (
    <>
      <Helmet>
        <title>{blogTitle}</title>
        <meta name="description" content={blogDescription} />
        <link rel="canonical" href={blogUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={blogTitle} />
        <meta property="og:description" content={blogDescription} />
        <meta property="og:url" content={blogUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={blogImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blogTitle} />
        <meta name="twitter:description" content={blogDescription} />
        <meta name="twitter:image" content={blogImage} />

        {/* Theme color */}
        <meta name="theme-color" content="#0A66C2" />
      </Helmet>

      <div>
        <TopBanner />
        <Header />
        <SingleBlog /> {/* 👈 single post content */}
        <EmailCapture />
        <Footer />
      </div>
    </>
  );
}
