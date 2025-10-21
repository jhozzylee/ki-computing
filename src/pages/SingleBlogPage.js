import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EmailCapture from "../components/EmailCaptureSection";
import TopBanner from "../components/TopBanner";
import SingleBlog from "../components/SingleBlog";

// Dummy fetch function: replace with your CMS API
async function fetchBlog(slug) {
  // Example structure returned from your CMS
  return {
    title: slug.replace(/-/g, " "),
    description:
      "Read the latest IT tips, cybersecurity updates, and HIPAA compliance insights tailored for Wyoming healthcare providers, dental offices, and nonprofits.",
    mainImage: `https://www.kicomputing.com/blog-images/${slug}.jpg`, // example path
    content: "<p>Blog content goes here...</p>",
  };
}

export default function SingleBlogPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetchBlog(slug).then((data) => setBlog(data));
  }, [slug]);

  if (!blog) return <div className="p-12">Loading...</div>;

  const blogTitle = `Ki Computing Blog | ${blog.title}`;
  const blogDescription = blog.description;
  const blogUrl = `https://www.kicomputing.com/blog/${slug}`;
  const blogImage = blog.mainImage || "https://www.kicomputing.com/default-blog.jpg";

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
        <SingleBlog blog={blog} />
        <EmailCapture />
        <Footer />
      </div>
    </>
  );
}
