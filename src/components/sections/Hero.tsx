import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { personal, achievements, top30Skills } from '../../data/resume';
import { fadeUp, fadeRight, stagger, staggerFast } from '../../utils/motion';
import { FiArrowRight, FiMail, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';

const ROLES = [
  'AI Engineer',
  'LLM Engineering Specialist',
  'MLOps Architect',
  'RAG Pipeline Engineer',
  'Generative AI Developer',
  'AI Agents Builder',
];

const TERMINAL_LINES = [
  { delay: 0,    text: '$ python rag_pipeline.py --model gpt-4',              type: 'cmd' },
  { delay: 800,  text: '→ [LLM Engineering] LangChain + LlamaIndex ready...',  type: 'info' },
  { delay: 1600, text: '→ [Vector Search] FAISS + Pinecone connected...',      type: 'info' },
  { delay: 2400, text: '→ [Embeddings] OpenAI text-embedding-3-large...',      type: 'info' },
  { delay: 3200, text: '✓ RAG pipeline ready. Semantic Search: OK',            type: 'success' },
  { delay: 4000, text: '→ [MLOps] Deploying to AWS EKS via CI/CD...',         type: 'info' },
  { delay: 4800, text: '✓ Model Serving: 3 replicas. Monitoring: ON',          type: 'success' },
  { delay: 5600, text: '✓ AI Automation complete. 40% faster releases.',       type: 'success' },
];

function TerminalLine({ text, type, delay }: { text: string; type: string; delay: number }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  if (!visible) return null;
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className={`font-mono text-xs leading-relaxed ${
        type === 'cmd'     ? 'text-text' :
        type === 'success' ? 'text-accent' :
                             'text-subtle'
      }`}
    >
      {text}
    </motion.div>
  );
}

function RoleTyper() {
  const [idx, setIdx]     = useState(0);
  const [shown, setShown] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = ROLES[idx];
    if (!deleting && shown.length < target.length) {
      const t = setTimeout(() => setShown(target.slice(0, shown.length + 1)), 60);
      return () => clearTimeout(t);
    }
    if (!deleting && shown.length === target.length) {
      const t = setTimeout(() => setDeleting(true), 2200);
      return () => clearTimeout(t);
    }
    if (deleting && shown.length > 0) {
      const t = setTimeout(() => setShown(shown.slice(0, -1)), 35);
      return () => clearTimeout(t);
    }
    if (deleting && shown.length === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % ROLES.length);
    }
  }, [shown, deleting, idx]);

  return (
    <span className="text-accent">
      {shown}
      <span className="animate-blink text-accent/70">|</span>
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 dot-grid opacity-60" aria-hidden />
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle at 70% 30%, rgba(0,212,170,0.06) 0%, transparent 65%)' }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle at 30% 80%, rgba(0,212,170,0.03) 0%, transparent 60%)' }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 xl:gap-20 items-center">

          {/* ── LEFT COLUMN ── */}
          <motion.div variants={stagger} initial="hidden" animate="visible">

            {/* Status + location */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 mb-8">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
                </span>
                <span className="font-mono text-2xs text-accent tracking-widest uppercase font-medium">
                  Open to Work
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-subtle text-xs">
                <FiMapPin size={11} />
                <span>{personal.location}</span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              className="text-[clamp(2.8rem,7vw,5.5rem)] font-bold text-heading tracking-tightest leading-[0.95] mb-5"
            >
              {personal.name}
            </motion.h1>

            {/* Dynamic role */}
            <motion.div
              variants={fadeUp}
              className="text-xl md:text-2xl font-medium tracking-snug mb-6 h-8"
            >
              <RoleTyper />
            </motion.div>

            {/* Summary */}
            <motion.p
              variants={fadeUp}
              className="text-secondary text-base md:text-[1.05rem] leading-[1.75] max-w-[520px] mb-8"
            >
              {personal.summary}
            </motion.p>

            {/* Impact metrics row */}
            <motion.div
              variants={staggerFast}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10"
            >
              {achievements.map((a) => (
                <motion.div
                  key={a.label}
                  variants={fadeUp}
                  className="p-3.5 rounded-xl bg-surface-2 border border-dim hover:border-accent/20 hover:bg-accent-subtle transition-all duration-300 group text-center"
                >
                  <div className="text-2xl font-bold text-heading num-highlight group-hover:text-accent transition-colors duration-300">
                    {a.metric}
                  </div>
                  <div className="text-2xs text-subtle mt-1 leading-tight">{a.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg rounded-xl text-sm font-bold hover:bg-accent-2 transition-all duration-200 shadow-glow-sm hover:shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                View Projects <FiArrowRight size={14} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 border border-soft text-text rounded-xl text-sm font-medium hover:border-medium hover:bg-white/[0.04] transition-all duration-200"
              >
                <FiMail size={14} /> Get in Touch
              </a>
              <div className="flex items-center gap-2 ml-1">
                {[
                  { href: personal.github,   icon: <FiGithub size={17} />,   label: 'GitHub' },
                  { href: personal.linkedin, icon: <FiLinkedin size={17} />, label: 'LinkedIn' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg border border-dim flex items-center justify-center text-subtle hover:text-text hover:border-soft transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN Terminal ── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="hidden lg:block"
          >
            <div className="relative rounded-2xl border border-soft bg-surface overflow-hidden shadow-card-hover">
              {/* Terminal chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-dim bg-surface-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <span className="font-mono text-2xs text-subtle ml-2 tracking-wide">
                  vaibhav@ai-engineer ~ zsh
                </span>
              </div>

              {/* Terminal body */}
              <div className="p-5 space-y-1.5 min-h-[280px]">
                {TERMINAL_LINES.map((line, i) => (
                  <TerminalLine key={i} {...line} />
                ))}
              </div>

              {/* Scan line effect */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]"
              >
                <div className="w-full h-8 bg-gradient-to-b from-transparent via-accent to-transparent animate-scan" />
              </div>
            </div>

            {/* Floating skill badges */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-4 flex flex-wrap gap-2"
            >
              {top30Skills.slice(0, 10).map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 rounded-lg bg-surface-2 border border-dim text-2xs font-mono text-subtle hover:text-accent hover:border-accent/20 transition-all duration-200 cursor-default"
                >
                  {s}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #080808)' }}
      />
    </section>
  );
}
