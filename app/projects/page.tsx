import ProjectGrid from '../../components/ProjectGrid';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-light dark:bg-dark py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects Portfolio</h1>
        <p className="mt-3 text-lg text-slate-600">10+ projects showcasing full-stack development, AI/ML, and cloud technologies.</p>

        <section className="mt-12">
          <div className="mb-8 p-6 bg-secondary/10 rounded-lg border-l-4 border-secondary">
            <h3 className="font-semibold text-secondary">Featured Projects</h3>
            <p className="text-slate-700 dark:text-slate-300 mt-2">AI-powered systems, complete MERN applications, Laravel solutions, and more.</p>
          </div>
          <ProjectGrid />
        </section>
      </div>
    </main>
  );
}
