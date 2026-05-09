export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-light dark:bg-dark py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Experience</h1>
        <p className="mt-2 text-lg text-slate-600">Professional journey and accomplishments.</p>

        <section className="mt-12 max-w-4xl">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-primary">Software Engineer Intern</h2>
              <p className="text-secondary font-semibold mt-2">Keen Rabbits (Pvt) Ltd</p>
              <p className="text-slate-600 mt-1">📅 Feb 2025 — May 2025 (Six months)</p>
              <p className="text-slate-600 mt-1">📍 Malabe, Colombo, Sri Lanka</p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg text-primary mb-3">Responsibilities</h3>
                  <ul className="list-disc ml-5 space-y-2 text-slate-700 dark:text-slate-300">
                    <li>Built and deployed web applications using Laravel, PHP, MySQL, Blade, and JavaScript.</li>
                    <li>Implemented multi-role authentication and CRM features.</li>
                    <li>Improved SEO and performance through optimizations and metadata updates.</li>
                    <li>Installed and customized Odoo ERP for project, purchase, and inventory workflows.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-secondary mb-3">Key Achievements</h3>
                  <ul className="list-disc ml-5 space-y-2 text-slate-700 dark:text-slate-300">
                    <li>✓ Improved website visibility through SEO strategies.</li>
                    <li>✓ Delivered authentication systems used by clients.</li>
                    <li>✓ Built functional CRM features.</li>
                    <li>✓ Customized Odoo ERP workflows.</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Technologies Used</p>
                <div className="flex flex-wrap gap-2">
                  {['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Blade', 'Odoo ERP', 'SEO', 'HTML/CSS'].map(tech => (
                    <span key={tech} className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
