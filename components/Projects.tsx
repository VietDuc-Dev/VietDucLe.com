export default function Projects() {
  return (
    <section className="bg-muted py-20">
      <div className="container">
        <h2 className="text-center text-3xl font-bold mb-12">Our Projects</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <img
              key={i}
              src={`/project-${i + 1}.jpg`}
              alt="Project"
              className="rounded-lg object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
