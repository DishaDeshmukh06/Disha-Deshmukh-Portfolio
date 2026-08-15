import { GithubIcon } from './icons';
import { useReveal } from '../hooks/useReveal';

const EXPERIENCE = [
  {
    role: 'Full Stack Development Intern',
    org: 'Cognifyz IT Solutions Pvt. Ltd.',
    period: 'July 2026',
    meta: 'Ref: CTI/A1/C385877',
    github: 'https://github.com/DishaDeshmukh06/Cognifyz-FullStack-Development-Internship',
    points: [
      'Engineered 5 full-stack web modules using HTML5, CSS3, JavaScript, and Bootstrap.',
      'Delivered responsive, cross-device UI components.',
      'Built server-side features with Node.js and Express.js.',
      'Used EJS templating.',
      'Integrated REST APIs.',
      'Implemented database connectivity.',
    ],
  },
  {
    role: 'Full Stack Web Development Intern',
    org: 'SmartED Innovations',
    period: 'Nov 2025 – Jan 2026',
    meta: null,
    github: null,
    points: [
      'Built responsive, cross-device web applications using HTML5, CSS3, and JavaScript.',
      'Developed backend logic using Python/Django.',
      'Integrated SQLite for persistent data storage.',
      'Containerized applications using Docker.',
      'Integrated RESTful APIs.',
      'Improved deployment stability and site reliability.',
    ],
  },
];

export default function Experience() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="experience" className="relative py-28 md:py-36 bg-paper dark:bg-black transition-colors duration-300 border-t border-ink/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <p className="text-[13px] tracking-[0.3em] uppercase text-ink-soft dark:text-stone mb-4">04 — Experience</p>
        <h2 className="font-editorial text-4xl md:text-5xl text-ink dark:text-cream mb-16">Where I've Worked</h2>

        <div ref={ref} className={`relative ${visible ? 'reveal-up' : 'opacity-0'}`}>
          <div
            className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-ink/15 dark:bg-white/15"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-16">
            {EXPERIENCE.map((exp) => (
              <div key={exp.org} className="relative pl-10 md:pl-14">
                <span
                  className="absolute left-0 top-2 w-3.5 h-3.5 md:w-[18px] md:h-[18px] rounded-full bg-[color:var(--color-crimson)] ring-4 ring-paper dark:ring-black"
                  aria-hidden="true"
                />
                <div className="grid md:grid-cols-12 gap-4 md:gap-8">
                  <div className="md:col-span-3">
                    <p className="text-sm text-ink-soft dark:text-stone tracking-wide">{exp.period}</p>
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="text-2xl md:text-3xl font-medium text-ink dark:text-cream mb-1">{exp.role}</h3>
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <p className="text-[color:var(--color-crimson)] text-base font-medium">
                        {exp.org}
                      </p>
                      {exp.meta && <span className="text-xs text-ink-soft dark:text-stone">{exp.meta}</span>}
                      {exp.github && (
                        <a
                          href={exp.github}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-1.5 text-xs text-ink-soft dark:text-stone hover:text-ink dark:hover:text-cream transition-colors"
                        >
                          <GithubIcon size={13} />
                          Internship repo
                        </a>
                      )}
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                      {exp.points.map((point) => (
                        <li
                          key={point}
                          className="text-ink-soft dark:text-stone text-[15px] leading-relaxed flex gap-2.5"
                        >
                          <span className="text-[color:var(--color-crimson)] mt-2 w-1 h-1 rounded-full bg-current shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
