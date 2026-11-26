import Link from 'next/link';
import Image from 'next/image';
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaYoutube } from 'react-icons/fa';
import { FooterProps } from '@/types/templates.types';

const socialIcons = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  youtube: FaYoutube,
};

export const Footer = ({ data }: FooterProps) => {
  if (!data) return null;

  return (
    <footer className="footer-surface relative overflow-hidden text-[var(--color-white)]">
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-9 border-b border-[var(--color-white)]/70 pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.25fr_1.25fr] lg:gap-10">
          <Link href="/#hero" className="flex items-center justify-start border-[var(--color-white)]/50 lg:border-r lg:pr-10">
            <Image src={data.logo} alt={data.logoAlt} width={520} height={170} className="h-auto w-full max-w-[170px] object-contain object-left sm:max-w-[220px] lg:max-w-[260px]" />
          </Link>

          <div>
            <h3 className="mb-5 text-xl font-bold">{data.followTitle}</h3>
            <div className="mb-5 h-1 w-12 bg-[var(--color-accent)]" />
            <div className="flex flex-wrap gap-3">
              {data.socialLinks.map((link) => {
                const Icon = socialIcons[link.icon as keyof typeof socialIcons];
                return (
                  <a key={link.id} href={link.url} aria-label={link.ariaLabel} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-white)] text-sm transition hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-primary-deep)]">
                    {Icon && <Icon />}
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-bold">{data.contactTitle}</h3>
            <div className="mb-5 h-1 w-12 bg-[var(--color-accent)]" />
            <div className="space-y-4 text-sm text-[var(--color-white)]/85">
              <a href={`tel:${data.contactInfo.phone.replace(/[^+\d]/g, '')}`} className="flex items-center gap-3 hover:text-[var(--color-accent)]"><FaPhoneAlt />{data.contactInfo.phone}</a>
              <a href={`mailto:${data.contactInfo.email}`} className="flex items-center gap-3 break-all hover:text-[var(--color-accent)]"><FaEnvelope />{data.contactInfo.email}</a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-bold">{data.locationTitle}</h3>
            <div className="mb-5 h-1 w-12 bg-[var(--color-accent)]" />
            <p className="flex items-start gap-3 text-sm leading-6 text-[var(--color-white)]/85"><FaMapMarkerAlt className="mt-1 shrink-0" />{data.contactInfo.address}</p>
          </div>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 border-b border-[var(--color-white)]/70 py-7 text-sm" aria-label="Footer navigation">
          {data.quickLinks.map((link) => <Link key={link.id} href={link.url} className="hover:text-[var(--color-accent)]">{link.label}</Link>)}
        </nav>
        <p className="pt-7 text-center text-sm text-[var(--color-white)]/80">{data.copyrightText}</p>
      </div>
    </footer>
  );
};
