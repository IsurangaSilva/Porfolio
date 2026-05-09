"use client";
import { motion } from 'framer-motion';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';

export default function Socials() {
  const socials = [
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/oushadhee-wickramasinghe-286664288/', color: 'from-blue-400 to-blue-700', hover: 'hover:from-blue-300 hover:to-blue-600' },
    { icon: FaGithub, label: 'GitHub', href: 'https://github.com/oushadhee', color: 'from-gray-400 to-gray-600', hover: 'hover:from-gray-300 hover:to-gray-500' },
    { icon: FaFacebook, label: 'Facebook', href: 'https://www.facebook.com/oushadhee.sahashra', color: 'from-blue-500 to-blue-700', hover: 'hover:from-blue-400 hover:to-blue-600' }
  ];

  return (
    <div className="flex items-center gap-6">
      {socials.map((social, i) => {
        const Icon = social.icon;
        return (
          <motion.a 
            key={social.label}
            href={social.href} 
            aria-label={social.label}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className={`group relative p-3 rounded-full bg-gradient-to-br ${social.color} transition-all duration-300 shadow-lg hover:shadow-2xl`}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Icon className="relative text-xl text-white" />
          </motion.a>
        );
      })}
    </div>
  );
}
