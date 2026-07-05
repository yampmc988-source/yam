import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Check,
  ShieldCheck,
  Award,
  Building2,
  TrendingUp,
} from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { services } from "@/lib/site-data";

export function Footer() {
  const shouldReduceMotion = useReducedMotion();
  const tilt = !shouldReduceMotion;

  const fadeUp = {
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
      rotateX: shouldReduceMotion ? 0 : -6,
    },
    whileInView: { opacity: 1, y: 0, rotateX: 0 },
    viewport: { once: true, margin: "-80px" },
    style: { transformPerspective: 800 },
  };

  const scrollTop = () =>
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });

  return (
    <footer className="relative overflow-hidden bg-gradient-navy text-primary-foreground">
      {/* Top edge separator with gold sheen */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-gold opacity-70" />

      {/* Faint technical grid + vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,175,110,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,110,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(90% 70% at 30% 0%, black 30%, transparent 75%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% -10%, rgba(212,175,110,0.10), transparent 60%)",
        }}
      />

      {/* CTA */}
      <div className="container-lux relative border-b border-white/10 pt-20 pb-16 sm:pt-24 sm:pb-20">
        <CtaBand fadeUp={fadeUp} tilt={tilt} />
      </div>

      {/* Credentials strip */}
      <div className="relative border-b border-white/10">
        <div className="container-lux relative py-6">
          <ul className="flex flex-wrap items-center justify-between gap-x-10 gap-y-4">
            {[
              { Icon: ShieldCheck, label: "ISO 9001:2015 certified" },
              { Icon: Award, label: "PMP certified consultants" },
              { Icon: Building2, label: "RERA registered advisor" },
              { Icon: TrendingUp, label: "150+ projects delivered" },
            ].map(({ Icon, label }) => (
              <li
                key={label}
                className="group flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.14em] text-white/50 transition-colors duration-300 hover:text-white/80"
              >
                <Icon className="size-4 text-gold/70 transition-transform duration-300 group-hover:scale-110 group-hover:text-gold" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative border-b border-white/10">
        <div className="container-lux relative py-14 sm:py-16">
          <div className="grid gap-12 sm:gap-16 lg:grid-cols-12 lg:gap-x-10">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4"
            >
              <Logo variant="light" />
              <p className="mt-8 max-w-sm text-[0.95rem] leading-relaxed text-white/60">
                A premium project management consultancy in Dubai, empowering
                organisations across the UAE to deliver complex projects with
                precision, confidence and enduring quality.
              </p>
              <address className="mt-8 space-y-3 text-sm not-italic tracking-wide text-white/75">
                <a
                  href="mailto:hello@yamservices.ae"
                  className="group flex w-fit items-center gap-2.5 rounded-sm transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep"
                >
                  <Mail className="size-3.5 text-gold/70 transition-colors group-hover:text-gold" aria-hidden="true" />
                  hello@yamservices.ae
                </a>
                <a
                  href="tel:+97140000000"
                  className="group flex w-fit items-center gap-2.5 rounded-sm transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep"
                >
                  <Phone className="size-3.5 text-gold/70 transition-colors group-hover:text-gold" aria-hidden="true" />
                  +971 4 000 0000
                </a>
                <span className="flex items-center gap-2.5">
                  <MapPin className="size-3.5 text-gold/70" aria-hidden="true" />
                  Business Bay, Dubai, UAE
                </span>
              </address>
              <div className="mt-9 flex gap-3.5">
                {[
                  { Icon: Linkedin, label: "LinkedIn", href: "#" },
                  { Icon: Twitter, label: "Twitter", href: "#" },
                  { Icon: Facebook, label: "Facebook", href: "#" },
                  { Icon: Instagram, label: "Instagram", href: "#" },
                ].map(({ Icon, label, href }) => (
                  <a key={label} href={href} aria-label={label}>
                    <SocialOrb Icon={Icon} tilt={tilt} />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-2"
            >
              <FooterCol title="Company">
                <FooterLink to="/">Home</FooterLink>
                <FooterLink to="/about">About</FooterLink>
                <FooterLink to="/industries">Industries</FooterLink>
                <FooterLink to="/faqs">FAQs</FooterLink>
                <FooterLink to="/contact">Contact</FooterLink>
              </FooterCol>
            </motion.div>

            <motion.nav
              {...fadeUp}
              transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.16, ease: [0.16, 1, 0.3, 1] }}
              aria-label="Services"
              className="lg:col-span-3"
            >
              <FooterCol title="Services">
                {services.slice(0, 5).map((s) => (
                  <li key={s.slug}>
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="group -ml-2 inline-flex items-center gap-2 rounded-full py-1 pl-2 pr-2.5 text-white/65 transition-all duration-300 hover:translate-x-0.5 hover:bg-white/[0.06] hover:pr-3 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
                    >
                      <span className="h-px w-2.5 shrink-0 bg-gold/40 transition-all duration-300 group-hover:w-4 group-hover:bg-gold" aria-hidden="true" />
                      <span>{s.title}</span>
                      <ArrowUpRight
                        className="size-3 shrink-0 -translate-x-1 text-gold opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </FooterCol>
            </motion.nav>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-3 lg:border-l lg:border-white/10 lg:pl-10"
            >
              <h4 className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                Newsletter
              </h4>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                Insight on project delivery, straight to your inbox. No noise
                only substance.
              </p>
              <NewsletterCard tilt={tilt} />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container-lux relative">
        <div className="flex flex-col items-center justify-between gap-6 py-8 text-xs tracking-wide text-white/50 md:flex-row">
          <p>YAM Management Services. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="relative rounded-sm text-white/50 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:text-white hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
            >
              Privacy Policy
            </Link>
            <Link
              to="/"
              className="relative rounded-sm text-white/50 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:text-white hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
            >
              Terms of Service
            </Link>
            <button type="button" onClick={scrollTop} aria-label="Back to top">
              <SocialOrb Icon={ArrowUp} tilt={tilt} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function CtaBand({
  fadeUp,
  tilt,
}: {
  fadeUp: {
    initial: { opacity: number; y: number; rotateX: number };
    whileInView: { opacity: number; y: number; rotateX: number };
    viewport: { once: boolean; margin: string };
    style: { transformPerspective: number };
  };
  tilt: boolean;
}) {
  const stats = [
    { value: "150+", label: "Projects delivered" },
    { value: "12", label: "Years in the UAE market" },
    { value: "AED 2.4B+", label: "Portfolio value managed" },
  ];

  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-x-10"
    >
      <div className="lg:col-span-8">
        <span className="mb-4 flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.28em] text-gold">
          <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
          Work with us
        </span>
        <h3 className="font-display max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
          Bring precision and accountability to your next project.
        </h3>
        <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-white/60">
          From feasibility to handover, our consultants keep your programme
          on schedule, on budget, and answerable at every milestone.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Link to="/contact" className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep">
            <RaisedButton tilt={tilt} />
          </Link>
          <a
            href="tel:+97140000000"
            className="group inline-flex items-center gap-2.5 rounded-sm text-sm font-medium text-white/75 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
          >
            <SocialOrb Icon={Phone} tilt={tilt} />
            +971 4 000 0000
          </a>
        </div>
      </div>

      <div className="lg:col-span-4 lg:border-l lg:border-white/10 lg:pl-10">
        <dl className="grid grid-cols-3 gap-6 sm:grid-cols-1 sm:gap-5">
          {stats.map(({ value, label }) => (
            <div key={label} className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0 sm:border-t sm:pt-4">
              <dt className="sr-only">{label}</dt>
              <dd className="font-display text-2xl font-semibold tracking-tight text-gold sm:text-3xl">
                {value}
              </dd>
              <dd className="mt-1 text-xs uppercase tracking-[0.1em] text-white/50">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </motion.div>
  );
}

function RaisedButton({ tilt }: { tilt: boolean }) {
  return (
    <motion.span
      whileHover={tilt ? { rotateX: -8, rotateY: 8, y: -2, scale: 1.02 } : { y: -2 }}
      whileTap={{ rotateX: 0, rotateY: 0, y: 0, scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ transformPerspective: 600 }}
      className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-gradient-to-b from-[#f0d5a3] to-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-navy-deep shadow-[0_1px_0_rgba(255,255,255,0.5)_inset,0_10px_22px_-6px_rgba(0,0,0,0.5)] transition-shadow duration-200 hover:shadow-[0_1px_0_rgba(255,255,255,0.5)_inset,0_18px_30px_-8px_rgba(0,0,0,0.55)]"
    >
      Start a conversation
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
    </motion.span>
  );
}

function SocialOrb({
  Icon,
  tilt,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  tilt: boolean;
}) {
  return (
    <motion.span
      whileHover={tilt ? { rotateX: -12, rotateY: 12, y: -3 } : { y: -3 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      style={{ transformPerspective: 400 }}
      className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-gradient-to-b from-white/[0.09] to-white/[0.02] text-white/70 shadow-[0_1px_0_rgba(255,255,255,0.08)_inset,0_6px_14px_-4px_rgba(0,0,0,0.55)] transition-all duration-300 hover:border-gold/60 hover:text-gold hover:shadow-[0_1px_0_rgba(255,255,255,0.08)_inset,0_0_0_4px_rgba(212,175,110,0.12),0_6px_14px_-4px_rgba(0,0,0,0.55)] group-focus-visible:border-gold/50 group-focus-visible:text-gold"
    >
      <Icon className="size-4" aria-hidden="true" />
    </motion.span>
  );
}

function NewsletterCard({ tilt }: { tilt: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    window.setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 600);
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="mt-6 flex items-center gap-2.5 border-b border-gold/30 pb-3 text-sm text-gold"
      >
        <Check className="size-4 shrink-0" aria-hidden="true" />
        Subscribed. Watch your inbox.
      </div>
    );
  }

  return (
    <>
      <form
        className="mt-6 flex items-center gap-3 border-b border-white/15 pb-3 transition-colors focus-within:border-gold/60"
        onSubmit={handleSubmit}
        noValidate
      >
        <label htmlFor="footer-newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="footer-newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          autoComplete="email"
          className="w-full min-w-0 bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
        />
        <motion.button
          type="submit"
          disabled={status === "loading"}
          whileHover={tilt && status !== "loading" ? { rotateX: -10, y: -1 } : undefined}
          style={{ transformPerspective: 300 }}
          className="flex shrink-0 items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-gold transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none"
        >
          {status === "loading" ? "Sending" : "Send"}
          {status !== "loading" && <ArrowRight className="size-3.5" aria-hidden="true" />}
        </motion.button>
      </form>
      <p className="mt-3 text-xs text-white/45">By subscribing you agree to our Privacy Policy.</p>
    </>
  );
}

function FooterCol({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <h4 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-gold">{title}</h4>
      <ul className="mt-4 space-y-3 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        to={to}
        className="group -ml-2 inline-flex items-center gap-2 rounded-full py-1 pl-2 pr-2.5 text-white/65 transition-all duration-300 hover:translate-x-0.5 hover:bg-white/[0.06] hover:pr-3 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
      >
        <span className="h-px w-2.5 shrink-0 bg-gold/40 transition-all duration-300 group-hover:w-4 group-hover:bg-gold" aria-hidden="true" />
        <span>{children}</span>
        <ArrowUpRight
          className="size-3 shrink-0 -translate-x-1 text-gold opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
          aria-hidden="true"
        />
      </Link>
    </li>
  );
}