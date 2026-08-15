import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { useReveal } from '../hooks/useReveal';

const EMAIL = 'deshmukhdisha084@gmail.com';
const PHONE = '+91 7776994342';
const LINKEDIN = 'https://www.linkedin.com/in/disha-deshmukh-933293282/';
const GITHUB = 'https://github.com/DishaDeshmukh06';

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const EMAIL_LINK = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;

  return (
    <section id="contact" className="relative py-28 md:py-40 bg-paper dark:bg-black transition-colors duration-300 border-t border-ink/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div ref={ref} className={visible ? 'reveal-up' : 'opacity-0'}>
          <p className="text-[13px] tracking-[0.3em] uppercase text-ink-soft dark:text-stone mb-6">
            07 — Contact
          </p>

          <h2 className="font-editorial text-5xl md:text-7xl text-ink dark:text-cream leading-[1.05] max-w-3xl mb-6">
            Let's Work Together
          </h2>

          <p className="text-ink-soft dark:text-stone text-lg max-w-xl mb-14">
            Looking for an entry-level Software Developer or Web Developer opportunity.
          </p>

          <a
            href={EMAIL_LINK}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-4 mb-16 border-b-2 border-ink/20 dark:border-white/20 hover:border-[color:var(--color-crimson)] transition-colors duration-300 pb-3"
          >
            <span className="font-editorial text-3xl md:text-5xl text-ink dark:text-cream">
              Let's talk
            </span>

            <ArrowUpRight
              size={32}
              className="text-ink dark:text-cream group-hover:text-[color:var(--color-crimson)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
            />
          </a>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-ink/10 dark:border-white/10">

            <a
              href={EMAIL_LINK}
              target="_blank"
              rel="noreferrer noopener"
              className="flex flex-col gap-3 text-ink/80 dark:text-cream/80 hover:text-ink dark:hover:text-cream transition-colors"
            >
              <Mail size={18} className="text-[color:var(--color-crimson)]" />
              <span className="text-sm break-all">{EMAIL}</span>
            </a>

            <a
              href={`tel:${PHONE.replace(/\s/g, '')}`}
              className="flex flex-col gap-3 text-ink/80 dark:text-cream/80 hover:text-ink dark:hover:text-cream transition-colors"
            >
              <Phone size={18} className="text-[color:var(--color-crimson)]" />
              <span className="text-sm">{PHONE}</span>
            </a>

            <div className="flex flex-col gap-3 text-ink/80 dark:text-cream/80">
              <MapPin size={18} className="text-[color:var(--color-crimson)]" />
              <span className="text-sm">Nagpur, Maharashtra</span>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex gap-4">
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn profile"
                  className="text-ink/80 dark:text-cream/80 hover:text-ink dark:hover:text-cream transition-colors"
                >
                  <LinkedinIcon size={18} />
                </a>

                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub profile"
                  className="text-ink/80 dark:text-cream/80 hover:text-ink dark:hover:text-cream transition-colors"
                >
                  <GithubIcon size={18} />
                </a>
              </div>

              <span className="text-sm text-ink-soft dark:text-stone">
                LinkedIn &amp; GitHub
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}