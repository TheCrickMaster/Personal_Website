import Link from "next/link";

export default function ArchivePage() {
  // This would normally pull from your actual blog posts
  const archiveByYear = {
    2026: [
      { date: "Jan 06", title: "Welcome, I guess", slug: "first_blog" },
    ],
  };

  return (
    <div>
      <h1 className="text-2xl mb-6">Archive</h1>
      
      {Object.entries(archiveByYear).map(([year, posts]) => (
        <div key={year} className="mb-8">
          <h2 className="text-xl mb-4">{year}</h2>
          <ul className="list-none space-y-2">
            {posts.map((post) => (
              <li key={post.slug}>
                <span className="text-sm inline-block w-16">{post.date}</span>
                <span className="mr-2">—</span>
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      
      <p className="mt-8 text-sm leading-relaxed">
        Complete chronological archive of all posts and updates.
      </p>
    </div>
  );
}