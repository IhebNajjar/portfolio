'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { clsx } from 'clsx';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

const sectionIds = ['hero', 'about', 'skills', 'projects', 'journey', 'contact'];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for nav background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // IntersectionObserver for active section
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Close drawer on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = useCallback(
    (href: string) => {
      setMobileOpen(false);
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    []
  );

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'backdrop-blur-md bg-[#0a0a0f]/80 border-b border-white/[0.06] shadow-lg shadow-black/30'
            : 'bg-transparent'
        )}
        role="banner"
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg"
            aria-label="Iheb Najjar – back to top"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold text-sm font-display shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-shadow">
              IN
            </div>
            <span className="hidden sm:block text-slate-100 font-semibold font-display text-sm tracking-wide group-hover:text-white transition-colors">
              Iheb Najjar
            </span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map(({ label, href }) => {
              const id = href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                    aria-current={isActive ? 'page' : undefined}
                    className={clsx(
                      'relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500',
                      isActive
                        ? 'text-white'
                        : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
                    )}
                  >
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-lg bg-white/[0.07] border border-white/10"
                        transition={{ type: 'spring', stiffness: 380, damping: 35 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right: CTA + hamburger */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Button
                href="#contact"
                variant="primary"
                size="sm"
                onClick={(e?: React.MouseEvent) => {
                  e?.preventDefault();
                  handleNavClick('#contact');
                }}
              >
                Contact
              </Button>
            </div>

            {/* Hamburger – mobile */}
            <button
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-drawer"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              id="mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed top-16 left-0 right-0 z-50 lg:hidden glass border-b border-white/[0.08] pb-6 shadow-2xl"
            >
              <ul className="flex flex-col px-6 pt-4 gap-1" role="list">
                {navLinks.map(({ label, href }) => {
                  const id = href.replace('#', '');
                  const isActive = activeSection === id;
                  return (
                    <li key={href}>
                      <a
                        href={href}
                        onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                        aria-current={isActive ? 'page' : undefined}
                        className={clsx(
                          'flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-200',
                          isActive
                            ? 'text-white bg-indigo-500/15 border border-indigo-500/25'
                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                        )}
                      >
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <div className="px-6 mt-4">
                <Button
                  href="#contact"
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                  onClick={(e?: React.MouseEvent) => {
                    e?.preventDefault();
                    handleNavClick('#contact');
                  }}
                >
                  Contact Me
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
