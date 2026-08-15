import { useReveal } from '../hooks/useReveal';

const EDUCATION = [
  {
    degree: 'MCA',
    full: 'Master of Computer Applications',
    school: 'Tulsiramji Gaikwad Patil College of Engineering & Technology (TGPCET), Nagpur',
    period: '2025 – 2027 (Expected)',
    stat: 'First Year CGPA: 9.00',
  },
  {
    degree: 'BCA',
    full: 'Bachelor of Computer Applications',
    school: 'Sant Gadge Baba University, Amravati',
    period: '2022 – 2024',
    stat: 'CGPA: 7.73 — Graduated with Distinction',
  },
];

export default function Education() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="education" className="relative py-28 md:py-36 bg-paper dark:bg-black transition-colors duration-300 border-t border-ink/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <p className="text-[13px] tracking-[0.3em] uppercase text-ink-soft dark:text-stone mb-4">05 — Education</p>
        <h2 className="font-editorial text-4xl md:text-5xl text-ink dark:text-cream mb-16">Education</h2>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-10 md:gap-16 ${visible ? 'reveal-up' : 'opacity-0'}`}
        >
          {EDUCATION.map((edu) => (
            <div key={edu.degree} className="border-t border-ink/15 dark:border-white/15 pt-8">
              <p className="font-editorial text-5xl text-ink dark:text-cream mb-4">{edu.degree}</p>
              <p className="text-ink/90 dark:text-cream/90 text-base mb-1">{edu.full}</p>
              <p className="text-ink-soft dark:text-stone text-[15px] leading-relaxed mb-4">{edu.school}</p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                <span className="text-ink-soft dark:text-stone">{edu.period}</span>
                <span className="text-[color:var(--color-crimson)] font-medium">{edu.stat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
