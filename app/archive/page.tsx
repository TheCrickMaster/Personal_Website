import Link from "next/link";
import { getAllPosts, Post } from "@/lib/posts";

/**
 * ARCHIVE PAGE — app/archive/page.tsx
 *
 * The archive groups ALL posts by year — a complete chronological index.
 * This is built from the real posts data (getAllPosts) rather than a
 * hand-written array, so it stays in sync automatically as you add posts.
 *
 * TECHNIQUE — Object.entries() with reduce():
 *
 * reduce() transforms an array into any shape of data.
 * Here we transform Post[] into Record<string, Post[]> where the key
 * is a year string ("2026") and the value is an array of posts from
 * that year. This is a common functional programming pattern.
 */
export default function ArchivePage() {
  const allPosts = getAllPosts(); // Sorted newest-first by lib/posts.ts

  // Group posts by year using reduce
  const byYear = allPosts.reduce<Record<string, Post[]>>((acc, post) => {
    // post.date is "YYYY-MM-DD" — split on "-" and take index 0 for the year
    const year = post.date.split("-")[0];
    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {});

  // Object.entries gives us [["2026", [...posts]], ["2025", [...]]] etc.
  // We sort descending (b - a) so newest year appears first.
  const sortedYears = Object.entries(byYear).sort(([a], [b]) =>
    Number(b) - Number(a)
  );

  return (
    <div>
      <h1 className="italic mb-6">Archive</h1>

      <p className="text-sm text-ink-light mb-8">
        Complete chronological index of all writing.
      </p>

      {sortedYears.map(([year, posts]) => (
        <section key={year} className="mb-10" aria-labelledby={`year-${year}`}>
          {/*
            The year heading uses font-mono to give it a ledger/log-book
            quality — like a filing cabinet label.
          */}
          <h2
            id={`year-${year}`}
            className="font-mono text-sm text-ink-light mb-3 pb-2 border-b border-rule font-normal"
            style={{ letterSpacing: "0.1em" }}
          >
            {year}
          </h2>

          <ul className="list-none p-0 m-0 space-y-2">
            {posts.map((post) => (
              <li key={post.slug} className="flex items-baseline gap-3">
                {/*
                  The date is displayed as "Mon DD" in monospace,
                  creating a clean left-aligned column — like a
                  printed index or table of contents.
                */}
                <time
                  className="font-mono text-xs text-ink-light shrink-0 w-12"
                  dateTime={post.date}
                >
                  {new Date(post.date + "T00:00:00Z").toLocaleDateString(
                    "en-US",
                    { month: "short", day: "2-digit", timeZone: "UTC" }
                  )}
                </time>
                <span className="text-ink-light text-xs">—</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}

      {/* Empty state */}
      {sortedYears.length === 0 && (
        <p className="font-mono text-sm text-ink-light">
          Nothing here yet.
        </p>
      )}
    </div>
  );
}
