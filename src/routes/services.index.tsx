import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { Counter } from "@/components/ui/counter";
import { HomeProcess } from "@/components/sections/HomeProcess";
import { CTABanner } from "@/components/sections/CTABanner";
import { services, stats } from "@/lib/site-data";
import boardroom from "@/assets/hero-5-digital.jpg";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services | Project Management & PMO Consulting — Yam" },
      {
        name: "description",
        content:
          "Explore Yam's project management services: PMO consulting, cost management, QA/QC, risk management, digital project management and project controls across the UAE.",
      },
      { property: "og:title", content: "Services — Yam Group of Companies" },
      {
        property: "og:description",
        content: "Seven integrated project management disciplines engineered for delivery certainty.",
      },
      { property: "og:url", content: `https://yampmc.com/services` },
    ],
    links: [{ rel: "canonical", href: `https://yampmc.com/services` }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        image={boardroom}
        eyebrow="Our Services"
        title="Integrated services for end-to-end delivery certainty"
        description="Seven disciplines, engineered to work as one governed system — so nothing about your project is left to chance."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />

      {/* Floating stats bar, overlapping the hero */}
      <div className="container-lux relative z-10 -mt-12 sm:-mt-14">
        <Reveal delay={0.15}>
          <div className="glass-panel glow-border grid grid-cols-2 gap-6 rounded-2xl px-6 py-8 shadow-elevated sm:grid-cols-4 sm:px-10">
            {stats.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <div className="font-display text-3xl font-bold text-gradient-navy sm:text-4xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-1 text-xs leading-snug text-muted-foreground sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <section className="relative overflow-hidden py-24 pt-20">
        <div className="pointer-events-none absolute -right-24 top-10 -z-10 size-96 animate-float-slow rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 -z-10 size-80 animate-float-med rounded-full bg-soft-blue/15 blur-3xl" />
        <div className="container-lux">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Capabilities"
              title="Expertise that spans the full project lifecycle"
              description="Each service stands on its own — and together they form a complete, connected delivery capability."
            />
            <Link
              to="/contact"
              className="group hidden shrink-0 items-center gap-2 whitespace-nowrap text-sm font-semibold text-navy transition-colors hover:text-gold-deep md:flex"
            >
              Discuss a bespoke scope
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <StaggerItem key={service.slug}>
                <ServiceCard service={service} index={i + 1} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <div className="bg-secondary/60">
        <HomeProcess />
      </div>

      <CTABanner />
    </>
  );
}
