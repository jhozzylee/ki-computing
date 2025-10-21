import fs from "fs";
import path from "path";
import axios from "axios";

const SANITY_API = "https://your_sanity_project_id.api.sanity.io/v2023-10-07/data/query/production?query=*[_type=='post']{slug}";

async function generateSitemap() {
  console.log("⏳ Waiting 5 seconds before fetching Sanity data...");
  await new Promise((r) => setTimeout(r, 5000));

  const res = await axios.get(SANITY_API);
  const posts = res.data.result || [];
  console.log(`✅ Found blog posts: ${posts.length}`);

  const baseUrl = "https://www.kicomputing.com";
  const pages = [
    "",
    "about",
    "contact",
    "pricing",
    "blog",
    "expertise",
    "results",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
  <url>
    <loc>${baseUrl}/${page}</loc>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("")}
${posts
  .map(
    (post) => `
  <url>
    <loc>${baseUrl}/blog/${post.slug.current}</loc>
    <priority>0.7</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  // Save to public/
  const publicPath = path.join(process.cwd(), "public", "sitemap.xml");
  fs.writeFileSync(publicPath, sitemap);
  console.log("✅ Sitemap written to /public/sitemap.xml");

  // Copy to build/ (if it exists)
  const buildPath = path.join(process.cwd(), "build", "sitemap.xml");
  if (fs.existsSync(path.join(process.cwd(), "build"))) {
    fs.copyFileSync(publicPath, buildPath);
    console.log("🚀 Sitemap copied to /build/sitemap.xml (for deployment)");
  } else {
    console.log("⚠️ Build folder not found yet — will be copied next build");
  }
}

generateSitemap().catch((err) => console.error("❌ Sitemap generation failed:", err));
