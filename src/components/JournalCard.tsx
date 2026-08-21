"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { JournalEntry } from "@/data/journal";
import { fadeUp, cn } from "@/lib/motion";

const categoryTint: Record<string, string> = {
  Familia: "from-amber/10 to-cream",
  Viajes: "from-petrol/10 to-cream",
  Música: "from-petrol-glow/15 to-cream",
};

export default function JournalCard({
  entry,
  className,
}: {
  entry: JournalEntry;
  className?: string;
}) {
  const [lightbox, setLightbox] = useState(false);
  const tint = categoryTint[entry.category] ?? "from-hairline to-cream";

  return (
    <>
      <motion.article
        variants={fadeUp}
        className={cn(
          "group flex flex-col overflow-hidden rounded-2xl border border-hairline bg-card transition-all duration-500",
          "hover:border-petrol/40 hover:shadow-[0_16px_40px_-16px_rgba(14,107,118,0.16)]",
          className
        )}
      >
        <div
          className={cn(
            "relative aspect-[4/3] w-full overflow-hidden",
            entry.image ? "cursor-zoom-in" : ""
          )}
          onClick={() => entry.image && setLightbox(true)}
        >
          {entry.image ? (
            <>
              <Image
                src={entry.image}
                alt={entry.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 flex items-end justify-end p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="rounded-full bg-ink/70 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white backdrop-blur">
                  Abrir ↗
                </span>
              </div>
            </>
          ) : (
            <div className={cn("h-full w-full bg-gradient-to-br", tint)}>
              <div className="flex h-full items-center justify-center">
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate/70">
                  Foto pendiente
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-2.5 p-5">
          <span className="w-fit rounded-full border border-petrol/30 bg-petrol/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-petrol">
            {entry.category}
          </span>

          <h3 className="font-display text-lg font-semibold leading-snug text-ink">
            {entry.title}
          </h3>

          <p className="text-sm leading-relaxed text-graphite">{entry.excerpt}</p>

          <span className="mt-auto block h-px w-0 bg-amber/60 pt-1 transition-all duration-500 group-hover:w-10" />
        </div>
      </motion.article>

      <AnimatePresence>
        {lightbox && entry.image && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[500] flex cursor-zoom-out items-center justify-center bg-ink/90 p-4 backdrop-blur-md"
            onClick={() => setLightbox(false)}
          >
            <motion.figure
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-start gap-3"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={entry.image}
                alt={entry.title}
                className="max-h-[82vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
              />
              <figcaption className="flex w-full items-center justify-between px-1">
                <span className="font-display text-sm font-semibold text-white">
                  {entry.title}
                </span>
                <button
                  onClick={() => setLightbox(false)}
                  className="rounded-full border border-white/30 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-white/80 transition-colors hover:border-amber/60 hover:text-white"
                >
                  Cerrar ✕
                </button>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
