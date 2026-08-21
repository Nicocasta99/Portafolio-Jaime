"use client";

/**
 * Hero — Apertura del portafolio de Jaime Andrés Castaño.
 * Panel derecho: capacidades clave con barras de señal animadas.
 */
import Link from "next/link";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { fadeUp, stagger } from "@/lib/motion";

const CAPABILITIES = [
  { name: "Planeación de Producción", cat: "Operaciones", pct: 96, accent: false },
  { name: "S&OP / MRP", cat: "Supply Chain", pct: 90, accent: true },
  { name: "Gerencia de Proyectos", cat: "PMO", pct: 92, accent: false },
  { name: "Power BI", cat: "Datos & Reporting", pct: 85, accent: true },
  { name: "Liderazgo de equipos", cat: "500+ colaboradores", pct: 94, accent: false },
];

const TOOLS = ["Excel Avanzado", "Microsoft Project", "ERP", "S&OP", "Scrum", "Lean"];

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-24">
      <div className="shell grid w-full gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <motion.div variants={stagger} initial="hidden" animate="show" className="relative z-10">
          <motion.span variants={fadeUp} className="eyebrow inline-flex items-center gap-2">
            <span className="h-px w-8 bg-amber/70" />
            OPERACIONES · PLANEACIÓN · GERENCIA DE PROYECTOS
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(2.6rem, 7vw, 5rem)" }}
          >
            <span className="block text-gradient font-extrabold">Jaime Andrés</span>
            <span className="block font-extrabold text-ink">Castaño Gómez</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 font-mono text-sm uppercase tracking-widest2 text-slate"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-lg text-base leading-relaxed text-graphite sm:text-[1.05rem]"
          >
            Lidero operaciones, planeación y proyectos que convierten metas de producción en resultados medibles.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-3 max-w-lg text-sm leading-relaxed text-slate"
          >
            {profile.summaryShort}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/servicios"
              className="group relative overflow-hidden rounded-full bg-amber px-7 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-8px_rgba(255,77,45,0.45)]"
            >
              Ver servicios
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>

            <Link
              href="/sobre-mi"
              className="rounded-full border border-hairline px-7 py-3 text-sm font-semibold text-ink transition-colors hover:border-petrol hover:bg-petrol/5"
            >
              Conocer mi perfil
            </Link>

            <Link
              href="/contacto"
              className="rounded-full px-7 py-3 text-sm font-semibold text-slate transition-colors hover:text-ink"
            >
              Contacto
            </Link>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-amber-deep/70"
          >
            Método · Disciplina · Resultados
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.35 }}
          className="relative hidden lg:block"
        >
          <div className="panel relative overflow-hidden p-7">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber/60 to-transparent" />

            <div className="mb-7 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate">
                {"// Capacidades clave"}
              </span>
              <span className="font-mono text-[10px] text-amber-deep">20+ años</span>
            </div>

            <div className="space-y-5">
              {CAPABILITIES.map((cap, i) => (
                <div key={cap.name}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-display text-base font-bold text-ink">{cap.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9px] text-slate">{cap.cat}</span>
                      <span
                        className={`h-2 w-2 rounded-full ${cap.accent ? "bg-amber shadow-[0_0_6px_2px_rgba(255,77,45,0.35)]" : "bg-petrol-glow shadow-[0_0_6px_2px_rgba(30,179,195,0.3)]"}`}
                      />
                    </div>
                  </div>
                  <div className="h-px bg-hairline">
                    <motion.div
                      className={`h-px ${cap.accent ? "bg-gradient-to-r from-amber via-amber/60 to-transparent" : "bg-gradient-to-r from-petrol-glow via-petrol-glow/50 to-transparent"}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${cap.pct}%` }}
                      transition={{ duration: 1.2, delay: 0.4 + i * 0.14, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="my-6 h-px bg-hairline" />

            <div>
              <p className="mb-3 font-mono text-[9px] uppercase tracking-widest text-slate">
                + Herramientas
              </p>
              <div className="flex flex-wrap gap-1.5">
                {TOOLS.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-hairline px-2.5 py-0.5 font-mono text-[9px] text-graphite"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-5 font-mono text-[9px] leading-relaxed text-slate">
              {profile.availability}
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-slate">Descender</span>
        <span className="h-10 w-px bg-gradient-to-b from-amber/50 to-transparent" />
      </motion.div>
    </section>
  );
}
