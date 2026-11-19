import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import rawData from '@/data/templates.json';
import { EducationSchoolUniversityTemplateData } from '@/types/templates.types';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'GlobalBridge University | Knowledge Meets Opportunity',
  description: 'Explore GlobalBridge University programs, campus life, admissions and student experiences.',
  icons: { icon: '/main logo/logo.webp' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const data = rawData as EducationSchoolUniversityTemplateData;
  const sections = data.categories.EducationSchoolUniversity.sections;
  const fontStyle = {
    '--font-site': data.common.theme.fontFamily,
  } as CSSProperties;

  return (
    <html lang="en">
      <body style={fontStyle}>
        <Header data={sections.Header.variants.EducationSchoolUniversityHeader2} />
        {children}
        <Footer data={data.common.Footer} />
      </body>
    </html>
  );
}
