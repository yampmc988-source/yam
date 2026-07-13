import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { Magnetic } from "@/components/ui/magnetic";
import { universalActivities } from "@/lib/site-data";

export function YamUniversalActivities() {
  return (
    <section className="relative overflow-hidden bg-secondary/60 py-24 perspective-midrange">
      <div className="pointer-events-none absolute -left-24 top-10 -z-10 size-96 rounded-full bg-soft-blue/40 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 -z-10 size-80 animate-float-slow rounded-full bg-gold/10 blur-[100px]" />
      <div className="container-lux relative">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="glow-border mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-gold/30 bg-navy-soft/[0.07] px-4 py-1.5 text-center text-[0.68rem] font-semibold uppercase leading-relaxed tracking-[0.14em] text-navy-soft shadow-[0_0_0_1px_oklch(0.74_0.108_84/0.12)] sm:text-xs sm:tracking-[0.2em]">
            <span className="flex size-5 items-center justify-center rounded-full bg-gradient-gold text-navy-deep">
              <ShieldCheck className="size-3" />
            </span>
            YAM Universal - F.Z.E · License No. 55811 · Ajman Free Zone
          </span>
          <h2 className="text-balance text-3xl font-bold leading-[1.1] text-navy sm:text-4xl md:text-[2.6rem]">
            A separate Yam Group company, built for technology &amp; trade
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Alongside our Dubai project management consultancy, YAM Universal is a distinctly
            licensed group company delivering its own set of technology, resourcing, data and
            trading capabilities.
          </p>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {universalActivities.map((activity, i) => (
            <StaggerItem key={activity.slug}>
              <TiltCard max={7} className="h-full rounded-xl">
                <Link
                  to="/universal/$slug"
                  params={{ slug: activity.slug }}
                  className="card-lux group relative flex h-full flex-col overflow-hidden border-t-2 border-t-gold/50 p-0"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/75 via-navy-deep/15 to-transparent" />
                    <span className="absolute left-4 top-4 flex size-11 items-center justify-center rounded-xl bg-white/90 text-navy-soft shadow-soft ring-1 ring-gold/50 backdrop-blur transition-all duration-500 group-hover:bg-navy-soft group-hover:text-white group-hover:ring-gold/80">
                      <activity.icon className="size-5" />
                    </span>
                    <span className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full border border-gold/50 bg-navy-deep/50 font-display text-xs font-bold text-gold-light backdrop-blur">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="relative flex flex-1 flex-col p-7">
                    <h3 className="text-lg font-bold text-navy">{activity.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {activity.text}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-soft transition-colors group-hover:text-navy">
                      Learn more
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal
          delay={0.15}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Magnetic strength={0.25}>
            <Button asChild variant="navy" size="lg" className="shine-sweep ring-1 ring-gold/40">
              <Link to="/contact">
                Discuss a Universal engagement <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Magnetic>
          <Link
            to="/universal"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-navy-soft transition-colors hover:text-navy"
          >
            View all YAM Universal activities
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
