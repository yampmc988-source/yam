import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";

interface CTABannerProps {
  title?: string;
  description?: string;
}

export function CTABanner({
  title = "Let's deliver your next landmark project.",
  description = "Partner with a consultancy that treats your objectives as its own. Request a consultation and discover the Yam difference.",
}: CTABannerProps) {
  return (
    <section className="container-lux py-24">
      <Reveal>
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-navy px-8 py-16 text-center shadow-elevated sm:px-16 md:py-20">
          <div className="pointer-events-none absolute -left-16 -top-16 size-72 animate-float-slow rounded-full bg-gold/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 size-80 animate-float-med rounded-full bg-soft-blue/10 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" style={{ background: "radial-gradient(circle at 50% 0%, oklch(0.74 0.108 84 / 0.14), transparent 60%)" }} />

          <div className="relative mx-auto max-w-2xl">
            <span className="mx-auto mb-5 flex w-fit items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold-light">
              <span className="gold-rule" /> Start the conversation
            </span>
            <h2 className="text-balance text-3xl font-bold leading-tight text-white sm:text-4xl md:text-[2.7rem]">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              {description}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Magnetic strength={0.3}>
                <Button asChild variant="gold" size="lg" className="shine-sweep">
                  <Link to="/contact">
                    Get a Consultation <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </Magnetic>
              <Magnetic strength={0.3}>
                <Button asChild variant="light-outline" size="lg">
                  <Link to="/services">Explore Services</Link>
                </Button>
              </Magnetic>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
