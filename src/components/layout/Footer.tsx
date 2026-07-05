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
  ShieldCheck,
} from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { services, industries } from "@/lib/site-data";

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
      <div className="container-lux relative border-b border-white/10 py-16 sm:py-20">
        <CtaBand fadeUp={fadeUp} tilt={tilt} />
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

              <div className="mt-8 rounded-2xl border border-gold/25 bg-gold/[0.04] px-5 py-4">
                <div className="flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-gold/80">
                  <ShieldCheck className="size-4" aria-hidden="true" />
                  Certified &amp; compliant
                </div>
                <p className="mt-2 font-display text-lg font-semibold text-white">ISO 9001:2015</p>
                <p className="mt-0.5 text-xs text-white/50">
                  PMP certified · RERA registered · 250+ projects delivered
                </p>
              </div>
            </motion.div>

            <motion.nav
              {...fadeUp}
              transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.08, ease: [0.16, 1, 0.3, 1] }}
              aria-label="Services"
              className="lg:col-span-3"
            >
              <FooterCol title="Services">
                {services.slice(0, 6).map((s) => (
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

            <motion.nav
              {...fadeUp}
              transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.16, ease: [0.16, 1, 0.3, 1] }}
              aria-label="Industries"
              className="lg:col-span-2"
            >
              <h4 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-gold">Industries</h4>
              <ul className="mt-4 space-y-3 text-sm">
                {industries.map((ind) => (
                  <li key={ind.slug}>
                    <a
                      href={`/industries#${ind.slug}`}
                      className="group -ml-2 inline-flex items-center gap-2 rounded-full py-1 pl-2 pr-2.5 text-white/65 transition-all duration-300 hover:translate-x-0.5 hover:bg-white/[0.06] hover:pr-3 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
                    >
                      <span className="h-px w-2.5 shrink-0 bg-gold/40 transition-all duration-300 group-hover:w-4 group-hover:bg-gold" aria-hidden="true" />
                      <span>{ind.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-3 lg:border-l lg:border-white/10 lg:pl-10"
            >
              <h4 className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                Contact
              </h4>
              <address className="mt-4 space-y-3 text-sm not-italic tracking-wide text-white/75">
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
                <span className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 size-3.5 shrink-0 text-gold/70" aria-hidden="true" />
                  Office 01, Fairlink Bldg., Behind Jetour Showroom, Al Khubaisi, Dubai, UAE
                </span>
              </address>

              <h4 className="mt-9 font-display text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                Company
              </h4>
              <ul className="mt-4 space-y-3 text-sm">
                <FooterLink to="/">Home</FooterLink>
                <FooterLink to="/about">About</FooterLink>
                <FooterLink to="/industries">Industries</FooterLink>
                <FooterLink to="/faqs">FAQs</FooterLink>
                <FooterLink to="/contact">Contact</FooterLink>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container-lux relative">
        <div className="flex flex-col items-center justify-between gap-4 py-8 text-xs tracking-wide text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} YAM Management Services. All rights reserved.</p>
          <p className="text-white/40">Dubai, UAE · Premium Project Management Consultancy</p>
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
  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center lg:gap-16"
    >
      <div>
        <span className="mb-4 flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.28em] text-gold">
          <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
          Scale with YAM
        </span>
        <h3 className="font-display max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
          Ready to bring precision to your{" "}
          <span className="text-gold">next project?</span>
        </h3>
      </div>

      <div className="flex shrink-0 flex-wrap items-center gap-4">
        <Link to="/contact" className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep">
          <RaisedButton tilt={tilt} />
        </Link>
        <Link
          to="/services"
          className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep"
        >
          <OutlineButton tilt={tilt} />
        </Link>
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
      Get in touch
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
    </motion.span>
  );
}

function OutlineButton({ tilt }: { tilt: boolean }) {
  return (
    <motion.span
      whileHover={tilt ? { rotateX: -8, rotateY: 8, y: -2 } : { y: -2 }}
      whileTap={{ rotateX: 0, rotateY: 0, y: 0, scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ transformPerspective: 600 }}
      className="group inline-flex shrink-0 items-center gap-3 rounded-full border border-white/20 bg-white/3 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-200 hover:border-gold/60 hover:text-gold"
    >
      Our services
      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
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