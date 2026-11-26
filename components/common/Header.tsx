'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HiArrowLongRight } from 'react-icons/hi2';
import { HeaderProps } from '@/types/templates.types';

export const Header = ({ data }: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('hero');

  useEffect(() => {
    if (!data) return;

    const sectionIds = [...data.navLinks, data.contactButton]
      .map((link) => link.url.split('#')[1])
      .filter(Boolean);

    const onScroll = () => {
      setScrolled(window.scrollY > 18);
      const marker = window.scrollY + Math.min(window.innerHeight * 0.36, 300) + 88;
      let currentId = sectionIds[0] ?? 'hero';

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) currentId = id;
      });

      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
        currentId = sectionIds[sectionIds.length - 1] ?? currentId;
      }

      setActiveId(currentId);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [data]);

  if (!data) return null;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? 'bg-[var(--color-primary-dark)] shadow-lg' : 'bg-transparent'}`}>
      <div className="mx-auto flex h-[76px] w-full max-w-[1440px] items-center justify-between gap-5 px-4 sm:px-6 lg:h-[88px] lg:px-8">
        <div className="flex min-w-0 items-center gap-4 sm:gap-5">
          <Link href="/#hero" aria-label={data.logoAlt} className="flex shrink-0 items-center">
            <Image src={data.logo} alt={data.logoAlt} width={520} height={170} priority className="h-11 w-auto max-w-[180px] object-contain object-left sm:h-14 sm:max-w-[240px] lg:max-w-[260px]" />
          </Link>
          <span className="hidden h-12 w-px bg-[var(--color-white)]/65 lg:block" />
        </div>

        <nav className="hidden items-center gap-5 xl:flex 2xl:gap-7" aria-label="Primary navigation">
          {data.navLinks.map((link) => {
            const sectionId = link.url.split('#')[1];
            const isActive = activeId === sectionId;
            return (
            <Link key={link.id} href={link.url} onClick={() => setActiveId(sectionId)} aria-current={isActive ? 'page' : undefined} className={`relative py-8 text-[13px] font-semibold uppercase transition-colors hover:text-[var(--color-accent)] ${isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-white)]'}`}>
              {link.label}
              {isActive && <span className="absolute inset-x-0 bottom-5 h-0.5 bg-[var(--color-accent)]" />}
            </Link>
          );})}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Link href={data.contactButton.url} className="hidden items-center gap-2 rounded-lg bg-[var(--color-accent)] px-5 py-3 text-sm font-bold uppercase text-[var(--color-primary-deep)] transition hover:bg-[var(--color-accent-dark)] lg:flex">
            {data.contactButton.label}
            <HiArrowLongRight className="text-xl" />
          </Link>
          <button type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? data.closeMenuLabel : data.openMenuLabel} aria-expanded={open} className="grid h-11 w-11 place-items-center rounded-md border border-[var(--color-white)]/40 text-[var(--color-white)] xl:hidden">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="max-h-[calc(100vh-76px)] overflow-y-auto border-t border-[var(--color-white)]/10 bg-[var(--color-primary-dark)] px-4 py-5 xl:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-[1280px] flex-col">
            {data.navLinks.map((link) => {
              const sectionId = link.url.split('#')[1];
              const isActive = activeId === sectionId;
              return (
              <Link key={link.id} href={link.url} onClick={() => { setActiveId(sectionId); setOpen(false); }} aria-current={isActive ? 'page' : undefined} className={`border-b border-[var(--color-white)]/10 py-3 text-sm font-semibold uppercase ${isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-white)]'}`}>
                {link.label}
              </Link>
            );})}
            <Link href={data.contactButton.url} onClick={() => setOpen(false)} className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-[var(--color-accent)] px-5 py-3 text-sm font-bold uppercase text-[var(--color-primary-deep)]">
              {data.contactButton.label}
              <HiArrowLongRight className="text-xl" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};
