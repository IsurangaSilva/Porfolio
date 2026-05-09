"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import Socials from './Socials';

export default function AnimatedNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 right-0 z-50 backdrop-blur transition-colors ${
        scrolled ? 'bg-white/70 dark:bg-slate-900/70 border-b' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="font-bold text-lg">
          YourName
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <Link href="/contact" className="px-3 py-1 rounded-md bg-primary text-white">
            Contact
          </Link>
          <div className="ml-2 flex items-center gap-2">
            <ThemeToggle />
            <Socials />
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
