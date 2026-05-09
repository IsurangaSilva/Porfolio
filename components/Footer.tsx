export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">OW</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">Full-Stack Developer & AI Enthusiast</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-1 text-slate-600 dark:text-slate-400 text-sm">
              <li><a href="/projects" className="hover:text-secondary transition">Projects</a></li>
              <li><a href="/skills" className="hover:text-secondary transition">Skills</a></li>
              <li><a href="/experience" className="hover:text-secondary transition">Experience</a></li>
              <li><a href="/contact" className="hover:text-secondary transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <div className="space-y-1 text-slate-600 dark:text-slate-400 text-sm">
              <p><a href="mailto:oushadhee0209@gmail.com" className="hover:text-secondary transition">Email</a></p>
              <p><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-secondary transition">LinkedIn</a></p>
              <p><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-secondary transition">GitHub</a></p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-slate-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Oushadhee Wickramasinghe. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with Next.js, Tailwind CSS & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
