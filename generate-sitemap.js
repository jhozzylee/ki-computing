import fs from "fs";
import path from "path";
import axios from "axios";

// ⚙️ Replace this with your actual Sanity project ID and dataset
const SANITY_PROJECT_ID = "uma8cfiu"; // 👈 your ID
const SANITY_DATASET = "blog"; // 👈 your dataset (replace if different)
const SANITY_QUERY =
  "*[_type == 'post' && defined(slug.current)]{slug}";

const SANITY_API = `https://${SANITY_PROJECT_ID}.api.sanity.io/v2023-10-07/data/query/${SANITY_DATASET}?query=${encodeURIComponent(
  SANITY_QUERY
)}`;

const BASE_URL = "https://www.kicomputing.com";

async function generateSitemap() {
  try {
    console.log("⏳ Waiting 5 seconds before fetching Sanity data...");
    await new Promise((r) => setTimeout(r, 5000));

    console.log("🌐 Fetching posts from:", SANITY_API);
    const res = await axios.get(SANITY_API);

    const posts = res.data.result || [];
    console.log(`✅ Found blog posts: ${posts.length}`);

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

    // ✅ Combine static and blog pages
    const allUrls = [
      ...staticPages.map(
        (page) => `
  <url>
    <loc>${BASE_URL}/${page}</loc>
    <changefreq>daily</changefreq>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
  </url>`
      ),
      ...posts.map(
        (post) => `
  <url>
    <loc>${BASE_URL}/blog/${post.slug.current}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>`
      ),
    ].join("");

    // ✅ Build sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls}
</urlset>`;

    // ✅ Save to /public
    const publicPath = path.join(process.cwd(), "public", "sitemap.xml");
    fs.writeFileSync(publicPath, sitemap);
    console.log("✅ Sitemap written to /public/sitemap.xml");

    // ✅ Also copy to /build if exists (for CRA deployments)
    const buildPath = path.join(process.cwd(), "build", "sitemap.xml");
    if (fs.existsSync(path.join(process.cwd(), "build"))) {
      fs.copyFileSync(publicPath, buildPath);
      console.log("🚀 Sitemap copied to /build/sitemap.xml (for deployment)");
    } else {
      console.log("⚠️ Build folder not found yet — will be copied next build");
    }
  } catch (err) {
    console.error("❌ Sitemap generation failed:", err.message);
  }
}

generateSitemap();
