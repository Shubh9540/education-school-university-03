'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaGraduationCap, FaPlay, FaTimes } from 'react-icons/fa';
import { CampusLifeProps } from '@/types/templates.types';

export const CampusLife = ({ data }: CampusLifeProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  if (!data) return null;

  return (
    <section id="campus-life" className="w-full bg-[var(--color-bg-soft)] py-8 lg:py-14">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center lg:mb-10">
          <span className="section-kicker"><FaGraduationCap className="text-[var(--color-accent)]" />{data.eyebrow}</span>
          <h2 className="font-display mt-3 text-2xl font-semibold text-[var(--color-heading)] sm:text-4xl lg:text-6xl">{data.titleStart} <span className="text-[var(--color-accent)]">{data.titleEnd}</span></h2>
          <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-[var(--color-text)]">{data.subtitle}</p>
        </div>
        <div className="relative mx-auto aspect-video w-full max-w-[1080px] overflow-hidden rounded-2xl sm:rounded-3xl lg:aspect-[16/7] lg:min-h-[300px]">
          <Image src={data.image} alt={data.imageAlt} fill sizes="(max-width: 1080px) 100vw, 1080px" className="object-cover" />
          <button type="button" onClick={() => setIsOpen(true)} aria-label={data.playLabel} className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-[var(--color-white)] bg-[var(--color-accent)] text-2xl text-[var(--color-white)] shadow-xl transition hover:scale-105 sm:h-24 sm:w-24">
            <FaPlay className="ml-1" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div role="dialog" aria-modal="true" aria-label={data.modalTitle} onMouseDown={(event) => { if (event.target === event.currentTarget) setIsOpen(false); }} className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-primary-deep)]/90 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-[var(--color-primary-deep)] shadow-2xl">
            <button type="button" onClick={() => setIsOpen(false)} aria-label={data.closeLabel} className="absolute right-3 top-3 z-10 grid h-11 w-11 place-items-center rounded-full bg-[var(--color-white)] text-[var(--color-heading)] shadow-lg transition hover:bg-[var(--color-accent)]">
              <FaTimes />
            </button>
            <div className="aspect-video w-full">
              <iframe src={data.videoUrl} title={data.modalTitle} className="h-full w-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
