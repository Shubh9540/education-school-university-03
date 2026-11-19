import rawData from '@/data/templates.json';
import { EducationSchoolUniversityTemplateData } from '@/types/templates.types';
import { Hero } from '@/components/sections/Hero';
import { AboutUs } from '@/components/sections/AboutUs';
import { Programs } from '@/components/sections/Programs';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { CampusLife } from '@/components/sections/CampusLife';
import { Testimonials } from '@/components/sections/Testimonials';
import { Faq } from '@/components/sections/Faq';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  const data = rawData as EducationSchoolUniversityTemplateData;
  const sections = data.categories.EducationSchoolUniversity.sections;

  return (
    <main className="flex min-h-screen w-full min-w-0 flex-col overflow-x-hidden bg-[var(--color-bg-main)]">
      <Hero data={sections.Hero.variants.EducationSchoolUniversityHero2} />
      <AboutUs data={sections.AboutUs.variants.EducationSchoolUniversityAboutUs2} />
      <Programs data={sections.Programs.variants.EducationSchoolUniversityPrograms2} />
      <WhyChooseUs data={sections.WhyChooseUs.variants.EducationSchoolUniversityWhyChooseUs2} />
      <CampusLife data={sections.CampusLife.variants.EducationSchoolUniversityCampusLife2} />
      <Testimonials data={sections.Testimonials.variants.EducationSchoolUniversityTestimonials2} />
      <Faq data={sections.Faq.variants.EducationSchoolUniversityFaq2} />
      <Contact data={sections.Contact.variants.EducationSchoolUniversityContact2} />
    </main>
  );
}
