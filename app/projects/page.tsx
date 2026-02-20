export default function ProjectsPage() {
  const projects = [
    {
      title: "Personal Website",
      description: "A handcrafted, rustic-themed site built with Next.js and Tailwind.",
      link: "https://example.com",
    },
    {
      title: "Trading System",
      description: "Algorithmic trading experiments and backtesting tools.",
      link: "https://example.com",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl mb-6">Projects</h1>
      <div className="space-y-6">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            className="block border border-black rounded-lg p-6 hover:bg-black/5 transition"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-700 mt-2">{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}