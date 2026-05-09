'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BlogPage() {
  const posts = [
    {
      slug: 'hello',
      title: 'Hello World',
      description: 'Example MDX post showcasing my thoughts and ideas',
      emoji: '👋',
      color: 'from-purple-300 to-pink-300'
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
      <section className="container mx-auto px-6 pt-20">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-6xl font-bold bg-gradient-to-br from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent mb-4">Blog</h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full"></div>
          <p className="mt-4 text-xl text-gray-300">Thoughts, tutorials and case studies.</p>
        </motion.div>

        <motion.ul 
          className="mt-16 space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {posts.map((post) => (
            <motion.li key={post.slug} variants={itemVariants}>
              <Link href={`/blog/${post.slug}`}>
                <motion.div 
                  className="group relative rounded-2xl overflow-hidden p-8 bg-gradient-to-br from-slate-800/60 via-purple-900/30 to-slate-800/60 border border-purple-400/30 hover:border-purple-300/60 transition-all duration-300 backdrop-blur-md hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <span className="text-5xl">{post.emoji}</span>
                      <div className="flex-1">
                        <h2 className={`text-3xl font-bold bg-gradient-to-r ${post.color} bg-clip-text text-transparent mb-2`}>
                          {post.title}
                        </h2>
                        <p className="text-gray-300 text-lg">{post.description}</p>
                        <motion.div 
                          className="mt-4 inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-200 font-medium group-hover:border-purple-400/60 transition-all"
                          whileHover={{ scale: 1.05 }}
                        >
                          Read Article →
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Coming Soon Section */}
        <motion.div 
          className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-cyan-600/20 via-blue-600/20 to-cyan-600/20 border border-cyan-400/30 backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-cyan-300 mb-2 flex items-center gap-2">
            📝 Coming Soon
          </h3>
          <p className="text-gray-300">More articles on Full-Stack Development, Cloud Architecture, AI/ML, and career tips are coming soon. Stay tuned!</p>
        </motion.div>
      </section>
    </main>
  );
}
