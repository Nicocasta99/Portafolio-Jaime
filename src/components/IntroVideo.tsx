"use client";

/**
 * IntroVideo — Video introductorio en "Sobre mí".
 * Configura la URL en /src/data/media.ts (INTRO_VIDEO_URL). Mientras esté
 * vacía, se muestra un placeholder "próximamente" que no rompe la página.
 * Click-to-load: el iframe solo se monta cuando el usuario hace clic
 * (lazy, sin autoplay al cargar la página, permite fullscreen).
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { INTRO_VIDEO_URL, INTRO_VIDEO_THUMBNAIL } from "@/data/media";
import { fadeUp, viewportOnce } from "@/lib/motion";

function getEmbed(url: string): { provider: "youtube" | "vimeo" | null; id: string | null } {
  if (!url) return { provider: null, id: null };

  const yt = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
  if (yt) return { provider: "youtube", id: yt[1] };

  const vimeo = url.match(/vimeo\.com\/(\d+)/);
  if (vimeo) return { provider: "vimeo", id: vimeo[1] };

  return { provider: null, id: null };
}

export default function IntroVideo() {
  const [playing, setPlaying] = useState(false);

  const { provider, id } = getEmbed(INTRO_VIDEO_URL);
  const hasVideo = Boolean(provider && id);

  const thumbnail =
    INTRO_VIDEO_THUMBNAIL ||
    (provider === "youtube" && id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : "");

  const embedSrc =
    provider === "youtube"
      ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`
      : provider === "vimeo"
      ? `https://player.vimeo.com/video/${id}?autoplay=1`
      : "";

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="panel relative overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-amber/50 to-transparent" />

      <div className="relative aspect-video w-full overflow-hidden bg-ink">
        {playing && hasVideo ? (
          <iframe
            src={embedSrc}
            title="Conoce a Jaime"
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => hasVideo && setPlaying(true)}
            disabled={!hasVideo}
            aria-label={hasVideo ? "Reproducir video" : "Video próximamente"}
            className="group absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden disabled:cursor-default"
          >
            {thumbnail ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={thumbnail}
                alt="Conoce a Jaime"
                className="absolute inset-0 h-full w-full object-cover opacity-70 transition-opacity duration-500 group-hover:opacity-90"
              />
            ) : (
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(30,179,195,0.25),_transparent_70%)]" />
            )}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-ink/40" />

            <span
              className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full border transition-all duration-300 ${
                hasVideo
                  ? "border-amber/60 bg-amber/15 group-hover:scale-105 group-hover:bg-amber/25"
                  : "border-white/30 bg-white/10"
              }`}
            >
              <span
                className={`ml-1 h-0 w-0 border-y-[9px] border-l-[14px] border-y-transparent ${
                  hasVideo ? "border-l-amber" : "border-l-white/70"
                }`}
              />
            </span>

            <span className="absolute bottom-4 left-4 z-10 font-mono text-[10px] uppercase tracking-widest text-white/80">
              {hasVideo ? "1–2 min" : "Video próximamente"}
            </span>
          </button>
        )}
      </div>

      <div className="p-6">
        <span className="eyebrow">{"// Conoce a Jaime"}</span>
        <h3 className="mt-2 font-display text-lg font-semibold text-ink">Conoce a Jaime</h3>
        <p className="mt-1 text-sm leading-relaxed text-graphite">
          Una introducción breve a su forma de liderar operaciones, planeación y proyectos.
        </p>
      </div>
    </motion.div>
  );
}
