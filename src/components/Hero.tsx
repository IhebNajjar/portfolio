'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, ArrowDown, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
});

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const orbVariants = shouldReduceMotion
    ? {}
    : {
        animate: {
          y: [0, -20, 0],
          transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        },
      };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* ── Animated Background Orbs ───────────────────────────────── */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Orb 1 – top left */}
        <motion.div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-indigo-600/20 blur-[120px]"
          animate={shouldReduceMotion ? {} : { scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Orb 2 – bottom right */}
        <motion.div
          className="absolute -bottom-48 -right-32 w-[700px] h-[700px] rounded-full bg-violet-600/15 blur-[140px]"
          animate={shouldReduceMotion ? {} : { scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        {/* Orb 3 – center */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[100px]"
          animate={shouldReduceMotion ? {} : { scale: [1, 1.2, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        {/* Dot grid overlay */}
        <div className="absolute inset-0 dot-grid opacity-40" />
      </div>

      {/* ── Main Content ────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column – text */}
          <div className="flex flex-col items-start">
            {/* Availability badge */}
            <motion.div {...fadeUp(0.1)}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                Open to Opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.p
              {...fadeUp(0.2)}
              className="text-indigo-400 font-semibold text-lg mb-2 font-display"
            >
              Hi, I&apos;m Iheb Najjar 👋
            </motion.p>

            {/* Main heading */}
            <motion.h1
              {...fadeUp(0.3)}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-display font-bold text-slate-100 leading-[1.1] mb-6"
            >
              Building{' '}
              <br className="hidden sm:block" />
              Digital Experiences,{' '}
              <br className="hidden sm:block" />
              <span className="gradient-text">One Idea at a Time.</span>
            </motion.h1>

            {/* Bio */}
            <motion.p
              {...fadeUp(0.4)}
              className="text-slate-400 text-lg leading-relaxed max-w-lg mb-10"
            >
              {/* ← EDITABLE: Replace this with your personal bio */}
              A passionate software developer from Tunisia crafting full-stack web applications,
              RESTful APIs, and intuitive user interfaces — turning ideas into polished digital
              products.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4 mb-10">
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                onClick={(e?: React.MouseEvent) => {
                  e?.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore My Work
              </Button>
              <Button
                href="#contact"
                variant="secondary"
                size="lg"
                onClick={(e?: React.MouseEvent) => {
                  e?.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Me
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div {...fadeUp(0.6)} className="flex items-center gap-4">
              <span className="text-slate-500 text-sm">Find me on</span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/IhebNajjar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="p-2.5 rounded-xl glass text-slate-400 hover:text-white hover:border-white/20 transition-all duration-200 hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/iheb-najjar-71355833b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="p-2.5 rounded-xl glass text-slate-400 hover:text-white hover:border-white/20 transition-all duration-200 hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right column – decorative code block */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden lg:flex justify-center"
            aria-hidden="true"
          >
            <motion.div
              {...(shouldReduceMotion ? {} : orbVariants)}
              className="relative"
            >
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 blur-2xl scale-110" />

              {/* Code card */}
              <div className="relative glass-card rounded-3xl p-6 w-[420px] font-mono text-sm shadow-2xl shadow-indigo-900/30 glow-purple">
                {/* Window chrome */}
                <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/[0.06]">
                  <div className="w-3 h-3 rounded-full bg-red-400/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/70" />
                  <span className="ml-2 text-slate-500 text-xs">iheb.ts</span>
                </div>

                {/* Code content */}
                <pre className="text-left leading-7 overflow-hidden">
<code><span className="text-violet-400">const</span> <span className="text-blue-300">developer</span> <span className="text-slate-400">=</span> {'{'}{'\n'}
{'  '}<span className="text-indigo-300">name</span><span className="text-slate-400">:</span> <span className="text-emerald-300">&quot;Iheb Najjar&quot;</span>,{'\n'}
{'  '}<span className="text-indigo-300">location</span><span className="text-slate-400">:</span> <span className="text-emerald-300">&quot;Tunisia 🇹🇳&quot;</span>,{'\n'}
{'  '}<span className="text-indigo-300">focus</span><span className="text-slate-400">:</span> <span className="text-emerald-300">&quot;Full Stack&quot;</span>,{'\n'}
{'  '}<span className="text-indigo-300">skills</span><span className="text-slate-400">:</span> [{'\n'}
{'    '}<span className="text-emerald-300">&quot;React&quot;</span>, <span className="text-emerald-300">&quot;Next.js&quot;</span>,{'\n'}
{'    '}<span className="text-emerald-300">&quot;Node.js&quot;</span>, <span className="text-emerald-300">&quot;Figma&quot;</span>,{'\n'}
{'  '}],{'\n'}
{'  '}<span className="text-indigo-300">available</span><span className="text-slate-400">:</span> <span className="text-amber-300">true</span>,{'\n'}
{'}'}
</code>
                </pre>

                {/* Blinking cursor */}
                <span className="inline-block w-2 h-4 bg-indigo-400 animate-pulse rounded-sm ml-1" />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-5 -right-8 glass px-3 py-2 rounded-xl text-xs font-semibold text-emerald-300 border border-emerald-500/20"
              >
                ✓ Available for hire
              </motion.div>
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-5 -left-8 glass px-3 py-2 rounded-xl text-xs font-semibold text-indigo-300 border border-indigo-500/20"
              >
                🚀 Open Source Fan
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll Cue ──────────────────────────────────────────────── */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 text-slate-500 hover:text-slate-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-full"
      >
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={22} />
        </motion.div>
      </motion.button>
    </section>
  );
}
