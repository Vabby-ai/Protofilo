import { motion } from 'framer-motion';
import { Section, SectionHeader } from '../ui/Section';
import { skills, top30Skills } from '../../data/resume';
import { fadeUp, stagger } from '../../utils/motion';

// Core proficiency bars Top 8 most impactful, honest levels
const CORE_SKILLS = [
  { name: 'Python',                          level: 95 },
  { name: 'Large Language Models (LLMs)',    level: 92 },
  { name: 'Retrieval-Augmented Generation',  level: 92 },
  { name: 'LangChain',                       level: 90 },
  { name: 'OpenAI API',                      level: 90 },
  { name: 'FastAPI',                         level: 85 },
  { name: 'Amazon Web Services (AWS)',        level: 85 },
  { name: 'Docker & Kubernetes',             level: 85 },
  { name: 'MLOps & Model Deployment',        level: 83 },
  { name: 'Prompt Engineering',              level: 88 },
];

// All skill groups mapped to new resume.ts structure
const SKILL_GROUPS = [
  { label: 'Core AI & Generative AI',        tier: 'primary',   items: skills.coreAI },
  { label: 'LLM Stack & Frameworks',         tier: 'primary',   items: skills.llmStack },
  { label: 'Vector Databases',               tier: 'secondary', items: skills.vectorDBs },
  { label: 'ML Libraries',                   tier: 'secondary', items: skills.mlLibs },
  { label: 'MLOps & Deployment',             tier: 'secondary', items: skills.mlops },
  { label: 'Cloud AWS',                    tier: 'secondary', items: skills.cloud },
  { label: 'API & Backend',                  tier: 'secondary', items: skills.backend },
  { label: 'Languages & Tools',              tier: 'tertiary',  items: skills.languages },
  { label: 'Databases',                      tier: 'tertiary',  items: skills.databases },
  { label: 'Monitoring & Observability',     tier: 'tertiary',  items: skills.monitoring },
  { label: 'Data Engineering',               tier: 'tertiary',  items: skills.dataEng },
  { label: 'Latest AI Trends',               tier: 'tertiary',  items: skills.aiTrends },
];

const PILL: Record<string, string> = {
  primary:   'bg-accent/10 text-accent border-accent/20 hover:bg-accent/18',
  secondary: 'bg-white/[0.05] text-secondary border-white/[0.08] hover:border-white/[0.15] hover:text-text',
  tertiary:  'bg-white/[0.03] text-subtle border-white/[0.05] hover:border-white/[0.1] hover:text-secondary',
};

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <motion.div variants={fadeUp} className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-secondary font-medium group-hover:text-text transition-colors duration-200">
          {name}
        </span>
        <span className="font-mono text-2xs text-subtle tabular-nums">{level}%</span>
      </div>
      <div className="h-[3px] rounded-full bg-surface-3 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <Section id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Technical Skills"
          heading="The full AI engineering stack."
          sub="Every layer from model training and LLM orchestration to cloud deployment and MLOps."
        />

        {/* ── TOP 30 KEYWORDS STRIP ── */}
        <motion.div variants={fadeUp} className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-4 bg-accent" />
            <span className="font-mono text-2xs text-accent uppercase tracking-widest font-medium">
              Top 30 Key Skills
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {top30Skills.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.025, duration: 0.3 }}
                className="px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/20 text-xs font-mono text-accent hover:bg-accent/18 transition-all duration-200 cursor-default"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12">

          {/* ── LEFT: Proficiency Bars ── */}
          <div>
            <motion.p variants={fadeUp} className="font-mono text-2xs text-subtle uppercase tracking-widest mb-6">
              Core Proficiencies
            </motion.p>
            <motion.div variants={stagger} className="space-y-5">
              {CORE_SKILLS.map((s) => (
                <SkillBar key={s.name} {...s} />
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: All Skill Groups ── */}
          <motion.div variants={stagger} className="space-y-6">
            {SKILL_GROUPS.map((g) => (
              <motion.div key={g.label} variants={fadeUp}>
                <div className="flex items-center gap-2 mb-2.5">
                  <div className="h-px w-3 bg-border-2" />
                  <span className="font-mono text-2xs text-subtle uppercase tracking-widest">
                    {g.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className={`px-2.5 py-1 rounded-lg border text-xs font-mono transition-all duration-200 cursor-default ${PILL[g.tier]}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
