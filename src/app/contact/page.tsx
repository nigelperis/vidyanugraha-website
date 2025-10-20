import {
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Users,
} from 'lucide-react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Vidyanugraha Trust',
  description:
    'Get in touch with Vidyanugraha Trust. Contact us for faculty deployment, partnerships, or any inquiries about our educational services.',
};

const _contactInfo = [
  {
    icon: Mail,
    title: 'Email us',
    description: "Send us a message and we'll respond within 24 hours",
    contact: 'hello@vidyanugraha.com',
    href: 'mailto:hello@vidyanugraha.com',
  },
  {
    icon: Phone,
    title: 'Call us',
    description: 'Speak directly with our team during business hours',
    contact: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: MapPin,
    title: 'Visit us',
    description: 'Our office is open for scheduled meetings',
    contact: 'Bangalore, Karnataka, India',
    href: '#',
  },
  {
    icon: Clock,
    title: 'Business hours',
    description: "We're available to help you",
    contact: 'Mon - Fri: 9:00 AM - 6:00 PM',
    href: '#',
  },
];

const _inquiryTypes = [
  {
    icon: Users,
    title: 'Faculty deployment',
    description: 'Need qualified faculty for your institution',
  },
  {
    icon: MessageSquare,
    title: 'Partnership opportunities',
    description: 'Explore collaboration possibilities',
  },
  {
    icon: Send,
    title: 'General inquiries',
    description: 'Any other questions or information',
  },
];

export default function ContactPage() {
  return (
    <div className="space-y-0 overflow-hidden">
      {/* Contact Form Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="container py-10">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 space-y-6 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-[var(--color-primary)]">
                <Send className="h-4 w-4" />
                <span>Send Message</span>
              </div>

              <h2 className="text-4xl font-bold text-[var(--color-muted)] sm:text-5xl">
                Send us a detailed message
              </h2>

              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600">
                Fill out the form below with your specific requirements and
                we&apos;ll get back to you with a tailored response.
              </p>
            </div>

            <div className="border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 lg:p-12">
              <form className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-semibold text-[var(--color-muted)]"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full border border-slate-300 px-4 py-3 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:outline-none"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-[var(--color-muted)]"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full border border-slate-300 px-4 py-3 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:outline-none"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-semibold text-[var(--color-muted)]"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full border border-slate-300 px-4 py-3 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:outline-none"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="institution"
                      className="text-sm font-semibold text-[var(--color-muted)]"
                    >
                      Institution Name
                    </label>
                    <input
                      type="text"
                      id="institution"
                      name="institution"
                      className="w-full border border-slate-300 px-4 py-3 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:outline-none"
                      placeholder="Your institution name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="inquiry-type"
                    className="text-sm font-semibold text-[var(--color-muted)]"
                  >
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiry-type"
                    name="inquiry-type"
                    required
                    className="w-full border border-slate-300 px-4 py-3 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:outline-none"
                  >
                    <option value="">Select inquiry type</option>
                    <option value="faculty-deployment">
                      Faculty Deployment
                    </option>
                    <option value="partnership">
                      Partnership Opportunities
                    </option>
                    <option value="general">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-[var(--color-muted)]"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full border border-slate-300 px-4 py-3 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:outline-none"
                    placeholder="Please provide details about your requirements, timeline, and any specific needs..."
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="h-4 w-4 text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                  />
                  <label htmlFor="consent" className="text-sm text-slate-600">
                    I agree to be contacted by Vidyanugraha Trust regarding my
                    inquiry *
                  </label>
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-blue-500/25 transition-all hover:scale-105 hover:shadow-blue-500/40"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[var(--color-primary)] via-blue-800 to-blue-900 text-white">
        <div className="container py-10">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <Phone className="h-4 w-4" />
              <span className="tracking-wider uppercase">Prefer to call?</span>
            </div>

            <h2 className="text-4xl leading-tight font-bold text-blue-100 sm:text-5xl">
              Speak directly with
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                {' '}
                our team
              </span>
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90">
              Sometimes a conversation is the best way to understand your needs.
              Call us during business hours for immediate assistance and
              personalized guidance.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="tel:+919876543210"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-orange-500/25 transition-all hover:scale-105 hover:shadow-orange-500/40"
              >
                <Phone className="h-5 w-5" />
                +91 98765 43210
              </a>
            </div>

            <div className="flex items-center justify-center gap-8 pt-8 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Mon - Fri: 9 AM - 6 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Same-day callback</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Expert consultation</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
