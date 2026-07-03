import { motion } from 'framer-motion';
import { Section, SectionHeader } from '../ui/Section';
import { experience } from '../../data/resume';
import { fadeUp, fadeLeft, lineGrowY, stagger } from '../../utils/motion';

// Bold only standalone impact numbers/percentages — never digits inside words like EC2, S3
function HighlightText({ text }: { text: string }) {
  // Match: standalone percentages (40%) or numbers with optional + (3+)
  // Negative lookbehind/ahead ensures the digit is NOT part of a word like EC2 or S3
  const parts = text.split(/((?<![A-Za-z])\d+%|(?<![A-Za-z])\d+\+(?![A-Za-z]))/g);
  return (
    <>
      {parts.map((part, i) =>
        /^\d+[%+]?$/.test(part.trim()) && part.trim().length > 0 ? (
          <strong key={i} className="text-accent font-bold">{part}</strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export function Experience() {
  return (
    <Section id="experience">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Experience"
          heading="Where I've shipped AI."
          sub="Production-grade systems, not side projects."
        />

        <div className="space-y-6">
          {experience.map((job) => (
            <motion.div
              key={job.company}
              variants={fadeUp}
              className="relative grid md:grid-cols-[200px_1fr] gap-0 rounded-2xl overflow-hidden border border-dim bg-surface hover:border-soft transition-all duration-300 group"
            >
              {/* Left sidebar */}
              <div className="relative p-6 md:p-8 bg-surface-2 border-b md:border-b-0 md:border-r border-dim flex flex-col justify-between gap-4">
                {/* Accent bar */}
                <motion.div
                  variants={lineGrowY}
                  className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent rounded-r-full"
                />

                <div>
                  <div className="font-mono text-2xs text-accent tracking-widest uppercase mb-3 font-medium">
                    Current Role
                  </div>
                  <h3 className="text-sm font-bold text-heading leading-snug mb-2">
                    {job.role}
                  </h3>
                  <p className="text-xs text-subtle leading-relaxed">{job.company}</p>
                </div>

                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-accent/10 border border-accent/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
                    <span className="font-mono text-2xs text-accent font-medium">Active</span>
                  </div>
                  <div className="text-2xs font-mono text-subtle block">{job.period}</div>
                </div>
              </div>

              {/* Right content */}
              <div className="p-6 md:p-8">
                {/* Key wins strip */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    { val: '40%', label: 'Faster CI/CD' },
                    { val: '20%', label: 'Cost Reduction' },
                    { val: '2',   label: 'AI Systems Built' },
                    { val: '3+',  label: 'Years Experience' },
                  ].map((w) => (
                    <div
                      key={w.label}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-3 border border-dim"
                    >
                      <span className="font-bold text-accent text-sm num-highlight">{w.val}</span>
                      <span className="text-2xs text-subtle">{w.label}</span>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <motion.ul variants={stagger} className="space-y-2.5">
                  {job.highlights.map((h, i) => (
                    <motion.li
                      key={i}
                      variants={fadeLeft}
                      className="flex items-start gap-3 text-sm text-secondary leading-relaxed"
                    >
                      <span className="mt-[7px] shrink-0 w-1 h-1 rounded-full bg-accent/50" />
                      <HighlightText text={h} />
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
