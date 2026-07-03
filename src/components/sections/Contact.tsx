import { useState, useRef, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Section, SectionHeader } from '../ui/Section';
import { personal } from '../../data/resume';
import { fadeUp, fadeLeft, fadeRight, stagger } from '../../utils/motion';
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiPhone, FiArrowRight } from 'react-icons/fi';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const INPUT_CLASS =
  'w-full px-4 py-3 rounded-xl bg-surface-2 border border-dim text-text text-sm placeholder:text-muted focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all duration-200';

export function Contact() {
  const formRef              = useRef<HTMLFormElement>(null);
  const [status, setStatus]  = useState<Status>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus('sending');
    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY',
      );
      setStatus('sent');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <Section id="contact">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── CTA Banner ── */}
        <motion.div
          variants={fadeUp}
          className="relative mb-14 rounded-2xl overflow-hidden border border-accent/20 bg-accent-subtle p-8 md:p-10"
        >
          {/* Glow */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(0,212,170,0.08) 0%, transparent 70%)' }}
          />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="font-mono text-2xs text-accent tracking-widest uppercase mb-2">Ready to hire?</p>
              <h2 className="text-2xl md:text-3xl font-bold text-heading tracking-tight">
                Let's build something exceptional together.
              </h2>
              <p className="text-secondary text-sm mt-2 max-w-lg">
                Open to full-time AI Engineer roles, consulting engagements, and high-impact projects.
              </p>
            </div>
            <a
              href={`mailto:${personal.email}`}
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-bg rounded-xl text-sm font-bold hover:bg-accent-2 transition-all duration-200 shadow-glow-sm hover:shadow-glow whitespace-nowrap"
            >
              <FiMail size={14} />
              Send an Email
              <FiArrowRight size={14} />
            </a>
          </div>
        </motion.div>

        <SectionHeader
          label="Contact"
          heading="Get in touch."
          sub="Fill out the form or reach out directly I respond within 24 hours."
        />

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">

          {/* ── Left: Contact Info ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              {
                icon: <FiMail size={16} />,
                label: 'Email',
                value: personal.email,
                href: `mailto:${personal.email}`,
              },
              {
                icon: <FiPhone size={16} />,
                label: 'Phone',
                value: personal.phone,
                href: `tel:${personal.phone}`,
              },
              {
                icon: <FiMapPin size={16} />,
                label: 'Location',
                value: personal.location,
                href: null,
              },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={fadeLeft}
                className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-dim hover:border-soft transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent/15 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <p className="font-mono text-2xs text-subtle uppercase tracking-widest mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-text hover:text-accent transition-colors font-medium">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-text font-medium">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <motion.div variants={fadeLeft} className="flex gap-3 pt-2">
              {[
                { href: personal.github,   icon: <FiGithub size={15} />,   label: 'GitHub' },
                { href: personal.linkedin, icon: <FiLinkedin size={15} />, label: 'LinkedIn' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-dim text-subtle hover:text-text hover:border-soft hover:bg-white/[0.03] transition-all duration-200 text-sm font-medium"
                >
                  {s.icon} {s.label}
                </a>
              ))}
            </motion.div>

            {/* Availability note */}
            <motion.div
              variants={fadeLeft}
              className="p-4 rounded-xl bg-surface-2 border border-dim"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <span className="text-xs font-semibold text-accent">Currently Available</span>
              </div>
              <p className="text-xs text-secondary leading-relaxed">
                Open to full-time roles in AI Engineering, ML Engineering, and MLOps. Immediate joiner.
              </p>
            </motion.div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="user_name" className="block font-mono text-2xs text-subtle uppercase tracking-widest mb-2">
                  Name
                </label>
                <input
                  id="user_name"
                  name="user_name"
                  type="text"
                  placeholder="Your name"
                  required
                  className={INPUT_CLASS}
                />
              </div>
              <div>
                <label htmlFor="user_email" className="block font-mono text-2xs text-subtle uppercase tracking-widest mb-2">
                  Email
                </label>
                <input
                  id="user_email"
                  name="user_email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className={INPUT_CLASS}
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block font-mono text-2xs text-subtle uppercase tracking-widest mb-2">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Job opportunity / Project inquiry"
                className={INPUT_CLASS}
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-mono text-2xs text-subtle uppercase tracking-widest mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about the role, project, or opportunity..."
                required
                className={`${INPUT_CLASS} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-bg rounded-xl text-sm font-bold hover:bg-accent-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-glow-sm hover:shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <FiSend size={14} />
              {status === 'sending' ? 'Sending...' : status === 'sent' ? '✓ Message Sent!' : 'Send Message'}
            </button>

            {status === 'error' && (
              <p className="text-xs text-red-400 text-center pt-1">
                Something went wrong. Please email me directly at{' '}
                <a href={`mailto:${personal.email}`} className="underline">{personal.email}</a>
              </p>
            )}

            {status === 'sent' && (
              <p className="text-xs text-accent text-center pt-1">
                Thanks! I'll get back to you within 24 hours.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </Section>
  );
}
