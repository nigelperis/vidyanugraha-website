import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle,
  Mail,
  MapPin,
  Users,
  Phone,
} from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';
import StructuredData from '~/app/components/StructuredData';
import { breadcrumbSchema } from '~/lib/schema';
import { BASE_URL } from '~/constants/config';

export const metadata: Metadata = {
  title: 'Partner Colleges - Vidyanugraha Education Trust',
  description: 'Discover our partner colleges and institutions that trust Vidyanugraha Education Trust for faculty recruitment and management services.',
  alternates: {
    canonical: `${BASE_URL}colleges`,
  },
  openGraph: {
    title: 'Partner Colleges - Vidyanugraha Education Trust',
    description: 'Discover our partner colleges and institutions that trust Vidyanugraha Education Trust for faculty recruitment and management services.',
    url: `${BASE_URL}colleges`,
    siteName: 'Vidyanugraha Education Trust',
    type: 'website',
    locale: 'en_IN',
  },
};

const partnerColleges = [
  {
    name: 'Vidyabhavan PU College, Jamakhandi',
    location: 'Jamakhandi, Karnataka',
    focus:
      'At Vidyabhavan PU College, education is not only about academics — it\'s about building character, nurturing curiosity, and preparing students for life beyond the classroom. Our dedicated faculty create a supportive and motivating environment, focusing on critical thinking, creativity, and ethical values.',
    image: '/images/banner/college_building.webp',
    principal: {
      name: 'Dr. Laveena',
      message: 'Every student is unique, and our goal is to help them realize their full potential.',
      image: '/images/faculty/dr.laveena_k_b.jpg',
    },
    courses: [
      {
        stream: 'Science Stream',
        combinations: [
          'PCMB (Physics, Chemistry, Mathematics, Biology)',
          'PCMC (Physics, Chemistry, Mathematics, Computer Science)'
        ],
        preparation: 'Designed to prepare students for NEET, JEE, KCET, and NDA Foundation'
      }
    ],
    facilities: [
      'Spacious, ventilated classrooms',
      'Well-equipped science and computer laboratories',
      'Library with updated reference materials',
      'Smart classrooms and digital learning tools',
      'Separate hostels for boys and girls',
      'Safe transport facilities',
      'Personality development and mentoring programs',
      'Regular parent-teacher interactions'
    ],
    facultyList: [
      {
        name: 'Dr. Laveena K B',
        role: 'Principal & Biology (CET & NEET)',
        location: 'Mangaluru',
        image: '/images/faculty/dr.laveena_k_b.jpg',
        designation: 'Principal'
      },
      {
        name: 'Mr. Vinayaka Y J',
        role: 'Physics (CET & JEE)',
        location: 'Udupi',
        image: '/images/faculty/vinayaka_y_j.jpg'
      },
      {
        name: 'Ms. Abhijna A',
        role: 'Chemistry (CET & JEE)',
        location: 'Mangaluru',
        image: '/images/faculty/abhijna_A.jpg'
      },
      {
        name: 'Ms. Deepali',
        role: 'Mathematics (CET & JEE)',
        location: 'Mangaluru',
        image: '/images/faculty/deepali.jpg'
      },
      {
        name: 'Dr. Deepak Naik',
        role: 'Biology (CET & NEET)',
        location: 'Mangaluru',
        image: '/images/faculty/dr.deepak_naik.jpg'
      },
      {
        name: 'Ms. Sujatha S',
        role: 'Computer Science (CET & JEE)',
        location: 'Mangaluru',
        image: '/images/faculty/sujatha_s.jpg'
      },
      {
        name: 'Dr. Shivanand Shendre',
        role: 'Coaching In-charge (CET, NEET & JEE)',
        location: 'Mangaluru',
        image: '/images/faculty/dr.shivanand_shendre.jpg'
      }
    ],
    faculty: [
      {
        name: 'Adarsh Hegde',
        contact: '+91 8548088424',
        email: 'Vidyanugraha.edu@gmail.com'
      },
      {
        name: 'Jeevan',
        contact: '+91 6868663423',
        email: 'Vidyanugraha.edu@gmail.com'
      }
    ]
  },
];



