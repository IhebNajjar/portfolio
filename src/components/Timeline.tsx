'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { timelineItems, type TimelineItem } from '@/data/timeline';

/* ── Type icon & colour ──────────────────────────────────────────────── */
const typeConfig: Record<
  TimelineItem['type'],
  { icon: string; borderClass: string; badgeClass: string; label: string }
> = {
  education: {
    icon: '🎓',
    borderClass: 'border-l-indigo-500',
    badgeClass: 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30',
    label: 'Education',
  },
  project: {
    icon: '💻',
    borderClass: 'border-l-violet-500',
    badgeClass: 'bg-violet-500/20 text-violet-300 border border-violet-500/30',
    label: 'Project',
  },
  achievement: {
    icon: '🏆',
    borderClass: 'border-l-amber-500',
    badgeClass: 'bg-amber-500/20 text-amber-300 border border-amber-500/30',
    label: 'Achievement',
  },
  certificate: {
    icon: '📜',
    borderClass: 'border-l-emerald-500',
    badgeClass: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30',
    label: 'Certificate',
  },
};

/* ── Single timeline item ────────────────────────────────────────────── */
function TimelineCard({
  item,
  index,
  side,
  shouldReduceMotion,
}: {
  item: TimelineItem;
  index: number;
  side: 'left' | 'right';
  shouldReduceMotion: boolean | null;
}) {
  const cfg = typeConfig[item.type];

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? false
          : { opacity: 0, x: side === 'left' ? -30 : 30 }
      }
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className={`
        relative flex
        ${side === 'left' ? 'lg:justify-end lg:pr-12' : 'lg:justify-start lg:pl-12 lg:col-start-2'}
        col-span-1 lg:col-span-1
      `}
    >
      {/* Card */}
      <div
        className={`
          glass-card rounded-2xl p-6 w-full max-w-sm
          border-l-4 ${cfg.borderClass}
          hover:border-opacity-100 transition-all duration-300
          hover:shadow-lg hover:shadow-indigo-950/30
        `}
      >
        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          <span className="text-2xl shrink-0" role="img" aria-hidden="true">
            {cfg.icon}
          </span>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              {/* Year badge */}
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold glass text-slate-300 border border-white/10">
                {item.year}
              </span>
              {/* Type badge */}
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${cfg.badgeClass}`}>
                {cfg.label}
              </span>
            </div>
            <h3 className="text-slate-100 font-semibold font-display text-base leading-snug">
              {item.title}
            </h3>
            <p className="text-indigo-400 text-xs font-medium mt-0.5">
              {item.institution}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed pl-9">
          {item.description.startsWith('[') ? (
            <em className="text-slate-500">{item.description}</em>
          ) : (
            item.description
          )}
        </p>
      </div>
    </motion.div>
  );
}

/* ── Section ────────────────────────────────────────────────────────────── */
export default function Timeline() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="journey" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/6 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <SectionHeading
            eyebrow="My Journey"
            title="Education &"
            gradientWords="Milestones"
            subtitle="The path that shaped who I am as a developer."
            align="center"
          />
        </motion.div>

        {/* Timeline container */}
        <div className="relative mt-4">
          {/* Centre vertical line — desktop only */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2"
          />

          {/* Items */}
          <div className="flex flex-col gap-8 lg:gap-10">
            {timelineItems.map((item, i) => {
              const side = i % 2 === 0 ? 'left' : 'right';
              return (
                <div
                  key={item.id}
                  className="relative lg:grid lg:grid-cols-2 lg:gap-8 items-center"
                >
                  {/* Centre dot — desktop */}
                  <div
                    aria-hidden="true"
                    className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 ring-4 ring-[#0a0a0f] z-10"
                  />

                  {side === 'left' ? (
                    <>
                      <TimelineCard
                        item={item}
                        index={i}
                        side="left"
                        shouldReduceMotion={shouldReduceMotion}
                      />
                      <div className="hidden lg:block" aria-hidden="true" />
                    </>
                  ) : (
                    <>
                      <div className="hidden lg:block" aria-hidden="true" />
                      <TimelineCard
                        item={item}
                        index={i}
                        side="right"
                        shouldReduceMotion={shouldReduceMotion}
                      />
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* End cap */}
          <div className="flex justify-center mt-12">
            <div className="glass px-5 py-2.5 rounded-full text-sm text-slate-400 border border-white/10">
              🚀 Journey continues…
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
