import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";

const clients = [
  "Government Entities",
  "Construction Firms",
  "Developers",
  "Infrastructure",
  "Oil & Gas",
  "Enterprise",
];

const loop = [...clients, ...clients];

export function TrustStrip() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="container-lux py-10">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            Trusted by organisations that shape the UAE
          </p>
        </Reveal>
      </div>

      <div className="relative pb-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <motion.div
          className="flex w-max items-center gap-x-14"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 26, ease: "linear", repeat: Infinity }}
        >
          {loop.map((c, i) => (
            <span
              key={`${c}-${i}`}
              className="font-display text-base font-semibold whitespace-nowrap text-navy/40 transition-colors hover:text-navy sm:text-lg"
            >
              {c}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
