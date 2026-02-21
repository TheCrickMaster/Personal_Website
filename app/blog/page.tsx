import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

/**
 * BLOG LISTING PAGE — app/blog/page.tsx
 *
 * Server Component: getAllPosts() reads from the filesystem,
 * which only works on the server. Next.js runs this at
 * request/build time, never in the browser.
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
              key prop: required by React for list rendering.
              React uses it to efficiently reconcile DOM changes
              when the list updates. slug is ideal — unique per post.
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
                  post.date + "T00:00:00Z" appends a UTC midnight time.
                  Without this, JavaScript's Date constructor interprets
                  "2026-01-06" as local midnight, which can shift the
                  date backward by one day in timezones west of UTC.
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
