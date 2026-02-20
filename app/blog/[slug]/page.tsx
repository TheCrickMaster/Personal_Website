import Link from "next/link";

// This would normally dynamically import your MDX files
// For now, it's a placeholder structure
export default function BlogPost({ params }: { params: { slug: string } }) {
  // In a real implementation, you'd load the MDX content here
  // using next-mdx-remote or similar
  
  return (
    <div>
      <div className="mb-6">
        <Link href="/blog" className="text-sm">
          ← Back to Blog
        </Link>
      </div>
      
      <article className="prose-retro">
        <h1 className="text-2xl mb-2">Blog Post Title</h1>
        <p className="text-sm mb-6">January 6, 2026</p>
        
        <div className="leading-relaxed space-y-4">
          <p>
            Your blog post content will appear here. This is where your MDX content 
            from the <code>content/blog/</code> folder will be rendered.
          </p>
          
          <p>
            You can write in Markdown and include code examples, like this:
          </p>
          
          <pre><code>{`function example() {
  return "Hello, World!";
}`}</code></pre>
          
          <p>
            Or include lists, emphasis, and other formatting as needed.
          </p>
        </div>
      </article>
      
      <div className="mt-8 pt-4 border-t border-black">
        <Link href="/blog" className="text-sm">
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  // This would read your content/blog directory
  // and return all slugs
  return [
    { slug: "first_blog" },
  ];
}