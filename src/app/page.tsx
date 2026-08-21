import Link from "next/link";
import Hero from "@/components/Hero";
import ImpactMetrics from "@/components/ImpactMetrics";
import SectionIntro from "@/components/SectionIntro";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import JournalGrid from "@/components/JournalGrid";

const PILLARS = [
  {
    title: "Operaciones & Producción",
    text: "Lidero la programación, ejecución y control de operaciones productivas, gestionando capacidades, maquinaria y equipos de hasta 500 personas en tres turnos.",
    tags: "Planeación de producción · Balanceo de líneas · Multi-planta",
  },
  {
    title: "Planeación & Supply Chain",
    text: "Articulo producción y abastecimiento mediante S&OP y MRP, con seguimiento de Lead Time y disponibilidad de materiales.",
    tags: "S&OP · MRP · Abastecimiento · Lead Time",
  },
  {
    title: "Gerencia de Proyectos & PMO",
    text: "Dirijo cronogramas, riesgos, indicadores y equipos multidisciplinarios con metodologías ágiles y Lean.",
    tags: "Microsoft Project · Scrum · Lean · Gestión de riesgos",
  },
  {
    title: "Mejora Continua",
    text: "Diagnostico procesos, diseño indicadores y acompaño la implementación de acciones que aumentan productividad y eficiencia.",
    tags: "Diagnóstico DOFA · KPIs · Optimización de procesos",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <ImpactMetrics />

      {/* ── 01 — Enfoque ─────────────────────────────────── */}
      <section className="shell py-16">
        <SectionIntro
          eyebrow="// 01 — Enfoque"
          title="Cuatro frentes, una misma disciplina."
        />

        <Reveal className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <div key={p.title} className="bg-card p-6">
              <span className="font-mono text-xs text-petrol">0{i + 1}</span>
              <h3 className="mt-3 font-display text-base font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-snug text-graphite">{p.text}</p>
              <p className="mt-3 font-mono text-[10px] leading-relaxed text-slate">{p.tags}</p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <Link
            href="/sobre-mi"
            className="inline-flex items-center gap-2 text-sm font-medium text-petrol transition-colors hover:text-ink"
          >
            Conocer el perfil completo
            <span>→</span>
          </Link>
        </Reveal>
      </section>

      <div className="shell">
        <div className="hairline" />
      </div>

      {/* ── 02 — Servicios ───────────────────────────────── */}
      <section className="shell py-24">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
          <SectionIntro
            eyebrow="// 02 — Servicios"
            title="Consultoría en operaciones y proyectos."
            description="Diagnóstico, planeación de producción, S&OP y gerencia de proyectos para empresas que necesitan orden y resultados medibles."
          />
          <Reveal>
            <Link
              href="/servicios"
              className="rounded-full border border-hairline px-5 py-2.5 text-sm text-ink transition-colors hover:border-petrol hover:bg-petrol/5"
            >
              Ver todos los servicios
            </Link>
          </Reveal>
        </div>
      </section>

      <div className="shell">
        <div className="hairline" />
      </div>

      {/* ── 03 — Journal ─────────────────────────────────── */}
      <section className="shell py-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <SectionIntro
            eyebrow="// 03 — Journal"
            title="Fuera de la oficina."
            description="Familia, viajes y música. El lado personal detrás de la planeación y los proyectos."
          />
          <Reveal>
            <Link
              href="/journal"
              className="rounded-full border border-hairline px-5 py-2.5 text-sm text-ink transition-colors hover:border-petrol hover:bg-petrol/5"
            >
              Ver Journal completo
            </Link>
          </Reveal>
        </div>

        <JournalGrid />
      </section>

      {/* ── CTA final ────────────────────────────────────── */}
      <CTASection />
    </>
  );
}
