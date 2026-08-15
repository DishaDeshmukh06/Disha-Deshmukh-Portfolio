import { useReveal } from '../hooks/useReveal';

const CATEGORIES = [
  {
    label: 'Programming Languages',
    items: ['Python', 'JavaScript (ES6)', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    label: 'Frameworks & Libraries',
    items: ['Django', 'Node.js', 'Express.js', 'Bootstrap'],
  },
  {
    label: 'Databases & Tools',
    items: ['MySQL', 'SQLite', 'REST APIs', 'Docker', 'Git', 'GitHub', 'VS Code'],
  },
  {
    label: 'Enterprise & Analytics',
    items: ['Power BI', 'Microsoft Intune', 'Google Analytics'],
  },
  {
    label: 'Soft Skills',
    items: ['Communication', 'Problem-Solving', 'Teamwork', 'Time Management'],
  },
];

export default function Skills() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="skills" className="relative py-28 md:py-36 bg-paper dark:bg-black transition-colors duration-300 border-t border-ink/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
          <div>
            <p className="text-[13px] tracking-[0.3em] uppercase text-ink-soft dark:text-stone mb-4">02 — Skills</p>
            <h2 className="font-editorial text-4xl md:text-5xl text-ink dark:text-cream">Technical Skills</h2>
          </div>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12 ${
            visible ? 'reveal-up' : 'opacity-0'
          }`}
        >
          {CATEGORIES.map((cat) => (
            <div key={cat.label} className="border-t border-ink/15 dark:border-white/15 pt-6">
              <h3 className="text-[13px] tracking-[0.15em] uppercase text-ink/70 dark:text-cream/70 mb-5 min-h-[2.5em]">
                {cat.label}
              </h3>
              <ul className="flex flex-col gap-3">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="text-ink/90 dark:text-cream/90 text-[15px] font-light border-b border-ink/5 dark:border-white/5 pb-3 last:border-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
