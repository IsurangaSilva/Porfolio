export default function JournalsPage() {
  const weeks = [
    { 
      week: 1, 
      title: 'Professional Communication', 
      learned: ['Email writing', 'Interview preparation', 'Presentation standards'],
      reflection: 'Learned the importance of clarity in professional messaging, effective interview techniques, and polished presentation skills. This directly enhances my ability to collaborate and communicate in professional environments.'
    },
    { 
      week: 2, 
      title: 'Technical Writing & Documentation', 
      learned: ['Code documentation', 'API documentation', 'README best practices'],
      reflection: 'Discovered how crucial clear documentation is for team collaboration and long-term project maintenance. Good docs save time and prevent misunderstandings.'
    }
  ];

  return (
    <main className="min-h-screen bg-light dark:bg-dark py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Reflective Journals</h1>
        <p className="mt-3 text-lg text-slate-600">Weekly reflections and learning progress for professional development.</p>

        <div className="mt-12 space-y-6">
          {weeks.map((w) => (
            <details key={w.week} className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition group">
              <summary className="p-6 cursor-pointer flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-xl transition">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                    W{w.week}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">{w.title}</h3>
                    <p className="text-slate-600">Week {w.week} Reflection</p>
                  </div>
                </div>
                <span className="text-2xl group-open:rotate-180 transition">&#x25bc;</span>
              </summary>
              <div className="px-6 pb-6 border-t border-slate-200 dark:border-slate-700">
                <div className="grid md:grid-cols-2 gap-8 mt-6">
                  <div>
                    <h4 className="font-bold text-lg text-secondary mb-3">Key Learnings</h4>
                    <ul className="list-disc ml-5 space-y-2">
                      {w.learned.map((l) => (
                        <li key={l} className="text-slate-700 dark:text-slate-300">{l}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-accent mb-3">Reflection</h4>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{w.reflection}</p>
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 bg-gradient-primary text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold">Research Publication</h3>
          <p className="mt-3">Working on research for ICECET 2026 conference submission on AI-powered learning systems.</p>
        </div>
      </div>
    </main>
  );
}
