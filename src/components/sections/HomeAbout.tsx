import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Counter } from "@/components/ui/counter";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/ui/tilt-card";
import { stats } from "@/lib/site-data";
import aboutImg from "@/assets/about-collaboration.jpg";

const points = [
  "Senior-led delivery on every engagement",
  "Data-driven governance and transparency",
  "Deep UAE market and sector expertise",
];

export function HomeAbout() {
  return (
    <section className="container-lux py-24">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative order-2 lg:order-1 perspective-midrange">
          <TiltCard max={6} scale={1.01} className="rounded-3xl shadow-elevated">
            <div className="relative overflow-hidden rounded-3xl">
              <motion.img
                src={aboutImg}
                alt="YAM consultants collaborating on a project plan"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/25 to-transparent" />
            </div>
          </TiltCard>
          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ y: -6, rotate: -1 }}
            className="glass-panel glow-border absolute -bottom-8 -right-4 w-52 rounded-2xl p-6 shadow-elevated transition-shadow duration-500 sm:right-8"
          >
            <div className="font-display text-4xl font-bold text-navy">
              <Counter value={98} suffix="%" />
            </div>
            <p className="mt-1 text-sm text-muted-foreground">Client satisfaction across engagements</p>
          </motion.div>
          <div className="pointer-events-none absolute -left-6 -top-6 -z-10 size-40 animate-float-slow rounded-full bg-gold/15 blur-2xl" />
          <div className="pointer-events-none absolute -right-10 top-1/3 -z-10 size-24 animate-float-med rounded-full bg-soft-blue/20 blur-2xl" />
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">
              <span className="gold-rule" /> Who We Are
            </span>
            <h2 className="text-balance text-3xl font-bold leading-[1.1] text-navy sm:text-4xl md:text-[2.6rem]">
              A trusted partner for the region's most ambitious projects
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              YAM Management Services is a premium project management consultancy headquartered in Dubai. We
              bring senior-led leadership, rigorous governance and digital intelligence to the organisations
              shaping the UAE's built environment, energy landscape and digital future.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-8 space-y-4">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-navy">
                  <CheckCircle2 className="size-5 shrink-0 text-gold-deep" />
                  <span className="font-medium">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 grid grid-cols-2 gap-6 border-y border-border py-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-bold text-gradient-navy sm:text-4xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <Button asChild variant="navy" size="lg" className="mt-8">
              <Link to="/about">
                Discover our story <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
