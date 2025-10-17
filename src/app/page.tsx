import {
  ArrowRight,
  Award,
  CheckCircle,
  ExternalLink,
  Mail,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';
import Link from 'next/link';

import AnimatedCounter from './components/AnimatedCounter';
import FloatingCTA from './components/FloatingCTA';
import ScrollProgress from './components/ScrollProgress';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vidyanugraha Trust | Empowering Education',
  description:
    'Vidyanugraha Trust partners with colleges to provide qualified teaching faculty and continuous academic support.',
};

const highlights = [
  {
    icon: Users,
    title: 'Faculty Deployment',
    description:
      "Handpicked lecturers placed to match your institution's academic goals and timelines.",
    features: [
      'Subject matter experts',
      'Cultural fit assessment',
      'Quick onboarding',
    ],
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description:
      'Regular performance check-ins and mentoring ensure every class delivers value.',
    features: [
      'Continuous monitoring',
      'Performance metrics',
      'Student feedback loops',
    ],
  },
  {
    icon: Target,
    title: 'Tailored Partnerships',
    description:
      'We collaborate closely with management teams to design long-term, sustainable staffing plans.',
    features: ['Custom solutions', 'Scalable models', 'Long-term commitment'],
  },
];

const supportProcess = [
  {
    icon: Sparkles,
    title: 'Understand Requirements',
    description:
      'We listen to your course structure, staffing gaps, and academic priorities.',
  },
  {
    icon: TrendingUp,
    title: 'Deploy the Right Faculty',
    description:
      'Our network of subject experts connects you with passionate, classroom-ready educators.',
  },
  {
    icon: Shield,
    title: 'Sustain Excellence',
    description:
      'Periodic reviews, training touchpoints, and feedback loops keep your classrooms thriving.',
  },
];

const stats = [
  { value: '15+', label: 'Years shaping academic excellence' },
  { value: '30+', label: 'Partner colleges supported' },
  { value: '500+', label: 'Dedicated faculty onboarded' },
];

const testimonials = [
  {
    quote:
      'Vidyanugraha Trust transformed our faculty shortage into our greatest strength.',
    author: 'Dr. Priya Sharma',
    role: 'Principal, Engineering College',
    rating: 5,
  },
  {
    quote:
      'The quality of educators they provide is exceptional. Our students love them.',
    author: 'Prof. Rajesh Kumar',
    role: 'HOD, Computer Science',
    rating: 5,
  },
];

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <FloatingCTA />
      <div className="space-y-0 overflow-hidden">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[var(--color-primary)] via-blue-800 to-blue-900 text-white">
          <div className="absolute inset-0 bg-[url('/images/banner/background.png')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>

          <div className="relative container grid gap-12 py-12 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div className="animate-in slide-in-from-left space-y-8 duration-1000">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <Sparkles className="h-4 w-4" />
                <span className="tracking-wider uppercase">
                  Vidyanugraha Trust
                </span>
              </div>

              <h1 className="text-5xl leading-tight font-bold tracking-tight text-blue-100 sm:text-6xl md:text-7xl">
                Teaching talent that helps colleges
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  {' '}
                  deliver with confidence
                </span>
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-white/90">
                We collaborate with higher education institutions across India
                to meet immediate staffing needs, nurture faculty, and ensure
                every classroom is guided by an inspiring educator.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="mailto:hello@vidyanugraha.com"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-orange-500 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-orange-500/25 transition-all hover:scale-105 hover:shadow-orange-500/40"
                >
                  <Mail className="h-4 w-4" />
                  Start a conversation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/colleges"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20"
                >
                  Explore partnerships
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:scale-110" />
                </Link>
              </div>
            </div>

            <div className="animate-in slide-in-from-right delay-300 duration-1000">
              <div className="border border-white/20 bg-white/10 p-8 backdrop-blur-lg">
                <div className="mb-6 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-orange-400" />
                  <p className="text-sm font-semibold tracking-wider text-white/90 uppercase">
                    Impact Snapshot
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                  {stats.map((item, index) => (
                    <AnimatedCounter
                      key={item.label}
                      value={item.value}
                      label={item.label}
                      duration={2000 + index * 200}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gradient-to-b from-white to-slate-50">
          <div className="container space-y-16 py-10">
            <div className="space-y-6 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-[var(--color-primary)]">
                <Award className="h-4 w-4" />
                <span>Our Expertise</span>
              </div>

              <h2 className="mx-auto max-w-4xl text-4xl font-bold text-[var(--color-muted)] sm:text-5xl">
                Practical support for every academic department
              </h2>

              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600">
                From recruiting subject experts to mentoring them through the
                term cycle, Vidyanugraha Trust ensures continuity, commitment,
                and compassion in every teaching engagement.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-300/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>

                  <div className="relative space-y-6">
                    <div className="flex h-16 w-16 items-center justify-center bg-gradient-to-br from-[var(--color-primary)] to-blue-600 text-white shadow-lg">
                      <item.icon className="h-8 w-8" />
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-[var(--color-muted)]">
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

        {/* Process Section */}
        <section className="bg-white">
          <div className="container grid gap-16 py-10 md:grid-cols-[1fr,1fr] md:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-[var(--color-accent)]">
                <Target className="h-4 w-4" />
                <span>How We Work</span>
              </div>

              <h2 className="text-4xl font-bold text-[var(--color-muted)] sm:text-5xl">
                Partnership anchored in trust and accountability
              </h2>

              <p className="text-lg leading-relaxed text-slate-600">
                Every institution is different. We take time to understand your
                culture, curriculum, and expectations so that the faculty we
                deploy can add value from day one.
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

            <div className="space-y-6">
              {supportProcess.map((item, index) => (
                <div
                  key={item.title}
                  className="group flex gap-6 border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-6 shadow-sm transition-all hover:shadow-lg hover:shadow-slate-300/50"
                >
                  <div className="flex h-12 w-12 flex-none items-center justify-center bg-gradient-to-br from-[var(--color-primary)] to-blue-600 text-white shadow-lg">
                    <item.icon className="h-6 w-6" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-xs font-bold text-[var(--color-primary)]">
                        {index + 1}
                      </span>
                      <h3 className="text-xl font-bold text-[var(--color-muted)]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gradient-to-b from-slate-50 to-white">
          <div className="container py-10">
            <div className="mb-16 space-y-6 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
                <Users className="h-4 w-4" />
                <span>Success Stories</span>
              </div>

              <h2 className="text-4xl font-bold text-[var(--color-muted)] sm:text-5xl">
                Trusted by education leaders
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="border border-slate-200 bg-white p-8 shadow-lg"
                >
                  <div className="space-y-4">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <div key={i} className="h-5 w-5 text-yellow-400">
                          ⭐
                        </div>
                      ))}
                    </div>

                    <blockquote className="text-lg text-slate-700 italic">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="border-t pt-4">
                      <p className="font-semibold text-[var(--color-muted)]">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-slate-600">
                        {testimonial.role}
                      </p>
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
                  Let's collaborate
                </span>
              </div>

              <h2 className="text-4xl leading-tight font-bold sm:text-5xl">
                Ready to strengthen your faculty bench and keep classes running
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  {' '}
                  without interruption?
                </span>
              </h2>

              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90">
                Share your staffing needs and our team will curate a shortlist
                of experienced educators who fit your academic rhythm.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="mailto:hello@vidyanugraha.com"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-orange-500/25 transition-all hover:scale-105 hover:shadow-orange-500/40"
                >
                  <Mail className="h-5 w-5" />
                  Contact Vidyanugraha Trust
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="flex items-center justify-center gap-8 pt-8 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Quick response</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Tailored solutions</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
