import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './icons';
import { useReveal } from '../hooks/useReveal';

const PROJECTS = [
  {
    title: 'AI Hobby & Health Tracker',
    stack: ['Python', 'Django', 'SQLite', 'Chart.js', 'ReportLab'],
    description:
      'Built a full-stack Django application with secure authentication to track health metrics including BPM, BP, steps, and sleep with real-time alerts.',
    detail:
      'Engineered an AI recommendation engine based on the Big Five personality model and visualized health trends using Chart.js, with PDF report export via ReportLab.',
    github: 'https://github.com/DishaDeshmukh06/AI-Hobby-Health-Tracker',
  },
  {
    title: 'Employee & Business Management System',
    stack: ['Python', 'Django', 'SQLite', 'Docker'],
    description:
      'Engineered secure, permission-based login portals for HR, Manager, and Employee roles with dedicated dashboards.',
    detail:
      'Built a CRUD architecture validated with 500+ entries and an optimized search engine for instant retrieval.',
    github: 'https://github.com/DishaDeshmukh06/Employee-and-Business-Management-System',
  },
  {
    title: 'Student Attendance Management System',
    stack: ['Node.js', 'Express.js', 'SQLite'],
    description:
      'Developed a role-based attendance system with secure authentication for Admin, Teacher, and Student roles.',
    detail:
      'Engineered an interactive dashboard for real-time attendance tracking with live search, record filtering, and SQLite integration.',
    github: 'https://github.com/DishaDeshmukh06/Student-Attendance-Management-System',
  },
];

export default function Projects() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="projects" className="relative py-28 md:py-36 bg-paper dark:bg-black transition-colors duration-300 border-t border-ink/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <p className="text-[13px] tracking-[0.3em] uppercase text-ink-soft dark:text-stone mb-4">03 — Work</p>
        <h2 className="font-editorial text-4xl md:text-5xl text-ink dark:text-cream mb-16">Selected Projects</h2>

        <div ref={ref} className={`flex flex-col ${visible ? 'reveal-up' : 'opacity-0'}`}>
          {PROJECTS.map((project, i) => (
            <a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              className="group relative grid md:grid-cols-12 gap-4 md:gap-8 items-start border-t border-ink/15 dark:border-white/15 py-10 hover:bg-ink/[0.03] dark:hover:bg-white/[0.03] transition-colors duration-300 px-2 -mx-2"
            >
              <span className="md:col-span-1 text-ink-soft dark:text-stone text-sm pt-1">{`0${i + 1}`}</span>

              <div className="md:col-span-6">
                <h3 className="text-2xl md:text-3xl font-medium text-ink dark:text-cream mb-3 flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight
                    size={20}
                    className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[color:var(--color-crimson)]"
                  />
                </h3>
                <p className="text-ink-soft dark:text-stone text-[15px] leading-relaxed mb-2">{project.description}</p>
                <p className="text-ink-soft/80 dark:text-stone/80 text-[15px] leading-relaxed">{project.detail}</p>
              </div>

              <div className="md:col-span-4 md:col-start-8 flex flex-col gap-4 md:items-end">
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] uppercase tracking-wide text-ink/70 dark:text-cream/70 border border-ink/15 dark:border-white/15 rounded-full px-3 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm text-ink/80 dark:text-cream/80 group-hover:text-ink dark:group-hover:text-cream">
                  <GithubIcon size={15} />
                  View on GitHub
                </span>
              </div>
            </a>
          ))}
          <div className="border-t border-ink/15 dark:border-white/15" />
        </div>
      </div>
    </section>
  );
}
