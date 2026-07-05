import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { TiltCard } from "@/components/ui/tilt-card";
import type { Service } from "@/lib/site-data";

export function ServiceCard({ service, index }: { service: Service; index?: number }) {
  const Icon = service.icon;
  return (
    <TiltCard max={5} scale={1.015} className="h-full rounded-xl">
      <Link
        to="/services/$slug"
        params={{ slug: service.slug }}
        className="card-lux group flex h-full flex-col overflow-hidden transition-shadow duration-500 hover:shadow-elevated hover:border-gold/40"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            className="size-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-navy-deep/10 to-transparent" />
          <span className="absolute left-4 top-4 flex size-12 items-center justify-center rounded-xl bg-white/90 text-navy shadow-soft backdrop-blur transition-colors duration-500 group-hover:bg-gradient-gold group-hover:text-navy-deep">
            <Icon className="size-6" />
          </span>
          {typeof index === "number" && (
            <span className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full border border-white/30 bg-navy-deep/40 font-display text-xs font-bold text-white/90 backdrop-blur">
              {String(index).padStart(2, "0")}
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col p-6">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">{service.tagline}</span>
          <h3 className="mt-2 text-xl font-bold text-navy">{service.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors group-hover:text-gold-deep">
            Learn more
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </TiltCard>
  );
}
