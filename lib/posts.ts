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
}

// -------------------------------------------------
// postsDirectory 
// -------------------------------------------------

const postsDirectory = path.join(process.cwd(), "content/blog");

// -------------------------------------------------
// getAllPosts 
// -------------------------------------------------
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
      };
    });

  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

// -------------------------------------------------
// getPostBySlug 
// -------------------------------------------------
export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}