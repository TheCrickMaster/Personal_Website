import type { MDXComponents } from 'mdx/types';

// This file allows you to customize how MDX content is rendered
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Customize heading styles
    h1: ({ children }) => (
      <h1 className="text-2xl font-bold mb-4 mt-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl font-bold mb-3 mt-5">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-bold mb-2 mt-4">{children}</h3>
    ),
    
    // Customize paragraph spacing
    p: ({ children }) => (
      <p className="mb-4 leading-relaxed">{children}</p>
    ),
    
    // Customize links to match retro style
    a: ({ href, children }) => (
      <a 
        href={href} 
        className="underline hover:no-underline"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    
    // Customize code blocks
    code: ({ children }) => (
      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    
    pre: ({ children }) => (
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-4 font-mono text-sm">
        {children}
      </pre>
    ),
    
    // Customize lists
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
    ),
    
    // Customize blockquotes
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-black pl-4 italic my-4">
        {children}
      </blockquote>
    ),
    
    // Customize horizontal rule
    hr: () => <hr className="border-t border-black my-8" />,
    
    ...components,
  };
}