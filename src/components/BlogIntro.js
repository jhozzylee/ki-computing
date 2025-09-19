import React, { useEffect, useState } from "react";
import { client } from "./sanityClient";

const BlogIntro = () => {
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [olderBlogs, setOlderBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(6); // Number of blogs per page

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Fetch latest 3 blogs
        const latestData = await client.fetch(
          `*[_type == "post"] | order(publishedAt desc)[0..3]{
            _id,
            title,
            slug,
            excerpt,
            publishedAt,
            mainImage{
              asset->{url}
            }
          }`
        );
        setLatestBlogs(latestData);

        // Fetch all blogs after the latest 3
        const olderData = await client.fetch(
          `*[_type == "post"] | order(publishedAt desc)[4..]{
            _id,
            title,
            slug,
            excerpt,
            publishedAt,
            mainImage{
              asset->{url}
            }
          }`
        );
        setOlderBlogs(olderData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = olderBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(olderBlogs.length / blogsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <section className="bg-background text-neutral py-20 px-4 sm:px-6 lg:px-0 pt-24 sm:pt-28 lg:pt-36">
      <div className="max-w-[1120px] mx-auto flex flex-col gap-12">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
          <h1 className="text-h2 sm:text-h1 lg:text-h1 font-filson">
            Insights and inspiration, <br />
            Explore, Our Blogs
          </h1>
          <p className="text-body text-neutral max-w-[576px] mx-auto">
            Dive into our blogs and discover practical IT tips, industry trends,
            and expert guidance for your business.
          </p>
        </div>

        {/* Latest Blogs */}
        <div className="flex flex-col gap-8 py-8">
          <h2 className="text-h2 text-center font-filson">
            Latest <span className="text-primary">Blogs</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestBlogs.map((blog) => (
              <a
                key={blog._id}
                href={`/blog/${blog.slug.current}`}
                className="group bg-surface rounded-[16px] overflow-hidden hover:shadow-lg flex flex-col"
              >
                {blog.mainImage?.asset?.url && (
                  <img
                    src={blog.mainImage.asset.url}
                    alt={blog.title}
                    className="h-[306px] w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                <div className="flex flex-col py-6 gap-4 px-2">
                  <h3 className="text-h3 font-filson group-hover:text-primary">
                    {blog.title}
                  </h3>
                  <p className="text-body text-neutral">{blog.excerpt}</p>
                  <span className="text-xs text-neutral">
                    {new Date(blog.publishedAt).toLocaleDateString()}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Older Blogs with Pagination */}
        <div className="flex flex-col gap-8 mt-12">
          <h2 className="text-h2 text-center font-filson">
            Older <span className="text-primary">Blogs</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentBlogs.map((blog) => (
              <a
                key={blog._id}
                href={`/blog/${blog.slug.current}`}
                className="group bg-surface overflow-hidden rounded-[16px] flex flex-col hover:shadow-lg transition-all duration-200"
              >
                {blog.mainImage?.asset?.url && (
                  <img
                    src={blog.mainImage.asset.url}
                    alt={blog.title}
                    className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                <div className="flex flex-col py-6 px-2 gap-4">
                  <h3 className="text-h4 font-filson ">
                    {blog.title}
                  </h3>
                  <span className="text-sm text-neutral">
                    {new Date(blog.publishedAt).toLocaleDateString()}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-surface-muted rounded disabled:opacity-50 hover:bg-surface-dim transition"
            >
              Previous
            </button>
            <span className="px-2 py-2">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-surface-muted rounded disabled:opacity-50 hover:bg-surface-dim transition"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogIntro;
