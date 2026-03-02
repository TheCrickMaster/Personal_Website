/**
 * ABOUT PAGE — app/about/page.tsx
 *
 * This page uses semantic HTML throughout:
 * - <dl><dt><dd>  for skill key-value pairs (Languages: Python, Rust...)
 * - <article>     for each resume entry (job, project)
 * - <time>        for machine-readable dates
 * - <section>     to group thematically related content
 *
 * The .entry, .entry-header, .entry-date, .entry-org classes
 * are defined in globals.css @layer components.
 */
import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
      <h1 className="italic mb-6">About</h1>

      <blockquote>
        &ldquo;It costs nothing to smile more&rdquo;
      </blockquote>

      <Image
        src="/images/Devdatta_Kasture_Profile.jpg"
        alt="Devdatta Kasture"
        width={260}
        height={260}
        className="rounded-full mb-6"
        priority
      />

      <p>Hi!</p>

      <p>
        I am currently studying mathematics and computer science at the University of Illinois Urbana-Champaign. I am a trained numerical analyst with interests in algebraic grid solvers for PDES, stochastic optimization, and Monte Carlo methods with applications in machine learning.
        Additionally, I have experience with developing in the KDB+/q software stack, Python, and C++ in Linux based environments. If you want to know what I am currently working on, check out my current <a href="/projects">projects</a>.
      </p>

      <p>
      </p>

      <p>
        Outside of academics and work, I am a man of many interests. Sports has always been central to my life; I played soccer competitively growing up, and I remain a supporter of the Chicago Bears, Bulls, and White Sox. In football, I support Brentford FC in the English Premier League.
        I am drawn to deep philosophical and cultural conversations, and much of how I see the world has been shaped by the remarkable people from different backgrounds I have had the chance to meet and learn from.
        At the moment I am teaching myself to shoot and edit long-form video, crocheting the occasional trinket, and reconnectng back to my cultural roots.
      </p>
    </div>
  );
}