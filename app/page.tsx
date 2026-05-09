import Hero from '../components/Hero';
import ProjectGrid from '../components/ProjectGrid';

export default function Page() {
  return (
    <main className="min-h-screen bg-light dark:bg-dark">
      <Hero />

      <section id="about" className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary">About Me</h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            A 4th year undergraduate pursuing a BSc (Hons) in Information Technology, experienced in software development, 
            skilled in MERN stack development and Laravel, and looking to make a meaningful impact. I specialize in building 
            full-stack web applications, integrating AI/ML systems, and cloud solutions. My career objective is to become a 
            software engineer specializing in AI-powered intelligent systems and scalable web applications.
          </p>
        </div>
      </section>

      <section id="experience" className="py-16 bg-light dark:bg-dark">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary">Experience</h2>
          <div className="mt-8 rounded-xl border-l-4 border-secondary bg-white dark:bg-slate-800 p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-primary">Software Engineer Intern</h3>
            <p className="text-secondary font-medium mt-1">Keen Rabbits (Pvt) Ltd — Feb 2025 · Six months</p>
            <ul className="list-disc ml-5 mt-4 space-y-2 text-slate-700 dark:text-slate-300">
              <li>Built and deployed web applications using Laravel, PHP, MySQL, Blade, and JavaScript.</li>
              <li>Implemented multi-role authentication and CRM features used by clients.</li>
              <li>Improved website visibility by implementing SEO strategies and performance tuning.</li>
              <li>Installed, configured, and customized Odoo ERP for project and inventory management.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary">Featured Projects</h2>
          <p className="mt-2 text-slate-600">Showcasing 10+ projects across MERN, Laravel, AI/ML and cloud technologies.</p>
          <ProjectGrid />
        </div>
      </section>

      <section id="skills" className="py-16 bg-light dark:bg-dark">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary">Technical Skills</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-secondary">Languages</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Java', 'Python', 'PHP', 'Kotlin', 'C#', 'C'].map(l => (
                  <span key={l} className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">{l}</span>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-secondary">Frameworks</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {['React', 'Laravel', 'Spring Boot', 'Node.js', 'Express', 'Next.js'].map(f => (
                  <span key={f} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">{f}</span>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-secondary">Databases</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {['MongoDB', 'MySQL', 'Firebase', 'PostgreSQL'].map(d => (
                  <span key={d} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">{d}</span>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-secondary">Cloud & Tools</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {['AWS', 'Azure', 'CI/CD', 'Docker', 'Linux', 'Git'].map(t => (
                  <span key={t} className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary">Education</h2>
          <div className="mt-8 space-y-4">
            {[
              { title: 'BSc (Hons) in Information Technology', org: 'SLIIT Campus', year: '2022 – Present' },
              { title: 'Certificate in Machine Learning', org: 'Zero2Learn', year: '2025' },
              { title: 'Cloud Web Application Builder', org: 'AWS Academy', year: '2025' },
              { title: 'Diploma in Software Quality Assurance', org: 'SLIIT Campus', year: '2024' }
            ].map((edu, i) => (
              <div key={i} className="border-l-4 border-secondary pl-4">
                <h3 className="font-semibold">{edu.title}</h3>
                <p className="text-sm text-slate-600">{edu.org} — {edu.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-gradient-dark text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Let's Connect</h2>
          <p className="mt-4 text-gray-300">Ready to collaborate? Feel free to reach out.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="mailto:oushadhee0209@gmail.com" className="rounded-lg bg-secondary px-6 py-3 font-semibold hover:bg-opacity-90 transition">
              Send Email
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-lg border-2 border-secondary px-6 py-3 font-semibold hover:bg-secondary/10 transition">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-lg border-2 border-accent px-6 py-3 font-semibold hover:bg-accent/10 transition">
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
