import {
  Award,
  BookOpen,
  CheckCircle,
  Heart,
  Lightbulb,
  Mail,
  Target,
  Users,
} from 'lucide-react';

import type { Metadata } from 'next';

const values = [
  {
    icon: Heart,
    title: 'Integrity in education',
    description:
      'Every partnership is grounded in transparency, accountability, and the belief that students deserve dependable faculty.',
    features: [
      'Transparent processes',
      'Ethical practices',
      'Student-first mindset',
    ],
  },
  {
    icon: BookOpen,
    title: 'People-first approach',
    description:
      'We invest in the growth of the educators we deploy so they can inspire students and stay committed to the classroom.',
    features: [
      'Continuous development',
      'Mentorship programs',
      'Career growth support',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Long-term collaboration',
    description:
      'Our engagements are designed to evolve with institutions, supporting them across academic cycles and new programs.',
    features: [
      'Sustainable partnerships',
      'Adaptive solutions',
      'Future-ready approach',
    ],
  },
];

const team = [
  {
    name: 'Dr. Lakshmi Narayanan',
    role: 'Founder & Academic Director',
    bio: 'Two decades of experience leading academic reforms and faculty development initiatives across engineering colleges in South India.',
  },
  {
    name: 'Meera Prasad',
    role: 'Head of Partnerships',
    bio: 'Specialises in institutional collaborations and ensures Vidyanugraha’s support is closely aligned to each college’s roadmap.',
  },
  {
    name: 'Karthik Rao',
    role: 'Director – Faculty Success',
    bio: 'Drives recruitment, onboarding, and continuous mentoring for the trust’s network of lecturers and professors.',
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-0 overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--color-primary)] via-blue-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-[url('/images/banner/background.png')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

        <div className="relative container grid gap-12 py-12 md:grid-cols-[1.1fr,0.9fr] md:items-center">
          <div className="animate-in slide-in-from-left space-y-8 duration-1000">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <Users className="h-4 w-4" />
              <span className="tracking-wider uppercase">About Us</span>
            </div>

            <h1 className="text-5xl leading-tight font-bold tracking-tight text-blue-100 sm:text-6xl md:text-7xl">
              Empowering colleges with
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                {' '}
                passionate teachers
              </span>
              <span className="mt-2 block text-4xl sm:text-5xl md:text-6xl">
                since 2008
              </span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-white/90">
              Vidyanugraha Education Trust was founded to bridge the growing gap
              between institutional ambitions and the availability of qualified
              faculty. Our team curates, mentors, and supports educators who
              bring both knowledge and empathy to the classroom.
            </p>
          </div>

          <div className="animate-in slide-in-from-right delay-300 duration-1000">
            <div className="border border-white/20 bg-white/10 p-8 backdrop-blur-lg">
              <div className="mb-6 flex items-center gap-2">
                <Target className="h-5 w-5 text-orange-400" />
                <p className="text-sm font-semibold tracking-wider text-white/90 uppercase">
                  Our Mission
                </p>
              </div>

              <p className="mb-6 leading-relaxed text-white/90">
                To ensure every college can offer consistent, quality education
                by connecting them with educators who are committed to student
                success and aligned with institutional values.
              </p>

              <div className="space-y-4">
                <div className="border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="font-semibold text-orange-400">2008</p>
                  <p className="text-sm text-white/80">
                    Vidyanugraha Education Trust is established with a pilot
                    program across three engineering colleges.
                  </p>
                </div>
                <div className="border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="font-semibold text-orange-400">2014</p>
                  <p className="text-sm text-white/80">
                    Launches faculty development workshops and peer mentoring
                    initiatives.
                  </p>
                </div>
                <div className="border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="font-semibold text-orange-400">2022</p>
                  <p className="text-sm text-white/80">
                    Expands network to management and arts colleges, bringing
                    tailored staffing models.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chairman's Message Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="container space-y-12 py-16">
          <div className="space-y-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-[var(--color-accent)]">
              <Users className="h-4 w-4" />
              <span>Leadership Message</span>
            </div>

            <h2 className="mx-auto max-w-4xl text-4xl font-bold text-[var(--color-muted)] sm:text-5xl">
              Message from the Chairman
            </h2>
          </div>

          <div className="mx-auto max-w-7xl">
            <div className="group relative overflow-hidden border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 transition-all duration-300 md:p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-blue-50/30 opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center bg-gradient-to-br from-[var(--color-primary)] to-blue-600 text-white shadow-lg">
                    <Users className="h-10 w-10" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-[var(--color-muted)]">
                      Adarsh Hegde
                    </h3>
                    <p className="text-sm font-semibold tracking-wider text-[var(--color-primary)] uppercase">
                      Chairman, Vidyanugraha PU College
                    </p>
                  </div>
                </div>

                <div className="space-y-6 text-justify text-lg leading-relaxed text-slate-700">
                  <p>
                    Education is the cornerstone of progress, and at
                    Vidyanugraha PU College, we believe in nurturing not just
                    academically proficient students, but well-rounded
                    individuals who are ready to take on the challenges of the
                    world. Our mission is to provide a stimulating learning
                    environment where students are encouraged to explore their
                    curiosity, develop critical thinking skills, and cultivate
                    creativity.
                  </p>

                  <p>
                    We are proud to have a team of highly qualified and
                    experienced faculty from D.K. and Udupi districts who are
                    dedicated to mentoring and guiding students at every step of
                    their academic journey. At our college, we emphasize
                    holistic development. Alongside rigorous academics, we focus
                    on personality growth, leadership qualities, ethical values,
                    and social responsibility.
                  </p>

                  <p>
                    We believe that education should empower students to become
                    confident, compassionate, and innovative individuals who can
                    contribute meaningfully to society. Our campus provides a
                    safe, inclusive, and supportive environment, where students
                    feel motivated to learn, collaborate, and achieve their
                    personal best.
                  </p>

                  <p>
                    We also understand the importance of preparing students for
                    the future. Through career guidance, exposure to
                    co-curricular and extra-curricular activities, and
                    engagement with community initiatives, we aim to broaden
                    their horizons and build a global perspective. Every
                    initiative at Vidyanugraha PU College is designed to foster
                    a love for learning, inspire curiosity, and develop the
                    skills necessary to excel not just in examinations, but in
                    life.
                  </p>

                  <p className="font-semibold text-[var(--color-primary)]">
                    Together, we aspire to create a generation of young leaders
                    who are knowledgeable, responsible, and visionary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="container space-y-16 py-10">
          <div className="space-y-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-[var(--color-primary)]">
              <Award className="h-4 w-4" />
              <span>Our Values</span>
            </div>

            <h2 className="mx-auto max-w-4xl text-4xl font-bold text-[var(--color-muted)] sm:text-5xl">
              What guides our work
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600">
              Every collaboration is built on purposeful relationships—with
              management teams, educators, and the students they teach.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-300/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

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
                    {item.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
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

      {/* Team Section */}
      <section className="bg-white">
        <div className="container space-y-16 py-10">
          <div className="space-y-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-[var(--color-accent)]">
              <Users className="h-4 w-4" />
              <span>Leadership</span>
            </div>

            <h2 className="text-4xl font-bold text-[var(--color-muted)] sm:text-5xl">
              The team behind Vidyanugraha Trust
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600">
              Our leadership brings decades of experience in education, faculty
              development, and institutional partnerships.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="group relative overflow-hidden border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-300/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center bg-gradient-to-br from-[var(--color-primary)] to-blue-600 text-white shadow-lg">
                    <Users className="h-8 w-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-[var(--color-muted)]">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold tracking-wider text-[var(--color-primary)] uppercase">
                      {member.role}
                    </p>
                  </div>

                  <p className="leading-relaxed text-slate-600">{member.bio}</p>
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
                Let&apos;s collaborate
              </span>
            </div>

            <h2 className="text-4xl leading-tight font-bold text-blue-100 sm:text-5xl">
              Join hands with
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                {' '}
                Vidyanugraha Education Trust
              </span>
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90">
              Whether you need semester-long faculty deployment or specialised
              visiting faculty, our team will help you design the right staffing
              model that fits your institution&apos;s unique needs.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="mailto:hello@vidyanugraha.com"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-orange-500/25 transition-all hover:scale-105 hover:shadow-orange-500/40"
              >
                <Mail className="h-5 w-5" />
                Connect with our team
              </a>
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
  );
}
