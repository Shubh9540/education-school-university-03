'use client';

import { useEffect, useRef, useState } from 'react';
import { FaAward, FaBookOpen, FaGraduationCap, FaStar, FaUsers } from 'react-icons/fa';
import Image from 'next/image';
import { PiCertificateBold } from 'react-icons/pi';
import { AboutUsProps } from '@/types/templates.types';

const statIcons = { students: FaUsers, programs: FaBookOpen, award: FaAward };

export const AboutUs = ({ data }: AboutUsProps) => {
  const counterRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    if (!data || hasAnimated.current || !counterRef.current) return;

    const element = counterRef.current;
    let animationFrame = 0;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || hasAnimated.current) return;
      hasAnimated.current = true;
      observer.disconnect();

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setCounts(Object.fromEntries(data.stats.map((stat) => [stat.id, stat.value])));
        return;
      }

      const startedAt = performance.now();
      const animate = (time: number) => {
        const progress = Math.min((time - startedAt) / data.counterDuration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCounts(Object.fromEntries(data.stats.map((stat) => [stat.id, Math.round(stat.value * eased)])));
        if (progress < 1) animationFrame = requestAnimationFrame(animate);
      };
      animationFrame = requestAnimationFrame(animate);
    }, { threshold: 0.35 });

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [data]);

  if (!data) return null;

  return (
    <section id="about" className="w-full bg-[var(--color-bg-main)] py-8 lg:py-14">
      <div className="mx-auto grid max-w-[1280px] gap-8 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.55fr_1fr] lg:items-stretch lg:px-8">
        <div className="mx-auto w-full max-w-[310px] lg:mx-0">
          <div className="overflow-hidden rounded-2xl shadow-[0_10px_35px_var(--color-shadow)]">
            <Image src={data.imageMain} alt={data.imageMainAlt} width={520} height={640} className="aspect-[4/5] w-full object-cover" />
          </div>
          <div className="mt-4">
            <div className="flex items-center gap-2 font-bold text-[var(--color-heading)]">
              {data.ratingValue}
              <span className="flex text-[var(--color-accent)]">{Array.from({ length: 5 }).map((_, index) => <FaStar key={index} />)}</span>
            </div>
            <p className="mt-1 text-sm font-medium text-[var(--color-heading)]">{data.ratingLabel}</p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--color-accent-soft)] px-4 py-2 text-sm font-bold text-[var(--color-heading)]"><FaGraduationCap />{data.eyebrow}</span>
          <h2 className="font-display mt-4 text-2xl font-semibold leading-[1.15] text-[var(--color-heading)] sm:text-4xl lg:text-5xl lg:leading-[1.1]">
            <span className="inline lg:block">{data.titleStart} </span>
            <span className="inline lg:block">{data.titleMiddle} </span>
            <span className="inline italic text-[var(--color-accent)] lg:block">{data.titleAccent}</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-text)]">{data.description}</p>

          <div ref={counterRef} className="mt-6 grid grid-cols-3 divide-x divide-[var(--color-border)] rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-2 py-5 shadow-sm sm:px-4">
            {data.stats.map((stat) => {
              const Icon = statIcons[stat.icon as keyof typeof statIcons];
              return (
                <div key={stat.id} className="flex min-w-0 flex-col items-center px-2 text-center sm:px-4">
                  {Icon && <Icon className="mb-2 text-2xl text-[var(--color-accent)]" />}
                  <strong className="text-xl text-[var(--color-heading)] sm:text-3xl">{counts[stat.id] ?? 0}{stat.suffix}</strong>
                  <span className="mt-1 text-xs text-[var(--color-text)] sm:text-sm">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-[410px] flex-col lg:mx-0 lg:h-full lg:justify-self-end">
          <div className="mb-5 flex items-center gap-4 rounded-2xl bg-[var(--color-primary-soft)] p-4 text-[var(--color-heading)] shadow-sm">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[var(--color-card)]"><PiCertificateBold className="text-3xl" /></span>
            <strong>{data.recognition}</strong>
          </div>
          <div className="relative min-h-[300px] flex-1 overflow-hidden rounded-2xl shadow-[0_10px_35px_var(--color-shadow)] lg:min-h-[360px]">
            <Image src={data.imageDetail} alt={data.imageDetailAlt} fill sizes="(max-width: 1023px) 100vw, 410px" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};
