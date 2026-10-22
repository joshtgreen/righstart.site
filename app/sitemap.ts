import type { MetadataRoute } from "next";

// lastModified is the date the page content last changed. Update it by hand
// when a page really changes; a build date tells search engines nothing.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://rightstart.co",
      lastModified: "2026-10-21",
    },
    {
      url: "https://rightstart.co/book",
      lastModified: "2026-10-21",
    },
  ];
}
