'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-20">
      <div className="container mx-auto px-6 pt-20">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-6xl font-bold bg-gradient-to-br from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent mb-4">About Me</h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full"></div>
          <p className="mt-4 text-xl text-gray-300">My journey in tech and passion for creating innovative solutions.</p>
        </motion.div>

        {/* Landscape Layout - Profile on Right */}
        <motion.section 
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Content - Bio */}
          <motion.div 
            className="space-y-6 order-2 lg:order-1"
            variants={itemVariants}
          >
            <motion.div 
              className="group relative rounded-2xl overflow-hidden p-8 bg-gradient-to-br from-slate-800/60 via-purple-900/30 to-slate-800/60 border border-purple-400/30 hover:border-purple-300/60 transition-all duration-300 backdrop-blur-md hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-start gap-4">
                <span className="text-4xl">👩‍💻</span>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-3">Who I Am</h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    I am a <span className="font-semibold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">4th year undergraduate pursuing a BSc (Hons) in Information Technology</span> at SLIIT. My journey began with foundational studies in computer science and has progressed into full-stack development, cloud computing, and AI research. I'm passionate about building intelligent systems that solve real-world problems.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="group relative rounded-2xl overflow-hidden p-8 bg-gradient-to-br from-slate-800/60 via-cyan-900/30 to-slate-800/60 border border-cyan-400/30 hover:border-cyan-300/60 transition-all duration-300 backdrop-blur-md hover:shadow-2xl hover:shadow-cyan-500/20"
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-start gap-4">
                <span className="text-4xl">🎯</span>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-3">Career Objective</h2>
                  <p className="text-lg text-gray-300">
                    To become a software engineer specializing in <span className="font-semibold text-cyan-300">AI-powered intelligent systems</span> and <span className="font-semibold text-blue-300">scalable web applications</span> that make a meaningful impact on society.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                variants={itemVariants}
                className="group relative rounded-2xl overflow-hidden p-6 bg-gradient-to-br from-slate-800/50 via-purple-900/20 to-slate-800/50 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 backdrop-blur-md hover:shadow-xl hover:shadow-purple-500/20"
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent border-b border-purple-500/50 pb-3 mb-4 flex items-center gap-2">
                    🎓 Academic Background
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <motion.li className="flex items-start gap-3 hover:text-purple-300 transition-colors" whileHover={{ x: 5 }}>
                      <span className="text-cyan-400 mt-1 text-xl">✓</span>
                      <span>BSc (Hons) in Information Technology — SLIIT (2022 – Present)</span>
                    </motion.li>
                    <motion.li className="flex items-start gap-3 hover:text-purple-300 transition-colors" whileHover={{ x: 5 }}>
                      <span className="text-cyan-400 mt-1 text-xl">✓</span>
                      <span>Diploma in Software Quality Assurance — SLIIT (2024)</span>
                    </motion.li>
                    <motion.li className="flex items-start gap-3 hover:text-purple-300 transition-colors" whileHover={{ x: 5 }}>
                      <span className="text-cyan-400 mt-1 text-xl">✓</span>
                      <span>Certificate in Computer Science — NIBM (2021)</span>
                    </motion.li>
                  </ul>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="group relative rounded-2xl overflow-hidden p-6 bg-gradient-to-br from-slate-800/50 via-pink-900/20 to-slate-800/50 border border-pink-500/30 hover:border-pink-400/60 transition-all duration-300 backdrop-blur-md hover:shadow-xl hover:shadow-pink-500/20"
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent border-b border-pink-500/50 pb-3 mb-4 flex items-center gap-2">
                    ⚡ Technical Interests
                  </h3>
                  <div className="space-y-3">
                    {[
                      { icon: '🤖', text: 'AI & NLP' },
                      { icon: '💻', text: 'Full Stack Development' },
                      { icon: '☁️', text: 'Cloud Computing' },
                      { icon: '⚙️', text: 'Software Engineering' },
                      { icon: '🎨', text: 'UI/UX Design' }
                    ].map((interest, i) => (
                      <motion.div 
                        key={interest.text}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 px-4 py-3 rounded-lg border border-pink-500/30 hover:border-pink-400 transition-all duration-300 flex items-center gap-2 cursor-default"
                      >
                        <span className="text-xl">{interest.icon}</span>
                        {interest.text}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center order-1 lg:order-2"
          >
            <motion.div
              className="relative w-full max-w-sm"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              {/* Glowing border with animation */}
              <motion.div 
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 p-1 opacity-80 blur-xl"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity }
                }}
              ></motion.div>
              
              <div className="relative rounded-3xl overflow-hidden bg-slate-900 p-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-transparent to-cyan-500/30"></div>
                
                <div className="relative w-full h-full rounded-3xl overflow-hidden">
                  <Image
                    src="/WhatsApp Image 2026-05-09 at 8.22.02 AM.jpeg"
                    alt="Oushadhee Wickramasinghe"
                    width={450}
                    height={550}
                    className="w-full h-full object-cover rounded-3xl filter brightness-110"
                  />
                </div>
              </div>

              {/* Animated corner accents */}
              <motion.div 
                className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full opacity-50 blur-2xl"
                animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 6, repeat: Infinity }}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full opacity-40 blur-3xl"
                animate={{ scale: [1.2, 0.9, 1.2], rotate: [360, 180, 0] }}
                transition={{ duration: 7, repeat: Infinity }}
              ></motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute top-10 -left-10 text-5xl"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                💡
              </motion.div>
              <motion.div
                className="absolute bottom-10 -right-10 text-5xl"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
              >
                🚀
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Values Section */}
        <motion.section 
          className="mt-24 max-w-6xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent mb-4">Core Values</h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🎯', title: 'Innovation', desc: 'Creating cutting-edge solutions that push boundaries' },
              { icon: '💪', title: 'Excellence', desc: 'Striving for perfection in every project' },
              { icon: '🤝', title: 'Collaboration', desc: 'Working together to achieve greater impact' }
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl overflow-hidden p-8 bg-gradient-to-br from-slate-800/50 via-slate-800/30 to-slate-800/50 border border-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-md hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
