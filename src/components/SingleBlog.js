import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "./sanityClient";
import { PortableText } from "@portabletext/react";

const SingleBlog = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const query = `*[_type == "post" && slug.current == $slug][0]{
          title,
          mainImage{ asset->{ url } },
          body,
          publishedAt
        }`;

        const data = await client.fetch(query, { slug });
        setPost(data);
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
        <div className="flex-col gap-1"> 
            {/* Title */}
        <h2 className="text-h2 font-filson">{post.title}</h2>
        {/* Meta */}
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
      </div>
    </article>
  );
};

export default SingleBlog;
