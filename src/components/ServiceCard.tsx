"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Service } from "@/data/services";
import { fadeUp } from "@/lib/motion";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-hairline bg-card p-7 transition-all duration-500 hover:border-petrol/40 hover:shadow-[0_16px_40px_-16px_rgba(14,107,118,0.18)]"
    >
      <span className="pointer-events-none absolute -right-2 -top-6 select-none font-display text-8xl font-bold text-hairline transition-colors duration-500 group-hover:text-petrol/10">
        {service.index}
      </span>

      <span className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-amber/60 to-transparent transition-transform duration-500 group-hover:scale-x-100" />

      <div className="relative">
        <h3 className="font-display text-xl font-semibold text-ink">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-graphite">{service.description}</p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-petrol">Beneficios</p>
            <ul className="mt-2.5 space-y-2">
              {service.benefits.map((b) => (
                <li key={b} className="flex gap-2.5 text-xs leading-snug text-ink/80">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-petrol" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-amber-deep">Entregables</p>
            <ul className="mt-2.5 space-y-2">
              {service.deliverables.map((d) => (
                <li key={d} className="flex gap-2.5 text-xs leading-snug text-ink/80">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link
          href="/contacto"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-petrol transition-colors hover:text-ink"
        >
          {service.cta}
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </motion.article>
  );
}
