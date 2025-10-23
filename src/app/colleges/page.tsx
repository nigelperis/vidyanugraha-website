import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle,
  Mail,
  MapPin,
  Users,
} from 'lucide-react';
import Image from 'next/image';

const partnerColleges = [
  {
    name: 'Vidyabhavan Pre-University College',
    location: 'Jamkhandi, Karnataka',
    focus:
      'Comprehensive coaching for CET, NEET, JEE, and NDA exams with experienced faculty from Mangaluru and Udupi. Offers holistic education with soft-skill training, yoga, meditation, and counselling sessions.',
    image: '/images/banner/college_building.webp',
    faculty: [
      {
        role: 'Biology (CET & NEET)',
        designation: 'Principal',
        name: 'Dr. Laveena K B',
        location: 'Mangaluru',
        image: '/images/faculty/dr.laveena_k_b.jpg',
      },
      {
        role: 'Physics (CET & JEE)',
        name: 'Mr. Vinayaka Y J',
        location: 'Udupi',
        image: '/images/faculty/vinayaka_y_j.jpg',
      },
      {
        role: 'Chemistry (CET & JEE)',
        name: 'Ms. Abhijna A',
        location: 'Mangaluru',
        image: '/images/faculty/abhijna_A.jpg',
      },
      {
        role: 'Mathematics (CET & JEE)',
        name: 'Ms. Deepali',
        location: 'Mangaluru',
        image: '/images/faculty/deepali.jpg',
      },
      {
        role: 'Biology (CET & NEET)',
        name: 'Dr. Deepak Naik',
        location: 'Mangaluru',
        image: '/images/faculty/dr.deepak_naik.jpg',
      },
      {
        role: 'Computer Science (CET & JEE)',
        name: 'Ms. Sujatha S',
        location: 'Mangaluru',
        image: '/images/faculty/sujatha_s.jpg',
      },
      {
        role: 'Coaching In-charge (CET, NEET & JEE)',
        name: 'Dr. Shivanand Shendre',
        location: 'Mangaluru',
        image: '/images/faculty/dr.shivanand_shendre.jpg',
      },
    ],
    services: [
      '60-day bridge course for NEET, CET, JEE, and NDA exams',
      "Soft-skill training with a special focus on students' holistic growth",
      'Emphasis on fundamental concepts and weekly assessments',
      'Includes yoga, meditation, and counselling sessions',
      'A blend of conventional and digital teaching methods',
    ],
  },
];



export default function CollegesPage() {
  return (
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

                  {/* Faculty Section - Full Width */}
                  {college.faculty.length > 0 && (
                    <div className="space-y-4">
                      <h4 className="flex items-center gap-2 text-lg font-semibold text-[var(--color-muted)]">
                        <Users className="h-5 w-5" />
                        Faculty
                      </h4>
                      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                        {college.faculty.map((member) => (
                          <div
                            key={`${member.name}-${member.role}`}
                            className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm transition-shadow hover:shadow-md"
                          >
                            <div className="relative">
                              {member.designation?.toLowerCase().includes('principal') ? (
                                <div className="absolute -top-1 -right-1 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-blue-600 px-2 py-0.5 text-xs font-semibold text-white">
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
                                ) : null}
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

                  {/* Services Section - Full Width */}
                  {college.services.length > 0 && (
                    <div className="space-y-4">
                      <h4 className="flex items-center gap-2 text-lg font-semibold text-[var(--color-muted)]">
                        <Award className="h-5 w-5" />
                        Services
                      </h4>
                      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                        {college.services.map((service) => (
                          <div key={service} className="flex items-start gap-3">
                            <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                            <span className="text-sm leading-relaxed text-slate-600">
                              {service}
                            </span>
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
      </section >



      {/* CTA Section */}
      < section className="bg-gradient-to-r from-[var(--color-primary)] via-blue-800 to-blue-900 text-white" >
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

            <div className="flex items-center justify-center gap-8 pt-8 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Custom solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Quick deployment</span>
              </div>
            </div>
          </div>
        </div>
      </section >
    </div >
  );
}
