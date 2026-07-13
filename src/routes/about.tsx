import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Eye, Quote } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { Counter } from "@/components/ui/counter";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/ui/tilt-card";
import { Magnetic } from "@/components/ui/magnetic";
import { CTABanner } from "@/components/sections/CTABanner";
import { YamUniversalActivities } from "@/components/sections/YamUniversalActivities";
import { coreValues, stats, whyYam } from "@/lib/site-data";
import aboutImg from "@/assets/about-collaboration.jpg";
import boardroom from "@/assets/hero-3-boardroom.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Yam Group of Companies | Dubai Project Consultancy" },
      {
        name: "description",
        content:
          "Learn about Yam Group of Companies — a Dubai-based project management consultancy delivering senior-led governance, cost control and digital transformation across the UAE.",
      },
      { property: "og:title", content: "About Yam Group of Companies" },
      {
        property: "og:description",
        content: "Senior-led project management leadership trusted across the UAE's most ambitious projects.",
      },
      { property: "og:url", content: `https://yampmc.com/about` },
    ],
    links: [{ rel: "canonical", href: `https://yampmc.com/about` }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        image={boardroom}
        eyebrow="About Yam"
        title="Precision leadership for the region's landmark projects"
        description="We are a Dubai-based consultancy built on a simple conviction: that disciplined governance and genuine partnership turn complexity into confidence."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      {/* Story */}
      <section className="container-lux py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">
              <span className="gold-rule" /> Our Story
            </span>
            <h2 className="text-balance text-3xl font-bold leading-[1.1] text-navy sm:text-4xl">
              Founded to raise the standard of project delivery in the UAE
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Yam Group of Companies was established to bring a new level of rigour, transparency and
                intelligence to project management across the United Arab Emirates. We saw ambitious projects
                held back not by a lack of vision, but by fragmented governance and reactive delivery.
              </p>
              <p>
                Today, we partner with government organisations, developers, contractors, industrial leaders
                and enterprise businesses — embedding senior-led leadership and data-driven control across the
                full project lifecycle. From skyline-defining towers to critical energy infrastructure, we help
                our clients deliver with certainty.
              </p>
              <p>
                Our approach blends the discipline of global consulting practice with deep local market
                fluency — a combination that consistently turns complex mandates into measurable success.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="relative perspective-midrange">
            <TiltCard max={6} scale={1.01} className="rounded-3xl shadow-elevated">
              <div className="overflow-hidden rounded-3xl">
                <motion.img
                  src={aboutImg}
                  alt="Yam leadership collaborating in a modern office"
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ y: -6, rotate: -1 }}
              className="glass-panel glow-border absolute -bottom-8 -left-4 w-52 rounded-2xl p-6 shadow-elevated transition-shadow duration-500 sm:left-8"
            >
              <div className="font-display text-4xl font-bold text-navy">
                <Counter value={15} suffix="+" />
              </div>
              <p className="mt-1 text-sm text-muted-foreground">Years of senior-led project leadership</p>
            </motion.div>
            <div className="pointer-events-none absolute -right-6 -bottom-6 -z-10 size-44 animate-float-slow rounded-full bg-gold/15 blur-2xl" />
            <div className="pointer-events-none absolute -left-10 top-1/4 -z-10 size-28 animate-float-med rounded-full bg-soft-blue/20 blur-2xl" />
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative overflow-hidden bg-secondary/60 py-24 perspective-midrange">
        <div className="pointer-events-none absolute -right-24 top-0 size-96 rounded-full bg-gold/5 blur-[100px]" />
        <div className="container-lux relative grid gap-6 md:grid-cols-2">
          {[
            {
              icon: Compass,
              label: "Our Mission",
              text: "To empower organisations across the UAE to deliver their most important projects with confidence — through disciplined governance, commercial certainty and digital intelligence.",
            },
            {
              icon: Eye,
              label: "Our Vision",
              text: "To be recognised as the leading project management consultancy in the Middle East — the trusted partner behind the region's most significant achievements.",
            },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 0.1}>
              <TiltCard max={6} scale={1.01} className="h-full rounded-xl">
                <div className="card-lux group relative h-full overflow-hidden p-9">
                  <div className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-gold/0 blur-2xl transition-colors duration-500 group-hover:bg-gold/10" />
                  <span
                    className="relative flex size-14 items-center justify-center rounded-2xl bg-gradient-navy text-gold shadow-soft transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                    style={{ transform: "translateZ(24px)" }}
                  >
                    <item.icon className="size-7" />
                  </span>
                  <h3 className="relative mt-6 text-2xl font-bold text-navy" style={{ transform: "translateZ(12px)" }}>
                    {item.label}
                  </h3>
                  <p className="relative mt-4 text-base leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="container-lux py-24 perspective-midrange">
        <SectionHeading
          align="center"
          eyebrow="Core Values"
          title="The principles behind every engagement"
          className="mx-auto"
        />
        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((v, i) => (
            <StaggerItem key={v.title}>
              <TiltCard max={7} className="h-full rounded-xl">
                <div className="card-lux group relative h-full overflow-hidden p-8">
                  <div className="pointer-events-none absolute -right-8 -top-8 size-28 rounded-full bg-gold/0 blur-2xl transition-colors duration-500 group-hover:bg-gold/10" />
                  <span
                    className="relative font-display text-4xl font-bold text-gradient-gold"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    0{i + 1}
                  </span>
                  <h3 className="relative mt-5 text-xl font-bold text-navy" style={{ transform: "translateZ(10px)" }}>
                    {v.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Leadership philosophy quote */}
      <section className="relative overflow-hidden bg-gradient-navy py-24">
        <div className="pointer-events-none absolute -left-20 top-10 size-80 animate-float-slow rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 size-96 animate-float-med rounded-full bg-soft-blue/10 blur-3xl" />
        <div className="container-lux relative">
          <Reveal className="mx-auto max-w-4xl text-center">
            <span className="glow-border relative mx-auto flex size-16 items-center justify-center rounded-2xl bg-white/5 backdrop-blur-sm">
              <Quote className="size-8 text-gold" />
            </span>
            <blockquote className="mt-8 text-balance text-2xl font-medium leading-snug text-white sm:text-3xl md:text-[2.1rem]">
              "We lead as we would want to be led — with candour, foresight and an unwavering commitment to
              our clients' success. Every project is a promise, and we honour it with discipline."
            </blockquote>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-gold-light">
              The Yam Leadership Philosophy
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why choose + stats */}
      <section className="container-lux py-24 perspective-midrange">
        <SectionHeading
          eyebrow="Why Choose Yam"
          title="Reasons the region's leaders trust us with their most critical work"
        />
        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <StaggerGroup className="grid gap-5 sm:grid-cols-2">
            {whyYam.map((item) => (
              <StaggerItem key={item.title}>
                <TiltCard max={7} className="h-full rounded-xl">
                  <div className="card-lux group relative h-full overflow-hidden p-6">
                    <div className="pointer-events-none absolute -right-6 -top-6 size-24 rounded-full bg-gold/0 blur-2xl transition-colors duration-500 group-hover:bg-gold/10" />
                    <h3 className="relative text-lg font-bold text-navy">{item.title}</h3>
                    <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal delay={0.1} className="flex flex-col justify-center">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="glow-border rounded-3xl bg-secondary/70 p-10 shadow-elevated transition-shadow duration-500 hover:shadow-[0_32px_70px_-24px_oklch(0.28_0.062_264_/_0.28)]"
            >
              <div className="grid grid-cols-2 gap-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-4xl font-bold text-gradient-navy sm:text-5xl">
                      <Counter value={s.value} suffix={s.suffix} />
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
              <Magnetic strength={0.25} className="mt-10 flex w-full sm:w-auto">
                <Button asChild variant="navy" size="lg" className="shine-sweep w-full sm:w-auto">
                  <Link to="/contact">
                    Work with us <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </Magnetic>
            </motion.div>
          </Reveal>
        </div>
      </section>

      <YamUniversalActivities />

      <CTABanner />
    </>
  );
}
