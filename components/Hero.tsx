'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const roles = ['MERN & Laravel Developer', 'Software Engineer Intern', 'AI & Full-Stack Engineer'];
  const [idx, setIdx] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-dark via-slate-900 to-slate-800 dark:bg-dark py-24 md:py-32 min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-transparent rounded-full mix-blend-screen filter blur-3xl"
          animate={{ x: mousePosition.x * 0.05, y: mousePosition.y * 0.05 }}
          transition={{ type: "tween", ease: "easeOut" }}
        ></motion.div>
        <motion.div 
          className="absolute -bottom-32 right-1/3 w-96 h-96 bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-transparent rounded-full mix-blend-screen filter blur-3xl"
          animate={{ x: -mousePosition.x * 0.05, y: -mousePosition.y * 0.05 }}
          transition={{ type: "tween", ease: "easeOut" }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/2 -left-32 w-80 h-80 bg-gradient-to-br from-green-500/20 via-teal-500/10 to-transparent rounded-full mix-blend-screen filter blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        ></motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Left Content */}
          <motion.div className="space-y-6" variants={item}>
            <motion.div 
              className="inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-500/40 backdrop-blur-md">
                <p className="text-sm font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Welcome to my creative portfolio
                </p>
              </div>
            </motion.div>

            <motion.h1 
              className="text-6xl md:text-7xl font-extrabold leading-tight bg-gradient-to-br from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent drop-shadow-lg"
              variants={item}
            >
              Oushadhee<br />Wickramasinghe
            </motion.h1>

            <motion.div className="space-y-2" variants={item}>
              <p className="text-lg text-cyan-300 font-medium">0740699786 · Malabe, Colombo, Sri Lanka</p>
              <p className="text-base"><a href="mailto:oushadhee0209@gmail.com" className="text-blue-300 hover:text-cyan-300 underline transition">oushadhee0209@gmail.com</a></p>
            </motion.div>

            <motion.div className="flex items-center gap-3 pt-4" variants={item}>
              <p className="text-xl font-semibold text-gray-200">I'm a</p>
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                {roles[idx]}
              </motion.span>
            </motion.div>

            <motion.p className="text-lg text-gray-300 leading-relaxed max-w-xl" variants={item}>
              4th year IT student at SLIIT crafting intelligent web applications with MERN, Laravel, and AI/ML. Building scalable solutions that solve real-world problems.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4 pt-4" variants={item}>
              <motion.a 
                href="/Oushadhee Wickramasinghe-Intern.pdf" 
                download
                whileHover={{ scale: 1.08, boxShadow: "0 0 30px rgba(34, 211, 238, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-3 rounded-lg font-semibold text-white overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-2">
                  ⬇ Download CV
                </span>
              </motion.a>

              <motion.a 
                href="#projects" 
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg font-semibold text-cyan-300 border-2 border-cyan-500/60 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
              >
                View Projects
              </motion.a>

              <motion.a 
                href="#contact" 
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg font-semibold text-purple-300 border-2 border-purple-500/60 hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300"
              >
                Connect
              </motion.a>
            </motion.div>

            {/* Stats with animation */}
            <motion.div className="flex gap-8 pt-8" variants={item}>
              {[
                { number: '10+', label: 'Projects' },
                { number: '7+', label: 'Certifications' },
                { number: '6 mos', label: 'Experience' }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="group cursor-pointer"
                >
                  <p className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-purple-300 transition-all">{stat.number}</p>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              className="relative w-full max-w-md"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 p-1 opacity-75 group-hover:opacity-100 transition-opacity blur-xl"></div>
              
              <div className="relative rounded-3xl overflow-hidden bg-slate-900 p-1">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20"></div>
                
                <div className="relative w-full h-full rounded-3xl overflow-hidden">
                  <Image
                    src="/oushadhee-profile.jpg"
                    alt="Oushadhee Wickramasinghe"
                    width={450}
                    height={550}
                    priority
                    className="w-full h-full object-cover rounded-2xl"
                    onError={(e) => {
                      // Fallback to placeholder
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22450%22 height=%22550%22%3E%3Crect fill=%22%231e293b%22 width=%22450%22 height=%22550%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2224%22 fill=%22%2394a3b8%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3EProfile Image%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>
              </div>

              {/* Animated corner accents */}
              <motion.div 
                className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full opacity-30 blur-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-purple-500 to-pink-600 rounded-full opacity-20 blur-3xl"
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="text-gray-400 text-sm mb-2">Scroll to explore</p>
        <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex items-start justify-center">
          <motion.div 
            className="w-1 h-2 bg-cyan-500 rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}
