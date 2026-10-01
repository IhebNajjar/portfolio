'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, ArrowUp, Heart } from 'lucide-react';

const footerNavLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    icon: <Github size={20} />,
    label: 'GitHub',
    href: 'https://github.com/IhebNajjar',
  },
  {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/iheb-najjar-71355833b/',
  },
];

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <footer className="relative bg-[#08080f] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Col 1 – Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold font-display text-sm shadow-lg shadow-indigo-500/30">
                  IN
                </div>
                <span className="text-slate-100 font-semibold font-display">Iheb Najjar</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                {/* ← EDITABLE: Your tagline */}
                Software developer from Tunisia — building digital experiences, one idea at a time.
              </p>
              <p className="mt-6 flex items-center gap-1.5 text-slate-600 text-xs">
                Made with <Heart size={12} className="text-rose-500 fill-rose-500" /> in Tunisia
              </p>
            </div>

            {/* Col 2 – Navigation */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">
                Navigation
              </h3>
              <ul className="space-y-2.5" role="list">
                {footerNavLinks.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                      className="text-slate-400 hover:text-slate-100 text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500 rounded"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 – Social */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">
                Connect
              </h3>
              <ul className="space-y-3" role="list">
                {socialLinks.map(({ icon, label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-slate-400 hover:text-slate-100 text-sm transition-colors group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500 rounded"
                    >
                      <span className="p-1.5 rounded-lg glass text-slate-400 group-hover:text-white group-hover:border-white/20 transition-all">
                        {icon}
                      </span>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Back to top (desktop, inside footer) */}
              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="mt-8 hidden md:flex items-center gap-2 text-xs text-slate-600 hover:text-slate-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500 rounded"
              >
                <ArrowUp size={14} />
                Back to top
              </button>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-600 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} Iheb Najjar. All rights reserved.
            </p>
            <p className="text-slate-700 text-xs">
              Built with Next.js 14 · Tailwind CSS · Framer Motion
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll-to-top FAB – mobile */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-top"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-50 md:hidden p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-110 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
