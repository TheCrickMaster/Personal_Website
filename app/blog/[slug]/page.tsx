import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const filePath = path.join(process.cwd(), "content/blog", `${slug}.mdx`);
  const rawSource = fs.readFileSync(filePath, "utf8");
  const { content: source } = matter(rawSource);

  return (
    <div>
      <article>
        <h1 className="text-2xl mb-1">{post!.title}</h1>
        <p className="text-sm mb-2">
          {new Date(post!.date + "T00:00:00Z").toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "UTC",
          })}
        </p>

        {post!.tags.length > 0 && (
          <ul className="tag-list mb-6">
            {post!.tags.map((t) => (
              <li key={t}>
                <Link
                  href={`/blog?tag=${encodeURIComponent(t)}`}
                  className="tag-chip"
                >
                  {t}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div className="prose-retro">
          <MDXRemote source={source} />
        </div>
      </article>

      <div className="mt-10 pt-4 border-t border-black">
        <Link href="/blog" className="text-sm">
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
}