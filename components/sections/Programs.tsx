import Link from 'next/link';
import Image from 'next/image';
import { FaGraduationCap } from 'react-icons/fa';
import { ProgramsProps } from '@/types/templates.types';

export const Programs = ({ data }: ProgramsProps) => {
  if (!data) return null;

  return (
    <section id="programs" className="w-full bg-[var(--color-bg-soft)] py-8 lg:py-14">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center lg:mb-10">
          <span className="section-kicker"><FaGraduationCap className="text-[var(--color-accent)]" />{data.eyebrow}</span>
          <h2 className="font-display mt-3 text-4xl font-semibold text-[var(--color-heading)] sm:text-5xl lg:text-6xl">{data.titleStart} <span className="text-[var(--color-accent)]">{data.titleEnd}</span></h2>
          <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-[var(--color-text)]">{data.subtitle}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.programs.map((program) => (
            <Link key={program.id} href={program.url} className="group relative min-h-[430px] overflow-hidden">
              <Image src={program.image} alt={program.imageAlt} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw" className="object-cover transition duration-500 group-hover:scale-105" />
              <span className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-deep)] via-transparent to-transparent" />
              <span className="font-display absolute bottom-0 left-0 right-0 p-7 text-3xl font-semibold leading-none text-[var(--color-white)]">
                {program.title}
                <i className="mt-6 block h-1 w-24 bg-[var(--color-accent)]" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
