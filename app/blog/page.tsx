import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

// getAllPosts() is called at the top level of the component.
// In Next.js App Router, page components run on the server
// by default, meaning this filesystem read happens at
// build/request time — never in the user's browser.
export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="text-2xl mb-6">Blog</h1>

      {/* If no posts exist yet, show a fallback message */}
      {posts.length === 0 ? (
        <p className="text-gray-700">No posts yet — check back soon.</p>
      ) : (
        <ul className="list-none ml-0 space-y-6">
          {posts.map((post) => (
            // Each post gets a list item with a link to its slug
            // The key prop is required by React when rendering
            // lists — it helps React efficiently update the DOM
            // when the list changes. slug is perfect for this
            // because it's unique per post.
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group">

                {/* Date displayed above the title in small text */}
                <p className="text-sm mb-1">
                  {/* formatDate converts "2026-01-06" to
                      "January 6, 2026" for human readability.
                      The UTC timezone is specified to prevent
                      off-by-one-day bugs caused by timezone
                      conversion when parsing the date string */}
                  {new Date(post.date + "T00:00:00Z").toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      timeZone: "UTC",
                    }
                  )}
                </p>

                <h2 className="text-xl group-hover:underline">
                  {post.title}
                </h2>

                {/* Excerpt gives the reader a preview */}
                <p className="text-gray-700 mt-1 text-sm">
                  {post.excerpt}
                </p>

              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}