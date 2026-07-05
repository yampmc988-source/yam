import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { whyYam } from "@/lib/site-data";
import { Award, Database, Layers, Target, Workflow, MapPin } from "lucide-react";

const icons = [Target, Database, Layers, Award, Workflow, MapPin];

export function HomeWhy() {
  return (
    <section className="relative overflow-hidden bg-gradient-navy py-24 text-white perspective-midrange">
      <div className="pointer-events-none absolute -right-20 top-10 size-96 animate-float-slow rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 size-80 animate-float-med rounded-full bg-soft-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-0 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[100px]" />
      <div className="container-lux relative">
        <SectionHeading
          light
          align="center"
          eyebrow="Why YAM"
          title="The advantages that set us apart"
          description="We combine the discipline of a global consultancy with the agility and dedication of a trusted local partner."
          className="mx-auto"
        />
        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyYam.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <StaggerItem key={item.title}>
                <TiltCard max={7} className="h-full rounded-2xl">
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-sm transition-all duration-500 hover:border-gold/30 hover:bg-white/[0.07]">
                    <div className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-gold/0 blur-2xl transition-colors duration-500 group-hover:bg-gold/10" />
                    <span
                      className="relative flex size-14 items-center justify-center rounded-xl bg-gradient-gold text-navy-deep shadow-gold transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                      style={{ transform: "translateZ(24px)" }}
                    >
                      <Icon className="size-6" />
                    </span>
                    <h3 className="relative mt-6 text-lg font-bold text-white" style={{ transform: "translateZ(12px)" }}>
                      {item.title}
                    </h3>
                    <p className="relative mt-3 text-sm leading-relaxed text-white/65">{item.text}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
