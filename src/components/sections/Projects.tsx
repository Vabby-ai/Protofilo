import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section, SectionHeader } from '../ui/Section';
import { projects } from '../../data/resume';
import { fadeUp, stagger, staggerFast } from '../../utils/motion';
import { FiArrowRight, FiChevronDown, FiZap, FiTarget, FiLayers, FiCheckCircle } from 'react-icons/fi';

const CATEGORY_COLORS: Record<string, string> = {
  'AI / LLM':           'text-accent bg-accent/10 border-accent/20',
  'MLOps / Automation': 'text-amber bg-amber-subtle border-amber/20',
};

function ArchFlow({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center gap-1.5">
          <span className="px-2.5 py-1 rounded-lg bg-surface-3 border border-dim text-2xs font-mono text-secondary whitespace-nowrap">
            {step}
          </span>
          {i < steps.length - 1 && (
            <FiArrowRight size={10} className="text-muted shrink-0" />
          )}
        </div>
      ))}
    </div>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const archSteps = project.architecture.split(/→|->/).map(s => s.trim()).filter(Boolean);
  const colorClass = CATEGORY_COLORS[project.category] ?? 'text-subtle bg-white/[0.04] border-white/[0.08]';

  return (
    <motion.article
      variants={fadeUp}
      className="rounded-2xl border border-dim bg-surface overflow-hidden hover:border-soft transition-all duration-300 group"
    >
      {/* ── HEADER ── */}
      <div className="p-7 md:p-8 border-b border-dim">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2.5 mb-3">
              <span className={`inline-flex items-center px-2.5 py-1 rounded-full border text-2xs font-mono font-medium tracking-wide ${colorClass}`}>
                {project.category}
              </span>
              <span className="text-2xs font-mono text-muted">Project {String(index + 1).padStart(2, '0')}</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-heading tracking-tight leading-tight mb-2">
              {project.title}
            </h3>
            <p className="text-secondary text-sm leading-relaxed max-w-xl">{project.tagline}</p>
          </div>
        </div>

        {/* Tech stack */}
        <motion.div variants={staggerFast} className="flex flex-wrap gap-2 mt-5">
          {project.tech.map((t) => (
            <motion.span
              key={t}
              variants={fadeUp}
              className="px-2.5 py-1 rounded-lg bg-surface-2 border border-dim text-2xs font-mono text-subtle hover:text-accent hover:border-accent/20 transition-all duration-200"
            >
              {t}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* ── ALWAYS VISIBLE: 3-column summary ── */}
      <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
        {[
          { icon: <FiTarget size={13} />,  label: 'Problem',      text: project.problem },
          { icon: <FiZap size={13} />,     label: 'Solution',     text: project.solution },
          { icon: <FiLayers size={13} />,  label: 'My Role',      text: project.implementation[0] },
        ].map((col) => (
          <div key={col.label} className="p-5 md:p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-accent">{col.icon}</span>
              <span className="font-mono text-2xs text-accent uppercase tracking-widest font-medium">{col.label}</span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">{col.text}</p>
          </div>
        ))}
      </div>

      {/* ── ARCHITECTURE FLOW ── */}
      <div className="px-6 md:px-8 py-4 border-t border-dim bg-surface-2">
        <div className="flex items-start gap-3">
          <span className="font-mono text-2xs text-subtle uppercase tracking-widest shrink-0 mt-1">Architecture</span>
          <ArchFlow steps={archSteps} />
        </div>
      </div>

      {/* ── EXPAND TOGGLE ── */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 md:px-8 py-3.5 border-t border-dim text-xs font-mono text-subtle hover:text-text hover:bg-white/[0.02] transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
        aria-expanded={open}
      >
        <span className="tracking-widest uppercase">{open ? 'Collapse' : 'Full Implementation Details'}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <FiChevronDown size={14} />
        </motion.span>
      </button>

      {/* ── EXPANDED DETAILS ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 py-7 border-t border-dim grid md:grid-cols-3 gap-8">
              {/* Implementation steps */}
              <div className="md:col-span-2">
                <h4 className="font-mono text-2xs text-accent uppercase tracking-widest mb-4 font-medium">
                  Implementation Steps
                </h4>
                <ol className="space-y-3">
                  {project.implementation.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-secondary leading-relaxed">
                      <span className="shrink-0 w-5 h-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center font-mono text-2xs text-accent font-medium mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Results + Challenges */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-mono text-2xs text-accent uppercase tracking-widest mb-3 font-medium">Results</h4>
                  <ul className="space-y-2">
                    {project.results.map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-secondary leading-relaxed">
                        <FiCheckCircle size={12} className="text-accent shrink-0 mt-0.5" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-2xs text-amber uppercase tracking-widest mb-3 font-medium">Challenge Solved</h4>
                  <p className="text-xs text-secondary leading-relaxed">{project.challenges}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Projects"
          heading="Production AI systems."
          sub="End-to-end engineering case studies from problem definition to deployed infrastructure."
        />
        <motion.div variants={stagger} className="space-y-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
