'use client';

import {
  CheckCircle,
  Phone,
  Send,
  ArrowLeft,
} from 'lucide-react';
import { useState } from 'react';



export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json() as { success: boolean; message?: string };

      // Web3Forms returns success: true/false in the JSON response
      if (result.success) {
        setIsSubmitted(true);
        // Reset form
        e.currentTarget.reset();
      } else {
        throw new Error(result.message ?? 'Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);

      // Only show alert for actual errors, not successful submissions
      if (!isSubmitted) {
        console.error('There was an error submitting the form. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoBack = () => {
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="space-y-0 overflow-hidden">
        <section className="bg-gradient-to-b from-slate-50 to-white">
          <div className="container py-20">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-8">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>

                <h1 className="mb-4 text-4xl font-bold text-[var(--color-muted)] sm:text-5xl">
                  Form submitted successfully!
                </h1>

                <p className="mb-8 text-lg text-slate-600">
                  Thank you! The form has been submitted successfully. We will reply to you soon!
                </p>

                <button
                  type="button"
                  onClick={handleGoBack}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-blue-600 px-6 py-3 text-white font-semibold shadow-lg transition-all hover:scale-105"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Go back
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

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
              <form
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <input type="hidden" name="access_key" value="5f36f58a-4a0a-4c09-ae00-d1ab0eda0e53" />
                <input type="hidden" name="subject" value="New Contact Form Submission from Vidyanugraha Website" />
                <input type="hidden" name="from_name" value="Vidyanugraha Contact Form" />
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
                      placeholder="+91 85480 88424"
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
                      Admission
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

                {/* Honeypot field for spam protection */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />



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
                  disabled={isSubmitting}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-blue-500/25 transition-all hover:scale-105 hover:shadow-blue-500/40 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
                >
                  <Send className="h-5 w-5" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
