export default function CertificationsPage() {
  const certs = [
    { title: 'Certificate in Machine Learning', org: 'Zero2Learn', year: 2025, badge: '🤖' },
    { title: 'Cloud Web Application Builder', org: 'AWS Academy', year: 2025, badge: '☁️' },
    { title: 'AWS SimuLearn: Cloud Practitioner', org: 'AWS Skill Builder', year: 2025, badge: '☁️' },
    { title: 'Azure Microsoft Learn', org: 'Microsoft', year: 2025, badge: '☁️' },
    { title: 'Diploma in Software Quality Assurance', org: 'SLIIT Campus', year: 2024, badge: '✔️' },
    { title: 'Certificate in Python for Beginners', org: 'University of Moratuwa', year: 2024, badge: '🐍' },
    { title: 'Certificate in Selenium WebDriver', org: 'Alison', year: 2024, badge: '🧪' }
  ];

  return (
    <main className="min-h-screen bg-light dark:bg-dark py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Certifications & Training</h1>
        <p className="mt-3 text-lg text-slate-600">Professional certifications and continuous learning achievements.</p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c) => (
            <div key={c.title} className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition overflow-hidden group">
              <div className="h-1 bg-gradient-to-r from-primary to-secondary"></div>
              <div className="p-6">
                <div className="text-4xl mb-3">{c.badge}</div>
                <h3 className="font-semibold text-lg text-primary group-hover:text-secondary transition">{c.title}</h3>
                <p className="text-secondary font-medium mt-2">{c.org}</p>
                <p className="text-slate-500 text-sm mt-1">📅 {c.year}</p>
                <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">Comprehensive training in {c.title.toLowerCase()}.</p>
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <a href="#" className="inline-block rounded-lg bg-secondary/10 text-secondary px-4 py-2 text-sm font-medium hover:bg-secondary/20 transition">
                    View Certificate →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
