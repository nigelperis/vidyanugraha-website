import {
  BookOpen,
  CheckCircle,
  Mail,
  Target,
  Users,
} from 'lucide-react';

export default function AboutPage() {
  return (
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
              Vidyanugraha Education Trust, Moodabidri – Mangaluru, stands as a beacon of learning and innovation, founded with a heartfelt vision — to make quality education accessible, meaningful, and life-changing for every student, especially those from rural and semi-urban regions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="container space-y-12">
          <div className="space-y-6 text-center">
            {/* <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-[var(--color-accent)]">
              <Target className="h-4 w-4" />
              <span>Our Mission</span>
            </div>*/}

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
                    It was founded with the mission to transform education through creativity and quality. The word &quot;Vidyanugraha&quot; itself stands for the &quot;blessing of knowledge,&quot; and the Trust strives to ensure that every learner who walks through its doors experiences that blessing in its truest form.
                  </p>

                  <p>
                    The Trust focuses on nurturing potential rather than merely producing results. It believes that every student carries within them a spark of excellence — and with the right guidance, environment, and opportunities, that spark can illuminate countless lives.
                  </p>

                  <p>
                    At Vidyanugraha, education goes beyond textbooks. It&lsquo;s about shaping confidence, compassion, and character. The Trust&lsquo;s institutions emphasize experiential learning, mentorship, leadership development, and community engagement — creating a generation that not only excels academically but also leads with empathy and purpose.
                  </p>

                  <p>
                    With a focus on holistic growth, Vidyanugraha nurtures curiosity, inspires confidence, and encourages every student to dream beyond boundaries. Rooted in values and driven by vision, the Trust continues to light the path toward a brighter, more empowered future.
                  </p>

                  <p className="font-semibold text-[var(--color-primary)]">
                    With modern infrastructure, quality faculty drawn from reputed institutions, and a forward-thinking approach, Vidyanugraha Education Trust is setting new benchmarks in holistic education. Every initiative is guided by one mission — to empower students to dream, discover, and define their own success stories.
                  </p>
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
              Chairman's Message
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
                        Adarsh Hegde
                      </h3>
                      <p className="text-sm font-semibold tracking-wider text-[var(--color-primary)] uppercase">
                        Chairman, Vidyanugraha PU College
                      </p>
                    </div>
                  </div>

                  {/* Message Content */}
                  <div className="flex-1 space-y-6 text-justify text-lg leading-relaxed text-slate-700">
                    <p>
                      Education is the cornerstone of progress, and at Vidyanugraha PU College, we believe in nurturing not just academically proficient students, but well-rounded individuals who are ready to take on the challenges of the world. Our mission is to provide a stimulating learning environment where students are encouraged to explore their curiosity, develop critical thinking skills, and cultivate creativity.
                    </p>

                    <p>
                      We are proud to have a team of highly qualified and experienced faculty from D.K. and Udupi districts who are dedicated to mentoring and guiding students at every step of their academic journey. At our college, we emphasize holistic development. Alongside rigorous academics, we focus on personality growth, leadership qualities, ethical values, and social responsibility.
                    </p>

                    <p>
                      We believe that education should empower students to become confident, compassionate, and innovative individuals who can contribute meaningfully to society. Our campus provides a safe, inclusive, and supportive environment, where students feel motivated to learn, collaborate, and achieve their personal best.
                    </p>

                    <p>
                      We also understand the importance of preparing students for the future. Through career guidance, exposure to co-curricular and extra-curricular activities, and engagement with community initiatives, we aim to broaden their horizons and build a global perspective. Every initiative at Vidyanugraha PU College is designed to foster a love for learning, inspire curiosity, and develop the skills necessary to excel not just in examinations, but in life.
                    </p>

                    <p className="font-semibold text-[var(--color-primary)]">
                      Together, we aspire to create a generation of young leaders who are knowledgeable, responsible, and visionary.
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