import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  User,
  Building2,
  MessageSquare,
  Loader2,
  Copy,
  Check,
  Navigation,
  Quote,
  ShieldCheck,
} from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import contactImg from "@/assets/contact-office.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Yam Group of Companies — Dubai, UAE" },
      {
        name: "description",
        content:
          "Contact Yam Group of Companies in Dubai to discuss your project. Request a consultation with our project management consultants across the UAE.",
      },
      { property: "og:title", content: "Contact Yam Group of Companies" },
      { property: "og:description", content: "Request a consultation with our Dubai-based project management consultants." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const details = [
  {
    icon: MapPin,
    label: "Dubai, UAE Office",
    value: "Office 01, Fairlink Bldg., Behind Jetour Showroom, Al Khubaisi, Dubai, UAE",
    href: "https://www.google.com/maps?q=Fairlink+Building+Al+Khubaisi+Dubai",
    copyable: false,
    external: true,
  },
  {
    icon: Phone,
    label: "Dubai Phone",
    value: "(04) 283 8250",
    href: "tel:+97142838250",
    copyable: true,
    external: false,
  },
  {
    icon: MapPin,
    label: "Austin, TX, USA Office",
    value: "5900 Balcones Drive, #STE 100, Austin, TX 78731, USA",
    href: "https://www.google.com/maps?q=5900+Balcones+Drive+STE+100+Austin+TX+78731",
    copyable: false,
    external: true,
  },
  {
    icon: Phone,
    label: "US Phone",
    value: "+1 512-760-8864",
    href: "tel:+15127608864",
    copyable: true,
    external: false,
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@yampmc.com",
    href: "mailto:info@yampmc.com",
    copyable: true,
    external: false,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Sun–Thu · 9:00 AM – 6:00 PM (GST)",
    href: undefined,
    copyable: false,
    external: false,
  },
];

// License details for YAM Universal - F.Z.E, the entity behind the US office.
const license = {
  entity: "YAM Universal - F.Z.E",
  fields: [
    { label: "License No.", value: "55811", wide: false },
    { label: "Registration No.", value: "55811", wide: false },
    { label: "Legal form", value: "Free Zone Establishment - Limited Liability", wide: true },
  ],
};

const officeMaps = [
  {
    label: "Dubai, UAE Office",
    title: "YAM Management Services office location in Dubai",
    embed: "https://www.google.com/maps?q=Fairlink+Building+Al+Khubaisi+Dubai&output=embed",
    directions: "https://www.google.com/maps?q=Fairlink+Building+Al+Khubaisi+Dubai",
    line1: "Fairlink Bldg., Al Khubaisi, Dubai",
    line2: "United Arab Emirates",
  },
  {
    label: "Austin, TX, USA Office",
    title: "YAM Universal LLC office location in Austin, Texas",
    embed: "https://www.google.com/maps?q=5900+Balcones+Drive+STE+100+Austin+TX+78731&output=embed",
    directions: "https://www.google.com/maps?q=5900+Balcones+Drive+STE+100+Austin+TX+78731",
    line1: "5900 Balcones Drive, #STE 100, Austin, TX",
    line2: "United States",
  },
];

const stats = [
  { value: "15+", label: "Years of expertise" },
  { value: "200+", label: "Projects delivered" },
  { value: "24h", label: "Average response" },
  { value: "4", label: "Emirates covered" },
];

const serviceOptions = [
  "PMO Consulting",
  "Project Management",
  "Cost Consultancy",
  "Contract Advisory",
  "Design Management",
  "Other",
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [messageLength, setMessageLength] = useState(0);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const MESSAGE_LIMIT = 600;

  const handleCopy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(label);
      toast.success(`${label} copied to clipboard`);
      setTimeout(() => setCopiedField(null), 1800);
    } catch {
      // clipboard unavailable — fail silently, link still works
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network latency for a considered, trustworthy submit experience
    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success("Thank you — your enquiry has been received. We'll be in touch shortly.");
    }, 900);
  };

  return (
    <>
      <Toaster position="top-center" richColors />
      <PageHero
        image={contactImg}
        eyebrow="Contact"
        title="Let's start the conversation"
        description="Tell us about your project. Our team will respond promptly to arrange a consultation."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      {/* Trust strip */}
      <section className="border-b border-border/60 bg-navy-deep/[0.03]">
        <div className="container-lux grid grid-cols-2 gap-6 py-10 sm:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center sm:text-left"
            >
              <p className="text-2xl font-bold text-navy sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container-lux py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Details */}
          <Reveal>
            <span className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">
              <span className="gold-rule" /> Get in touch
            </span>
            <h2 className="text-balance text-3xl font-bold leading-tight text-navy sm:text-4xl">
              A trusted partner, one conversation away
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Whether you're planning a landmark development or need to rescue a project under pressure, our
              consultants are ready to help you deliver with certainty.
            </p>

            <div className="mt-10 space-y-4">
              {details.map((d) => (
                <div
                  key={d.label}
                  className="card-lux group flex items-start gap-4 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-gold/20 hover:shadow-lg"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-navy text-gold transition-transform duration-300 group-hover:scale-105">
                    <d.icon className="size-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {d.label}
                    </p>
                    {d.href ? (
                      <a
                        href={d.href}
                        target={d.external ? "_blank" : undefined}
                        rel={d.external ? "noreferrer" : undefined}
                        className="text-base font-semibold text-navy transition-colors hover:text-gold-deep"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="text-base font-semibold text-navy">{d.value}</p>
                    )}
                  </div>
                  {d.copyable && (
                    <button
                      type="button"
                      aria-label={`Copy ${d.label.toLowerCase()}`}
                      onClick={() => handleCopy(d.label, d.value)}
                      className="shrink-0 rounded-lg p-2 text-muted-foreground opacity-0 transition-all duration-200 hover:bg-navy/5 hover:text-gold-deep focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold group-hover:opacity-100"
                    >
                      {copiedField === d.label ? (
                        <Check className="size-4 text-gold-deep" />
                      ) : (
                        <Copy className="size-4" />
                      )}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Licensing & Registration */}
            <div className="card-lux mt-8 p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-navy text-gold">
                  <ShieldCheck className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Licensing &amp; Registration
                  </p>
                  <p className="text-base font-semibold text-navy">{license.entity}</p>
                </div>
              </div>
              <dl className="mt-6 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                {license.fields.map((f) => (
                  <div key={f.label} className={f.wide ? "sm:col-span-2" : undefined}>
                    <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {f.label}
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-navy">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Pull quote */}
            <div className="relative mt-8 overflow-hidden rounded-2xl bg-gradient-navy p-7 text-white">
              <Quote className="absolute -right-2 -top-2 size-20 text-gold/10" />
              <p className="relative text-base leading-relaxed text-white/90">
                "Every engagement starts with a conversation — and ends with a project delivered on time,
                on budget, and to the standard our clients expect."
              </p>
              <p className="relative mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                Yam Group of Companies
              </p>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <div className="card-lux p-8 sm:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[420px] flex-col items-center justify-center text-center"
                >
                  <span className="flex size-16 items-center justify-center rounded-full bg-gradient-gold text-navy-deep shadow-gold">
                    <CheckCircle2 className="size-8" />
                  </span>
                  <h3 className="mt-6 text-2xl font-bold text-navy">Enquiry received</h3>
                  <p className="mt-3 max-w-sm text-muted-foreground">
                    Thank you for reaching out to Yam Group of Companies. A member of our team will contact you
                    shortly to arrange your consultation.
                  </p>
                  <div className="mt-8 w-full max-w-xs space-y-3 rounded-2xl bg-navy-deep/[0.03] p-5 text-left">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      What happens next
                    </p>
                    <div className="flex items-start gap-3 text-sm text-navy">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold-deep" />
                      We review your enquiry within one business day
                    </div>
                    <div className="flex items-start gap-3 text-sm text-navy">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold-deep" />
                      A consultant reaches out to schedule a call
                    </div>
                    <div className="flex items-start gap-3 text-sm text-navy">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold-deep" />
                      We scope your project together
                    </div>
                  </div>
                  <Button
                    variant="navy"
                    className="mt-8"
                    onClick={() => {
                      setSubmitted(false);
                      setSelectedService(null);
                      setMessageLength(0);
                    }}
                  >
                    Send another enquiry
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-navy">Request a consultation</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Fields marked with <span className="text-gold-deep">*</span> are required.
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="name" label="Full name" placeholder="Your name" icon={User} required />
                    <Field id="company" label="Company" placeholder="Your organisation" icon={Building2} />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      id="email"
                      label="Email"
                      type="email"
                      placeholder="you@company.com"
                      icon={Mail}
                      required
                    />
                    <Field id="phone" label="Phone" type="tel" placeholder="+971 …" icon={Phone} />
                  </div>

                  {/* Service picker */}
                  <div className="space-y-2">
                    <Label>Service of interest</Label>
                    <input type="hidden" name="subject" value={selectedService ?? ""} />
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((option) => {
                        const active = selectedService === option;
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setSelectedService(active ? null : option)}
                            aria-pressed={active}
                            className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                              active
                                ? "border-transparent bg-gradient-navy text-gold shadow-sm"
                                : "border-border text-muted-foreground hover:border-gold-deep/40 hover:text-navy"
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="message">
                        Message <span className="text-gold-deep">*</span>
                      </Label>
                      <span
                        className={`text-xs tabular-nums ${
                          messageLength > MESSAGE_LIMIT ? "text-destructive" : "text-muted-foreground"
                        }`}
                      >
                        {messageLength}/{MESSAGE_LIMIT}
                      </span>
                    </div>
                    <div className="relative">
                      <MessageSquare className="pointer-events-none absolute left-3 top-3.5 size-4 text-muted-foreground" />
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        maxLength={MESSAGE_LIMIT}
                        placeholder="Tell us about your project…"
                        className="resize-none pl-10"
                        onChange={(e) => setMessageLength(e.target.value.length)}
                      />
                    </div>
                  </div>

                  <Button type="submit" variant="gold" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="size-4 animate-spin" /> Sending…
                      </>
                    ) : (
                      <>
                        Send enquiry <Send className="size-4" />
                      </>
                    )}
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    We respect your privacy. Your information is never shared.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Maps */}
      <section className="pb-24">
        <div className="container-lux grid gap-6 lg:grid-cols-2">
          {officeMaps.map((o) => (
            <Reveal
              key={o.label}
              className="relative overflow-hidden rounded-3xl border border-border shadow-soft"
            >
              <iframe
                title={o.title}
                src={o.embed}
                className="h-[420px] w-full grayscale-[15%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/40 via-transparent to-transparent" />
              <div className="card-lux pointer-events-auto absolute bottom-5 left-5 right-5 flex flex-col gap-4 p-5 backdrop-blur-md sm:flex-row sm:items-center">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-gold text-navy-deep">
                  <MapPin className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-deep">
                    {o.label}
                  </p>
                  <p className="text-sm font-semibold text-navy">{o.line1}</p>
                  <p className="text-xs text-muted-foreground">{o.line2}</p>
                </div>
                <a
                  href={o.directions}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-auto flex shrink-0 items-center gap-1.5 rounded-lg bg-navy px-3 py-2 text-xs font-semibold text-gold transition-colors hover:bg-navy-deep"
                >
                  Directions <Navigation className="size-3.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

function Field({
  id,
  label,
  type = "text",
  placeholder,
  required,
  icon: Icon,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>
        {label} {required && <span className="text-gold-deep">*</span>}
      </Label>
      <div className="relative">
        {Icon && <Icon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />}
        <Input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          required={required}
          className={Icon ? "pl-10" : undefined}
        />
      </div>
    </div>
  );
}