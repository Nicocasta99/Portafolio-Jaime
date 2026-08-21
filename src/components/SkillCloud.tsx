"use client";

/**
 * SkillCloud — habilidades por grupo + nube de herramientas. Datos: skills.ts
 */
import { motion } from "framer-motion";
import { skillGroups, toolbelt } from "@/data/skills";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export default function SkillCloud() {
  return (
    <div className="space-y-12">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.id}
            variants={fadeUp}
            className="panel group p-5 transition-colors hover:border-petrol/40"
          >
            <div className="flex items-start justify-between">
              <h3 className="font-display text-base font-semibold text-ink">{group.title}</h3>
              <span className="h-1.5 w-1.5 rounded-full bg-petrol/50 transition-colors group-hover:bg-petrol-glow" />
            </div>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-slate">
              {group.caption}
            </p>
            <ul className="mt-4 space-y-1.5">
              {group.items.map((item) => (
                <li key={item} className="text-sm leading-snug text-graphite">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <div>
        <p className="eyebrow mb-4">Herramientas</p>
        <div className="flex flex-wrap gap-2.5">
          {toolbelt.map((tool, i) => (
            <motion.span
              key={tool}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              transition={{ delay: i * 0.02 }}
              className="rounded-full border border-hairline bg-card px-4 py-1.5 text-sm text-graphite transition-colors hover:border-petrol/40 hover:text-ink"
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}
