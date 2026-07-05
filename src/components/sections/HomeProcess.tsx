import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/lib/site-data";

export function HomeProcess() {
  return (
    <section className="container-lux py-24">
      <SectionHeading
        align="center"
        eyebrow="Our Methodology"
        title="A proven process for predictable delivery"
        description="Six disciplined stages that transform ambition into governed, measurable, successful outcomes."
        className="mx-auto"
      />

      <div className="relative mt-16">
        {/* Connecting line */}
        <div className="absolute left-0 right-0 top-[2.15rem] hidden h-px bg-border lg:block">
          <motion.div
            className="h-full origin-left bg-gradient-gold"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5 perspective-midrange">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              <div className="relative z-10 flex size-[4.3rem] items-center justify-center rounded-2xl bg-card font-display text-xl font-bold text-navy shadow-soft ring-1 ring-border transition-all duration-500 will-change-transform preserve-3d group-hover:rotate-y-18 group-hover:rotate-x-8 group-hover:bg-gradient-navy group-hover:text-gold group-hover:shadow-elevated">
                {step.step}
              </div>
              <span className="pointer-events-none absolute -inset-3 -z-10 rounded-3xl bg-gold/0 blur-xl transition-colors duration-500 group-hover:bg-gold/15" />
              <h3 className="mt-5 text-lg font-bold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
