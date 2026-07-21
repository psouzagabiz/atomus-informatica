import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/data/blog";
import { PORTFOLIO_ITEMS } from "@/lib/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/sobre",
    "/servicos",
    "/portfolio",
    "/planos",
    "/blog",
    "/contato",
    "/orcamento",
  ];

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${SITE_CONFIG.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_CONFIG.url}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const portfolioEntries: MetadataRoute.Sitemap = PORTFOLIO_ITEMS.map((item) => ({
    url: `${SITE_CONFIG.url}/portfolio/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticEntries, ...blogEntries, ...portfolioEntries];
}
