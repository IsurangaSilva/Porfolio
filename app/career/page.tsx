export default function CareerPage() {
  return (
    <main className="min-h-screen bg-light dark:bg-dark py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Career Development</h1>
        <p className="mt-3 text-lg text-slate-600">Strategic goals and roadmap for professional growth.</p>

        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border-l-4 border-secondary">
            <h2 className="text-3xl font-bold text-primary mb-6">Short-Term Goals</h2>
            <div className="space-y-4">
              {[
                { goal: 'Graduate with BSc (Hons) in IT', timeline: '2026' },
                { goal: 'Master AWS & Azure cloud platforms', timeline: 'By Dec 2025' },
                { goal: 'Land junior developer/internship role', timeline: 'By Aug 2025' },
                { goal: 'Build 3+ production-ready projects', timeline: '2025' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 pb-4 border-b border-slate-200 dark:border-slate-700 last:border-0">
                  <div className="w-8 h-8 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center text-white font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-100">{item.goal}</p>
                    <p className="text-sm text-secondary mt-1">Target: {item.timeline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border-l-4 border-accent">
            <h2 className="text-3xl font-bold text-primary mb-6">Long-Term Goals</h2>
            <div className="space-y-4">
              {[
                { goal: 'Become an AI Engineer & Tech Lead', timeline: '3-5 years' },
                { goal: 'Lead ML-integrated product development', timeline: '5+ years' },
                { goal: 'Publish research on AI/ML systems', timeline: '2025-2026' },
                { goal: 'Establish tech startup/company', timeline: '7-10 years' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 pb-4 border-b border-slate-200 dark:border-slate-700 last:border-0">
                  <div className="w-8 h-8 rounded-full bg-accent flex-shrink-0 flex items-center justify-center text-white font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-100">{item.goal}</p>
                    <p className="text-sm text-accent mt-1">{item.timeline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 bg-gradient-primary text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Development Strategy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
              <p className="text-xl font-bold mb-2">Learning</p>
              <p>Continuous upskilling in AI, cloud, and advanced frameworks</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
              <p className="text-xl font-bold mb-2">Projects</p>
              <p>Build portfolio with real-world, innovative solutions</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
              <p className="text-xl font-bold mb-2">Networking</p>
              <p>Engage with tech community and industry professionals</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
