const fs = require("fs");
const path = require("path");
const { client } = require("./src/components/sanityClient");

const BASE_URL = "https://www.kicomputing.com";

async function generateSitemap() {
  try {
    // ✅ Fetch all blog slugs from Sanity
    const query = `*[_type == "post"]{ "slug": slug.current }`;
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
    <changefreq>monthly</changefreq>
    <priority>${page === "" ? "1.0" : "0.7"}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

    // ✅ Save to public folder
    const outputPath = path.join(__dirname, "public", "sitemap.xml");
    fs.writeFileSync(outputPath, sitemap.trim());
    console.log("✅ Sitemap generated successfully:", outputPath);
  } catch (error) {
    console.error("❌ Error generating sitemap:", error.message);
  }
}

generateSitemap();
