"use client";

/**
 * ImpactMetrics — resultados cuantitativos tomados directamente de la
 * trayectoria de Jaime (sin cifras inventadas), justo debajo del Hero.
 */
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const METRICS = [
  { value: "20+", label: "años de trayectoria en manufactura" },
  { value: "500", label: "colaboradores liderados en 3 turnos" },
  { value: "4", label: "plantas coordinadas simultáneamente" },
  { value: "3", label: "roles complementarios: producción, planeación y proyectos" },
];

export default function ImpactMetrics() {
  return (
    <section className="shell py-16">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
        <span className="eyebrow inline-flex items-center gap-2">
          <span className="h-px w-6 bg-petrol/50" />
          {"// Trayectoria"}
        </span>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4"
      >
        {METRICS.map((m) => (
          <motion.div key={m.label} variants={fadeUp} className="bg-card p-6 md:p-8">
            <p className="font-display text-3xl font-extrabold text-gradient md:text-4xl">
              {m.value}
            </p>
            <p className="mt-2 text-sm leading-snug text-graphite">{m.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
