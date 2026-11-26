import { FaBookOpen, FaGraduationCap } from 'react-icons/fa';
import Image from 'next/image';
import { HeroProps } from '@/types/templates.types';

export const Hero = ({ data }: HeroProps) => {
  if (!data) return null;

  return (
    <section id="hero" className="hero-surface relative min-h-[700px] overflow-hidden pt-[76px] text-[var(--color-white)] lg:min-h-[650px] lg:pt-[88px]">
      <div className="relative z-10 mx-auto flex min-h-[624px] max-w-[1440px] flex-col items-center px-4 pb-10 pt-8 sm:px-6 lg:min-h-[562px] lg:flex-row lg:px-8 lg:pb-0 lg:pt-0">
        <div className="order-2 mt-8 w-full max-w-[820px] px-1 text-center lg:absolute lg:left-[280px] lg:right-[280px] lg:top-1/2 lg:mt-0 lg:w-auto lg:max-w-none lg:-translate-y-1/2 lg:px-0 lg:text-left xl:left-[320px] xl:right-[300px]">
          <div className="mb-4 flex items-center justify-center gap-3 sm:mb-5 lg:justify-start">
            <FaGraduationCap className="text-2xl text-[var(--color-accent)]" />
            <p className="text-base font-semibold sm:text-lg lg:text-xl">{data.eyebrow}</p>
            <span className="hidden h-px min-w-16 flex-1 bg-gradient-to-r from-[var(--color-accent)] to-transparent sm:block" />
          </div>

          <h1 className="font-display text-[clamp(1.75rem,7.2vw,4.75rem)] font-semibold uppercase leading-[0.98] tracking-[-0.03em] lg:text-[clamp(2.8rem,4.4vw,4.85rem)]">
            <span className="block">{data.titleStart}</span>
            <span className="block text-[var(--color-accent)]">{data.titleEnd}</span>
          </h1>

          <div className="mx-auto mt-6 flex max-w-[720px] flex-col items-center gap-5 sm:mt-8 sm:flex-row sm:gap-6 lg:mx-0 lg:mt-9 lg:gap-8">
            <div aria-label={data.playLabel} className="relative grid h-28 w-28 shrink-0 place-items-center text-[var(--color-white)]">
              <svg aria-hidden="true" viewBox="0 0 120 120" className="absolute inset-0 h-full w-full animate-[spin_16s_linear_infinite] overflow-visible">
                <defs>
                  <path id="hero-video-ring" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
                </defs>
                <text textLength="276" lengthAdjust="spacing" className="fill-[var(--color-white)] text-[10px] font-semibold">
                  <textPath href="#hero-video-ring" startOffset="0%">{data.videoBadge}</textPath>
                </text>
              </svg>
              <span className="absolute inset-[25px] rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-accent)]/10" />
              <FaBookOpen className="relative text-xl text-[var(--color-accent)]" />
            </div>
            <span className="hidden h-24 w-px shrink-0 bg-[var(--color-accent)] sm:block" />
            <p className="max-w-[500px] text-base leading-7 text-[var(--color-white)]/90 lg:text-lg lg:leading-8">{data.description}</p>
          </div>
        </div>

        <div className="order-1 flex w-full items-center justify-center gap-4 lg:order-2 lg:block lg:w-0">
          <div className="relative aspect-[7/10] h-auto w-[44%] max-w-[180px] overflow-hidden border border-[var(--color-white)]/40 shadow-2xl lg:absolute lg:bottom-0 lg:left-0 lg:w-[250px] lg:max-w-none xl:w-[285px]">
            <Image src={data.studentImage} alt={data.studentImageAlt} fill priority sizes="(max-width: 1023px) 44vw, 285px" className="object-cover object-top" />
            <span className="absolute right-0 top-0 h-16 w-16 border-r-2 border-t-2 border-[var(--color-accent)]" />
          </div>
          <div className="relative aspect-[4/5] h-auto w-[38%] max-w-[145px] border-4 border-[var(--color-white)]/80 p-1 shadow-2xl lg:absolute lg:right-6 lg:top-28 lg:h-[250px] lg:w-[220px] lg:max-w-none lg:aspect-auto xl:right-10 xl:h-[280px] xl:w-[250px]">
            <Image src={data.campusImage} alt={data.campusImageAlt} fill priority sizes="(max-width: 1023px) 38vw, 250px" className="object-cover" />
            <span className="absolute -right-3 -top-3 h-20 w-20 border-r-2 border-t-2 border-[var(--color-accent)]" />
            <span className="absolute -bottom-3 -left-3 h-20 w-20 border-b-2 border-l-2 border-[var(--color-accent)]" />
          </div>
        </div>
      </div>
    </section>
  );
};
