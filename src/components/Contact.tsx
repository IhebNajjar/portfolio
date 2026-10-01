'use client';

import { useState, type FormEvent } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

/* ── Contact info cards ──────────────────────────────────────────────── */
const contactLinks = [
  {
    icon: <Mail size={22} />,
    label: 'Email',
    value: 'ihebnj08@gmail.com',
    href: 'mailto:ihebnj08@gmail.com',
    colorClass: 'text-indigo-400',
    bgClass: 'bg-indigo-500/10 border-indigo-500/20',
  },
  {
    icon: <Github size={22} />,
    label: 'GitHub',
    value: 'github.com/IhebNajjar',
    href: 'https://github.com/IhebNajjar',
    colorClass: 'text-violet-400',
    bgClass: 'bg-violet-500/10 border-violet-500/20',
  },
  {
    icon: <Linkedin size={22} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/iheb-najjar',
    href: 'https://www.linkedin.com/in/iheb-najjar-71355833b/',
    colorClass: 'text-blue-400',
    bgClass: 'bg-blue-500/10 border-blue-500/20',
  },
];


/* ── Input helper ────────────────────────────────────────────────────── */
function Field({
  label,
  name,
  type = 'text',
  required,
  textarea,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  const baseClass =
    'w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/40 transition-all duration-200';
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
        {label} {required && <span className="text-indigo-400">*</span>}
      </label>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={5}
          placeholder={`Your ${label.toLowerCase()}…`}
          className={`${baseClass} resize-none`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={`Your ${label.toLowerCase()}…`}
          className={baseClass}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </div>
  );
}

/* ── Section ────────────────────────────────────────────────────────────── */
export default function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // ← Configure a form service like Formspree or EmailJS here
    // For now, we just show a success state
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Atmospheric background */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-violet-950/15" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-indigo-600/8 rounded-full blur-3xl" />
        <div className="dot-grid absolute inset-0 opacity-20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's Build Something"
            gradientWords="Together"
            subtitle="Whether you have a project in mind, a question, or just want to connect — I'd love to hear from you."
            align="center"
          />
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14"
        >
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className={`
                glass-card rounded-2xl p-5 flex items-center gap-4
                border ${link.bgClass}
                hover:scale-[1.02] hover:shadow-lg transition-all duration-200
                group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500
              `}
            >
              <div className={`shrink-0 ${link.colorClass} group-hover:scale-110 transition-transform`}>
                {link.icon}
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                  {link.label}
                </p>
                <p className="text-slate-300 text-sm truncate">{link.value}</p>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Form area */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-3xl p-8 md:p-12 max-w-2xl mx-auto"
        >
          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle size={48} className="text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-display font-semibold text-slate-100 mb-2">
                Message Sent!
              </h3>
              <p className="text-slate-400 mb-6">
                Thanks for reaching out. I&apos;ll get back to you as soon as possible.
              </p>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setSubmitted(false)}
              >
                Send Another
              </Button>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-display font-semibold text-slate-100 mb-2">
                Send a Message
              </h3>
              {/* Form service note */}
              <p className="text-xs text-slate-500 italic mb-6">
                Configure a form service like{' '}
                <a
                  href="https://formspree.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:underline"
                >
                  Formspree
                </a>{' '}
                or{' '}
                <a
                  href="https://emailjs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:underline"
                >
                  EmailJS
                </a>{' '}
                to enable this form, or use the email link above.
              </p>

              {/* ← Configure action="https://formspree.io/f/YOUR_FORM_ID" for Formspree */}
              <form onSubmit={handleSubmit} action="#" className="space-y-5">
                <Field
                  label="Name"
                  name="name"
                  required
                  value={name}
                  onChange={setName}
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={setEmail}
                />
                <Field
                  label="Message"
                  name="message"
                  required
                  textarea
                  value={message}
                  onChange={setMessage}
                />
                <div className="pt-2">
                  <Button type="submit" variant="primary" size="md" className="w-full justify-center">
                    <Send size={16} />
                    Send Message
                  </Button>
                </div>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
