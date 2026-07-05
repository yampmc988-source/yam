import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { industries } from "@/lib/site-data";

export function HomeIndustries() {
  return (
    <section className="bg-secondary/60 py-24">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Deep expertise across the sectors that build nations"
          description="From skylines to energy infrastructure, we understand the unique demands of the industries we serve."
        />

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <StaggerItem key={ind.slug}>
                <TiltCard max={6} scale={1.02} className="rounded-2xl shadow-soft">
                  <Link
                    to="/industries"
                    className="group relative block h-72 overflow-hidden rounded-2xl transition-shadow duration-500 hover:shadow-elevated"
                  >
                    <img
                      src={ind.image}
                      alt={ind.name}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/25 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                      <div>
                        <span className="flex size-11 items-center justify-center rounded-xl bg-white/15 text-gold backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
                          <Icon className="size-5" />
                        </span>
                        <h3 className="mt-4 text-xl font-bold text-white">{ind.name}</h3>
                      </div>
                      <ArrowUpRight className="size-6 text-white/70 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold" />
                    </div>
                  </Link>
                </TiltCard>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
