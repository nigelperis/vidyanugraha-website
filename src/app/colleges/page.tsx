import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle,
  Mail,
  MapPin,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partner Colleges | Vidyanugraha Trust',
  description:
    'Explore the colleges and universities that collaborate with Vidyanugraha Trust to deliver quality teaching.',
};

const partnerColleges = [
  {
    name: 'Sri Venkateswara College of Engineering',
    location: 'Bangalore, Karnataka',
    focus:
      'Mechanical and electrical engineering departments supported with core subject lecturers and lab faculty.',
  },
  {
    name: 'Akshara Institute of Management Studies',
    location: 'Hyderabad, Telangana',
    focus:
      'MBA, BBA, and commerce programs enhanced with industry-connected faculty and soft-skills mentors.',
  },
  {
    name: 'St. Mary’s College of Sciences',
    location: 'Chennai, Tamil Nadu',
    focus:
      'Science foundation courses strengthened with experienced professors and continuous faculty training.',
  },
  {
    name: 'Navachetana Group of Institutions',
    location: 'Hubli, Karnataka',
    focus:
      'Multi-disciplinary college receiving end-to-end staffing for diploma and undergraduate programs.',
  },
  {
    name: 'Shantiniketan Women’s College',
    location: 'Mysuru, Karnataka',
    focus:
      'Arts and humanities faculty curated to encourage inclusive classrooms and leadership among students.',
  },
];

const partnershipPillars = [
  {
    icon: Users,
    title: 'Right-fit recruitment',
    description:
      'We screen educators for subject mastery, commitment, and alignment with institutional culture before deployment.',
    features: [
      'Cultural alignment',
      'Subject expertise',
      'Commitment assessment',
    ],
  },
  {
    icon: Target,
    title: 'Onboarding & orientation',
    description:
      'Faculty members receive contextual onboarding so they understand academic calendars, evaluation systems, and student expectations.',
    features: [
      'Structured onboarding',
      'System training',
      'Expectation setting',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Continuous mentoring',
    description:
      'Regular classroom observations and feedback sessions help educators refine delivery and adopt new pedagogies.',
    features: ['Regular feedback', 'Skill development', 'Performance tracking'],
  },
  {
    icon: Sparkles,
    title: 'Responsive support',
    description:
      'Dedicated relationship managers ensure any staffing adjustments or escalations are handled swiftly.',
    features: ['24/7 support', 'Quick resolution', 'Proactive management'],
  },
];

export default function CollegesPage() {
  return (
    <div className="space-y-0 overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--color-primary)] via-blue-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-[url('/images/banner/background.png')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>

        <div className="relative container py-32">
          <div className="animate-in slide-in-from-left mx-auto max-w-4xl space-y-8 text-center duration-1000">
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

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90">
              Our collaborations span engineering, management, and arts colleges
              across South India. Every partnership is built on shared values of
              quality, continuity, and student success.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="mailto:hello@vidyanugraha.com"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-orange-500 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-orange-500/25 transition-all hover:scale-105 hover:shadow-orange-500/40"
              >
                <Mail className="h-4 w-4" />
                Partner with us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Colleges Section */}
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="container space-y-16 py-10">
          <div className="space-y-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-[var(--color-primary)]">
              <Award className="h-4 w-4" />
              <span>Our Partners</span>
            </div>

            <h2 className="mx-auto max-w-4xl text-4xl font-bold text-[var(--color-muted)] sm:text-5xl">
              Institutions we're proud to support
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600">
              From engineering to management and arts, we've built lasting
              partnerships with institutions that share our commitment to
              educational excellence.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {partnerColleges.map((college, index) => (
              <div
                key={college.name}
                className="group relative overflow-hidden border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-300/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>

                <div className="relative space-y-6">
                  <div className="flex h-16 w-16 items-center justify-center bg-gradient-to-br from-[var(--color-primary)] to-blue-600 text-white shadow-lg">
                    <Building2 className="h-8 w-8" />
                  </div>

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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Pillars Section */}
      <section className="bg-white">
        <div className="container grid gap-16 py-10 md:grid-cols-[1fr,1fr] md:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-[var(--color-accent)]">
              <Target className="h-4 w-4" />
              <span>Partnership Pillars</span>
            </div>

            <h2 className="text-4xl font-bold text-[var(--color-muted)] sm:text-5xl">
              What colleges value in Vidyanugraha
            </h2>

            <p className="text-lg leading-relaxed text-slate-600">
              Beyond filling vacancies, we invest in building resilient academic
              teams that stay engaged with your students through every semester.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-blue-600"
                  ></div>
                ))}
              </div>
              <span className="text-sm text-slate-600">
                Trusted by 30+ institutions
              </span>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {partnershipPillars.map((item, index) => (
              <div
                key={item.title}
                className="group relative overflow-hidden border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-6 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-300/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>

                <div className="relative space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center bg-gradient-to-br from-[var(--color-primary)] to-blue-600 text-white shadow-lg">
                    <item.icon className="h-6 w-6" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[var(--color-muted)]">
                      {item.title}
                    </h3>
                    <p className="leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-slate-600">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
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

            <h2 className="text-4xl leading-tight font-bold sm:text-5xl">
              Looking to onboard faculty for the
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                {' '}
                next academic cycle?
              </span>
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90">
              Share your upcoming requirements with Vidyanugraha Trust. We will
              co-create a deployment plan that keeps your classrooms active and
              aligned with your syllabus timelines.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="mailto:hello@vidyanugraha.com"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-orange-500/25 transition-all hover:scale-105 hover:shadow-orange-500/40"
              >
                <Mail className="h-5 w-5" />
                Schedule a partnership call
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
      </section>
    </div>
  );
}
