interface ProjectPageProps {
  params: { id: string };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Project {id}</h1>
      <p>Details about project {id} go here...</p>
    </div>
  );
}
