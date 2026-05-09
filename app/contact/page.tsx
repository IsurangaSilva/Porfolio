'use client';

import { motion } from 'framer-motion';

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const contactItems = [
    { icon: '📧', label: 'Email', value: 'oushadhee0209@gmail.com', link: 'mailto:oushadhee0209@gmail.com', gradient: 'from-purple-300 to-pink-300' },
    { icon: '📞', label: 'Phone', value: '+94 740 699 786', link: 'tel:+94740699786', gradient: 'from-cyan-300 to-blue-300' },
    { icon: '📍', label: 'Location', value: 'Malabe, Colombo, Sri Lanka', link: '#', gradient: 'from-pink-300 to-rose-300' },
    { icon: '🔗', label: 'Social Links', value: 'Connect with me', link: '#', gradient: 'from-yellow-300 to-orange-300' }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-20">
      <div className="container mx-auto px-6 pt-20">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-6xl font-bold bg-gradient-to-br from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent mb-4">Get In Touch</h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full"></div>
          <p className="mt-4 text-xl text-gray-300">Let's connect and explore opportunities to collaborate.</p>
        </motion.div>

        <motion.section 
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Info Cards */}
          {contactItems.map((item, idx) => (
            <motion.div 
              key={item.label}
              variants={itemVariants}
              className={`group relative rounded-2xl overflow-hidden p-8 bg-gradient-to-br from-slate-800/60 via-${item.gradient.split('-')[1]}-900/30 to-slate-800/60 border border-${item.gradient.split('-')[1]}-400/30 hover:border-${item.gradient.split('-')[1]}-300/60 transition-all duration-300 backdrop-blur-md hover:shadow-2xl hover:shadow-${item.gradient.split('-')[1]}-500/20`}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <motion.div 
                className="relative flex items-start gap-4"
                whileHover={{ x: 10 }}
              >
                <div className="text-5xl">{item.icon}</div>
                <div className="flex-1">
                  <p className={`font-semibold text-${item.gradient.split('-')[1]}-300 mb-2 text-lg`}>{item.label}</p>
                  {item.label === 'Social Links' ? (
                    <div className="flex gap-4 mt-3">
                      {[
                        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/oushadhee-wickramasinghe-286664288/', emoji: '💼' },
                        { name: 'GitHub', url: 'https://github.com/oushadhee', emoji: '🐙' },
                        { name: 'Facebook', url: 'https://www.facebook.com/oushadhee.sahashra', emoji: '👍' }
                      ].map(social => (
                        <motion.a 
                          key={social.name}
                          href={social.url} 
                          target="_blank" 
                          rel="noreferrer"
                          className="bg-white/5 border border-purple-400/20 text-purple-200 px-3 py-2 rounded-lg font-medium hover:border-purple-400/60 transition-all text-sm flex items-center gap-1"
                          whileHover={{ scale: 1.1 }}
                        >
                          <span>{social.emoji}</span>
                          {social.name}
                        </motion.a>
                      ))}
                    </div>
                  ) : (
                    <a 
                      href={item.link}
                      className="text-gray-200 hover:text-purple-300 transition-colors font-medium"
                    >
                      {item.value}
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.section>

        {/* Contact Form Section */}
        <motion.section 
          className="mt-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="group relative rounded-2xl overflow-hidden p-8 bg-gradient-to-br from-slate-800/60 via-cyan-900/30 to-slate-800/60 border border-cyan-400/30 hover:border-cyan-300/60 transition-all duration-300 backdrop-blur-md hover:shadow-2xl hover:shadow-cyan-500/20">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-6 flex items-center gap-2">
                💬 Send a Message
              </h2>
              <form className="space-y-6">
                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-gray-200 font-semibold mb-2">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-cyan-400/30 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:border-cyan-300/60 focus:outline-none transition-all"
                  />
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-gray-200 font-semibold mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-cyan-400/30 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:border-cyan-300/60 focus:outline-none transition-all"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-gray-200 font-semibold mb-2">Message</label>
                  <textarea 
                    placeholder="Your message here..."
                    rows={5}
                    className="w-full bg-white/5 border border-cyan-400/30 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:border-cyan-300/60 focus:outline-none transition-all"
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 rounded-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message ✉️
                </motion.button>
              </form>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

