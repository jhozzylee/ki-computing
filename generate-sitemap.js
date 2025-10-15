// generate-sitemap.js
const fs = require("fs");
const path = require("path");
const { client } = require("./src/components/sanityClient"); // ✅ fixed path

const BASE_URL = "https://www.kicomputing.com";

async function generateSitemap() {
  try {
    // ✅ Fetch all blog slugs from Sanity
    const query = `*[_type == "blog"]{ "slug": slug.current }`;
    const blogs = await client.fetch(query);

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

    // ✅ Combine static + dynamic blog URLs
    const allPages = [
      ...staticPages,
      ...blogs.map((b) => `blog/${b.slug}`),
    ];

    // ✅ Create XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `
  <url>
    <loc>${BASE_URL}/${page}</loc>
    <changefreq>monthly</changefreq>
    <priority>${page === "" ? "1.0" : "0.7"}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

    // ✅ Save to /public/sitemap.xml
    const outputPath = path.join(__dirname, "public", "sitemap.xml");
    fs.writeFileSync(outputPath, sitemap.trim());
    console.log("✅ Sitemap generated successfully:", outputPath);
  } catch (error) {
    console.error("❌ Error generating sitemap:", error);
  }
}

generateSitemap();
