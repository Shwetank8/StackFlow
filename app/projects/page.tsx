import Link from "next/link";

export default function ProjectsPage() {
  // Replace with DB fetch
  const projects = [
    { id: "1", name: "AI Assistant" },
    { id: "2", name: "Space Tracker" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Projects</h1>
      <ul className="space-y-2">
        {projects.map((p) => (
          <li key={p.id}>
            <Link href={`/projects/${p.id}`} className="text-blue-600 underline">
              {p.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
