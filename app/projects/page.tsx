/**
 * PROJECTS PAGE — app/projects/page.tsx
 */

interface Project {
  title: string;
  description: string;
  tech?: string;        // For projects with tech stack
  link?: string;        // For projects with an external link
}

const projects: Project[] = [
  {
    title: "Ameritegra Trading Systems",
    description:
      "A collection of tools and libraries for medium frequency systematic trading strategies. " +
      "Includes a backtesting framework, live trading infrastructure, and various utilities for data processing and strategy development." +
      "Currently in beta testing and not available to the public",
    tech: "KDB+/q, Python, C++, Linux, Docker, Git, Financial Markets",
    link: "https://www.ameritegratradingsystems.com/", // Placeholder link 
  },
  {
    title: "Personal Website",
    description:
      "The current website you're on! Built to showcase my projects and share my thoughts. " +
      "Build with a directed focus on simplicity, readability, and a touch of personality.",
    tech: "Next.js, Tailwind CSS, TypeScript, MDX",
    link: "https://github.com/TheCrickMaster/Personal_Website",
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="italic mb-6">Projects</h1>

      <p className="mb-8 text-ink-light">
        These are the current projects I am working on. Some have been completed and public while others are still in progress. I welcome any constructive feedback or questions about any of these projects.
      </p>

      <div>
        {projects.map((project) =>
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
