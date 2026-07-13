import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { TiltCard } from "@/components/ui/tilt-card";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { CTABanner } from "@/components/sections/CTABanner";
import { universalActivities } from "@/lib/site-data";
import boardroom from "@/assets/hero-3-boardroom.jpg";

export const Route = createFileRoute("/universal/")({
  head: () => ({
    meta: [
      { title: "YAM Universal - F.Z.E | Technology, Data & Trading Activities" },
      {
        name: "description",
        content:
          "YAM Universal - F.Z.E is a separate Yam Group company, licensed in the Ajman Free Zone, delivering custom software, IT resourcing, data analytics and general trading services.",
      },
      { property: "og:title", content: "YAM Universal - F.Z.E — Yam Group of Companies" },
      {
        property: "og:description",
        content:
          "A separate Yam Group company covering software, IT resourcing, data analytics and general trading.",
      },
      { property: "og:url", content: "https://yampmc.com/universal" },
    ],
    links: [{ rel: "canonical", href: "https://yampmc.com/universal" }],
  }),
  component: UniversalIndexPage,
});

function UniversalIndexPage() {
  return (
    <>
      <PageHero
        image={boardroom}
        eyebrow="YAM Universal - F.Z.E"
        title="A separate Yam Group company, built for technology & trade"
        description="Licensed in the Ajman Free Zone (No. 55811), YAM Universal operates independently from our Dubai project management consultancy — covering software, IT resourcing, data and trading."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "YAM Universal" }]}
      />

      <div className="container-lux relative z-10 -mt-12 sm:-mt-14">
        <Reveal delay={0.15}>
          <div className="glass-panel glow-border flex flex-col items-start gap-4 rounded-2xl px-6 py-7 shadow-elevated sm:flex-row sm:items-center sm:px-10">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy-soft text-white ring-2 ring-gold/40 ring-offset-2 ring-offset-card">
              <ShieldCheck className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-navy">YAM Universal - F.Z.E</p>
              <p className="text-xs text-muted-foreground">
                License No. 55811 · Free Zones Authority of Ajman, UAE
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <section className="relative overflow-hidden py-24 pt-20">
        <div className="pointer-events-none absolute -right-24 top-10 -z-10 size-96 rounded-full bg-soft-blue/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 -z-10 size-80 animate-float-slow rounded-full bg-gold/10 blur-3xl" />
        <div className="container-lux">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-navy-soft">
              <span className="h-0.5 w-14 rounded-full bg-navy-soft" /> Our Activities
            </span>
            <h2 className="text-balance text-3xl font-bold leading-[1.1] text-navy sm:text-4xl">
              Four capabilities, one distinct group company
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Each activity stands on its own — explore what YAM Universal delivers.
            </p>
          </div>

          <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {universalActivities.map((activity, i) => (
              <StaggerItem key={activity.slug}>
                <TiltCard max={5} scale={1.015} className="h-full rounded-xl">
                  <Link
                    to="/universal/$slug"
                    params={{ slug: activity.slug }}
                    className="card-lux group flex h-full flex-col overflow-hidden border-t-2 border-t-gold/50 transition-shadow duration-500 hover:shadow-elevated hover:border-navy-soft/40"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={activity.image}
                        alt={activity.title}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-navy-deep/10 to-transparent" />
                      <span className="absolute left-4 top-4 flex size-12 items-center justify-center rounded-xl bg-white/90 text-navy shadow-soft ring-1 ring-gold/50 backdrop-blur transition-all duration-500 group-hover:bg-navy-soft group-hover:text-white group-hover:ring-gold/80">
                        <activity.icon className="size-6" />
                      </span>
                      <span className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full border border-gold/40 bg-navy-deep/40 font-display text-xs font-bold text-gold-light backdrop-blur">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-soft">
                        {activity.tagline}
                      </span>
                      <h3 className="mt-2 text-xl font-bold text-navy">{activity.title}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {activity.text}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors group-hover:text-navy-soft">
                        Learn more
                        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </Link>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.15} className="mt-14 flex justify-center">
            <Link
              to="/contact"
              className="shine-sweep group inline-flex items-center gap-2 rounded-full bg-navy-soft px-7 py-3.5 text-sm font-semibold text-white ring-1 ring-gold/30 transition-transform duration-300 hover:scale-[1.02]"
            >
              Discuss a Universal engagement
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
