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
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="space-y-6">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            className="block border border-ink/20 rounded-lg p-6 hover:bg-ink/5 transition"
          >
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="text-gray-700 mt-2">{project.description}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
