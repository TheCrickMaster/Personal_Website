/**
 * PROJECTS PAGE — app/projects/page.tsx
 *
 * Projects use the .project-card component class (defined in globals.css)
 * instead of the generic rounded-lg card. The index-card style with a
 * left accent border feels more like a hand-written catalogue entry.
 *
 * THEORY — Data co-located with the component:
 * For a small, infrequently-changing list like this, defining the data
 * as a const array inside the component is perfectly acceptable.
 * It avoids the overhead of a CMS or MDX pipeline. If this grows to
 * 20+ projects, migrating to MDX files or a data file would make sense.
 */

interface Project {
  title: string;
  description: string;
  tech?: string;        // Optional — not all projects need a tech stack listed
  link?: string;        // Optional — not all projects have a public URL
}

const projects: Project[] = [
  {
    title: "Personal Website",
    description:
      "A handcrafted, rustic-themed site built with Next.js and Tailwind. " +
      "Designed with typography as the primary aesthetic driver.",
    tech: "Next.js, Tailwind CSS, TypeScript, MDX",
    link: "https://example.com",
  },
  {
    title: "Trading System",
    description:
      "Algorithmic trading experiments and backtesting tools. " +
      "Built to understand market microstructure rather than to get rich.",
    tech: "Python, pandas, NumPy",
    link: "https://example.com",
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="italic mb-6">Projects</h1>

      <p className="mb-8 text-ink-light">
        Things I&apos;ve built, tinkered with, or abandoned in a state of
        dignified incompleteness.
      </p>

      <div>
        {projects.map((project) =>
          /*
            Conditionally render as <a> or <div> depending on whether
            a link exists. This is better than always wrapping in <a>
            with an empty or placeholder href.
          */
          project.link ? (
            <a
              key={project.title}
              href={project.link}
              className="project-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="font-display font-normal text-lg mb-1">
                {project.title}
              </h2>
              <p className="text-sm text-ink mb-2">{project.description}</p>
              {project.tech && (
                <p className="font-mono text-xs text-ink-light m-0">
                  {project.tech}
                </p>
              )}
            </a>
          ) : (
            <div key={project.title} className="project-card">
              <h2 className="font-display font-normal text-lg mb-1">
                {project.title}
              </h2>
              <p className="text-sm text-ink mb-2">{project.description}</p>
              {project.tech && (
                <p className="font-mono text-xs text-ink-light m-0">
                  {project.tech}
                </p>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}
