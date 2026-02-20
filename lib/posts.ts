import fs from "fs";
import path from "path";
import matter from "gray-matter";

// -------------------------------------------------
// TypeScript Interface — the "shape" of a blog post
// -------------------------------------------------
// An interface defines what fields every post object
// must have and what type each field is. TypeScript
// will throw an error if we accidentally return an
// object that's missing any of these fields, which
// catches bugs before they reach the browser.
export interface Post {
  slug: string;       // the filename without .mdx e.g. "first_blog"
  title: string;      // from frontmatter
  date: string;       // from frontmatter e.g. "2026-01-06"
  excerpt: string;    // from frontmatter
}

// -------------------------------------------------
// postsDirectory — the absolute path to content/blog
// -------------------------------------------------
// path.join builds a file path that works on any OS.
// process.cwd() returns the root of your project
// (where package.json lives) at runtime.
// So this resolves to: /your-project/content/blog
const postsDirectory = path.join(process.cwd(), "content/blog");

// -------------------------------------------------
// getAllPosts — reads every .mdx file and returns
// a sorted array of Post objects
// -------------------------------------------------
export function getAllPosts(): Post[] {
  // fs.readdirSync reads all filenames in the folder
  // synchronously (blocking) — fine here since this
  // only runs on the server during build/request time
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    // Only process .mdx files, ignore anything else
    // that might end up in the folder (.DS_Store etc)
    .filter((fileName) => fileName.endsWith(".mdx"))

    // Map transforms each filename into a Post object
    .map((fileName) => {
      // The slug is the filename with .mdx removed
      // e.g. "first_blog.mdx" becomes "first_blog"
      const slug = fileName.replace(/\.mdx$/, "");

      // Build the full path to this specific file
      const fullPath = path.join(postsDirectory, fileName);

      // Read the raw file contents as a string
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // gray-matter parses the file into two parts:
      // data = the frontmatter as a JS object
      // content = the markdown body (we don't need
      // this here — just the metadata)
      const { data } = matter(fileContents);

      // Return a Post object matching our interface
      // We cast data.date to string for TypeScript safety
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        excerpt: data.excerpt as string,
      };
    });

  // Sort posts by date, newest first
  // localeCompare does alphabetical string comparison
  // which works perfectly for ISO date strings (YYYY-MM-DD)
  // because newer dates are alphabetically "greater"
  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

// -------------------------------------------------
// getPostBySlug — returns a single post's metadata
// Used by the blog/[slug] page to get the title
// and date to display above the MDX content
// -------------------------------------------------
export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}