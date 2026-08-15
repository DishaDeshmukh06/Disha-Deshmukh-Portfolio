import { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

function Logo() {
  return (
    <a
      href="#top"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      className="flex items-center gap-2.5 group"
      aria-label="Disha.co — back to top"
    >
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M13 1L24.5 7.5V19.5L13 25L1.5 19.5V7.5L13 1Z" stroke="#f4efec" strokeWidth="1" />
        <path d="M13 1V25" stroke="#9c1f28" strokeWidth="1" />
        <path d="M1.5 7.5L24.5 19.5" stroke="#9c1f28" strokeWidth="0.6" opacity="0.6" />
      </svg>
      <span className="font-inter text-[17px] tracking-tight">
        <span className="text-cream font-semibold">Disha</span>
        <span className="text-[color:var(--color-crimson)]">.co</span>
      </span>
    </a>
  );
}

function ThemeToggle({
  theme,
  toggleTheme,
  className = '',
}: {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark/light mode"
      className={`inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-cream/80 hover:text-cream hover:border-white/40 transition-colors duration-300 ${className}`}
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => !!el
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          <Logo />

          {/* Desktop pill nav */}
          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-1.5 py-1.5"
          >
            {LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-4 py-2 rounded-full text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                  active === link.id
                    ? 'bg-white/90 text-black'
                    : 'text-cream/80 hover:text-cream'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} className="hidden md:inline-flex" />

            <button
              onClick={() => scrollTo('contact')}
              className="hidden md:inline-flex items-center bg-cream text-black text-[13px] font-medium px-5 py-2.5 rounded-full hover:bg-white transition-colors duration-300"
            >
              Let's talk
            </button>

            {/* Mobile toggle */}
            <button
              className="md:hidden text-cream p-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 bg-black z-[110] flex flex-col transition-opacity duration-300 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between px-6 py-6">
          <Logo />
          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              className="text-cream p-2"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
        </div>
        <nav className="flex-1 flex flex-col justify-center gap-2 px-8" aria-label="Mobile primary">
          {LINKS.map((link, i) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-left font-editorial text-4xl py-3 text-cream/90 hover:text-cream border-b border-white/10"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="mt-8 inline-flex justify-center items-center bg-cream text-black text-base font-medium px-6 py-4 rounded-full"
          >
            Let's talk
          </button>
        </nav>
      </div>
    </>
  );
}
