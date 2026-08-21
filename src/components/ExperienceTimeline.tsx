"use client";

/**
 * ExperienceTimeline — línea de tiempo vertical. Datos: experiences.ts
 */
import { motion } from "framer-motion";
import { experiences } from "@/data/experiences";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function ExperienceTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-petrol/50 via-hairline to-transparent md:left-[9px]" />

      <ol className="space-y-12">
        {experiences.map((exp, i) => (
          <motion.li
            key={exp.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            transition={{ delay: i * 0.05 }}
            className="relative pl-10 md:pl-14"
          >
            <span className="absolute left-0 top-1.5 grid h-4 w-4 place-items-center md:h-5 md:w-5">
              <span className="absolute inset-0 rounded-full border border-petrol/40" />
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  exp.current ? "bg-petrol-glow shadow-[0_0_12px_3px_rgba(30,179,195,0.4)]" : "bg-slate"
                }`}
              />
            </span>

            <div className="panel p-6 md:p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">{exp.role}</h3>
                  <p className="mt-0.5 text-sm text-petrol">{exp.company}</p>
                </div>
                <span className="flex items-center gap-2 font-mono text-xs text-slate">
                  {exp.current && (
                    <span className="rounded-full border border-petrol/40 bg-petrol/5 px-2 py-0.5 text-[10px] uppercase text-petrol">
                      Actual
                    </span>
                  )}
                  {exp.period}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-graphite">{exp.summary}</p>

              <ul className="mt-4 space-y-2">
                {exp.achievements.map((a, idx) => (
                  <li key={idx} className="flex gap-3 text-sm leading-relaxed text-ink/80">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber" />
                    {a}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {exp.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-hairline bg-cream/60 px-3 py-1 font-mono text-[11px] text-graphite"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
