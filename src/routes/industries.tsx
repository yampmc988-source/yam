import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, Lightbulb, TrendingUp, ArrowRight, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/reveal";
import { CTABanner } from "@/components/sections/CTABanner";
import { industries } from "@/lib/site-data";
import heroImg from "@/assets/hero-1-dubai.jpg";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries | Construction, Energy & Technology — YAM" },
      {
        name: "description",
        content:
          "YAM delivers project management expertise across construction, real estate, manufacturing, oil & gas and technology sectors throughout the UAE.",
      },
      { property: "og:title", content: "Industries We Serve — YAM Management Services" },
      {
        property: "og:description",
        content: "Sector-specific project management expertise across the industries that build the UAE.",
      },
      { property: "og:url", content: `https://yampmc.com/industries` },
    ],
    links: [{ rel: "canonical", href: `https://yampmc.com/industries` }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  const total = industries.length;

  return (
    <>
      <PageHero
        image={heroImg}
        eyebrow="Industries"
        title="Sector expertise that turns complexity into confidence"
        description="We understand that every industry carries its own pressures. Our governance is tailored to the realities of the sectors we serve."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Industries" }]}
      />

      {/* Jump navigation */}
      <div className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="container-lux flex items-center gap-2 overflow-x-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <span className="hidden shrink-0 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:block">
            Jump to
          </span>
          {industries.map((ind) => (
            <a
              key={ind.slug}
              href={`#${ind.slug}`}
              className="shrink-0 whitespace-nowrap rounded-full border border-border px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-gold-deep/40 hover:text-navy"
            >
              {ind.name}
            </a>
          ))}
        </div>
      </div>

      {industries.map((ind, i) => {
        const Icon = ind.icon;
        const reversed = i % 2 === 1;
        return (
          <section
            key={ind.slug}
            id={ind.slug}
            className={`scroll-mt-20 ${i % 2 === 1 ? "bg-secondary/60 py-24" : "bg-background py-24"}`}
          >
            <div className="container-lux grid items-center gap-14 lg:grid-cols-2">
              <Reveal className={reversed ? "lg:order-2" : ""}>
                <div className="group relative overflow-hidden rounded-3xl shadow-elevated">
                  <motion.img
                    src={ind.image}
                    alt={ind.name}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-navy-deep/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-md">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gold text-navy-deep">
                      <Icon className="size-4.5" />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gold/90">
                        Sector {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                      </p>
                      <p className="text-sm font-semibold text-white">{ind.name}</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1} className={reversed ? "lg:order-1" : ""}>
                <span className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold-deep">
                  <span className="gold-rule" /> Sector focus
                </span>
                <span className="flex size-14 items-center justify-center rounded-2xl bg-gradient-navy text-gold shadow-soft">
                  <Icon className="size-7" />
                </span>
                <h2 className="mt-6 text-3xl font-bold text-navy sm:text-4xl">{ind.name}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{ind.overview}</p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <IndCol icon={AlertCircle} title="Challenges" items={ind.challenges} tone="muted" />
                  <IndCol icon={Lightbulb} title="Solutions" items={ind.solutions} tone="navy" />
                  <IndCol icon={TrendingUp} title="Benefits" items={ind.benefits} tone="gold" />
                </div>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-gold-deep"
                >
                  Discuss a {ind.name.toLowerCase()} project
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>
          </section>
        );
      })}

      <CTABanner title="Have a project in your sector?" />
    </>
  );
}

function IndCol({
  icon: Icon,
  title,
  items,
  tone,
}: {
  icon: typeof CheckCircle2;
  title: string;
  items: string[];
  tone: "muted" | "navy" | "gold";
}) {
  const styles = {
    muted: { text: "text-muted-foreground", bullet: "bg-muted-foreground/40", border: "hover:border-border" },
    navy: { text: "text-navy", bullet: "bg-navy", border: "hover:border-navy/30" },
    gold: { text: "text-gold-deep", bullet: "bg-gold-deep", border: "hover:border-gold-deep/40" },
  }[tone];

  return (
    <div className={`rounded-2xl border border-transparent p-3 transition-colors ${styles.border}`}>
      <div className={`flex items-center gap-2 ${styles.text}`}>
        <Icon className="size-4" />
        <h3 className="text-xs font-semibold uppercase tracking-[0.14em]">{title}</h3>
      </div>
      <ul className="mt-3 space-y-2.5">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2 text-sm leading-snug text-muted-foreground">
            <span className={`mt-1.5 size-1 shrink-0 rounded-full ${styles.bullet}`} />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}