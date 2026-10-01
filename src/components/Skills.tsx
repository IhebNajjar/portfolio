'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { skillGroups, type SkillLevel } from '@/data/skills';

/* ── Level colour mapping ─────────────────────────────────────────────── */
const levelConfig: Record<
  SkillLevel,
  { label: string; badgeClass: string; dotClass: string }
> = {
  experienced: {
    label: 'Experienced',
    badgeClass:
      'bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/25',
    dotClass: 'bg-indigo-400',
  },
  'project-used': {
    label: 'Project-Used',
    badgeClass:
      'bg-violet-500/15 border border-violet-500/25 text-violet-300 hover:bg-violet-500/25',
    dotClass: 'bg-violet-400',
  },
  learning: {
    label: 'Learning',
    badgeClass:
      'border border-dashed border-slate-600 text-slate-400 hover:border-slate-400 hover:text-slate-300',
    dotClass: 'bg-slate-400',
  },
};

/* ── Legend ─────────────────────────────────────────────────────────────── */
function Legend() {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-12">
      {(Object.entries(levelConfig) as [SkillLevel, (typeof levelConfig)[SkillLevel]][]).map(
        ([, cfg]) => (
          <div key={cfg.label} className="flex items-center gap-2">
            <span className={`w-2.5 h-2.5 rounded-full ${cfg.dotClass}`} />
            <span className="text-sm text-slate-400">{cfg.label}</span>
          </div>
        )
      )}
    </div>
  );
}

/* ── Skill group card ───────────────────────────────────────────────────── */
function SkillCard({
  group,
  index,
  shouldReduceMotion,
}: {
  group: (typeof skillGroups)[0];
  index: number;
  shouldReduceMotion: boolean | null;
}) {
  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
      className="glass-card rounded-2xl p-6 h-full flex flex-col gap-5 group hover:border-white/15 transition-all duration-300"
    >
      {/* Card header */}
      <div className="flex items-center gap-3">
        <span className="text-2xl" role="img" aria-hidden="true">
          {group.icon}
        </span>
        <h3 className="text-slate-200 font-semibold font-display text-base">
          {group.category}
        </h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => {
          const cfg = levelConfig[skill.level];
          return (
            <span
              key={skill.name}
              title={`${skill.name} — ${cfg.label}`}
              className={`
                inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium
                transition-all duration-200 cursor-default select-none
                ${cfg.badgeClass}
              `}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${cfg.dotClass} shrink-0`} />
              {skill.name}
            </span>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ── Section ────────────────────────────────────────────────────────────── */
export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background accent */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="Technical Skills"
            title="My Toolkit"
            gradientWords="& Expertise"
            subtitle="Technologies and tools I work with — colour-coded by proficiency level."
          />
        </motion.div>

        <Legend />

        {/* Skills grid: 3 cols desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <SkillCard
              key={group.category}
              group={group}
              index={i}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
