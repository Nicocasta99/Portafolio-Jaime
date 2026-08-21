import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import JournalGrid from "@/components/JournalGrid";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Journal",
  description: "Fuera de la oficina: familia, viajes y música — el lado personal de Jaime Andrés Castaño.",
};

export default function JournalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Journal"
        title="Fuera de la oficina."
        description="Lo que hago cuando no estoy planeando producción ni dirigiendo proyectos."
      />

      <section className="shell pb-12">
        <JournalGrid />
      </section>

      <CTASection
        eyebrow="¿Conectamos?"
        title="Hablemos de operaciones, proyectos o de la vida."
        text="Si algo de esto te resonó, escríbeme."
        primaryLabel="Escríbeme"
        secondaryLabel="Ver perfil"
        secondaryHref="/sobre-mi"
      />
    </>
  );
}
