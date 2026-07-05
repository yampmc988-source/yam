import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
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
        </StaggerGroup>

        <div className="mt-12 flex justify-center md:hidden">
          <Button variant="navy" size="lg" asChild>
            <Link to="/services">
              Explore all services
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
