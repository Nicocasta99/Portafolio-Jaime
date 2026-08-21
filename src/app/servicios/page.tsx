import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServicesGrid from "@/components/ServicesGrid";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Consultoría en diagnóstico y mejora de procesos, planeación y control de producción, S&OP y gerencia de proyectos (PMO).",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Servicios de consultoría"
        title="Orden y resultados medibles."
        description="Lo que construyo cuando una operación necesita planeación, disciplina de proyecto o mejora continua. Primero el diagnóstico, después la solución."
      />

      <section className="shell pb-12">
        <ServicesGrid />
      </section>

      <CTASection
        eyebrow="Empecemos"
        title="Cuéntame qué necesitas resolver."
        text="Con un diagnóstico inicial podemos definir el alcance y las prioridades juntos."
        primaryLabel="Solicitar una propuesta"
      />
    </>
  );
}
