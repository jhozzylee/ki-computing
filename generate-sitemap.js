const fs = require("fs");
const path = require("path");

const BASE_URL = "https://www.kicomputing.com";

// ✅ Static pages (always included)
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

// ✅ Blog pages — automatically read from your blog folder
// Adjust this path to where your blog files or slugs are stored
const blogDirectory = path.join(__dirname, "src", "blogs"); // <-- change if needed

let blogPages = [];
if (fs.existsSync(blogDirectory)) {
  const files = fs.readdirSync(blogDirectory);
  blogPages = files
    .filter((file) => file.endsWith(".js") || file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => `blog/${path.basename(file, path.extname(file))}`);
}

// ✅ Combine all URLs
const allPages = [...staticPages, ...blogPages];

// ✅ Generate XML content
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
>
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
</urlset>
`;

// ✅ Save sitemap to /public
const outputPath = path.join(__dirname, "public", "sitemap.xml");
fs.writeFileSync(outputPath, sitemap.trim());
console.log("✅ Sitemap generated successfully:", outputPath);
