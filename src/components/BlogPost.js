import React, { useEffect, useState } from "react";

const BlogIntro = () => {
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Fetch latest 4 blogs
        const latestRes = await fetch(
          "https://www.kicomputing.com/wp-json/wp/v2/posts?per_page=4&orderby=date&order=desc&_embed"
        );
        const latestData = await latestRes.json();
        setLatestBlogs(latestData);

        // Fetch older blogs (after the first 4)
        const olderRes = await fetch(
          "https://www.kicomputing.com/wp-json/wp/v2/posts?per_page=100&offset=4&orderby=date&order=desc&_embed"
        );
        const olderData = await olderRes.json();
        setAllBlogs(olderData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="bg-background text-neutral py-20 px-4 sm:px-6 lg:px-0 pt-24 sm:pt-28 lg:pt-36">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-0 flex flex-col gap-12">
        {/* Intro Heading */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
          <h1 className="text-h2 sm:text-h1 lg:text-h1 leading-tight font-filson">
            Insights and inspiration, <br />
            Explore, Our Blogs
          </h1>
          <p className="text-body text-neutral max-w-[576px]">
            Dive into our blogs and discover practical IT tips, industry trends,
            and expert guidance for your business.
          </p>
        </div>

        {/* Latest Blogs */}
        <div className="flex flex-col gap-8">
          <h2 className="text-h3 font-filson">
            Latest <span className="text-primary">Blog</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestBlogs.map((blog) => (
              <a
                key={blog.id}
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-surface rounded-[16px] overflow-hidden flex flex-col"
              >
                {blog._embedded?.["wp:featuredmedia"] ? (
                  <img
                    src={blog._embedded["wp:featuredmedia"][0].source_url}
                    alt={blog.title.rendered}
                    className="h-[306px] w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : null}
                <div className="flex flex-col p-6 gap-4">
                  <h3
                    className="text-h3 font-filson group-hover:text-primary"
                    dangerouslySetInnerHTML={{ __html: blog.title.rendered }}
                  />
                  <p
                    className="text-body text-neutral"
                    dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered }}
                  />
                  <span className="text-xs text-neutral">
                    {new Date(blog.date).toLocaleDateString()}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* All Blogs */}
        <div className="flex flex-col gap-8 mt-12">
          <h2 className="text-h3 font-filson">
            All <span className="text-primary">Blogs</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {allBlogs.map((blog) => (
              <a
                key={blog.id}
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-surface rounded-[16px] overflow-hidden border border-surface-muted flex flex-col hover:shadow-lg transition-all duration-200"
              >
                {blog._embedded?.["wp:featuredmedia"] ? (
                  <img
                    src={blog._embedded["wp:featuredmedia"][0].source_url}
                    alt={blog.title.rendered}
                    className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : null}
                <div className="flex flex-col p-6 gap-4">
                  <h3
                    className="text-h3 font-filson group-hover:text-primary"
                    dangerouslySetInnerHTML={{ __html: blog.title.rendered }}
                  />
                  <span className="text-sm text-surface-dim">
                    {new Date(blog.date).toLocaleDateString()}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogIntro;
