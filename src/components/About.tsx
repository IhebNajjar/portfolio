'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, Globe, Download, User } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const infoItems = [
  {
    icon: <MapPin size={16} />,
    label: 'Location',
    value: 'Tunisia 🇹🇳',
  },
  {
    icon: <Globe size={16} />,
    label: 'Languages',
    // ← EDITABLE: Add your languages
    value: 'Arabic (Native), English (Professional), French (Intermediate)',
  },
  {
    icon: <User size={16} />,
    label: 'Available for',
    // ← EDITABLE: Update with your availability preference
    value: 'Freelance, Remote, Full-time roles',
  },
];

export default function About() {
  const shouldReduceMotion = useReducedMotion();
  const { ref: sectionRef } = useScrollReveal<HTMLDivElement>();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Subtle background gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/8 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div
        ref={sectionRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={containerVariants}
          initial={shouldReduceMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* ── Left: Text content ──────────────────────────────── */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <SectionHeading
                eyebrow="About Me"
                title="Crafting Code"
                gradientWords="with Purpose"
                subtitle="A developer who cares deeply about both the technical and human side of software."
              />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I&apos;m Iheb Najjar, an Information Technology student at ISET Nabeul, Tunisia,
                specialising in Information Systems Development. I&apos;m passionate about building
                clean, practical software — from RESTful APIs and full-stack web apps to mobile interfaces.
              </p>
              <p>
                I learn best by building. My projects span backend API design with Express and Laravel,
                frontend work with React and Next.js, and mobile development with Flutter. I enjoy the
                full journey — from designing a database schema to shipping a polished UI.
              </p>
              <p>
                I&apos;m currently looking for opportunities where I can contribute, keep growing, and
                work alongside talented people on real-world problems.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass-card rounded-2xl p-5 border-l-4 border-indigo-500/60"
            >
              <p className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-2">
                Education
              </p>
              <p className="text-slate-200 font-semibold">Bachelor&apos;s — Information Systems Development</p>
              <p className="text-slate-400 text-sm">ISET Nabeul, Tunisia — 2023 – Present</p>
            </motion.div>

            {/* CV Download */}
            <motion.div variants={itemVariants}>
              {/* ← EDITABLE: Replace href with path to your actual CV PDF in /public */}
              <Button href="/cv-iheb-najjar.pdf" variant="secondary" size="md" external>
                <Download size={16} />
                Download CV
              </Button>
            </motion.div>
          </div>

          {/* ── Right: Visual ────────────────────────────────────── */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-8"
          >
            {/* Avatar card with gradient border */}
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/30 to-violet-500/30 blur-2xl scale-110" />

              {/* Card with gradient border technique */}
              <div
                className="relative rounded-3xl p-[1px]"
                style={{
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #3b82f6)',
                }}
              >
                <div className="relative bg-[#0f0f1a] rounded-3xl p-8 flex flex-col items-center gap-4 w-72 glow-purple">
                  {/* Avatar placeholder */}
                  <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center">
                    <div className="text-center">
                      {/* ← EDITABLE: Replace with your <img> tag once you have a photo */}
                      <User size={48} className="text-indigo-400 mx-auto mb-2" />
                      <p className="text-xs text-slate-500">Your photo here</p>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-slate-100 font-semibold font-display text-lg">Iheb Najjar</p>
                    <p className="text-indigo-400 text-sm font-medium">Software Developer</p>
                    <p className="text-slate-500 text-xs mt-1">Tunisia 🇹🇳</p>
                  </div>

                  {/* Mini stats */}
                  <div className="w-full grid grid-cols-2 gap-3 mt-2">
                    <div className="glass rounded-xl p-3 text-center">
                      {/* ← EDITABLE: Update these numbers */}
                      <p className="text-xl font-bold text-white font-display">2+</p>
                      <p className="text-xs text-slate-500">Projects</p>
                    </div>
                    <div className="glass rounded-xl p-3 text-center">
                      <p className="text-xl font-bold text-white font-display">7+</p>
                      <p className="text-xs text-slate-500">Tech Skills</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating decoration elements */}
              <motion.div
                aria-hidden="true"
                animate={shouldReduceMotion ? {} : { y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 glass rounded-2xl p-3 shadow-xl"
              >
                <span className="text-2xl">⚡</span>
              </motion.div>
              <motion.div
                aria-hidden="true"
                animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="absolute -bottom-4 -left-6 glass rounded-2xl p-3 shadow-xl"
              >
                <span className="text-2xl">🚀</span>
              </motion.div>
            </div>

            {/* Info grid */}
            <div className="w-full space-y-3">
              {infoItems.map((item) => (
                <div
                  key={item.label}
                  className="glass-card rounded-xl px-4 py-3 flex items-start gap-3"
                >
                  <span className="text-indigo-400 mt-0.5 shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                      {item.label}
                    </p>
                    <p className="text-slate-300 text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
