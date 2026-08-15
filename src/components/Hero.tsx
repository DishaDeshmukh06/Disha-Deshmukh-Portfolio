import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react';
import RevealLayer from './RevealLayer';

const SPOTLIGHT_R = 260;

export default function Hero() {
  const mouse = useRef({ x: -999, y: -999 });
  const smooth = useRef({ x: -999, y: -999 });
  const rafId = useRef<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const touchCapable =
      window.matchMedia('(hover: none), (pointer: coarse)').matches;
    setIsTouch(touchCapable);
    if (touchCapable) return;

    const handleMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const tick = () => {
      smooth.current.x += (mouse.current.x - smooth.current.x) * 0.1;
      smooth.current.y += (mouse.current.y - smooth.current.y) * 0.1;
      setCursorPos({ x: smooth.current.x, y: smooth.current.y });
      rafId.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', handleMove);
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="top"
      className="relative w-full overflow-hidden h-screen bg-black"
      style={{ height: '100dvh' }}
    >
      {/* Background portrait */}
      <div className="absolute inset-0 hero-anim hero-zoom" style={{ animationDelay: '0.1s' }}>
        <img
          src="./images/Base_image.png"
          alt="Portrait of Disha Deshmukh"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'right center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      {/* Cursor reveal layer, desktop only */}
      {!isTouch && (
        <RevealLayer
          image="./images/Reveal_image.png"
          cursorX={cursorPos.x}
          cursorY={cursorPos.y}
          radius={SPOTLIGHT_R}
        />
      )}

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-center">
        <p
          className="hero-anim hero-fade text-[13px] tracking-[0.3em] uppercase text-stone mb-6"
          style={{ animationDelay: '0.3s' }}
        >
          Hello, I'm
        </p>

        <h1 className="leading-[0.95] mb-6">
          <span
            className="hero-anim hero-reveal font-editorial block text-[16vw] md:text-[7vw] lg:text-[6.5vw] text-cream"
            style={{ animationDelay: '0.45s' }}
          >
            I'm
          </span>
          <span
            className="hero-anim hero-reveal font-inter font-semibold block text-[16vw] md:text-[7vw] lg:text-[6.5vw] text-cream -mt-1 md:-mt-3"
            style={{ animationDelay: '0.6s' }}
          >
            Disha
          </span>
        </h1>

        <div
          className="hero-anim hero-fade mb-8"
          style={{ animationDelay: '0.8s' }}
        >
          <p className="text-xl md:text-2xl text-cream/90 font-medium">Full Stack Developer</p>
          <p className="text-sm md:text-base text-stone mt-1 tracking-wide">
            Python &amp; Django&nbsp;|&nbsp;Web Development
          </p>
        </div>

        <p
          className="hero-anim hero-fade max-w-xl text-stone text-[15px] md:text-base leading-relaxed mb-10"
          style={{ animationDelay: '0.95s' }}
        >
          MCA student and Full Stack Developer with hands-on experience building responsive
          web applications using Python, Django, JavaScript, and REST APIs.
        </p>

        <div
          className="hero-anim hero-fade flex flex-wrap items-center gap-4"
          style={{ animationDelay: '1.1s' }}
        >
          <button
            onClick={() => scrollTo('projects')}
            className="inline-flex items-center gap-2 bg-cream text-black font-medium text-sm px-6 py-3.5 rounded-full hover:bg-white transition-colors duration-300"
          >
            View Projects
            <ArrowUpRight size={16} />
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-2 border border-white/30 text-cream font-medium text-sm px-6 py-3.5 rounded-full hover:border-white/70 hover:bg-white/5 transition-colors duration-300"
          >
            Let's Talk
          </button>
          <a
            href="/resume/Disha_Deshmukh_Resume.pdf"
            download="Disha_Deshmukh_Resume.pdf"
            className="inline-flex items-center gap-2 border border-white/30 text-cream font-medium text-sm px-6 py-3.5 rounded-full hover:border-white/70 hover:bg-white/5 transition-colors duration-300"
          >
            Download Resume
            <Download size={16} />
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="hero-anim hero-fade absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone"
        style={{ animationDelay: '1.4s' }}
      >
        <span className="text-[11px] tracking-[0.25em] uppercase">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </div>
    </section>
  );
}
