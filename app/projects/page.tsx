'use client';

import { motion } from 'framer-motion';
import ProjectGrid from '../../components/ProjectGrid';

export default function ProjectsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
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
          <h1 className="text-6xl font-bold bg-gradient-to-br from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent mb-4">Projects Portfolio</h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full"></div>
          <p className="mt-4 text-xl text-gray-300">10+ projects showcasing full-stack development, AI/ML, and cloud technologies.</p>
        </motion.div>

        <motion.section 
          className="mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            variants={itemVariants}
            className="mb-8 p-6 rounded-xl bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 border border-gradient-to-r from-purple-400/30 via-pink-400/30 to-cyan-400/30 backdrop-blur-md hover:shadow-lg hover:shadow-purple-500/20 transition-all"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="font-semibold text-pink-300 flex items-center gap-2 text-lg">
              <span className="text-2xl">⭐</span>
              Featured Projects
            </h3>
            <p className="text-gray-200 mt-2">AI-powered systems, complete MERN applications, Laravel solutions, and more.</p>
          </motion.div>
          <ProjectGrid />
        </motion.section>
      </div>
    </main>
  );
}
