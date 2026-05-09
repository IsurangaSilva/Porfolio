'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 border-t border-purple-500/20 py-20">
      {/* Animated gradient background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Profile Picture Section at Top */}
        <motion.div
          className="flex justify-center mb-12"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full blur-lg group-hover:blur-xl transition opacity-75 group-hover:opacity-100"></div>
            <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 border-2 border-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
              <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">OW</span>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content - Landscape Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {/* About Section */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-6 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 transition group"
          >
            <h3 className="font-bold text-lg bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">👨‍💼 About</h3>
            <p className="text-slate-300 text-sm leading-relaxed">Full-Stack Developer & AI Enthusiast crafting innovative digital solutions with modern technologies.</p>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 transition group"
          >
            <h4 className="font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">🔗 Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/projects" className="text-slate-300 hover:text-cyan-400 transition">→ Projects</a></li>
              <li><a href="/skills" className="text-slate-300 hover:text-cyan-400 transition">→ Skills</a></li>
              <li><a href="/experience" className="text-slate-300 hover:text-cyan-400 transition">→ Experience</a></li>
              <li><a href="/career" className="text-slate-300 hover:text-cyan-400 transition">→ Career</a></li>
            </ul>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/30 rounded-lg p-6 hover:border-pink-500/60 hover:shadow-lg hover:shadow-pink-500/20 transition group"
          >
            <h4 className="font-bold mb-4 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">💬 Connect</h4>
            <div className="space-y-2 text-sm">
              <p><a href="mailto:oushadhee0209@gmail.com" className="text-slate-300 hover:text-pink-400 transition">📧 Email</a></p>
              <p><a href="https://www.linkedin.com/in/oushadhee-wickramasinghe-286664288/" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-pink-400 transition">💼 LinkedIn</a></p>
              <p><a href="https://github.com/oushadhee" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-pink-400 transition">🐙 GitHub</a></p>
            </div>
          </motion.div>

          {/* Social Section */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-lg p-6 hover:border-yellow-500/60 hover:shadow-lg hover:shadow-yellow-500/20 transition group"
          >
            <h4 className="font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">🌟 Follow</h4>
            <div className="space-y-2 text-sm">
              <p><a href="https://www.facebook.com/oushadhee.sahashra" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-yellow-400 transition">👍 Facebook</a></p>
              <p><a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-yellow-400 transition">📸 Instagram</a></p>
              <p><a href="/Oushadhee Wickramasinghe-Intern.pdf" className="text-slate-300 hover:text-yellow-400 transition">📥 Download CV</a></p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section - Copyright & Tech Stack */}
        <motion.div
          className="border-t border-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 pt-8 space-y-4"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left">
            <div>
              <p className="text-slate-400 text-sm">
                © {new Date().getFullYear()} <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">Oushadhee Wickramasinghe</span>. All rights reserved.
              </p>
            </div>
            <div className="md:text-right">
              <p className="text-slate-400 text-sm">
                Built with <span className="text-cyan-400">Next.js</span> • <span className="text-pink-400">Tailwind CSS</span> • <span className="text-purple-400">Framer Motion</span>
              </p>
            </div>
          </div>

          {/* Animated tech badge */}
          <div className="flex justify-center md:justify-end items-center gap-2">
            <div className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-xs text-purple-300">
              ⚡ Optimized for Performance
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
