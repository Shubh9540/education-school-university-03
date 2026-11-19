'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight, FaGraduationCap, FaQuoteLeft, FaQuoteRight, FaStar } from 'react-icons/fa';
import { TestimonialsProps } from '@/types/templates.types';

export const Testimonials = ({ data }: TestimonialsProps) => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!data || paused || data.items.length < 2) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % data.items.length);
    }, data.autoPlayInterval);
    return () => window.clearInterval(timer);
  }, [data, paused]);

  if (!data || data.items.length === 0) return null;
  const item = data.items[active];
  const move = (direction: number) => setActive((current) => (current + direction + data.items.length) % data.items.length);

  return (
    <section id="testimonials" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)} className="w-full bg-[var(--color-bg-main)] py-8 lg:py-14">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center lg:mb-10">
          <span className="section-kicker"><FaGraduationCap className="text-[var(--color-accent)]" />{data.eyebrow}</span>
          <h2 className="font-display mt-3 text-4xl font-semibold text-[var(--color-heading)] sm:text-5xl lg:text-6xl">{data.titleStart} <span className="text-[var(--color-accent)]">{data.titleEnd}</span></h2>
          <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-[var(--color-text)]">{data.subtitle}</p>
        </div>

        <div key={item.id} className="grid animate-fade-in-up items-center gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:gap-0">
          <Image src={item.image} alt={item.imageAlt} width={620} height={820} className="mx-auto aspect-[3/4] w-full max-w-[360px] rounded-2xl object-cover object-top lg:mx-0" />
          <div className="rounded-3xl bg-[var(--color-bg-soft)] p-6 shadow-sm sm:p-9 lg:-ml-4 lg:p-12">
            <div className="flex gap-1 text-xl text-[var(--color-accent)]">{Array.from({ length: item.rating }).map((_, index) => <FaStar key={index} />)}</div>
            <div className="mt-6 flex gap-4">
              <FaQuoteLeft className="shrink-0 text-3xl text-[var(--color-accent)]" />
              <blockquote className="text-lg italic leading-8 text-[var(--color-heading)] sm:text-xl">{item.quote}</blockquote>
              <FaQuoteRight className="mt-auto shrink-0 text-3xl text-[var(--color-accent)]" />
            </div>
            <div className="mt-8 flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-full border border-[var(--color-accent)] text-[var(--color-heading)]"><FaGraduationCap className="text-2xl" /></span>
              <span className="h-12 w-px bg-[var(--color-accent)]" />
              <div><strong className="block text-xl text-[var(--color-heading)]">{item.name}</strong><span>{item.degree}</span></div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start lg:pl-[38%]">
          <button type="button" onClick={() => move(-1)} aria-label={data.previousLabel} className="grid h-11 w-11 place-items-center rounded-full border border-[var(--color-border)] text-[var(--color-heading)]"><FaArrowLeft /></button>
          <button type="button" onClick={() => move(1)} aria-label={data.nextLabel} className="grid h-11 w-11 place-items-center rounded-full bg-[var(--color-heading)] text-[var(--color-white)]"><FaArrowRight /></button>
          <div className="ml-0 flex items-center gap-2 sm:ml-5">
            {data.items.map((testimonial, index) => (
              <button key={testimonial.id} type="button" onClick={() => setActive(index)} aria-label={testimonial.name} aria-current={index === active ? 'true' : undefined} className={`relative h-12 w-12 overflow-hidden rounded-full border-2 transition sm:h-14 sm:w-14 ${index === active ? 'border-[var(--color-accent)] ring-2 ring-[var(--color-accent-soft)]' : 'border-[var(--color-border)] opacity-75'}`}>
                <Image src={testimonial.image} alt={testimonial.imageAlt} fill sizes="56px" className="object-cover object-top" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
