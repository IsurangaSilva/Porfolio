'use client';

import { motion } from 'framer-motion';

export default function CareerPage() {
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

  const shortTermGoals = [
    { goal: 'Graduate with BSc (Hons) in IT', timeline: '2026', emoji: '🎓' },
    { goal: 'Master AWS & Azure cloud platforms', timeline: 'By Dec 2025', emoji: '☁️' },
    { goal: 'Land junior developer/internship role', timeline: 'By Aug 2025', emoji: '💼' },
    { goal: 'Build 3+ production-ready projects', timeline: '2025', emoji: '🚀' }
  ];

  const longTermGoals = [
    { goal: 'Become an AI Engineer & Tech Lead', timeline: '3-5 years', emoji: '🤖' },
    { goal: 'Lead ML-integrated product development', timeline: '5+ years', emoji: '🧠' },
    { goal: 'Publish research on AI/ML systems', timeline: '2025-2026', emoji: '📚' },
    { goal: 'Establish tech startup/company', timeline: '7-10 years', emoji: '🏢' }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-20">
      <div className="container mx-auto px-6 pt-20">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-6xl font-bold bg-gradient-to-br from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent mb-4">Career Development</h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full"></div>
          <p className="mt-4 text-xl text-gray-300">Strategic goals and roadmap for professional growth.</p>
        </motion.div>

        <motion.section 
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Short-Term Goals */}
          <motion.div 
            variants={itemVariants}
            className="group relative rounded-2xl overflow-hidden p-8 bg-gradient-to-br from-slate-800/60 via-purple-900/30 to-slate-800/60 border border-purple-400/30 hover:border-purple-300/60 transition-all duration-300 backdrop-blur-md hover:shadow-2xl hover:shadow-purple-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-6 flex items-center gap-2">
                🎯 Short-Term Goals
              </h2>
              <div className="space-y-4">
                {shortTermGoals.map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-start gap-4 pb-4 border-b border-purple-400/20 last:border-0"
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex-shrink-0 flex items-center justify-center text-white font-bold text-xl">
                      {item.emoji}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-200">{item.goal}</p>
                      <p className="text-sm text-purple-300 mt-1">Target: {item.timeline}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Long-Term Goals */}
          <motion.div 
            variants={itemVariants}
            className="group relative rounded-2xl overflow-hidden p-8 bg-gradient-to-br from-slate-800/60 via-cyan-900/30 to-slate-800/60 border border-cyan-400/30 hover:border-cyan-300/60 transition-all duration-300 backdrop-blur-md hover:shadow-2xl hover:shadow-cyan-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-6 flex items-center gap-2">
                🚀 Long-Term Goals
              </h2>
              <div className="space-y-4">
                {longTermGoals.map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-start gap-4 pb-4 border-b border-cyan-400/20 last:border-0"
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex-shrink-0 flex items-center justify-center text-white font-bold text-xl">
                      {item.emoji}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-200">{item.goal}</p>
                      <p className="text-sm text-cyan-300 mt-1">{item.timeline}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Development Strategy */}
        <motion.section 
          className="mt-16 relative rounded-2xl overflow-hidden p-8 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-cyan-600/20 border border-gradient-to-r from-purple-400/30 via-pink-400/30 to-cyan-400/30 backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent mb-8 flex items-center gap-2">
            📋 Development Strategy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Learning', description: 'Continuous upskilling in AI, cloud, and advanced frameworks', emoji: '📚', color: 'from-purple-500/20 to-pink-500/20' },
              { title: 'Projects', description: 'Build portfolio with real-world, innovative solutions', emoji: '🛠️', color: 'from-cyan-500/20 to-blue-500/20' },
              { title: 'Networking', description: 'Engage with tech community and industry professionals', emoji: '🤝', color: 'from-pink-500/20 to-rose-500/20' }
            ].map((item, idx) => (
              <motion.div 
                key={item.title}
                className={`bg-gradient-to-br ${item.color} backdrop-blur p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all`}
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-3xl mb-3">{item.emoji}</p>
                <p className="text-xl font-bold text-gray-100 mb-2">{item.title}</p>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
