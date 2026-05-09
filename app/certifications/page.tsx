'use client';

import { motion } from 'framer-motion';

export default function CertificationsPage() {
  const certs = [
    { title: 'Certificate in Machine Learning', org: 'Zero2Learn', year: 2025, badge: '🤖' },
    { title: 'Cloud Web Application Builder', org: 'AWS Academy', year: 2025, badge: '☁️' },
    { title: 'AWS SimuLearn: Cloud Practitioner', org: 'AWS Skill Builder', year: 2025, badge: '☁️' },
    { title: 'Azure Microsoft Learn', org: 'Microsoft', year: 2025, badge: '☁️' },
    { title: 'Diploma in Software Quality Assurance', org: 'SLIIT Campus', year: 2024, badge: '✔️' },
    { title: 'Certificate in Python for Beginners', org: 'University of Moratuwa', year: 2024, badge: '🐍' },
    { title: 'Certificate in Selenium WebDriver', org: 'Alison', year: 2024, badge: '🧪' }
  ];

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
          <h1 className="text-6xl font-bold bg-gradient-to-br from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent mb-4">Certifications & Training</h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full"></div>
          <p className="mt-4 text-xl text-gray-300">Professional certifications and continuous learning achievements.</p>
        </motion.div>

        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certs.map((c, idx) => (
            <motion.div 
              key={c.title} 
              variants={itemVariants}
              className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800/60 via-purple-900/30 to-slate-800/60 border border-purple-400/30 hover:border-purple-300/60 transition-all duration-300 backdrop-blur-md hover:shadow-2xl hover:shadow-purple-500/20"
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"></div>
              
              <div className="relative p-6">
                <div className="text-5xl mb-4">{c.badge}</div>
                <h3 className="font-semibold text-lg text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text group-hover:text-pink-300 transition">
                  {c.title}
                </h3>
                <p className="text-pink-300 font-medium mt-2">{c.org}</p>
                <p className="text-gray-400 text-sm mt-1 flex items-center gap-1">
                  <span className="text-lg">📅</span>
                  {c.year}
                </p>
                <p className="mt-4 text-sm text-gray-300">Comprehensive training in {c.title.toLowerCase()}.</p>
                <motion.div 
                  className="mt-4 pt-4 border-t border-purple-400/20"
                  whileHover={{ scale: 1.05 }}
                >
                  <a 
                    href="#" 
                    className="inline-block rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 hover:border-purple-400/60 text-purple-200 px-4 py-2 text-sm font-medium transition-all"
                  >
                    View Certificate →
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
