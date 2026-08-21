"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="shell pb-12 pt-36 md:pt-44">
      <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl">
        <motion.span variants={fadeUp} className="eyebrow inline-flex items-center gap-2">
          <span className="h-px w-8 bg-amber/70" />
          {eyebrow}
        </motion.span>
        <motion.h1
          variants={fadeUp}
          className="mt-5 font-display text-[clamp(2.5rem,7vw,5rem)] font-extrabold leading-[0.95] tracking-tight text-ink"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-relaxed text-graphite"
          >
            {description}
          </motion.p>
        )}
      </motion.div>
    </header>
  );
}
