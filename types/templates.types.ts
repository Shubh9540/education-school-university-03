export interface LinkItem {
  id: string;
  label: string;
  url: string;
}

export interface HeaderData {
  logo: string;
  logoAlt: string;
  navLinks: LinkItem[];
  contactButton: LinkItem;
  openMenuLabel: string;
  closeMenuLabel: string;
}

export interface HeaderProps { data?: HeaderData }

export interface HeroData {
  eyebrow: string;
  titleStart: string;
  titleEnd: string;
  description: string;
  videoBadge: string;
  playLabel: string;
  studentImage: string;
  studentImageAlt: string;
  campusImage: string;
  campusImageAlt: string;
}

export interface HeroProps { data?: HeroData }

export interface AboutStat {
  id: string;
  icon: string;
  value: number;
  suffix: string;
  label: string;
}

export interface AboutUsData {
  eyebrow: string;
  titleStart: string;
  titleMiddle: string;
  titleAccent: string;
  description: string;
  ratingValue: string;
  ratingLabel: string;
  recognition: string;
  imageMain: string;
  imageMainAlt: string;
  imageDetail: string;
  imageDetailAlt: string;
  counterDuration: number;
  stats: AboutStat[];
}

export interface AboutUsProps { data?: AboutUsData }

export interface ProgramItem {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  url: string;
}

export interface ProgramsData {
  eyebrow: string;
  titleStart: string;
  titleEnd: string;
  subtitle: string;
  programs: ProgramItem[];
}

export interface ProgramsProps { data?: ProgramsData }

export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseUsData {
  eyebrow: string;
  titleStart: string;
  titleMiddle: string;
  titleEnd: string;
  watermarkImage: string;
  watermarkImageAlt: string;
  features: FeatureItem[];
}

export interface WhyChooseUsProps { data?: WhyChooseUsData }

export interface CampusLifeData {
  eyebrow: string;
  titleStart: string;
  titleEnd: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  playLabel: string;
  videoUrl: string;
  modalTitle: string;
  closeLabel: string;
}

export interface CampusLifeProps { data?: CampusLifeData }

export interface TestimonialItem {
  id: string;
  name: string;
  degree: string;
  quote: string;
  rating: number;
  image: string;
  imageAlt: string;
}

export interface TestimonialsData {
  eyebrow: string;
  titleStart: string;
  titleEnd: string;
  subtitle: string;
  previousLabel: string;
  nextLabel: string;
  autoPlayInterval: number;
  items: TestimonialItem[];
}

export interface TestimonialsProps { data?: TestimonialsData }

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqData {
  eyebrow: string;
  titleStart: string;
  titleAccent: string;
  titleEnd: string;
  faqItems: FaqItem[];
}

export interface FaqProps { data?: FaqData }

export interface FormField {
  id: string;
  label: string;
  placeholder: string;
  type: string;
}

export interface ContactData {
  eyebrow: string;
  titleStart: string;
  titleEnd: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  fields: FormField[];
  subjectLabel: string;
  subjectPlaceholder: string;
  subjectOptions: string[];
  messageLabel: string;
  messagePlaceholder: string;
  submitText: string;
}

export interface ContactProps { data?: ContactData }

export interface SocialLink extends LinkItem { icon: string; ariaLabel: string }

export interface FooterData {
  logo: string;
  logoAlt: string;
  followTitle: string;
  contactTitle: string;
  locationTitle: string;
  copyrightText: string;
  quickLinks: LinkItem[];
  socialLinks: SocialLink[];
  contactInfo: {
    address: string;
    phone: string;
    email: string;
  };
}

export interface FooterProps { data?: FooterData }

export interface SiteTheme {
  fontFamily: string;
}

export interface EducationSections {
  Header: { variants: { EducationSchoolUniversityHeader2: HeaderData } };
  Hero: { variants: { EducationSchoolUniversityHero2: HeroData } };
  AboutUs: { variants: { EducationSchoolUniversityAboutUs2: AboutUsData } };
  Programs: { variants: { EducationSchoolUniversityPrograms2: ProgramsData } };
  WhyChooseUs: { variants: { EducationSchoolUniversityWhyChooseUs2: WhyChooseUsData } };
  CampusLife: { variants: { EducationSchoolUniversityCampusLife2: CampusLifeData } };
  Testimonials: { variants: { EducationSchoolUniversityTestimonials2: TestimonialsData } };
  Faq: { variants: { EducationSchoolUniversityFaq2: FaqData } };
  Contact: { variants: { EducationSchoolUniversityContact2: ContactData } };
}

export interface EducationSchoolUniversityTemplateData {
  common: {
    theme: SiteTheme;
    Footer: FooterData;
  };
  categories: {
    EducationSchoolUniversity: {
      sections: EducationSections;
    };
  };
  pages: {
    home: {
      components: string[];
    };
  };
}
