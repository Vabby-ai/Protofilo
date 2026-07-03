import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { personal } from '../../data/resume';
import { FiMail } from 'react-icons/fi';

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Contact',    href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [open, setOpen]             = useState(false);
  const [active, setActive]         = useState('');
  const { scrollYProgress }         = useScroll();
  const scaleX                      = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = links.map(l => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break; }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent origin-left z-[60]"
      />

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-dim py-3' : 'py-5 bg-transparent'
      }`}>
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <motion.button
            onClick={() => go('#hero')}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/25 flex items-center justify-center">
              <span className="font-mono text-xs font-semibold text-accent">VB</span>
            </div>
            <span className="hidden sm:block text-sm font-medium text-secondary group-hover:text-text transition-colors duration-200">
              Vaibhav Borse
            </span>
          </motion.button>

          {/* Desktop links */}
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center gap-1"
          >
            {links.map((l) => {
              const isActive = active === l.href.slice(1);
              return (
                <li key={l.href}>
                  <button
                    onClick={() => go(l.href)}
                    className={`relative px-3.5 py-2 text-sm rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent ${
                      isActive ? 'text-text' : 'text-subtle hover:text-secondary'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg bg-white/[0.06]"
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      />
                    )}
                    <span className="relative z-10">{l.label}</span>
                  </button>
                </li>
              );
            })}
          </motion.ul>

          {/* CTA */}
          <motion.a
            href={`mailto:${personal.email}`}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-bg text-sm font-semibold hover:bg-accent-2 transition-all duration-200 shadow-glow-sm"
          >
            <FiMail size={13} />
            Hire Me
          </motion.a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-[5px] focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px bg-text transition-all duration-300 ${open ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`block w-5 h-px bg-text transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-5 h-px bg-text transition-all duration-300 ${open ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden glass border-t border-dim overflow-hidden"
            >
              <div className="px-6 py-5 space-y-1">
                {links.map((l) => (
                  <button
                    key={l.href}
                    onClick={() => go(l.href)}
                    className="block w-full text-left px-3 py-2.5 rounded-lg text-sm text-subtle hover:text-text hover:bg-white/[0.04] transition-all"
                  >
                    {l.label}
                  </button>
                ))}
                <div className="pt-3 border-t border-dim mt-3">
                  <a
                    href={`mailto:${personal.email}`}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-accent/10 text-accent text-sm font-medium"
                  >
                    <FiMail size={13} /> {personal.email}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
