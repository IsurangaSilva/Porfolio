'use client';

import { motion } from 'framer-motion';

export default function ExperiencePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-20">
      <div className="container mx-auto px-6 pt-20">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-6xl font-bold bg-gradient-to-br from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent mb-4">Experience</h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full"></div>
          <p className="mt-4 text-xl text-gray-300">Professional journey and accomplishments.</p>
        </motion.div>

        <motion.section 
          className="mt-16 max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            variants={itemVariants}
            className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800/60 via-purple-900/30 to-slate-800/60 border border-purple-400/30 hover:border-purple-300/60 transition-all duration-300 backdrop-blur-md hover:shadow-2xl hover:shadow-purple-500/20"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"></div>
            
            <div className="relative p-8">
              <motion.div 
                className="flex items-start gap-4 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-5xl">💼</span>
                <div>
                  <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">Software Engineer Intern</h2>
                  <p className="text-pink-300 font-semibold mt-1 text-lg">Keen Rabbits (Pvt) Ltd</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex gap-6 text-gray-300 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📅</span>
                  <span>Feb 2025 — May 2025 (Six months)</span>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-2 text-gray-300 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-2xl">📍</span>
                <span>Malabe, Colombo, Sri Lanka</span>
              </motion.div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  className="p-6 rounded-xl bg-white/5 border border-purple-400/20 hover:border-purple-400/60 transition-all"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="font-bold text-lg bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-4 flex items-center gap-2">
                    🎯 Responsibilities
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    {[
                      'Built and deployed web applications using Laravel, PHP, MySQL',
                      'Implemented multi-role authentication and CRM features',
                      'Improved SEO and performance through optimizations',
                      'Installed and customized Odoo ERP for workflows'
                    ].map((item, idx) => (
                      <motion.li 
                        key={idx}
                        className="flex items-start gap-2 hover:text-cyan-300 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-cyan-400 mt-1">✓</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  className="p-6 rounded-xl bg-white/5 border border-pink-400/20 hover:border-pink-400/60 transition-all"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="font-bold text-lg bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-4 flex items-center gap-2">
                    🏆 Key Achievements
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    {[
                      'Improved website visibility through SEO strategies',
                      'Delivered authentication systems used by clients',
                      'Built functional CRM features',
                      'Customized Odoo ERP workflows successfully'
                    ].map((item, idx) => (
                      <motion.li 
                        key={idx}
                        className="flex items-start gap-2 hover:text-pink-300 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-pink-400 mt-1">⭐</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <motion.div 
                className="mt-8 pt-8 border-t border-purple-400/20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="font-semibold text-gray-200 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🛠️</span>
                  Technologies Used
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Blade', 'Odoo ERP', 'SEO', 'HTML/CSS'].map((tech, idx) => (
                    <motion.span 
                      key={tech} 
                      className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 hover:border-purple-400/60 text-purple-200 px-4 py-2 rounded-full text-sm font-medium transition-all"
                      whileHover={{ scale: 1.1 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      viewport={{ once: true }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </main>
  );
}
