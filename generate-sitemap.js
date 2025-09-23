const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: "https://yourdomain.com" }); 
  // ⬆️ Replace with your custom domain (not the vercel.app one)

  // List of all routes in your App.js
  const routes = [
    "/", 
    "/about",
    "/services",
    "/blog",
    "/blog/:slug", // Dynamic blog route
    "/contact",
    "/cybersecurity",
    "/compliance",
    "/backup",
    "/managed-it",
    "/cloud",
    "/consulting",
    "/policy",
    "/terms"
  ];

  // Write routes to sitemap
  routes.forEach((route) => {
    sitemap.write({
      url: route.replace(":slug", ""), // for dynamic routes like /blog/:slug
      changefreq: "monthly",
      priority: route === "/" ? 1.0 : 0.7
    });
  });

  sitemap.end();

  const data = await streamToPromise(sitemap);
  createWriteStream("./public/sitemap.xml").write(data.toString());
  console.log("✅ Sitemap generated at /public/sitemap.xml");
}

generateSitemap();
