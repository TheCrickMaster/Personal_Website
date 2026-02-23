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
export default function AboutPage() {
  return (
    <div>
      <h1 className="italic mb-6">About</h1>

      <blockquote>
        &ldquo;Your personal quote or motto here.&rdquo;
      </blockquote>

      <p>Hi!</p>

      <p>
        I am a <strong>[your profession/role]</strong>, passionate about
        [your interests]. I live in [your city], and spend most of my time
        [what you do].
      </p>

      <p>
        My interests, besides technology, include [list your other interests].
      </p>
    </div>
  );
}