/**
 * ABOUT / RÉSUMÉ PAGE — app/about/page.tsx
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

      {/* Personal aphorism — mirrors aniketd's opening quote */}
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

      <hr />

      {/* ── RÉSUMÉ ─────────────────────────────────────────────── */}
      <section aria-labelledby="resume-heading">
        <h1 id="resume-heading" className="italic mb-6">Résumé</h1>

        {/* Education */}
        <h2 className="mt-8 mb-4 pb-2 border-b border-rule">Education</h2>
        <p>
          <strong>Your Degree</strong>{" "}
          <em>(Major), Year — University Name</em>
        </p>

        {/* Skills — <dl> is semantically correct for labeled data */}
        <h2 className="mt-8 mb-4 pb-2 border-b border-rule">Skills</h2>
        <dl>
          <dt>Languages</dt>
          <dd>Python, JavaScript, TypeScript, Java, C++, SQL</dd>

          <dt>Frameworks</dt>
          <dd>React, Next.js, Node.js, Django, Flask, Express</dd>

          <dt>Technologies</dt>
          <dd>Git, Docker, PostgreSQL, MongoDB, Redis, AWS</dd>

          <dt>Tools</dt>
          <dd>VS Code, Vim, Linux, Figma</dd>
        </dl>

        {/* Experience */}
        <h2 className="mt-8 mb-4 pb-2 border-b border-rule">Experience</h2>

        {/*
          Each job is an <article> — semantically, an article is any
          self-contained piece of content that makes sense on its own.
          A résumé entry qualifies: title, org, date range, description.
          We use the .entry component class for the dashed divider.
        */}
        <article className="entry">
          <div className="entry-header">
            <h3 className="font-display font-normal">
              <strong>Your Job Title</strong>
            </h3>
            <time className="entry-date">Month Year – Present</time>
          </div>
          <p className="entry-org">Company Name</p>
          <p className="text-sm leading-relaxed">
            Description of your role, responsibilities, and achievements.
            Mention the technologies you work with, problems you&apos;ve
            solved, and the impact of your work.
          </p>
        </article>

        <article className="entry">
          <div className="entry-header">
            <h3 className="font-display font-normal">
              <strong>Previous Job Title</strong>
            </h3>
            <time className="entry-date">Month Year – Month Year</time>
          </div>
          <p className="entry-org">Previous Company</p>
          <p className="text-sm leading-relaxed">
            Description of your previous role. Highlight key accomplishments
            and skills you developed. Mention technologies and methodologies.
          </p>
        </article>

        {/* Other Projects */}
        <h2 className="mt-8 mb-4 pb-2 border-b border-rule">Other Projects</h2>

        <article className="entry">
          <h3 className="font-display font-normal italic mb-1">
            Project Name One
          </h3>
          <p className="text-sm leading-relaxed">
            Brief description of the project, the technologies used,
            and what you learned or accomplished.
          </p>
        </article>

        <article className="entry">
          <h3 className="font-display font-normal italic mb-1">
            Project Name Two
          </h3>
          <p className="text-sm leading-relaxed">
            Another project description. Focus on the problem you were
            solving and the approach you took.
          </p>
        </article>

        {/* Honors */}
        <h2 className="mt-8 mb-4 pb-2 border-b border-rule">Honors &amp; Awards</h2>
        <ul className="text-sm">
          <li>Award or recognition you received, Year</li>
          <li>Another achievement or honor, Year</li>
          <li>Academic or professional recognition, Year</li>
        </ul>

      </section>
    </div>
  );
}
