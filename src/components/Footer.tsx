import Link from "next/link";
import { profile } from "@/data/profile";
import { primaryNav } from "@/data/navigation";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-hairline bg-cream/50">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-petrol/40 to-transparent" />

      <div className="shell grid gap-12 py-16 md:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink font-display text-xs font-bold text-paper">
              JC
            </span>
            <span className="font-display text-sm font-extrabold uppercase tracking-widest text-ink">
              {profile.owner}
            </span>
          </div>

          <p className="mt-5 max-w-sm text-sm leading-relaxed text-graphite">
            {profile.fullName} — {profile.tagline}.
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate">
            {profile.availability}
          </p>

          <span className="mt-5 block h-px w-14 bg-amber/60" />
        </div>

        <nav>
          <p className="eyebrow">Navegación</p>
          <ul className="mt-5 space-y-3">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-graphite transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow">Conecta</p>
          <ul className="mt-5 space-y-3">
            {profile.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center justify-between border-b border-hairline pb-3 text-sm text-graphite transition-colors hover:text-ink"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-slate transition-colors group-hover:text-petrol">
                    {link.handle} ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="shell flex flex-col gap-2 border-t border-hairline py-6 text-xs text-slate sm:flex-row sm:items-center sm:justify-between">
        <span>© {year} {profile.fullName}</span>
        <span className="font-mono text-[10px] tracking-widest text-slate">
          Portafolio profesional
        </span>
      </div>
    </footer>
  );
}
