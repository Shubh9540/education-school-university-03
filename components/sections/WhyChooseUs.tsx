import { FaAward, FaBriefcase, FaGraduationCap, FaLaptop, FaUsers } from 'react-icons/fa';
import Image from 'next/image';
import { WhyChooseUsProps } from '@/types/templates.types';

const featureIcons = { academic: FaGraduationCap, facilities: FaLaptop, career: FaBriefcase, development: FaUsers };

export const WhyChooseUs = ({ data }: WhyChooseUsProps) => {
  if (!data) return null;

  return (
    <section id="why-us" className="relative w-full overflow-hidden bg-[var(--color-bg-main)] py-8 lg:py-14">
      <div className="mx-auto grid max-w-[1280px] items-stretch gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.4fr] lg:px-8">
        <div className="flex flex-col items-center text-center lg:min-h-[520px] lg:items-start lg:text-left">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--color-accent-soft)] px-4 py-2 text-sm font-bold text-[var(--color-heading)]"><FaAward className="text-[var(--color-accent)]" />{data.eyebrow}</span>
          <h2 className="font-display mt-5 text-2xl font-semibold leading-[1.15] text-[var(--color-heading)] sm:text-4xl lg:text-5xl lg:leading-[1.12]">
            <span className="inline lg:block">{data.titleStart} </span>
            <span className="inline lg:block">{data.titleMiddle} </span>
            <span className="inline italic text-[var(--color-accent)] lg:block">{data.titleEnd}</span>
          </h2>
          <div className="relative mt-6 min-h-[280px] w-full flex-1 overflow-hidden rounded-2xl shadow-[0_12px_36px_var(--color-shadow)] sm:min-h-[380px] lg:mt-4 lg:min-h-[460px]">
            <Image src={data.watermarkImage} alt={data.watermarkImageAlt} fill sizes="(max-width: 1023px) 100vw, 460px" className="object-cover" />
          </div>
        </div>

        <div className="space-y-4">
          {data.features.map((feature) => {
            const Icon = featureIcons[feature.icon as keyof typeof featureIcons];
            return (
              <article key={feature.id} className="flex gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-5 shadow-sm sm:gap-6 sm:p-6">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-[var(--color-primary-soft)] text-3xl text-[var(--color-heading)]">{Icon && <Icon />}</span>
                <span className="hidden w-px bg-[var(--color-accent)] sm:block" />
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-heading)] sm:text-2xl">{feature.title}</h3>
                  <p className="mt-1 text-base leading-7 text-[var(--color-text)]">{feature.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
