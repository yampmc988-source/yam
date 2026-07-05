import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { services } from "@/lib/site-data";

export function HomeServices() {
  return (
    <section className="relative bg-secondary/60 py-24">
      <div className="container-lux">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What We Do"
            title="A complete spectrum of project management expertise"
            description="Seven integrated disciplines, one governed system — engineered to give you certainty over every dimension of delivery."
          />
          <Link
            to="/services"
            className="group hidden items-center gap-2 whitespace-nowrap text-sm font-semibold text-navy transition-colors hover:text-gold-deep md:flex"
          >
            View all services
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
          <StaggerItem>
            <TiltCard max={6} scale={1.015} className="h-full rounded-xl">
              <Link
                to="/services"
                className="group relative flex h-full min-h-[280px] flex-col justify-between overflow-hidden rounded-xl bg-gradient-navy p-8 shadow-soft transition-shadow duration-500 hover:shadow-elevated"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 size-40 animate-float-slow rounded-full bg-gold/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-14 -left-10 size-32 animate-float-med rounded-full bg-soft-blue/10 blur-3xl" />
                <span className="relative text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">Every discipline</span>
                <div className="relative">
                  <h3 className="text-2xl font-bold leading-tight text-white">
                    One partner across the full project lifecycle
                  </h3>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                    Explore all services
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </TiltCard>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}
