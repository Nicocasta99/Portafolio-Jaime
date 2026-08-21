"use client";

/**
 * Navbar — Portafolio Jaime Andrés Castaño.
 * Marca tipográfica (sin logo custom) + navegación centrada.
 */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { primaryNav } from "@/data/navigation";
import { profile } from "@/data/profile";
import { cn } from "@/lib/motion";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-hairline bg-paper/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="relative shell flex h-14 items-center justify-center md:h-16">
        <Link href="/" className="group flex items-center gap-2.5 transition-opacity hover:opacity-80">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink font-display text-xs font-bold text-paper">
            JC
          </span>
          <span className="font-display text-sm font-extrabold uppercase tracking-widest text-ink">
            {profile.owner}
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="absolute right-6 flex h-9 w-9 items-center justify-center rounded-md border border-hairline text-ink transition-colors hover:border-amber/50 md:hidden"
        >
          <div className="space-y-1.5">
            <span className={cn("block h-px w-5 bg-current transition-transform duration-300", open && "translate-y-[6px] rotate-45")} />
            <span className={cn("block h-px w-5 bg-current transition-opacity duration-300", open && "opacity-0")} />
            <span className={cn("block h-px w-5 bg-current transition-transform duration-300", open && "-translate-y-[6px] -rotate-45")} />
          </div>
        </button>
      </div>

      <div className="hidden border-t border-hairline/70 md:block">
        <ul className="shell flex h-11 items-center justify-center gap-0.5">
          {primaryNav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest transition-colors",
                    active ? "text-ink" : "text-slate hover:text-ink"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full border border-amber/40 bg-amber/10"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  {item.label}
                </Link>
              </li>
            );
          })}

          <li>
            <Link
              href="/contacto"
              className="ml-3 rounded-full border border-amber/50 bg-amber/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-amber-deep transition-all hover:bg-amber/20 hover:border-amber"
            >
              Conectemos
            </Link>
          </li>
        </ul>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-hairline bg-paper/98 backdrop-blur-xl md:hidden"
          >
            <ul className="shell flex flex-col gap-1 py-5">
              {primaryNav.map((item) => {
                const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-lg px-4 py-3 font-mono text-sm uppercase tracking-widest transition-colors",
                        active ? "border border-amber/30 bg-amber/8 text-ink" : "text-slate hover:text-ink hover:bg-cream"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}

              <li className="mt-2">
                <Link
                  href="/contacto"
                  className="block rounded-lg border border-amber/50 bg-amber/10 px-4 py-3 text-center font-mono text-sm uppercase tracking-widest text-amber-deep"
                  onClick={() => setOpen(false)}
                >
                  Conectemos
                </Link>
              </li>

              <li className="px-4 pt-3 font-mono text-[10px] tracking-widest text-slate">
                {profile.email}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
