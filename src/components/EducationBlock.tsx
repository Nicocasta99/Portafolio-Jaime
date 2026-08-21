"use client";

/**
 * EducationBlock — formación académica + cursos. Datos: education.ts
 */
import { motion } from "framer-motion";
import { education, courses } from "@/data/education";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function EducationBlock() {
  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="space-y-6">
        <p className="eyebrow">Formación académica</p>
        {education.map((ed, i) => (
          <motion.article
            key={ed.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            transition={{ delay: i * 0.05 }}
            className="panel p-6"
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-display text-lg font-semibold text-ink">{ed.degree}</h3>
            </div>
            <p className="mt-1 text-sm text-petrol">{ed.institution}</p>
            <p className="mt-2 font-mono text-xs text-slate">{ed.period}</p>
          </motion.article>
        ))}
      </div>

      <div className="space-y-4">
        <p className="eyebrow">Cursos y formación complementaria</p>
        {courses.map((c, i) => (
          <motion.div
            key={c.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            transition={{ delay: i * 0.05 }}
            className="border-l border-hairline pl-4"
          >
            <h4 className="text-sm font-semibold text-ink">{c.title}</h4>
            <p className="text-xs text-petrol">{c.institution}</p>
            <p className="mt-1 text-xs leading-relaxed text-slate">{c.detail}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
