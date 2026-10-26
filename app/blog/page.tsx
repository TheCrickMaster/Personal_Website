import Link from "next/link";
import { getAllPosts, getAllTags, filterPostsByTags } from "@/lib/posts";

/**
 * BLOG LISTING PAGE — app/blog/page.tsx
 */

type Props = {
  searchParams: Promise<{ tag?: string | string[] }>;
};

function parseTags(raw: string | string[] | undefined): string[] {
  const list = raw === undefined ? [] : Array.isArray(raw) ? raw : [raw];
  return [
    ...new Set(list.map((t) => t.trim().toLowerCase()).filter(Boolean)),
  ];
}

function buildHref(tags: string[]): string {
  if (tags.length === 0) return "/blog";
  const params = new URLSearchParams();
  tags.forEach((t) => params.append("tag", t));
  return `/blog?${params.toString()}`;
}

export default async function BlogPage({ searchParams }: Props) {
  const { tag } = await searchParams;
  const selected = parseTags(tag);

  const allPosts = getAllPosts();
  const allTags = getAllTags();
  const posts = filterPostsByTags(allPosts, selected);

  return (
    <div>
      <h1 className="italic mb-6">Writing</h1>

      
      {allTags.length > 0 && (
        <nav aria-label="Filter posts by tag" className="mb-4">
          <ul className="tag-list">
            {allTags.map(({ tag: name, count }) => {
              const isActive = selected.includes(name);
              const next = isActive
                ? selected.filter((t) => t !== name)
                : [...selected, name];

              return (
                <li key={name}>
                  <Link
                    href={buildHref(next)}
                    className={`tag-chip${isActive ? " tag-chip-active" : ""}`}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {name} ({count})
                  </Link>
                </li>
              );
            })}
          </ul>

          {selected.length > 0 && (
            <Link href="/blog" className="text-sm">
              Clear filters
            </Link>
          )}
        </nav>
      )}

      <p
        className="text-sm text-ink-light font-mono mb-6"
        aria-live="polite"
      >
        {selected.length > 0
          ? `Showing ${posts.length} of ${allPosts.length} posts`
          : `${allPosts.length} ${allPosts.length === 1 ? "post" : "posts"}`}
      </p>

      {posts.length === 0 ? (
        <p className="text-ink-light font-mono text-sm">
          {selected.length > 0
            ? "No posts match all of the selected tags."
            : "No posts yet — check back soon."}
        </p>
      ) : (
        <ul className="list-none p-0 m-0">
          {posts.map((post) => (
            <li key={post.slug} className="entry">
              <div className="entry-header">
                <h2 className="font-display font-normal">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-accent-dark"
                  >
                    {post.title}
                  </Link>
                </h2>

                <time className="entry-date" dateTime={post.date}>
                  {new Date(post.date + "T00:00:00Z").toLocaleDateString(
                    "en-US",
                    { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" }
                  )}
                </time>
              </div>

              <p className="text-sm text-ink-light m-0 mt-1">
                {post.excerpt}
              </p>

              {post.tags.length > 0 && (
                <ul className="tag-list mt-2">
                  {post.tags.map((t) => (
                    <li key={t}>
                      <Link
                        href={buildHref([t])}
                        className="tag-chip"
                      >
                        {t}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
