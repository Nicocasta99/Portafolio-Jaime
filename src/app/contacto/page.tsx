import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Conecta con Jaime Andrés Castaño para hablar de operaciones, planeación o gerencia de proyectos.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contacto"
        title="Conectemos."
        description="¿Un proyecto, una operación o una idea? Cuéntame en qué estás trabajando y te respondo pronto."
      />

      <section className="shell grid gap-10 pb-24 lg:grid-cols-[1fr_1.4fr]">
        <Reveal className="space-y-8">
          <div>
            <span className="eyebrow">Directo</span>
            <a
              href={`mailto:${profile.email}`}
              className="mt-3 block break-all font-display text-xl text-ink transition-colors hover:text-petrol"
            >
              {profile.email}
            </a>
            <p className="mt-1 font-mono text-sm text-slate">{profile.phone}</p>
            <p className="mt-1 text-sm text-graphite">{profile.location}</p>
          </div>

          <div>
            <span className="eyebrow">Redes profesionales</span>
            <ul className="mt-4 space-y-3">
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

          <div className="panel p-5">
            <p className="text-sm leading-relaxed text-graphite">{profile.availability}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
