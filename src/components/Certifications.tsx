import { useReveal } from '../hooks/useReveal';

const CERTS = [
  {
    title: 'Mobile Device Management Analytics (MDMA)',
    org: 'MIDC Skill Development Center, Butibori',
    meta: '480 hours · Collaboration: NSDC & Eduspark',
    date: null,
  },
  {
    title: 'Python Full Stack Development',
    org: 'EduSkills Academy',
    meta: null,
    date: 'Dec 2025',
  },
  {
    title: 'SQL – Structured Query Language',
    org: 'SmartED Innovations',
    meta: null,
    date: 'Dec 2025',
  },
  {
    title: 'GenAI Powered Data Analytics Job Simulation',
    org: 'Tata via Forage',
    meta: null,
    date: 'Dec 2025',
  },
  {
    title: 'Cybersecurity Security Analyst Job Simulation',
    org: 'Tata via Forage',
    meta: null,
    date: 'Jan 2026',
  },
  {
    title: 'Technology & Coding Job Simulation',
    org: 'Deloitte Australia via Forage',
    meta: null,
    date: 'Jan 2026',
  },
  {
    title: 'Microsoft Power BI',
    org: 'SmartED Innovations',
    meta: null,
    date: 'Dec 2025',
  },
  {
    title: 'JavaScript ES6/ES2015',
    org: 'MindLuster',
    meta: null,
    date: 'Sep 2023',
  },
];

export default function Certifications() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="certifications"
      className="relative py-28 md:py-36 bg-paper dark:bg-black transition-colors duration-300 border-t border-ink/10 dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <p className="text-[13px] tracking-[0.3em] uppercase text-ink-soft dark:text-stone mb-4">
          06 — Certifications
        </p>
        <h2 className="font-editorial text-4xl md:text-5xl text-ink dark:text-cream mb-16">
          Certifications &amp; Training
        </h2>

        <div ref={ref} className={visible ? 'reveal-up' : 'opacity-0'}>
          {CERTS.map((cert) => (
            <div
              key={cert.title}
              className="grid md:grid-cols-12 gap-2 md:gap-8 items-baseline border-t border-ink/10 dark:border-white/10 py-5"
            >
              <div className="md:col-span-2">
                <span className="text-sm text-ink-soft dark:text-stone">{cert.date ?? '—'}</span>
              </div>
              <div className="md:col-span-7">
                <p className="text-ink/90 dark:text-cream/90 text-base md:text-lg">{cert.title}</p>
              </div>
              <div className="md:col-span-3 md:text-right">
                <p className="text-ink-soft dark:text-stone text-sm">{cert.org}</p>
                {cert.meta && <p className="text-ink-soft/70 dark:text-stone/70 text-xs mt-0.5">{cert.meta}</p>}
              </div>
            </div>
          ))}
          <div className="border-t border-ink/10 dark:border-white/10" />
        </div>
      </div>
    </section>
  );
}
