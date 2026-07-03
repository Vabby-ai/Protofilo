import { motion } from 'framer-motion';
import { Section, SectionHeader } from '../ui/Section';
import { education } from '../../data/resume';
import { fadeUp } from '../../utils/motion';
import { FiAward, FiCalendar, FiMapPin } from 'react-icons/fi';

export function Education() {
  return (
    <Section id="education">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Education"
          heading="Academic foundation."
        />

        <div className="space-y-4 max-w-2xl">
          {education.map((e) => (
            <motion.div
              key={e.degree}
              variants={fadeUp}
              className="group relative flex gap-5 p-6 rounded-2xl border border-dim bg-surface hover:border-accent/25 hover:bg-accent-subtle transition-all duration-300 overflow-hidden"
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent rounded-r-full opacity-60 group-hover:opacity-100 transition-opacity" />

              {/* Icon */}
              <div className="shrink-0 w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent/15 transition-colors">
                <FiAward size={18} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-heading leading-snug mb-1">
                  {e.degree}
                </h3>
                <p className="text-sm text-accent font-mono mb-3">{e.institution}</p>

                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-1.5 text-subtle text-xs">
                    <FiCalendar size={11} />
                    <span>Graduated {e.year}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-subtle text-xs">
                    <FiMapPin size={11} />
                    <span>Pune, Maharashtra</span>
                  </div>
                </div>
              </div>

              {/* Credential badge */}
              <div className="shrink-0 self-start">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-2xs font-mono text-accent font-medium">
                  B.E. CS
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
