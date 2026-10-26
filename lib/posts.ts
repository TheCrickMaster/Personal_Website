import fs from "fs";
import path from "path";
import matter from "gray-matter";

// -------------------------------------------------
// TypeScript Interface
// -------------------------------------------------

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

export interface TagCount {
  tag: string;
  count: number;
}


const postsDirectory = path.join(process.cwd(), "content/blog");

function normalizeTags(raw: unknown): string[] {
  if (!Array.isArray(raw)) return [];

  const cleaned = raw
    .filter((t): t is string => typeof t === "string")
    .map((t) => t.trim().toLowerCase())
    .filter((t) => t.length > 0);

  return [...new Set(cleaned)];
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))

    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");

      const fullPath = path.join(postsDirectory, fileName);

      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        excerpt: data.excerpt as string,
        tags: normalizeTags(data.tags),
      };
    });

  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getAllTags(): TagCount[] {
  const counts = new Map<string, number>();

  for (const post of getAllPosts()) {
    for (const tag of post.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => a.tag.localeCompare(b.tag));
}

export function filterPostsByTags(posts: Post[], tags: string[]): Post[] {
  if (tags.length === 0) return posts;
  return posts.filter((post) => tags.every((t) => post.tags.includes(t)));
}