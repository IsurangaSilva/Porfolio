'use client';

import { motion } from 'framer-motion';

export default function JournalsPage() {
  const weeks = [
    { 
      week: 1, 
      title: 'Professional Communication', 
      emoji: '💬',
      learned: ['Email writing', 'Interview preparation', 'Presentation standards'],
      reflection: 'Learned the importance of clarity in professional messaging, effective interview techniques, and polished presentation skills. This directly enhances my ability to collaborate and communicate in professional environments.'
    },
    { 
      week: 2, 
      title: 'Technical Writing & Documentation', 
      emoji: '📚',
      learned: ['Code documentation', 'API documentation', 'README best practices'],
      reflection: 'Discovered how crucial clear documentation is for team collaboration and long-term project maintenance. Good docs save time and prevent misunderstandings.'
    }
  ];

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
          <h1 className="text-6xl font-bold bg-gradient-to-br from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent mb-4">Reflective Journals</h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full"></div>
          <p className="mt-4 text-xl text-gray-300">Weekly reflections and learning progress for professional development.</p>
        </motion.div>

        <motion.div 
          className="mt-16 space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {weeks.map((w) => (
            <motion.details 
              key={w.week} 
              variants={itemVariants}
              className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800/60 via-purple-900/30 to-slate-800/60 border border-purple-400/30 hover:border-purple-300/60 transition-all duration-300 backdrop-blur-md hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <summary className="p-6 cursor-pointer flex items-center justify-between hover:bg-purple-600/10 rounded-2xl transition">
                <div className="flex items-center gap-4 flex-1">
                  <motion.div 
                    className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-2xl flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                  >
                    {w.emoji}
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">{w.title}</h3>
                    <p className="text-gray-300 mt-1">Week {w.week} Reflection</p>
                  </div>
                </div>
                <motion.span 
                  className="text-2xl text-purple-300 group-open:rotate-180 transition duration-300"
                  animate={{ rotate: 0 }}
                  whileHover={{ scale: 1.2 }}
                >
                  ▼
                </motion.span>
              </summary>
              <motion.div 
                className="px-6 pb-6 border-t border-purple-400/20 mt-4"
                initial={{ opacity: 0, height: 0 }}
                whileInView={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.4 }}
              >
                <div className="grid md:grid-cols-2 gap-8 mt-6">
                  <motion.div
                    className="p-6 rounded-xl bg-white/5 border border-purple-400/20 hover:border-purple-400/60 transition-all"
                    whileHover={{ y: -5 }}
                  >
                    <h4 className="font-bold text-lg bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-4 flex items-center gap-2">
                      💡 Key Learnings
                    </h4>
                    <ul className="space-y-2">
                      {w.learned.map((l, idx) => (
                        <motion.li 
                          key={l} 
                          className="flex items-start gap-2 text-gray-300 hover:text-cyan-300 transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <span className="text-cyan-400 mt-1">✓</span>
                          <span>{l}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                  
                  <motion.div
                    className="p-6 rounded-xl bg-white/5 border border-pink-400/20 hover:border-pink-400/60 transition-all"
                    whileHover={{ y: -5 }}
                  >
                    <h4 className="font-bold text-lg bg-gradient-to-r from-pink-300 to-rose-300 bg-clip-text text-transparent mb-4 flex items-center gap-2">
                      🤔 Reflection
                    </h4>
                    <p className="text-gray-300 leading-relaxed">{w.reflection}</p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.details>
          ))}
        </motion.div>

        {/* Research Publication Section */}
        <motion.div 
          className="mt-16 relative rounded-2xl overflow-hidden p-8 bg-gradient-to-br from-cyan-600/20 via-blue-600/20 to-cyan-600/20 border border-cyan-400/30 backdrop-blur-md hover:shadow-2xl hover:shadow-cyan-500/20 transition-all"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-3 flex items-center gap-2">
              🔬 Research Publication
            </h3>
            <p className="text-gray-200 text-lg leading-relaxed">
              Working on research for <span className="font-semibold text-cyan-300">ICECET 2026</span> conference submission on <span className="font-semibold text-blue-300">AI-powered learning systems</span>. This research aims to contribute to the field of intelligent education technology.
            </p>
            <motion.div 
              className="mt-6 flex gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-2xl">📝</span>
              <span className="text-2xl">🚀</span>
              <span className="text-2xl">💻</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
