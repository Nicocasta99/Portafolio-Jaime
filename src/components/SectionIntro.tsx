"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce, cn } from "@/lib/motion";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionIntroProps) {
  return (
    <motion.header
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <span className="eyebrow inline-flex items-center gap-2">
        <span className="h-px w-6 bg-petrol/50" />
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-graphite sm:text-lg">
          {description}
        </p>
      )}
    </motion.header>
  );
}
