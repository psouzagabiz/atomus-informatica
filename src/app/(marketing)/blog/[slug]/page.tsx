import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { ShareButtons } from "@/components/sections/blog/share-buttons";
import { CommentsSection } from "@/components/sections/blog/comments-section";
import { SITE_CONFIG } from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/data/blog";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((item) => item.slug === slug);
  if (!post) return { title: "Artigo" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${SITE_CONFIG.url}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: SITE_CONFIG.name },
    publisher: { "@type": "Organization", name: SITE_CONFIG.name },
  };

  return (
    <section className="py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-atomus max-w-2xl">
        <Reveal>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4" /> Voltar ao blog
          </Link>

          <p className="mt-6 text-sm font-medium uppercase tracking-wide text-accent">
            {post.category}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            {post.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="size-4" /> {post.publishedAt}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-4" /> {post.readingTime}
            </span>
          </div>

          <div className="mt-4">
            <ShareButtons title={post.title} />
          </div>

          <div className="mt-8 space-y-4">
            {post.content.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-foreground/90">
                {paragraph}
              </p>
            ))}
          </div>

          <CommentsSection slug={post.slug} />
        </Reveal>
      </div>
    </section>
  );
}
