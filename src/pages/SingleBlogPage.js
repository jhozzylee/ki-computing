import fs from "fs";
import path from "path";
import { client } from "./src/components/sanityClient";
import imageUrlBuilder from "@sanity/image-url";

// Sanity image builder
const builder = imageUrlBuilder(client);
const urlFor = (source) => builder.image(source).url();

const BASE_URL = "https://www.kicomputing.com";

async function generateSitemap() {
  console.log("⏳ Waiting 5 seconds before fetching Sanity data...");
  await new Promise((r) => setTimeout(r, 5000));

  // Fetch blog posts
  const query = `*[_type == "post" && defined(slug.current)]{
    "slug": slug.current,
    mainImage
  }`;
  const posts = await client.fetch(query);

  console.log(`✅ Found blog posts: ${posts.length}`);

  // Static pages
  const staticPages = [
    "",
    "about",
    "services",
    "blog",
    "contact",
    "cybersecurity",
    "compliance",
    "backup",
    "managed-it",
    "cloud",
    "consulting",
    "policy",
    "terms",
  ];

  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${staticPages
  .map(
    (page) => `
  <url>
    <loc>${BASE_URL}/${page}</loc>
    <changefreq>daily</changefreq>
    <priority>${page === "" ? "1.0" : "0.7"}</priority>
  </url>`
  )
  .join("")}
${posts
  .map((post) => {
    const imageUrl = post.mainImage ? urlFor(post.mainImage) : "";
    return `
  <url>
    <loc>${BASE_URL}/blog/${post.slug}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
    ${imageUrl ? `<image:image><image:loc>${imageUrl}</image:loc></image:image>` : ""}
  </url>`;
  })
  .join("")}
</urlset>`;

  // Write to public/
  const publicPath = path.join(process.cwd(), "public", "sitemap.xml");
  fs.writeFileSync(publicPath, sitemap.trim());
  console.log("✅ Sitemap written to /public/sitemap.xml");

  // Copy to build/ if exists
  const buildPath = path.join(process.cwd(), "build", "sitemap.xml");
  if (fs.existsSync(path.join(process.cwd(), "build"))) {
    fs.copyFileSync(publicPath, buildPath);
    console.log("🚀 Sitemap copied to /build/sitemap.xml (for deployment)");
  } else {
    console.log("⚠️ Build folder not found yet — will be copied next build");
  }
}

generateSitemap().catch((err) => console.error("❌ Sitemap generation failed:", err));
