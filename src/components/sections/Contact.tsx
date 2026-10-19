import { useForm, ValidationError } from "@formspree/react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../../data/profile";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

// ✏️ Replace "YOUR_FORM_ID" with your Formspree form ID (e.g. "xpwzgkba")
// Get one free at https://formspree.io
const FORMSPREE_ID = "mnpjydye";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="56"
      height="56"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" opacity="0.15" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="10" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

export default function Contact() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  return (
    <section id="contact" className="section-wrap">
      <SectionHeading title="contact" />

      <Reveal>
        <p className="max-w-lg text-base text-slate-300">
          Have an idea, a project, or just want to say hi? Drop me a message
          and I'll get back to you.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 w-full max-w-lg">
          <AnimatePresence mode="wait">
            {state.succeeded ? (
              /* ── Success State ── */
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-8 py-14 text-center"
              >
                <span className="text-emerald-400">
                  <CheckIcon />
                </span>
                <h3 className="font-display text-xl font-medium text-white">
                  Message sent!
                </h3>
                <p className="text-sm text-slate-400">
                  Thanks for reaching out. I'll reply to{" "}
                  <span className="text-slate-200">{profile.email}</span> as soon
                  as possible.
                </p>
              </motion.div>
            ) : (
              /* ── Form ── */
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-5"
                noValidate
              >
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-medium uppercase tracking-widest text-slate-400"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-600 transition-colors focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/20"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="text-xs text-red-400"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-medium uppercase tracking-widest text-slate-400"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-600 transition-colors focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/20"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-xs text-red-400"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-medium uppercase tracking-widest text-slate-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="What's on your mind?"
                    className="resize-none rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-600 transition-colors focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/20"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-xs text-red-400"
                  />
                </div>

                {/* Global errors */}
                <ValidationError
                  errors={state.errors}
                  className="text-xs text-red-400"
                />

                {/* Submit */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="group relative mt-1 flex items-center justify-center gap-2 overflow-hidden rounded-lg border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-medium text-white transition-all hover:border-white/30 hover:bg-white/[0.10] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {state.submitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending…
                    </>
                  ) : (
                    "Send message →"
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </Reveal>

      {/* Social links stay below the form */}
      <Reveal delay={0.2}>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          {profile.socials
            .filter((s) => s.label !== "Email")
            .map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-white/10 px-4 py-2 text-sm text-slate-300 transition-colors hover:border-white/30 hover:text-white"
              >
                {social.label.toLowerCase()} ↗
              </a>
            ))}
        </div>
      </Reveal>
    </section>
  );
}
