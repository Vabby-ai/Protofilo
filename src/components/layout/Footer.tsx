import { personal } from '../../data/resume';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const NAV = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Contact',    href: '#contact' },
];

export function Footer() {
  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-dim mt-4">
      {/* Top glow line */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,170,0.4), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/25 flex items-center justify-center">
                <span className="font-mono text-xs font-semibold text-accent">VB</span>
              </div>
              <span className="font-semibold text-text text-sm">{personal.name}</span>
            </div>
            <p className="text-xs text-subtle max-w-[220px] leading-relaxed">
              AI Engineer building intelligent systems that scale.
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {NAV.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => go(l.href)}
                    className="text-xs text-subtle hover:text-text transition-colors duration-200 focus:outline-none focus-visible:text-accent"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-2">
            {[
              { href: personal.github,              icon: <FiGithub size={15} />,   label: 'GitHub' },
              { href: personal.linkedin,            icon: <FiLinkedin size={15} />, label: 'LinkedIn' },
              { href: `mailto:${personal.email}`,   icon: <FiMail size={15} />,     label: 'Email' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 rounded-lg border border-dim flex items-center justify-center text-subtle hover:text-text hover:border-soft transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-dim flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-2xs text-muted">
            © {new Date().getFullYear()} {personal.name} · All rights reserved.
          </p>
          <p className="font-mono text-2xs text-muted">
            Built with React · TypeScript · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
