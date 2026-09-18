import { MetadataRoute } from "next";
import { posts } from "@/lib/content/blog";

const BASE_URL = "https://www.ektar.com";

const staticRoutes = [
  "",
  "/ekshield",
  "/ekprotect",
  "/ekbind",
  "/eksign",
  "/eksell",
  "/ekkey",
  "/ekpulse",
  "/ekrules",
  "/protect-the-user",
  "/protect-the-device",
  "/protect-the-app",
  "/about",
  "/investors",
  "/investors/contact",
  "/blog",
  "/career",
  "/career/apply",
  "/contact",
  "/termsofuse",
  "/privacy-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...blogEntries];
}
