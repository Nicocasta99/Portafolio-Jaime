import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionIntro from "@/components/SectionIntro";
import Reveal from "@/components/Reveal";
import IntroVideo from "@/components/IntroVideo";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import EducationBlock from "@/components/EducationBlock";
import SkillCloud from "@/components/SkillCloud";
import CTASection from "@/components/CTASection";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Perfil profesional de Jaime Andrés Castaño: experiencia, educación, habilidades y forma de trabajo en operaciones, planeación y gerencia de proyectos.",
};

const howIWork = [
  {
    step: "01",
    title: "Entender la operación",
    text: "Antes de proponer cambios, entiendo el proceso real, las restricciones y las metas que hay que cumplir.",
  },
  {
    step: "02",
    title: "Planear con datos",
    text: "Estructuro planes de producción, S&OP e indicadores sobre información confiable, no sobre supuestos.",
  },
  {
    step: "03",
    title: "Ejecutar con disciplina",
    text: "Cronogramas, responsables y seguimiento claro: lo que se planea, se controla hasta el cierre.",
  },
  {
    step: "04",
    title: "Medir el resultado",
    text: "Indicadores de cumplimiento y productividad para saber si la mejora realmente ocurrió.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre mí · Perfil profesional"
        title={profile.owner}
        description={`${profile.tagline}.`}
      />

      {/* Resumen + video */}
      <section className="shell pb-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Reveal className="space-y-5">
            <p className="text-base leading-relaxed text-ink/80">{profile.summaryLong}</p>
            <p className="border-l border-petrol/40 pl-4 text-sm leading-relaxed text-graphite">
              {profile.availability}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {profile.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-petrol/30 bg-petrol/5 px-3 py-1 font-mono text-xs text-petrol"
                >
                  {s}
                </span>
              ))}
            </div>
            {/* Descarga de CV en PDF.
                Reemplaza el archivo en /public/documents/CV-Jaime-Andres-Castano.pdf */}
            <a
              href={profile.cvPath}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
            >
              Descargar CV (PDF)
              <span>↓</span>
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <IntroVideo />
          </Reveal>
        </div>
      </section>

      {/* Experiencia */}
      <section className="shell py-16">
        <SectionIntro
          eyebrow="// Trayectoria"
          title="Experiencia profesional"
          description="Más de 20 años entre producción, planeación y gerencia de proyectos en el sector manufacturero."
        />
        <div className="mt-12">
          <ExperienceTimeline />
        </div>
      </section>

      {/* Habilidades */}
      <section className="shell py-16">
        <SectionIntro
          eyebrow="// Capacidades"
          title="Habilidades técnicas y herramientas"
          description="Organizadas por dominio: de la planeación al resultado."
        />
        <div className="mt-12">
          <SkillCloud />
        </div>
      </section>

      {/* Competencias clave */}
      <section className="shell py-16">
        <SectionIntro eyebrow="// Competencias" title="Competencias clave" />
        <Reveal className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {profile.competencies.map((c) => (
            <div key={c} className="panel flex items-start gap-3 p-5">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
              <p className="text-sm leading-snug text-ink/85">{c}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Forma de trabajo */}
      <section className="shell py-16">
        <SectionIntro
          eyebrow="// Método"
          title="Cómo trabajo"
          description="Un proceso simple que pone el resultado medible en el centro."
        />
        <Reveal className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {howIWork.map((w) => (
            <div key={w.step} className="panel p-6">
              <span className="font-mono text-xs tracking-widest text-petrol">{w.step}</span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-graphite">{w.text}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Educación y cursos */}
      <section className="shell py-16">
        <SectionIntro eyebrow="// Formación" title="Educación y cursos" />
        <div className="mt-12">
          <EducationBlock />
        </div>
      </section>

      <CTASection
        eyebrow="Trabajemos juntos"
        title="¿Un reto de operaciones, planeación o un proyecto en mente?"
        text="Si lo anterior encaja con lo que necesitas, conversemos sobre cómo puedo aportar."
      />
    </>
  );
}
