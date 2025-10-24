import {
  BookOpen,
  CheckCircle,
  Mail,
  Target,
  Users,
} from 'lucide-react';
import type { Metadata } from 'next';
import StructuredData from '~/app/components/StructuredData';
import { breadcrumbSchema } from '~/lib/schema';
import { BASE_URL } from '~/constants/config';

export const metadata: Metadata = {
  title: 'About Us - Vidyanugraha Education Trust',
  description: 'Learn about Vidyanugraha Education Trust, founded with the mission to transform education through creativity and quality. Empowering minds, enriching futures.',
  alternates: {
    canonical: `${BASE_URL}about`,
  },
  openGraph: {
    title: 'About Us - Vidyanugraha Education Trust',
    description: 'Learn about Vidyanugraha Education Trust, founded with the mission to transform education through creativity and quality.',
    url: `${BASE_URL}about`,
    siteName: 'Vidyanugraha Education Trust',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function AboutPage() {
  const aboutBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'About Us', url: `${BASE_URL}about` },
  ]);

  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${BASE_URL}about#webpage`,
    url: `${BASE_URL}about`,
    name: 'About Us - Vidyanugraha Education Trust',
    description: 'Learn about Vidyanugraha Education Trust, founded with the mission to transform education through creativity and quality.',
    isPartOf: {
      '@id': `${BASE_URL}#website`,
    },
    about: {
      '@id': `${BASE_URL}#organization`,
    },
    mainEntity: {
      '@id': `${BASE_URL}#organization`,
    },
  };

  return (
    <>
      <StructuredData data={[aboutPageSchema, aboutBreadcrumb]} />
      <div className="space-y-0 overflow-hidden">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[var(--color-primary)] via-blue-800 to-blue-900 text-white">
          <div className="absolute inset-0 bg-[url('/images/banner/college_building.webp')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

          <div className="relative max-w-4xl container grid gap-12 py-12 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div className="animate-in slide-in-from-left space-y-8 duration-1000">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <Users className="h-4 w-4" />
                <span className="tracking-wider uppercase">About Us</span>
              </div>

              <h1 className="text-5xl leading-tight font-bold tracking-tight text-blue-100 sm:text-6xl md:text-7xl">
                About
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  {' '}
                  Vidyanugraha Education Trust
                </span>
              </h1>

              <p className="max-w-7xl text-lg leading-relaxed text-white/90">
                Vidyanugraha Education Trust, Moodbidri, — it is a beacon of opportunity and excellence. We believe that every student deserves access to quality education. Here, learning is interactive, innovative, and inspiring.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="bg-gradient-to-b from-slate-50 to-white">
          <div className="container space-y-12">
            <div className="space-y-6 text-center">

              <h2 className="mx-auto max-w-4xl text-4xl font-bold text-[var(--color-muted)] sm:text-5xl">
                Empowering Minds, Enriching Futures
              </h2>
            </div>

            <div className="mx-auto max-w-7xl">
              <div className="group relative overflow-hidden border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 transition-all duration-300 md:p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-blue-50/30 opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative space-y-8">
                  <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:text-left">
                    <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center bg-gradient-to-br from-[var(--color-primary)] to-blue-600 text-white shadow-lg">
                      <BookOpen className="h-10 w-10" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-[var(--color-muted)]">
                        The Blessing of Knowledge
                      </h3>
                      <p className="text-sm font-semibold tracking-wider text-[var(--color-primary)] uppercase">
                        &quot;Foundational education with a human touch&quot;
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6 text-justify text-lg leading-relaxed text-slate-700">
                    <p>
                      Our faculty, drawn from Dakshina Kannada and Udupi districts, are not only educators but mentors who guide students academically, emotionally, and ethically. We focus on developing the head, heart, and hand — intellect, character, and action.
                    </p>

                    <p>
                      Beyond academics, students gain leadership, teamwork, and social responsibility skills. Vidyanugraha Education Trust, Moodbidri is where dreams are nurtured, talents are polished, and futures are built.
                    </p>

                    <p className="font-semibold text-[var(--color-primary)]">
                      Our Vision: To be a center of excellence in pre-university education, nurturing competent, confident, and compassionate individuals ready to lead with integrity and purpose.
                    </p>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-[var(--color-primary)] mb-3">🕊️ Our Mission:</h4>
                      <ul className="space-y-2 text-slate-700">
                        <li>• Deliver quality education through dedicated faculty</li>
                        <li>• Promote all-round development and creativity</li>
                        <li>• Foster discipline, ethics, and social responsibility</li>
                        <li>• Prepare students for higher education and professional success</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-[var(--color-primary)] mb-3">🌱 Why Choose Vidyanugraha?</h4>
                      <ul className="space-y-2 text-slate-700">
                        <li>• Qualified faculty from DK and Udupi</li>
                        <li>• Personalized attention for every student</li>
                        <li>• Strong academic and value-based education</li>
                        <li>• Focused competitive exam preparation</li>
                        <li>• Affordable fees with excellent outcomes</li>
                        <li>• Stress-free learning environment</li>
                        <li>• Continuous mentoring and motivation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chairman's Message Section */}
        <section className="bg-white">
          <div className="container space-y-12">
            <div className="space-y-6 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-[var(--color-primary)]">
                <Users className="h-4 w-4" />
                <span>Leadership</span>
              </div>

              <h2 className="mx-auto max-w-4xl text-4xl font-bold text-[var(--color-muted)] sm:text-5xl">
                Chairman&lsquo;s Message
              </h2>
            </div>

            <div className="mx-auto max-w-7xl">
              <div className="group relative overflow-hidden border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-xl shadow-slate-200/50 transition-all duration-300 md:p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-orange-50/30 opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex flex-col gap-8 md:flex-row md:items-start">
                    {/* Chairman's Photo */}
                    <div className="flex-shrink-0 w-64 mx-auto md:mx-0 md:w-80">
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white h-80 md:h-96 w-full">
                        <img
                          src="/images/trustees/adarsh_hegde.jpg"
                          alt="Adarsh Hegde"
                          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                      </div>

                      <div className="mt-6 text-center w-full">
                        <h3 className="text-2xl font-bold text-[var(--color-muted)]">
                          – Prof. Adarsh Hegde
                        </h3>
                        <p className="text-sm font-semibold tracking-wider text-[var(--color-primary)] uppercase">
                          Chairman, Vidyanugraha Education Trust
                        </p>
                      </div>
                    </div>

                    {/* Message Content */}
                    <div className="flex-1 space-y-6 text-justify text-lg leading-relaxed text-slate-700">
                      <p className="italic text-[var(--color-primary)] font-semibold">
                        "Education is the most powerful investment we can make — not just in careers, but in building character and shaping futures."
                      </p>

                      <p>
                        As the founder and chairman of Vidyanugraha Education Trust, Moodbidri, I am deeply committed to providing an environment where every student can thrive academically, socially, and personally. This trust was born from a dream: to bring the quality of education found in the best coastal Karnataka institutions to the students of Jamakhandi and surrounding areas.
                      </p>

                      <p>
                        Over my 14 years in academic Journey, I have seen the transformative power of guidance, mentorship, and opportunity. At Vidyanugraha Education Trust, we extend this philosophy to every student. Our team of highly qualified faculty from Dakshina Kannada and Udupi District brings expertise, dedication, and passion into every classroom.
                      </p>

                      <p>
                        We focus on holistic development, nurturing not just intellect, but character, values, and resilience. Our goal is to help students discover their strengths, overcome challenges, and achieve excellence in academics and life.
                      </p>

                      <p>
                        To parents, I assure you that your children are not just students here — they are part of a community that believes in care, guidance, and personal attention. We aim to cultivate confident leaders, compassionate citizens, and lifelong learners who can face the future with courage and pride.
                      </p>

                      <p className="font-semibold text-[var(--color-primary)]">
                        At Vidyanugraha, every lesson, every interaction, and every opportunity is designed to empower students to dream bigger, aim higher, and achieve more. Together, we are not just educating — we are shaping futures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[var(--color-primary)] via-blue-800 to-blue-900 text-white">
          <div className="container py-10">
            <div className="mx-auto max-w-4xl space-y-8 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <Mail className="h-4 w-4" />
                <span className="tracking-wider uppercase">
                  Let&apos;s collaborate
                </span>
              </div>

              <h2 className="text-4xl leading-tight font-bold text-blue-100 sm:text-5xl">
                Join the journey of
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  {' '}
                  transforming education
                </span>
              </h2>

              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90">
                Be part of our mission to empower students to dream, discover, and define their own success stories through quality education with a human touch.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href="mailto:vidyanugraha.edu@gmail.com"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-orange-500/25 transition-all hover:scale-105 hover:shadow-orange-500/40"
                >
                  <Mail className="h-5 w-5" />
                  Connect Now
                </a>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}