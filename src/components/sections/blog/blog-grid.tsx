"use client";

import * as React from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/lib/data/blog";

export function BlogGrid() {
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState<string>("Todos");

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = category === "Todos" || post.category === category;
    const matchesQuery =
      query.trim().length === 0 ||
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <section className="py-24">
      <div className="container-atomus">
        <div className="mx-auto flex max-w-xl flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar artigos..."
              className="pl-10"
            />
          </div>
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {BLOG_CATEGORIES.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                category === item
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:bg-secondary"
              )}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.06}>
              <Link href={`/blog/${post.slug}`}>
                <Card className="h-full transition-shadow hover:shadow-md">
                  <CardContent className="pt-6">
                    <p className="text-xs font-medium uppercase tracking-wide text-accent">
                      {post.category}
                    </p>
                    <h2 className="mt-2 font-heading text-lg font-semibold leading-snug">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
                    <p className="mt-4 text-xs text-muted-foreground">
                      {post.publishedAt} · {post.readingTime}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="mt-12 text-center text-muted-foreground">
            Nenhum artigo encontrado para essa busca.
          </p>
        )}
      </div>
    </section>
  );
}
