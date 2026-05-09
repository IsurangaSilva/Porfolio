"use client";
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Socials() {
  return (
    <div className="flex items-center space-x-4">
      <a href="#" aria-label="GitHub" className="hover:opacity-80">
        <FaGithub />
      </a>
      <a href="#" aria-label="Twitter" className="hover:opacity-80">
        <FaTwitter />
      </a>
      <a href="#" aria-label="LinkedIn" className="hover:opacity-80">
        <FaLinkedin />
      </a>
    </div>
  );
}
