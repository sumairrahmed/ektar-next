import { MetadataRoute } from "next";

// No robots.txt existed in this project before this file was added, so there
// is no prior "Disallow: /" rule to restore — this is a net-new, permissive
// default. If this site should later be blocked from crawlers again, change
// `allow: "/"` below to `disallow: "/"`.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
  };
}
