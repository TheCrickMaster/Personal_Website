import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Devdatta Kasture",
  description: "A handcrafted, rustic themed site built with Next.js and Tailwind.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#9ACD32] text-black min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-8">
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-3xl mb-4 font-serif">
              <Link href="/" className="hover:underline">
                Devdatta Kasture
              </Link>
            </h1>
            
          {/* Navigation */}
<nav className="border-t border-b border-black py-2 font-serif italic">
  <Link href="/" className="hover:underline">
    home
  </Link>
  <span className="mx-2">·</span>
  <Link href="/about" className="hover:underline">
    about
  </Link>
  <span className="mx-2">·</span>
  <Link href="/projects" className="hover:underline">
    projects
  </Link>
  <span className="mx-2">·</span>
  <Link href="/blog" className="hover:underline">
    blog
  </Link>
  <span className="mx-2">·</span>
  <Link href="/contact" className="hover:underline">
    contact
  </Link>
  <span className="mx-2">·</span>
  <Link href="/archive" className="hover:underline">
    archive
  </Link>
</nav>
          </header>
          
          {/* Main Content */}
          <main className="mb-16 font-serif">
            {children}
          </main>
          
          {/* Footer */}
          <footer className="border-t border-black pt-4 text-sm text-center font-serif">
            <p>Built with Next.js and Tailwind CSS</p>
          </footer>
        </div>
      </body>
    </html>
  );
}