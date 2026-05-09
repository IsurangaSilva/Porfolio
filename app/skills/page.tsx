const SkillBar = ({ label, value }: { label: string; value: number }) => (
  <div className="mb-6">
    <div className="flex justify-between text-sm mb-2">
      <span className="font-medium text-slate-800 dark:text-slate-100">{label}</span>
      <span className="text-secondary font-bold">{value}%</span>
    </div>
    <div className="w-full bg-slate-200 dark:bg-slate-700 h-3 rounded-full overflow-hidden">
      <div className="h-3 rounded-full bg-gradient-to-r from-secondary to-accent transition-all duration-500" style={{ width: `${value}%` }} />
    </div>
  </div>
);

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-light dark:bg-dark py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Skills & Expertise</h1>
        <p className="mt-3 text-lg text-slate-600">Comprehensive technical and professional capabilities.</p>

        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-primary border-b-2 border-secondary pb-3">Programming Languages</h2>
            <div className="mt-6">
              <SkillBar label="Java" value={85} />
              <SkillBar label="Python" value={80} />
              <SkillBar label="PHP" value={75} />
              <SkillBar label="Kotlin" value={60} />
              <SkillBar label="C#" value={65} />
              <SkillBar label="C" value={60} />
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-primary border-b-2 border-secondary pb-3">Frameworks & Libraries</h2>
            <div className="mt-6">
              <SkillBar label="React" value={85} />
              <SkillBar label="Laravel" value={80} />
              <SkillBar label="Spring Boot" value={70} />
              <SkillBar label="Node.js / Express" value={78} />
              <SkillBar label="Next.js" value={75} />
              <SkillBar label="Tailwind CSS" value={85} />
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-primary border-b-2 border-secondary pb-3">Databases & Tools</h2>
            <div className="mt-6">
              <SkillBar label="MongoDB" value={75} />
              <SkillBar label="MySQL" value={80} />
              <SkillBar label="Firebase" value={70} />
              <SkillBar label="PostgreSQL" value={65} />
              <SkillBar label="Git & GitHub" value={85} />
              <SkillBar label="Docker" value={60} />
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-primary border-b-2 border-secondary pb-3">Cloud & DevOps</h2>
            <div className="mt-6">
              <SkillBar label="AWS (EC2, RDS, S3)" value={70} />
              <SkillBar label="Azure" value={65} />
              <SkillBar label="CI/CD" value={60} />
              <SkillBar label="Linux" value={75} />
              <SkillBar label="Kubernetes (Basic)" value={50} />
              <SkillBar label="Nginx" value={65} />
            </div>
          </div>
        </section>

        <section className="mt-12 bg-gradient-primary text-white p-8 rounded-xl">
          <h2 className="text-2xl font-bold">Soft Skills</h2>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Communication', 'Teamwork', 'Leadership', 'Problem Solving',
              'Critical Thinking', 'Adaptability', 'Collaboration', 'Attention to Detail',
              'Time Management'
            ].map(skill => (
              <div key={skill} className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg text-center">
                {skill}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
