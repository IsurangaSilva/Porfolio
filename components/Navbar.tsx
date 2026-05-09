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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-md border-b border-cyan-500/20 shadow-lg' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-2">
          <Link href="/" className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
            <div className="relative px-4 py-2 bg-slate-900 rounded-lg">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-bold text-xl">OW</span>
            </div>
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.div key={link.href} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <Link href={link.href} className="relative group px-3 py-2 text-gray-300 hover:text-cyan-300 transition-colors">
                {link.label}
                <motion.div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="/Oushadhee Wickramasinghe-Intern.pdf"
          download
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block group relative px-6 py-2.5 rounded-lg font-semibold text-white overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative flex items-center gap-2">📥 CV</span>
        </motion.a>

        <motion.button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden relative z-50" whileTap={{ scale: 0.9 }}>
          <div className="w-6 h-5 flex flex-col justify-between">
            <motion.span animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 10 : 0 }} className="w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded"></motion.span>
            <motion.span animate={{ opacity: mobileOpen ? 0 : 1 }} className="w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded"></motion.span>
            <motion.span animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -10 : 0 }} className="w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded"></motion.span>
          </div>
        </motion.button>
      </div>

      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: mobileOpen ? 1 : 0, height: mobileOpen ? 'auto' : 0 }} transition={{ duration: 0.3 }} className="md:hidden overflow-hidden bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20">
        <div className="container mx-auto px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="block px-4 py-2 text-gray-300 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-lg transition-colors" onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}
          <a href="/Oushadhee Wickramasinghe-Intern.pdf" download className="block px-4 py-2 text-white bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-center font-semibold hover:shadow-lg transition-shadow" onClick={() => setMobileOpen(false)}>
            📥 Download CV
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
