const fs = require("fs");
const path = require("path");
const { client } = require("./src/components/sanityClient");

const BASE_URL = "https://www.kicomputing.com";

async function generateSitemap() {
  try {
    console.log("⏳ Waiting 5 seconds before fetching Sanity data...");
    await new Promise((resolve) => setTimeout(resolve, 5000)); // small delay for freshness

    // ✅ Fetch all blog slugs from Sanity
    const query = `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`;
    const blogs = await client.fetch(query);

    console.log("✅ Found blog posts:", blogs.length);

    // ✅ Static pages
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

    // ✅ Merge static + dynamic
    const allPages = [
      ...staticPages,
      ...blogs.map((b) => `blog/${b.slug}`),
    ];

    // ✅ Generate sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `
  <url>
    <loc>${BASE_URL}/${page}</loc>
    <changefreq>daily</changefreq>
    <priority>${page === "" ? "1.0" : "0.7"}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

    // ✅ Paths
    const publicPath = path.join(__dirname, "public", "sitemap.xml");
    const buildPath = path.join(__dirname, "build", "sitemap.xml");

    // ✅ Write to /public
    fs.writeFileSync(publicPath, sitemap.trim());
    console.log("✅ Sitemap written to /public/sitemap.xml");

    // ✅ Also copy to /build (for CRA deployment on Vercel)
    if (fs.existsSync(path.join(__dirname, "build"))) {
      fs.writeFileSync(buildPath, sitemap.trim());
      console.log("✅ Sitemap also copied to /build/sitemap.xml");
    } else {
      console.log("⚠️ Build folder not found yet — will be copied next build");
    }

  } catch (error) {
    console.error("❌ Error generating sitemap:", error.message);
  }
}

generateSitemap();
