import { useReveal } from '../hooks/useReveal';

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative py-28 md:py-36 bg-paper dark:bg-black transition-colors duration-300 border-t border-ink/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div
          ref={ref}
          className={`grid md:grid-cols-12 gap-10 md:gap-16 ${visible ? 'reveal-up' : 'opacity-0'}`}
        >
          <div className="md:col-span-4">
            <p className="text-[13px] tracking-[0.3em] uppercase text-ink-soft dark:text-stone mb-4">01 — About</p>
            <h2 className="font-editorial text-4xl md:text-5xl text-ink dark:text-cream leading-tight">
              Building with code.
              <br />
              Creating with purpose.
            </h2>
          </div>

          <div className="md:col-span-7 md:col-start-6 flex flex-col gap-6">
            <p className="text-lg md:text-xl text-ink/90 dark:text-cream/90 leading-relaxed">
              MCA student and Full Stack Developer with hands-on experience building
              responsive web applications using Python, Django, JavaScript, and REST APIs.
            </p>
            <p className="text-base md:text-lg text-ink-soft dark:text-stone leading-relaxed">
              Developed full-stack systems, containerized applications using Docker, and
              integrated Node.js/Express backends across multiple web development roles.
            </p>
            <p className="text-base md:text-lg text-ink/80 dark:text-cream/80 leading-relaxed border-l-2 border-[color:var(--color-crimson)] pl-5">
              Seeking an entry-level Software Developer or Web Developer position.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6 pt-8 border-t border-ink/10 dark:border-white/10">
              <div>
                <p className="font-editorial text-3xl text-ink dark:text-cream">MCA</p>
                <p className="text-xs text-ink-soft dark:text-stone mt-1 tracking-wide">In progress, TGPCET</p>
              </div>
              <div>
                <p className="font-editorial text-3xl text-ink dark:text-cream">2</p>
                <p className="text-xs text-ink-soft dark:text-stone mt-1 tracking-wide">Full-stack internships</p>
              </div>
              <div>
                <p className="font-editorial text-3xl text-ink dark:text-cream">3</p>
                <p className="text-xs text-ink-soft dark:text-stone mt-1 tracking-wide">Shipped projects</p>
              </div>
              <div>
                <p className="font-editorial text-3xl text-ink dark:text-cream">Nagpur</p>
                <p className="text-xs text-ink-soft dark:text-stone mt-1 tracking-wide">Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
