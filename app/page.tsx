'use client';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ProjectGrid from '../components/ProjectGrid';

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent mb-2">About Me</h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full mb-8"></div>
            
            <div className="group relative rounded-2xl overflow-hidden p-8 bg-gradient-to-br from-slate-800/50 via-purple-900/30 to-slate-800/50 border border-purple-400/30 hover:border-purple-300/60 transition-all duration-300 backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <p className="relative text-lg text-gray-200 leading-relaxed">
                A <span className="font-semibold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">4th year undergraduate pursuing a BSc (Hons) in Information Technology</span>, experienced in software development, skilled in MERN stack development and Laravel, and looking to make a meaningful impact. I specialize in building full-stack web applications, integrating AI/ML systems, and cloud solutions. My career objective is to become a software engineer specializing in AI-powered intelligent systems and scalable web applications.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent mb-2">Experience</h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full mb-8"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl overflow-hidden border-l-4 border-cyan-500 bg-gradient-to-br from-slate-800/60 via-cyan-900/30 to-slate-800/60 p-8 hover:border-cyan-400 transition-all duration-300 backdrop-blur-md shadow-lg hover:shadow-cyan-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Software Engineer Intern</h3>
              <p className="text-cyan-400 font-semibold mt-2">Keen Rabbits (Pvt) Ltd — Feb 2025 · Six months</p>
              <ul className="list-disc ml-6 mt-6 space-y-2 text-gray-300">
                <li className="hover:text-cyan-300 transition-colors">Built and deployed web applications using Laravel, PHP, MySQL, Blade, and JavaScript.</li>
                <li className="hover:text-cyan-300 transition-colors">Implemented multi-role authentication and CRM features used by clients.</li>
                <li className="hover:text-cyan-300 transition-colors">Improved website visibility by implementing SEO strategies and performance tuning.</li>
                <li className="hover:text-cyan-300 transition-colors">Installed, configured, and customized Odoo ERP for project and inventory management.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent mb-2">Featured Projects</h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full mb-4"></div>
            <p className="text-lg text-gray-400">Showcasing 10+ innovative projects across MERN, Laravel, AI/ML, and cloud technologies.</p>
          </motion.div>
          <div className="mt-12">
            <ProjectGrid />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent mb-2">Technical Skills</h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full mb-8"></div>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: 'Languages',
                icon: '💻',
                items: ['Java', 'Python', 'PHP', 'Kotlin', 'C#', 'C'],
                gradient: 'from-purple-500/40 via-pink-500/40 to-purple-500/20',
                border: 'border-purple-400/30 hover:border-purple-300/60',
                text: 'bg-gradient-to-r from-purple-300 to-pink-300'
              },
              {
                title: 'Frameworks',
                icon: '⚙️',
                items: ['React', 'Laravel', 'Spring Boot', 'Node.js', 'Express', 'Next.js'],
                gradient: 'from-cyan-500/40 via-blue-500/40 to-cyan-500/20',
                border: 'border-cyan-400/30 hover:border-cyan-300/60',
                text: 'bg-gradient-to-r from-cyan-300 to-blue-300'
              },
              {
                title: 'Databases',
                icon: '🗄️',
                items: ['MongoDB', 'MySQL', 'Firebase', 'PostgreSQL'],
                gradient: 'from-pink-500/40 via-purple-500/40 to-pink-500/20',
                border: 'border-pink-400/30 hover:border-pink-300/60',
                text: 'bg-gradient-to-r from-pink-300 to-purple-300'
              },
              {
                title: 'Cloud & Tools',
                icon: '☁️',
                items: ['AWS', 'Azure', 'CI/CD', 'Docker', 'Linux', 'Git'],
                gradient: 'from-blue-500/40 via-cyan-500/40 to-blue-500/20',
                border: 'border-blue-400/30 hover:border-blue-300/60',
                text: 'bg-gradient-to-r from-blue-300 to-cyan-300'
              }
            ].map((skillGroup, idx) => (
              <motion.div
                key={skillGroup.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className={`group relative rounded-2xl overflow-hidden p-8 bg-gradient-to-br ${skillGroup.gradient} border ${skillGroup.border} transition-all duration-300 backdrop-blur-md hover:shadow-2xl`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/5 via-transparent to-white/5"></div>
                <div className="relative">
                  <h3 className={`text-2xl font-bold ${skillGroup.text} bg-clip-text text-transparent mb-6 flex items-center gap-3`}>
                    <motion.span 
                      className="text-3xl"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {skillGroup.icon}
                    </motion.span>
                    {skillGroup.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((item, i) => (
                      <motion.span 
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ scale: 1.15, y: -3 }}
                        className="px-4 py-2 rounded-full text-sm font-semibold text-gray-200 bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-default"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent mb-2">🎓 Education</h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full mb-8"></div>
          </motion.div>

          <div className="mt-12 space-y-4 max-w-4xl">
            {[
              { title: 'BSc (Hons) in Information Technology', org: 'SLIIT Campus', year: '2022 – Present', icon: '🎓', color: 'from-purple-500 to-pink-600' },
              { title: 'Certificate in Machine Learning', org: 'Zero2Learn', year: '2025', icon: '🤖', color: 'from-blue-500 to-cyan-600' },
              { title: 'Cloud Web Application Builder', org: 'AWS Academy', year: '2025', icon: '☁️', color: 'from-cyan-500 to-green-600' },
              { title: 'Diploma in Software Quality Assurance', org: 'SLIIT Campus', year: '2024', icon: '✓', color: 'from-pink-500 to-purple-600' }
            ].map((edu, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ x: 8 }}
                className="group relative rounded-xl overflow-hidden border-l-4 border-gradient-to-b from-purple-500 to-cyan-500 pl-6 p-4 bg-gradient-to-r from-slate-800/40 via-slate-800/20 to-slate-800/40 hover:from-slate-800/60 hover:via-slate-800/40 hover:to-slate-800/60 transition-all duration-300 backdrop-blur-sm hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-start gap-4">
                  <motion.div
                    className="text-3xl mt-1"
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                  >
                    {edu.icon}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-100 group-hover:text-white transition-colors">{edu.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">{edu.org}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <motion.div 
                        className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${edu.color}`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {edu.year}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent mb-4">✨ Highlights</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full mx-auto"></div>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '📱', title: '10+ Projects', desc: 'Built and delivered across MERN, Laravel & AI/ML' },
              { icon: '🏆', title: '7+ Certifications', desc: 'AWS, ML, QA & Computer Science' },
              { icon: '💼', title: '6 Months Experience', desc: 'Professional internship at Keen Rabbits' }
            ].map((highlight, i) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -12, rotateZ: 1 }}
                className="group relative rounded-2xl overflow-hidden p-8 bg-gradient-to-br from-slate-800/50 to-slate-800/30 border border-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-md hover:shadow-2xl text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <motion.div 
                    className="text-6xl mb-4 inline-block"
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {highlight.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:via-pink-300 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all">{highlight.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{highlight.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
