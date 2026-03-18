import type { Metadata } from "next";
import Link from "next/link";
import { IM_Fell_English, Lora, Courier_Prime } from "next/font/google";
import "./globals.css";

/*
  FONT VARIABLE NAMES
  ============================================
*/
const imFellEnglish = IM_Fell_English({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display-face",
  display: "swap",
});

const lora = Lora({
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-body-face",
  display: "swap",
});

const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-mono-face",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Devdatta Kasture",
  description: "A handcrafted, rustic themed site built with Next.js and Tailwind.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fontClasses = [
    imFellEnglish.variable,
    lora.variable,
    courierPrime.variable,
  ].join(" ");

  return (
    <html lang="en" className={fontClasses}>
      <body style={{ backgroundColor: "var(--color-parchment)", color: "var(--color-ink)", minHeight: "100vh" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", padding: "2rem 1.5rem" }}>

          <header style={{ marginBottom: "2rem", paddingBottom: "1.5rem", borderBottom: "1px solid var(--color-rule)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "0.75rem" }}>

              <Link
                href="/"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  color: "var(--color-ink)",
                  textDecoration: "none",
                  borderBottom: "none",
                  letterSpacing: "0.05em",
                }}
              >
                <span style={{ color: "var(--color-accent)" }}>[ </span>
                Devdatta Kasture
                <span style={{ color: "var(--color-accent)" }}> ]</span>
              </Link>

              <nav aria-label="Main navigation">
                <ul style={{ display: "flex", flexWrap: "wrap", gap: "1rem", listStyle: "none", padding: 0, margin: 0 }}>
                  {[
                    { href: "/",         label: "home"     },
                    { href: "/about",    label: "about"    },
                    { href: "/projects", label: "projects" },
                    { href: "/blog",     label: "blog"     },
                    { href: "/contact",  label: "contact"  },
                    { href: "/grotto",   label: "grotto"   },
                    { href: "/resume",   label: "resume"   },
                  ].map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.85rem",
                          color: "var(--color-ink-light)",
                          textDecoration: "none",
                          borderBottom: "1px solid transparent",
                          letterSpacing: "0.08em",
                          transition: "color 0.2s, border-color 0.2s",
                        }}
                        className="nav-link"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </header>

          <main style={{ marginBottom: "4rem", fontFamily: "var(--font-body)" }}>
            {children}
          </main>

          <footer style={{ borderTop: "1px solid var(--color-rule)", paddingTop: "1rem", textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-ink-light)", margin: 0 }}>
              Built with <code>Next.js</code> &amp; <code>Tailwind CSS</code>
            </p>
          </footer>

        </div>
      </body>
    </html>
  );
}
