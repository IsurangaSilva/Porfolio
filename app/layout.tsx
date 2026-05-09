import '../styles/globals.css';
import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Oushadhee Wickramasinghe — Full-Stack Developer & AI Enthusiast',
  description: 'Portfolio of Oushadhee Wickramasinghe - MERN Stack Developer, Software Engineer Intern at Keen Rabbits, AI/ML Enthusiast. Showcasing 10+ projects in full-stack development, cloud computing, and AI systems.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-light text-slate-900 dark:bg-dark dark:text-slate-100">
        <a className="skip-link sr-only focus:not-sr-only" href="#main">
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
