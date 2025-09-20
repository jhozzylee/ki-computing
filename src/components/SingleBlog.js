import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { client } from "./sanityClient";
import { PortableText } from "@portabletext/react";

const SingleBlog = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [prevPost, setPrevPost] = useState(null);
  const [nextPost, setNextPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Fetch current post
        const query = `*[_type == "post" && slug.current == $slug][0]{
          _id,
          title,
          slug,
          mainImage{ asset->{ url } },
          body,
          publishedAt
        }`;
        const data = await client.fetch(query, { slug });

        if (data) {
          setPost(data);

          // Fetch previous (older) post
          const prevQuery = `*[_type == "post" && publishedAt < $date] 
            | order(publishedAt desc)[0]{
              slug
            }`;
          const prev = await client.fetch(prevQuery, { date: data.publishedAt });
          setPrevPost(prev);

          // Fetch next (newer) post
          const nextQuery = `*[_type == "post" && publishedAt > $date] 
            | order(publishedAt asc)[0]{
              slug
            }`;
          const next = await client.fetch(nextQuery, { date: data.publishedAt });
          setNextPost(next);
        }
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    };

    fetchPost();
  }, [slug]);

  if (!post) return <p className="text-center py-20">Loading...</p>;

  return (
    <article className="bg-background text-neutral-default pt-24 sm:pt-28 lg:pt-36">
      <div className="py-10 max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-0 flex flex-col gap-6">
        {/* Title & Meta */}
        <div>
          <h2 className="text-h2 font-filson">{post.title}</h2>
          <p className="text-sm text-neutral mb-2">
            Posted on {new Date(post.publishedAt).toLocaleDateString()}
          </p>
        </div>

        {/* Featured Image */}
        {post.mainImage?.asset?.url && (
          <img
            src={post.mainImage.asset.url}
            alt={post.title}
            className="w-full rounded-xl mb-6"
          />
        )}

        {/* Blog Content */}
        <div className="prose prose-lg prose-neutral max-w-[1080px]">
          <PortableText value={post.body} />
        </div>

        {/* Next / Previous Buttons */}
        <div className="flex justify-between mt-12 border-t pt-6">
          {nextPost ? (
            <Link
              to={`/blog/${nextPost.slug.current}`}
              className="px-4 py-2 border-b border-transparent rounded-[40px] hover:text-primary hover:border-b hover:border-primary transition"
            >
              ← Previous Post
            </Link>
          ) : (
            <span />
          )}
          {prevPost ? (
            <Link
              to={`/blog/${prevPost.slug.current}`}
              className="px-4 py-2 border-b border-transparent rounded-[40px] hover:text-primary hover:border-b hover:border-primary transition"
            >
              Next Post →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </article>
  );
};

export default SingleBlog;
