'use client';
import { motion } from 'framer-motion';

export default function AboutPage() {
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
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-dark py-20">
      <div className="container mx-auto px-6 pt-20">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-6xl font-bold bg-gradient-to-br from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent mb-4">About Me</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600"></div>
          <p className="mt-4 text-xl text-gray-300">My journey in tech and passion for creating innovative solutions.</p>
        </motion.div>

        <motion.section 
          className="mt-16 max-w-4xl space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            variants={itemVariants}
            className="group relative rounded-2xl overflow-hidden p-8 bg-gradient-to-br from-slate-800/50 via-cyan-900/20 to-slate-800/50 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 backdrop-blur-md"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <p className="relative text-lg text-gray-200 leading-relaxed">
              I am a 4th year undergraduate pursuing a BSc (Hons) in Information Technology at SLIIT. My journey began with foundational studies in computer science and has progressed into full-stack development, cloud computing, and AI research. I'm passionate about building intelligent systems that solve real-world problems.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="group relative rounded-2xl overflow-hidden p-8 bg-gradient-to-br from-slate-800/50 via-blue-900/20 to-slate-800/50 border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 backdrop-blur-md"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">Career Objective</h2>
              <p className="text-lg text-gray-300">
                To become a software engineer specializing in AI-powered intelligent systems and scalable web applications that make a meaningful impact.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              variants={itemVariants}
              className="group relative rounded-2xl overflow-hidden p-8 bg-gradient-to-br from-slate-800/50 via-purple-900/20 to-slate-800/50 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 backdrop-blur-md"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent border-b border-purple-500/50 pb-3 mb-4">Academic Background</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span>BSc (Hons) in Information Technology — SLIIT (2022 – Present)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span>Diploma in Software Quality Assurance — SLIIT (2024)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span>Certificate in Computer Science — NIBM (2021)</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="group relative rounded-2xl overflow-hidden p-8 bg-gradient-to-br from-slate-800/50 via-pink-900/20 to-slate-800/50 border border-pink-500/30 hover:border-pink-400/60 transition-all duration-300 backdrop-blur-md"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent border-b border-pink-500/50 pb-3 mb-4">Technical Interests</h3>
                <div className="mt-4 grid grid-cols-1 gap-3">
                  {['AI & NLP', 'Full Stack Development', 'Cloud Computing', 'Software Engineering', 'UI/UX'].map((interest, i) => (
                    <motion.div 
                      key={interest}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 px-4 py-2 rounded-lg border border-pink-500/30 hover:border-pink-400 transition-colors"
                    >
                      {interest}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
