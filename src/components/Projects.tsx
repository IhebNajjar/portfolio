'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ExternalLink, Github, ChevronDown, ChevronUp, Info } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { projects, type Project } from '@/data/projects';

/* ── Expanded detail panel ────────────────────────────────────────────── */
function ProjectDetail({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="overflow-hidden"
    >
      <div className="border-t border-white/[0.07] mt-6 pt-6 grid sm:grid-cols-2 gap-6">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-2">
            Overview
          </h4>
          <p className="text-slate-400 text-sm leading-relaxed">{project.overview}</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-2">
            Challenge
          </h4>
          <p className="text-slate-400 text-sm leading-relaxed">{project.challenge}</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
            Approach
          </h4>
          <p className="text-slate-400 text-sm leading-relaxed">{project.approach}</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-2">
            My Role
          </h4>
          <p className="text-slate-400 text-sm leading-relaxed">{project.myRole}</p>
        </div>
        {project.features.length > 0 && (
          <div className="sm:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
              Key Features
            </h4>
            <ul className="space-y-1.5">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                  <span className="text-indigo-400 mt-0.5 shrink-0">→</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* ── Single project card ─────────────────────────────────────────────── */
function ProjectCard({
  project,
  index,
  shouldReduceMotion,
}: {
  project: Project;
  index: number;
  shouldReduceMotion: boolean | null;
}) {
  const [expanded, setExpanded] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="glass-card rounded-3xl overflow-hidden"
      aria-labelledby={`project-title-${project.id}`}
    >
      <div
        className={`grid lg:grid-cols-2 gap-0 ${
          !isEven ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        {/* Image */}
        <div className="relative overflow-hidden min-h-[260px] lg:min-h-[340px] group/img bg-[#0f0f1a]">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
            style={{ objectFit: 'cover' }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/60 to-violet-950/40 pointer-events-none" />
          {/* Project number */}
          <span
            className="absolute top-4 left-4 text-7xl font-display font-bold text-white/[0.06] leading-none select-none"
            aria-hidden="true"
          >
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            {/* Badges row */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {project.status === 'placeholder' && (
                <Badge variant="amber" size="sm">
                  Details Coming Soon
                </Badge>
              )}
              {project.status === 'in-progress' && (
                <Badge variant="blue" size="sm">
                  In Progress
                </Badge>
              )}
              {project.status === 'completed' && (
                <Badge variant="green" size="sm">
                  Completed
                </Badge>
              )}
            </div>

            <h3
              id={`project-title-${project.id}`}
              className="text-2xl font-display font-bold text-slate-100 mb-3"
            >
              {project.title}
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              {project.shortDescription.startsWith('[') ? (
                <em className="text-slate-500 text-sm">{project.shortDescription}</em>
              ) : (
                project.shortDescription
              )}
            </p>

            {/* Stack badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map((tech) => (
                <Badge key={tech} variant={tech.startsWith('[') ? 'default' : 'indigo'} size="sm">
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Placeholder note */}
            {project.status === 'placeholder' && (
              <p className="text-slate-500 text-xs italic mb-4 flex items-center gap-1.5">
                <Info size={12} className="text-amber-400" />
                Fill in project details in <code className="text-amber-400">src/data/projects.ts</code>
              </p>
            )}

            {/* Expanded detail */}
            <AnimatePresence>
              {expanded && <ProjectDetail project={project} />}
            </AnimatePresence>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3 mt-6 pt-6 border-t border-white/[0.07]">
            {project.repoUrl && (
              <Button href={project.repoUrl} variant="secondary" size="sm" external>
                <Github size={15} />
                View Source
              </Button>
            )}
            {project.liveUrl && (
              <Button href={project.liveUrl} variant="primary" size="sm" external>
                <ExternalLink size={15} />
                Live Demo
              </Button>
            )}
            <button
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-colors ml-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
              aria-expanded={expanded}
              aria-controls={`detail-${project.id}`}
            >
              {expanded ? (
                <>
                  <ChevronUp size={16} /> Hide Details
                </>
              ) : (
                <>
                  Details <ChevronDown size={16} />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ── Section ────────────────────────────────────────────────────────────── */
export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/6 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="Featured Projects"
            title="Things I've"
            gradientWords="Built"
            subtitle="A selection of projects showcasing my range across web, API, and design."
          />
        </motion.div>

        {/* Project cards */}
        <div className="space-y-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>

        {/* Coming soon card */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 glass-card rounded-3xl p-12 text-center border border-dashed border-white/10"
        >
          <div className="text-4xl mb-4" aria-hidden="true">
            🛠️
          </div>
          <h3 className="text-xl font-display font-semibold text-slate-200 mb-2">
            More Projects Coming Soon
          </h3>
          <p className="text-slate-500 max-w-sm mx-auto text-sm">
            I&apos;m always building something new. Check back soon or follow me on GitHub.
          </p>
          <div className="mt-6">
            {/* ← EDITABLE: Replace href with your actual GitHub URL */}
            <Button href="https://github.com/ihebnajjar" variant="secondary" size="sm" external>
              <Github size={16} />
              Follow on GitHub
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