export default function CollegesPage() {
  const collegesBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Partner Colleges', url: `${BASE_URL}colleges` },
  ]);

  // Create structured data for partner colleges
  const collegesSchema = partnerColleges.map((college) => ({
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': `${BASE_URL}colleges#${college.name.toLowerCase().replace(/\s+/g, '-')}`,
    name: college.name,
    description: college.focus,
    address: {
      '@type': 'PostalAddress',
      addressLocality: college.location.split(',')[0],
      addressRegion: college.location.split(',')[1]?.trim(),
      addressCountry: 'IN',
    },
    image: `${BASE_URL}${college.image.substring(1)}`,
    employee: college.facultyList?.map((member) => ({
      '@type': 'Person',
      name: member.name,
      jobTitle: member.role,
      worksFor: {
        '@type': 'EducationalOrganization',
        name: college.name,
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: member.location,
        addressRegion: 'Karnataka',
        addressCountry: 'IN',
      },
      ...(member.image && { image: `${BASE_URL}${member.image.substring(1)}` }),
    })) || [],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${college.name} Facilities`,
      itemListElement: college.facilities.map((facility, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'Service',
          name: facility,
        },
      })),
    },
    knowsAbout: ['NEET Coaching', 'JEE Coaching', 'KCET Coaching', 'NDA Preparation'],
  }));

  const collegesPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${BASE_URL}colleges#webpage`,
    url: `${BASE_URL}colleges`,
    name: 'Partner Colleges - Vidyanugraha Education Trust',
    description: 'Discover our partner colleges and institutions that trust Vidyanugraha Education Trust for faculty recruitment and management services.',
    isPartOf: {
      '@id': `${BASE_URL}#website`,
    },
    mainEntity: collegesSchema,
  };

  return (
    <>
      <StructuredData data={[collegesPageSchema, ...collegesSchema, collegesBreadcrumb]} />
      <div className="space-y-0 overflow-hidden">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[var(--color-primary)] via-blue-800 to-blue-900 text-white">
          <div className="absolute inset-0 bg-[url('/images/banner/college_building.webp')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

          <div className="relative max-w-4xl container grid gap-12 py-12 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div className="animate-in slide-in-from-left space-y-8 duration-1000">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <Building2 className="h-4 w-4" />
                <span className="tracking-wider uppercase">Partner Colleges</span>
              </div>

              <h1 className="text-5xl leading-tight font-bold tracking-tight text-blue-100 sm:text-6xl md:text-7xl">
                Trusted by institutions committed to
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  {' '}
                  academic excellence
                </span>
              </h1>

              <p className="max-w-7xl text-lg leading-relaxed text-white/90">
                Our collaborations span engineering, management, and arts colleges
                across South India. Every partnership is built on shared values of
                quality, continuity, and student success.
              </p>
            </div>
          </div>
        </section>

        {/* Partner Colleges Section */}
        <section className="bg-gradient-to-b from-white to-slate-50">
          <div className="container space-y-16 py-10">
            <div className="space-y-6 text-center">
              <h2 className="mx-auto max-w-4xl text-4xl font-bold text-[var(--color-muted)] sm:text-5xl">
                Institutions we&apos;re proud to support
              </h2>

              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600">
                From engineering to management and arts, we&apos;ve built lasting
                partnerships with institutions that share our commitment to
                educational excellence.
              </p>
            </div>

            <div className="grid gap-8">
              {partnerColleges.map((college, _index) => (
                <div
                  key={college.name}
                  className="group relative overflow-hidden border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-300/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                  <div className="relative space-y-8">
                    {/* College Info Section */}
                    <div className="grid gap-8 md:grid-cols-2 md:items-center">
                      {/* Left Column - Text Content */}
                      <div className="space-y-6 order-2 md:order-1">
                        <div className="space-y-3">
                          <h3 className="text-2xl font-bold text-[var(--color-muted)]">
                            {college.name}
                          </h3>
                          <div className="flex items-center gap-2 text-[var(--color-primary)]">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm font-semibold">
                              {college.location}
                            </span>
                          </div>
                        </div>

                        <p className="leading-relaxed text-slate-600">
                          {college.focus}
                        </p>
                      </div>

                      {/* Right Column - Image */}
                      <div className="order-1 md:order-2">
                        {college.image ? (
                          <div className="relative h-64 w-full overflow-hidden rounded-lg">
                            <Image
                              src={college.image}
                              alt={college.name}
                              fill
                              className="object-cover transition-transform group-hover:scale-105"
                            />
                          </div>
                        ) : (
                          <div className="flex h-64 w-full items-center justify-center bg-gradient-to-br from-[var(--color-primary)] to-blue-600 text-white shadow-lg rounded-lg">
                            <Building2 className="h-16 w-16" />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Principal's Message Section */}
                    {college.principal && (
                      <div className="space-y-4">
                        <h4 className="flex items-center gap-2 text-lg font-semibold text-[var(--color-muted)]">
                          <Users className="h-5 w-5" />
                          Message from the Principal
                        </h4>
                        <div className="p-6">
                          <div className="flex flex-col md:flex-row gap-6 items-start">
                            {college.principal.image && (
                              <div className="relative h-24 w-24 flex-shrink-0 mx-auto md:mx-0">
                                <Image
                                  src={college.principal.image}
                                  alt={college.principal.name}
                                  fill
                                  className="rounded-full object-cover"
                                />
                              </div>
                            )}
                            <div className="space-y-3 text-center md:text-left">
                              <p className="italic text-[var(--color-primary)] font-medium">
                                "{college.principal.message}"
                              </p>
                              <div>
                                <p className="font-semibold text-slate-700">
                                  {college.principal.name}
                                </p>
                                <p className="text-sm text-slate-500">
                                  Principal, {college.name}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Courses Section */}
                    {college.courses && college.courses.length > 0 && (
                      <div className="space-y-4">
                        <h4 className="flex items-center gap-2 text-lg font-semibold text-[var(--color-muted)]">
                          <Award className="h-5 w-5" />
                          Courses Offered
                        </h4>
                        <div className="space-y-4">
                          {college.courses.map((course, index) => (
                            <div key={index} className="p-4">
                              <h5 className="font-semibold text-[var(--color-muted)] mb-2">
                                {course.stream}
                              </h5>
                              <div className="space-y-2">
                                {course.combinations.map((combination) => (
                                  <div key={combination} className="flex items-start gap-3">
                                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                                    <span className="text-sm text-slate-600">
                                      {combination}
                                    </span>
                                  </div>
                                ))}
                                <p className="text-sm text-[var(--color-primary)] font-medium mt-2">
                                  {course.preparation}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Facilities Section */}
                    {college.facilities && college.facilities.length > 0 && (
                      <div className="space-y-4">
                        <h4 className="flex items-center gap-2 text-lg font-semibold text-[var(--color-muted)]">
                          <Award className="h-5 w-5" />
                          Facilities
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {college.facilities.map((facility) => (
                            <div key={facility} className="flex items-start gap-3">
                              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                              <span className="text-sm leading-relaxed text-slate-600">
                                {facility}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Faculty List Section */}
                    {college.facultyList && college.facultyList.length > 0 && (
                      <div className="space-y-4">
                        <h4 className="flex items-center gap-2 text-lg font-semibold text-[var(--color-muted)]">
                          <Users className="h-5 w-5" />
                          Faculty
                        </h4>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                          {college.facultyList.map((member) => (
                            <div
                              key={`${member.name}-${member.role}`}
                              className="border border-slate-200 bg-white p-4"
                            >
                              <div className="relative">
                                {member.designation?.toLowerCase().includes('principal') ? (
                                  <div className="absolute -top-2 -right-2 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-blue-600 px-2 py-0.5 text-xs font-semibold text-white">
                                    Principal
                                  </div>
                                ) : null}
                                <div className="flex items-center gap-3">
                                  {member.image ? (
                                    <div className="relative h-16 w-16 flex-shrink-0">
                                      <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="rounded-full object-cover"
                                      />
                                    </div>
                                  ) : (
                                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-blue-600 text-white">
                                      <Users className="h-8 w-8" />
                                    </div>
                                  )}
                                  <div className="space-y-1">
                                    <p className="font-medium text-slate-700 text-sm">
                                      {member.name}
                                    </p>
                                    <p className="text-xs leading-tight font-semibold text-[var(--color-muted)]">
                                      {member.role}
                                    </p>
                                    <div className="flex items-center gap-1 text-xs text-slate-500">
                                      <MapPin className="h-3 w-3" />
                                      {member.location}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Contact Faculty Section */}
                    {college.faculty && college.faculty.length > 0 && (
                      <div className="space-y-4">
                        <h4 className="flex items-center gap-2 text-lg font-semibold text-[var(--color-muted)]">
                          <Mail className="h-5 w-5" />
                          Contact
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {college.faculty.map((member, index) => (
                            <div
                              key={index}
                              className="p-4"
                            >
                              <div className="space-y-2">
                                <p className="font-semibold text-lg text-slate-700">
                                  {member.name}
                                </p>
                                <div className="flex items-center gap-1 text-sm text-slate-600">
                                  <Phone className="h-3 w-3" /><p>{member.contact}</p>
                                </div>
                                <div className="flex items-center gap-1 text-sm text-slate-600">
                                  <Mail className="h-3 w-3" /><p>{member.email}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}


                  </div>
                </div>
              ))}
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
                  Ready to partner?
                </span>
              </div>

              <h2 className="text-4xl leading-tight font-bold text-blue-100 sm:text-5xl">
                Looking to onboard faculty for the
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  {' '}
                  next academic cycle?
                </span>
              </h2>

              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90">
                Share your upcoming requirements with Vidyanugraha Education
                Trust. We will co-create a deployment plan that keeps your
                classrooms active and aligned with your syllabus timelines.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-orange-500/25 transition-all hover:scale-105 hover:shadow-orange-500/40"
                >
                  <Mail className="h-5 w-5" />
                  Schedule Call
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
