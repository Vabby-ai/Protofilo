import { motion } from 'framer-motion';
import { useReveal } from '../../hooks/useReveal';
import { fadeUp, stagger } from '../../utils/motion';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, children, className = '' }: SectionProps) {
  const { ref, isInView } = useReveal();
  return (
    <motion.section
      id={id}
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`py-20 md:py-28 ${className}`}
    >
      {children}
    </motion.section>
  );
}

export function SectionHeader({
  label,
  heading,
  sub,
  align = 'left',
}: {
  label: string;
  heading: React.ReactNode;
  sub?: string;
  align?: 'left' | 'center';
}) {
  const alignClass = align === 'center' ? 'text-center items-center' : '';
  return (
    <div className={`flex flex-col ${alignClass} mb-12`}>
      <motion.div variants={fadeUp} className={`flex items-center gap-3 mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
        <div className="h-px w-6 bg-accent" />
        <span className="font-mono text-2xs text-accent tracking-[0.2em] uppercase font-medium">{label}</span>
      </motion.div>
      <motion.h2
        variants={fadeUp}
        className="text-3xl md:text-[2.4rem] font-bold text-heading tracking-tight leading-[1.1] mb-3"
      >
        {heading}
      </motion.h2>
      {sub && (
        <motion.p variants={fadeUp} className="text-secondary text-base max-w-lg leading-relaxed">
          {sub}
        </motion.p>
      )}
    </div>
  );
}
