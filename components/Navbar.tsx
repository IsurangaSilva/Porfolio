'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '/experience', label: 'Experience' },
    { href: '/certifications', label: 'Certs' },
    { href: '/journals', label: 'Journal' },
    { href: '/career', label: 'Career' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 transition-all duration-300 bg-gradient-to-r from-slate-950/85 via-slate-900/85 to-slate-950/85 backdrop-blur-lg border-b border-gradient-to-r from-purple-500/40 via-pink-500/40 to-cyan-500/40 shadow-2xl"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-2">
          <Link href="/" className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
            <div className="relative px-4 py-2 bg-slate-900 rounded-lg">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent font-bold text-xl">OW</span>
            </div>
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <motion.div key={link.href} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <Link href={link.href} className="relative group px-4 py-2 text-gray-300 hover:text-purple-300 transition-colors font-medium">
                {link.label}
                <motion.div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 group-hover:w-full transition-all duration-300 rounded-full"></motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="/Oushadhee Wickramasinghe-Intern.pdf"
          download
          whileHover={{ scale: 1.08, boxShadow: "0 0 30px rgba(168, 85, 247, 0.6)" }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block group relative px-6 py-2.5 rounded-lg font-semibold text-white overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative flex items-center gap-2">📥 CV</span>
        </motion.a>

        <motion.button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden relative z-50" whileTap={{ scale: 0.9 }}>
          <div className="w-6 h-5 flex flex-col justify-between">
            <motion.span animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 10 : 0 }} className="w-full h-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 rounded"></motion.span>
            <motion.span animate={{ opacity: mobileOpen ? 0 : 1 }} className="w-full h-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 rounded"></motion.span>
            <motion.span animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -10 : 0 }} className="w-full h-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 rounded"></motion.span>
          </div>
        </motion.button>
      </div>

      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: mobileOpen ? 1 : 0, height: mobileOpen ? 'auto' : 0 }} transition={{ duration: 0.3 }} className="md:hidden overflow-hidden bg-slate-950/95 backdrop-blur-md border-b border-gradient-to-r from-purple-500/30 via-pink-500/30 to-cyan-500/30">
        <div className="container mx-auto px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="block px-4 py-2.5 text-gray-300 hover:text-purple-300 hover:bg-purple-500/10 rounded-lg transition-colors font-medium" onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}
          <a href="/Oushadhee Wickramasinghe-Intern.pdf" download className="block px-4 py-2.5 text-white bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 rounded-lg text-center font-semibold hover:shadow-lg hover:shadow-purple-600/50 transition-all" onClick={() => setMobileOpen(false)}>
            📥 Download CV
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
