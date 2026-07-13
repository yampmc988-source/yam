import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Layers,
  Target,
  ShieldCheck,
  TrendingUp,
  Gauge,
} from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { CTABanner } from "@/components/sections/CTABanner";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getUniversalActivity } from "@/lib/site-data";

const benefitIcons = [Target, ShieldCheck, TrendingUp, Gauge];

export const Route = createFileRoute("/universal/$slug")({
  loader: ({ params }) => {
    const activity = getUniversalActivity(params.slug);
    if (!activity) throw notFound();
    return { slug: activity.slug };
  },
  head: ({ params }) => {
    const a = getUniversalActivity(params.slug);
    if (!a) return {};
    return {
      meta: [
        { title: `${a.title} | YAM Universal - F.Z.E` },
        { name: "description", content: a.text },
        { property: "og:title", content: `${a.title} — YAM Universal - F.Z.E` },
        { property: "og:description", content: a.text },
        { property: "og:image", content: a.image },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `https://yampmc.com/universal/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `https://yampmc.com/universal/${params.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-3xl font-bold text-navy">Activity not found</h1>
      <Button asChild variant="navy">
        <Link to="/universal">Back to YAM Universal</Link>
      </Button>
    </div>
  ),
  component: UniversalActivityDetail,
});

function UniversalActivityDetail() {
  const { slug } = Route.useLoaderData();
  const activity = getUniversalActivity(slug)!;
  const Icon = activity.icon;

  return (
    <>
      <PageHero
        image={activity.image}
        eyebrow={activity.tagline}
        title={activity.title}
        description={activity.text}
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "YAM Universal", to: "/universal" },
          { label: activity.title },
        ]}
      />

      {/* Entity badge */}
      <div className="container-lux relative z-10 -mt-12 sm:-mt-14">
        <Reveal delay={0.15}>
          <div className="glass-panel glow-border flex items-center gap-4 rounded-2xl px-6 py-5 shadow-elevated sm:px-8">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-navy text-gold shadow-soft">
              <ShieldCheck className="size-5" />
            </span>
            <p className="text-xs text-muted-foreground sm:text-sm">
              A service of <span className="font-semibold text-navy">YAM Universal - F.Z.E</span> ·
              License No. 55811 · Ajman Free Zone, UAE — a separate Yam Group company, distinct from
              our Dubai PMC consultancy.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Overview */}
      <section className="relative overflow-hidden py-24 pt-20">
        <div className="pointer-events-none absolute -left-24 top-1/3 -z-10 size-72 animate-float-slow rounded-full bg-gold/10 blur-3xl" />
        <div className="container-lux grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <span className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">
              <span className="gold-rule" /> Overview
            </span>
            <h2 className="text-balance text-3xl font-bold leading-[1.15] text-navy sm:text-4xl">
              {activity.tagline}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {activity.overview}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="perspective-midrange">
            <TiltCard max={6} scale={1.01} className="h-full rounded-2xl">
              <div className="glow-border shine-sweep card-lux h-full p-8">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-gradient-navy text-gold shadow-soft">
                  <Icon className="size-7" />
                </span>
                <h3 className="mt-6 text-lg font-bold text-navy">What's included</h3>
                <ul className="mt-4 space-y-3">
                  {activity.capabilities.map((cap) => (
                    <li key={cap} className="flex items-center gap-3 text-sm font-medium text-navy">
                      <CheckCircle2 className="size-4 shrink-0 text-gold-deep" /> {cap}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="navy" className="mt-8 w-full">
                  <Link to="/contact">
                    Enquire about this activity <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      {/* Key benefits */}
      <section className="bg-secondary/60 py-24">
        <div className="container-lux">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">
              <span className="gold-rule" /> Key Benefits
            </span>
            <h2 className="text-balance text-3xl font-bold leading-[1.1] text-navy sm:text-4xl">
              The value you can measure
            </h2>
          </Reveal>
          <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2">
            {activity.benefits.map((b, i) => {
              const BenefitIcon = benefitIcons[i % benefitIcons.length];
              return (
                <StaggerItem key={b.title}>
                  <TiltCard max={5} scale={1.01} className="h-full rounded-xl">
                    <div className="card-lux card-lux-hover group flex h-full items-start gap-5 p-7">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-navy text-gold transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <BenefitIcon className="size-5" />
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-navy">{b.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {b.text}
                        </p>
                      </div>
                    </div>
                  </TiltCard>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* Workflow / Process */}
      <section className="container-lux py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">
            <span className="gold-rule" /> How We Deliver
          </span>
          <h2 className="text-balance text-3xl font-bold leading-[1.1] text-navy sm:text-4xl">
            A clear, disciplined workflow
          </h2>
        </Reveal>
        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-[2.15rem] hidden h-px bg-border lg:block">
            <motion.div
              className="h-full origin-left bg-gradient-gold"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 perspective-midrange">
            {activity.workflow.map((w, i) => (
              <motion.div
                key={w.step}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                <div className="relative z-10 flex size-[4.3rem] items-center justify-center rounded-2xl bg-card font-display text-xl font-bold text-navy shadow-soft ring-1 ring-border transition-all duration-500 will-change-transform preserve-3d group-hover:rotate-y-18 group-hover:rotate-x-8 group-hover:bg-gradient-navy group-hover:text-gold group-hover:shadow-elevated">
                  {w.step}
                </div>
                <span className="pointer-events-none absolute -inset-3 -z-10 rounded-3xl bg-gold/0 blur-xl transition-colors duration-500 group-hover:bg-gold/15" />
                <h3 className="mt-5 text-lg font-bold text-navy">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities + Case study */}
      <section className="relative overflow-hidden bg-gradient-navy py-24 text-white">
        <div className="pointer-events-none absolute -right-20 top-10 size-96 animate-float-slow rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 size-80 animate-float-med rounded-full bg-soft-blue/10 blur-3xl" />
        <div className="container-lux relative grid gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">
              <span className="gold-rule" /> Capabilities
            </span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">What this activity covers</h2>
            <p className="mt-5 text-white/70">
              A focused capability set, delivered by YAM Universal with the same discipline as the
              rest of the group.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {activity.capabilities.map((c) => (
                <span
                  key={c}
                  className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/85 transition-colors duration-300 hover:border-gold/40 hover:bg-white/10"
                >
                  <Layers className="size-4 text-gold" /> {c}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="perspective-midrange">
            <TiltCard max={5} scale={1.01} className="rounded-3xl">
              <div className="glow-border shine-sweep rounded-3xl border border-white/10 bg-white/5 p-9 shadow-elevated backdrop-blur-sm">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
                  Case Study
                </span>
                <h3 className="mt-4 text-2xl font-bold text-white">{activity.caseStudy.title}</h3>
                <p className="mt-4 leading-relaxed text-white/70">{activity.caseStudy.result}</p>
                <div className="mt-8 border-t border-white/10 pt-6">
                  <div className="font-display text-5xl font-bold text-gradient-gold">
                    {activity.caseStudy.metric}
                  </div>
                  <p className="mt-2 text-sm text-white/60">{activity.caseStudy.metricLabel}</p>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="container-lux py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal className="text-center">
            <span className="mb-4 inline-flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">
              <span className="gold-rule" /> FAQs
            </span>
            <h2 className="text-balance text-3xl font-bold leading-[1.1] text-navy sm:text-4xl">
              Questions about {activity.title}
            </h2>
          </Reveal>
          <Reveal className="mt-12">
            <Accordion type="single" collapsible className="card-lux w-full px-6 sm:px-8">
              {activity.faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className={i === activity.faqs.length - 1 ? "border-b-0" : "border-border"}
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-navy hover:text-gold-deep hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
