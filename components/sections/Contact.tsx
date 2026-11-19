'use client';

import { FormEvent, useState } from 'react';
import Image from 'next/image';
import { FaGraduationCap } from 'react-icons/fa';
import { HiArrowLongRight } from 'react-icons/hi2';
import { ContactProps } from '@/types/templates.types';

export const Contact = ({ data }: ContactProps) => {
  const [submitted, setSubmitted] = useState(false);
  if (!data) return null;

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="w-full bg-[var(--color-bg-main)] py-8 lg:py-14">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center lg:mb-10">
          <span className="section-kicker"><FaGraduationCap className="text-[var(--color-accent)]" />{data.eyebrow}</span>
          <h2 className="font-display mt-3 text-4xl font-semibold text-[var(--color-heading)] sm:text-5xl lg:text-6xl">{data.titleStart} <span className="text-[var(--color-accent)]">{data.titleEnd}</span></h2>
          <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-[var(--color-text)]">{data.subtitle}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr] lg:items-stretch">
          <div className="relative min-h-[340px] overflow-hidden rounded-3xl">
            <Image src={data.image} alt={data.imageAlt} fill sizes="(max-width: 1023px) 100vw, 42vw" className="object-cover" />
            <span className="absolute left-0 top-0 h-20 w-20 border-l-4 border-t-4 border-[var(--color-accent)]" />
          </div>

          <form onSubmit={submit} className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-6 shadow-[0_12px_40px_var(--color-shadow)] sm:p-9 lg:p-10">
            <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {data.fields.map((field) => (
                <label key={field.id} htmlFor={field.id} className="block text-sm font-semibold text-[var(--color-heading)]">
                  {field.label}
                  <input id={field.id} name={field.id} type={field.type} placeholder={field.placeholder} required className="field-line mt-2 text-sm font-normal" />
                </label>
              ))}
            </div>
            <label htmlFor="subject" className="mt-6 block text-sm font-semibold text-[var(--color-heading)]">
              {data.subjectLabel}
              <select id="subject" name="subject" required defaultValue="" className="field-line mt-2 appearance-none text-sm font-normal">
                <option value="" disabled>{data.subjectPlaceholder}</option>
                {data.subjectOptions.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </label>
            <label htmlFor="message" className="mt-6 block text-sm font-semibold text-[var(--color-heading)]">
              {data.messageLabel}
              <textarea id="message" name="message" required rows={3} placeholder={data.messagePlaceholder} className="field-line mt-2 resize-y text-sm font-normal" />
            </label>
            <button type="submit" className="mt-7 inline-flex min-w-[250px] items-center justify-between rounded-lg bg-[var(--color-heading)] px-7 py-3 text-base font-bold text-[var(--color-white)] transition hover:bg-[var(--color-primary)]">
              {submitted ? data.submitText : data.submitText}
              <span className="-my-3 -mr-7 grid h-[48px] w-14 place-items-center rounded-r-lg bg-[var(--color-accent)]"><HiArrowLongRight className="text-2xl" /></span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
