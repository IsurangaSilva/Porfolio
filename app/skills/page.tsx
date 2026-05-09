'use client';

import { motion } from 'framer-motion';

const SkillBar = ({ label, value, emoji }: { label: string; value: number; emoji: string }) => (
  <motion.div 
    className="mb-6 group"
    whileHover={{ scale: 1.02 }}
  >
    <div className="flex justify-between text-sm mb-2">
      <span className="font-medium text-gray-200 flex items-center gap-2">
        <span className="text-lg">{emoji}</span>
        {label}
      </span>
      <span className="text-cyan-300 font-bold">{value}%</span>
    </div>
    <div className="w-full bg-slate-700/40 h-3 rounded-full overflow-hidden border border-purple-500/30">
      <motion.div 
        className="h-3 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 transition-all duration-500" 
        style={{ width: `${value}%` }}
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        transition={{ duration: 1, delay: 0.2 }}
      />
    </div>
  </motion.div>
);

export default function SkillsPage() {
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
          <h1 className="text-6xl font-bold bg-gradient-to-br from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent mb-4">Skills & Expertise</h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full"></div>
          <p className="mt-4 text-xl text-gray-300">Comprehensive technical and professional capabilities.</p>
        </motion.div>

        <motion.section 
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Programming Languages */}
          <motion.div 
            variants={itemVariants}
            className="group relative rounded-2xl overflow-hidden p-8 bg-gradient-to-br from-slate-800/60 via-purple-900/30 to-slate-800/60 border border-purple-400/30 hover:border-purple-300/60 transition-all duration-300 backdrop-blur-md hover:shadow-2xl hover:shadow-purple-500/20"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-6 flex items-center gap-2">
                💻 Programming Languages
              </h3>
              <div className="space-y-2">
                <SkillBar label="Java" value={85} emoji="☕" />
                <SkillBar label="Python" value={80} emoji="🐍" />
                <SkillBar label="PHP" value={75} emoji="🅿️" />
                <SkillBar label="Kotlin" value={60} emoji="🎯" />
                <SkillBar label="C#" value={65} emoji="⚙️" />
                <SkillBar label="C" value={60} emoji="©️" />
              </div>
            </div>
          </motion.div>

          {/* Frameworks & Libraries */}
          <motion.div 
            variants={itemVariants}
            className="group relative rounded-2xl overflow-hidden p-8 bg-gradient-to-br from-slate-800/60 via-cyan-900/30 to-slate-800/60 border border-cyan-400/30 hover:border-cyan-300/60 transition-all duration-300 backdrop-blur-md hover:shadow-2xl hover:shadow-cyan-500/20"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-6 flex items-center gap-2">
                🚀 Frameworks & Libraries
              </h3>
              <div className="space-y-2">
                <SkillBar label="React" value={85} emoji="⚛️" />
                <SkillBar label="Laravel" value={80} emoji="🔗" />
                <SkillBar label="Spring Boot" value={70} emoji="🍃" />
                <SkillBar label="Node.js / Express" value={78} emoji="🟢" />
                <SkillBar label="Next.js" value={75} emoji="▲" />
                <SkillBar label="Tailwind CSS" value={85} emoji="🎨" />
              </div>
            </div>
          </motion.div>

          {/* Databases & Tools */}
          <motion.div 
            variants={itemVariants}
            className="group relative rounded-2xl overflow-hidden p-8 bg-gradient-to-br from-slate-800/60 via-pink-900/30 to-slate-800/60 border border-pink-400/30 hover:border-pink-300/60 transition-all duration-300 backdrop-blur-md hover:shadow-2xl hover:shadow-pink-500/20"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-transparent to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-300 to-rose-300 bg-clip-text text-transparent mb-6 flex items-center gap-2">
                🗄️ Databases & Tools
              </h3>
              <div className="space-y-2">
                <SkillBar label="MongoDB" value={75} emoji="🍃" />
                <SkillBar label="MySQL" value={80} emoji="🐬" />
                <SkillBar label="Firebase" value={70} emoji="🔥" />
                <SkillBar label="PostgreSQL" value={65} emoji="🐘" />
                <SkillBar label="Git & GitHub" value={85} emoji="🐙" />
                <SkillBar label="Docker" value={60} emoji="🐳" />
              </div>
            </div>
          </motion.div>

          {/* Cloud & DevOps */}
          <motion.div 
            variants={itemVariants}
            className="group relative rounded-2xl overflow-hidden p-8 bg-gradient-to-br from-slate-800/60 via-yellow-900/30 to-slate-800/60 border border-yellow-400/30 hover:border-yellow-300/60 transition-all duration-300 backdrop-blur-md hover:shadow-2xl hover:shadow-yellow-500/20"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent mb-6 flex items-center gap-2">
                ☁️ Cloud & DevOps
              </h3>
              <div className="space-y-2">
                <SkillBar label="AWS (EC2, RDS, S3)" value={70} emoji="📦" />
                <SkillBar label="Azure" value={65} emoji="🔷" />
                <SkillBar label="CI/CD" value={60} emoji="⚡" />
                <SkillBar label="Linux" value={75} emoji="🐧" />
                <SkillBar label="Kubernetes (Basic)" value={50} emoji="☸️" />
                <SkillBar label="Nginx" value={65} emoji="🔌" />
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Soft Skills Section */}
        <motion.section 
          className="mt-16 relative rounded-2xl overflow-hidden p-8 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-cyan-600/20 border border-gradient-to-r from-purple-400/30 via-pink-400/30 to-cyan-400/30 backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent mb-8 flex items-center gap-2">
            💡 Soft Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { skill: 'Communication', emoji: '💬' },
              { skill: 'Teamwork', emoji: '🤝' },
              { skill: 'Leadership', emoji: '👨‍💼' },
              { skill: 'Problem Solving', emoji: '🧠' },
              { skill: 'Critical Thinking', emoji: '🎯' },
              { skill: 'Adaptability', emoji: '🔄' },
              { skill: 'Collaboration', emoji: '👥' },
              { skill: 'Attention to Detail', emoji: '🔍' },
              { skill: 'Time Management', emoji: '⏰' }
            ].map((item, idx) => (
              <motion.div 
                key={item.skill} 
                className="group bg-white/5 backdrop-blur px-4 py-3 rounded-lg text-center border border-purple-400/20 hover:border-purple-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl mb-2">{item.emoji}</div>
                <div className="font-semibold text-gray-100">{item.skill}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
