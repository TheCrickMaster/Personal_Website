import type { MDXComponents } from "mdx/types";

/**
 * MDX COMPONENTS — app/mdx-components.tsx
 * =========================================
 * This file customizes how MDX content is rendered by mapping
 * standard HTML element names to React components with specific styling.
 *
 * THEORY — Why MDX components matter:
 * When you write Markdown/MDX, the parser converts syntax like
 * "# Heading" into <h1> elements. Normally those <h1>s would get
 * whatever styles are in globals.css. But MDX Components let you
 * REPLACE the default rendering with any React component you want.
 *
 * This is powerful because blog content is written in Markdown
 * without Tailwind classes, so we need a way to inject our design
 * system's styling into the rendered output.
 *
 * The components defined here must match the aesthetic in globals.css
 * for consistency — they're the blog content layer of the design system.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {

    // Headings — font-display italic, normal weight
    h1: ({ children }) => (
      <h1 className="font-display font-normal italic mt-8 mb-4 text-2xl text-ink">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-display font-normal mt-6 mb-3 text-xl text-ink pb-1 border-b border-rule">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display font-normal mt-5 mb-2 text-base text-ink">
        {children}
      </h3>
    ),

    // Paragraphs
    p: ({ children }) => (
      <p className="mb-4 leading-reading font-body text-ink">{children}</p>
    ),

    // Links — inherits the global anchor style from globals.css
    // We only add target/rel for external links here
    a: ({ href, children }) => (
      <a
        href={href}
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),

    // Inline code
    code: ({ children }) => (
      <code className="font-mono text-sm text-accent bg-parchment-dark px-1 py-0.5 rounded"
            style={{ border: "1px solid #c8b89a" }}>
        {children}
      </code>
    ),

    // Code blocks
    pre: ({ children }) => (
      <pre className="bg-parchment-dark p-4 overflow-x-auto mb-4 font-mono text-sm text-ink"
           style={{ border: "1px solid #c8b89a", borderLeft: "3px solid #5c4f3a" }}>
        {children}
      </pre>
    ),

    // Lists — guillemet bullet from globals.css applies via ul li::marker
    ul: ({ children }) => (
      <ul className="mb-4 pl-8">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal mb-4 pl-8 space-y-1">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="mb-1 text-sm leading-reading">{children}</li>
    ),

    // Blockquote — matches the global blockquote style
    blockquote: ({ children }) => (
      <blockquote
        className="border-l-[3px] border-accent pl-4 my-6 font-display italic text-ink-light"
        style={{
          fontSize: "1.1rem",
          background: "linear-gradient(to right, rgba(139,58,47,0.04), transparent)",
        }}
      >
        {children}
      </blockquote>
    ),

    // Horizontal rule — matches the ornamental hr in globals.css
    hr: () => <hr className="my-8" />,

    // Strong and emphasis
    strong: ({ children }) => (
      <strong className="font-semibold text-ink">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-ink-light">{children}</em>
    ),

    // Spread incoming components last so callers can still override
    ...components,
  };
}
