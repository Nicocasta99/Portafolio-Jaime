"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

type CTAProps = {
  eyebrow?: string;
  title?: string;
  text?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CTASection({
  eyebrow = "Siguiente paso",
  title = "Hablemos de tu operación",
  text = "Si tienes una planta, un proyecto o una cadena de abastecimiento por ordenar, conversemos.",
  primaryLabel = "Escribir a Jaime",
  primaryHref = "/contacto",
  secondaryLabel = "Ver servicios",
  secondaryHref = "/servicios",
}: CTAProps) {
  return (
    <section className="shell py-24">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="panel relative overflow-hidden px-8 py-14 text-center md:px-16 md:py-20"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(14,107,118,0.08),_transparent_70%)]" />

        <div className="relative mx-auto max-w-2xl">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-graphite">{text}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link href={primaryHref} className="btn-primary">
              {primaryLabel}
            </Link>
            <Link href={secondaryHref} className="btn-secondary">
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
