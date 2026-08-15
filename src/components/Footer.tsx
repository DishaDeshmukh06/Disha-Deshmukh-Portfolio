import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';

const EMAIL = 'deshmukhdisha084@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/disha-deshmukh-933293282/';
const GITHUB = 'https://github.com/DishaDeshmukh06';

export default function Footer() {
  return (
    <footer className="bg-paper dark:bg-black transition-colors duration-300 border-t border-ink/10 dark:border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <span className="font-inter text-[15px]">
          <span className="text-ink dark:text-cream font-semibold">Disha</span>
          <span className="text-[color:var(--color-crimson)]">.co</span>
        </span>

        <p className="text-ink-soft dark:text-stone text-xs order-3 sm:order-2 text-center">
          © 2026 Disha Deshmukh. All rights reserved.
        </p>

        <div className="flex items-center gap-5 order-2 sm:order-3">
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="text-ink-soft dark:text-stone hover:text-ink dark:hover:text-cream transition-colors"
          >
            <GithubIcon size={16} />
          </a>

          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="text-ink-soft dark:text-stone hover:text-ink dark:hover:text-cream transition-colors"
          >
            <LinkedinIcon size={16} />
          </a>

          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Send email"
            className="text-ink-soft dark:text-stone hover:text-ink dark:hover:text-cream transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}