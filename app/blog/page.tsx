import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

/**
 * BLOG LISTING PAGE — app/blog/page.tsx
 */
export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="italic mb-6">Writing</h1>

      {posts.length === 0 ? (
        <p className="text-ink-light font-mono text-sm">
          No posts yet — check back soon.
        </p>
      ) : (
        <ul className="list-none p-0 m-0">
          {posts.map((post) => (
            /*
             For list rendering.
            */
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

                {/*
                  For timestamp formatting
                */}
                <time
                  className="entry-date"
                  dateTime={post.date}
                >
                  {new Date(post.date + "T00:00:00Z").toLocaleDateString(
                    "en-US",
                    { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" }
                  )}
                </time>
              </div>

              <p className="text-sm text-ink-light m-0 mt-1">
                {post.excerpt}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
