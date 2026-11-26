'use client';

import { useState } from 'react';
import { FaGraduationCap, FaMinus, FaPlus } from 'react-icons/fa';
import { FaqProps } from '@/types/templates.types';

export const Faq = ({ data }: FaqProps) => {
  const [openId, setOpenId] = useState<string | null>(data?.faqItems[2]?.id ?? null);
  if (!data) return null;

  return (
    <section id="faqs" className="w-full bg-[var(--color-bg-main)] py-8 lg:py-14">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div className="order-2 space-y-3 lg:order-1">
          {data.faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <article key={item.id} className="overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-card)]">
                <button type="button" onClick={() => setOpenId(isOpen ? null : item.id)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold text-[var(--color-heading)] sm:text-lg">
                  {item.question}
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[var(--color-heading)] text-xs text-[var(--color-white)]">{isOpen ? <FaMinus /> : <FaPlus />}</span>
                </button>
                {isOpen && <p className="border-t border-[var(--color-border)] bg-[var(--color-bg-soft)] px-5 py-4 text-base leading-7 text-[var(--color-text)]">{item.answer}</p>}
              </article>
            );
          })}
        </div>

        <div className="order-1 flex flex-col items-center text-center lg:order-2 lg:items-start lg:pl-8 lg:text-left">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--color-accent-soft)] px-4 py-2 text-sm font-bold text-[var(--color-heading)]"><FaGraduationCap className="text-[var(--color-accent)]" />{data.eyebrow}</span>
          <h2 className="font-display mt-5 text-2xl font-semibold leading-[1.15] text-[var(--color-heading)] sm:text-4xl lg:text-5xl lg:leading-[1.12] xl:text-6xl">
            <span className="inline lg:block">{data.titleStart} </span>
            <span className="inline italic text-[var(--color-accent)] lg:block">{data.titleAccent} </span>
            <span className="inline lg:block">{data.titleEnd}</span>
          </h2>
          <span className="mt-7 block h-1 w-20 bg-[var(--color-accent)]" />
        </div>
      </div>
    </section>
  );
};
