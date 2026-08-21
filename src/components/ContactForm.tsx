"use client";

/**
 * ContactForm — valida los campos y arma un enlace mailto: con el mensaje
 * precargado hacia el correo de Jaime. No requiere backend ni API keys.
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

type FormState = { name: string; email: string; subject: string; message: string };
type Status = "idle" | "sent";

const EMPTY: FormState = { name: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>("idle");

  function validate(values: FormState): Partial<FormState> {
    const next: Partial<FormState> = {};
    if (!values.name.trim()) next.name = "Escribe tu nombre.";
    if (!values.email.trim()) next.email = "Escribe tu correo.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "El correo no parece válido.";
    if (!values.subject.trim()) next.subject = "Añade un asunto.";
    if (!values.message.trim()) next.message = "Cuéntame en qué puedo ayudarte.";
    else if (values.message.trim().length < 10) next.message = "El mensaje es muy corto.";
    return next;
  }

  function update(field: keyof FormState, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setStatus("sent");
  }

  const fields: Array<{ key: keyof FormState; label: string; type?: string; full?: boolean }> = [
    { key: "name", label: "Nombre" },
    { key: "email", label: "Correo", type: "email" },
    { key: "subject", label: "Asunto", full: true },
  ];

  const inputBase =
    "mt-2 w-full rounded-xl border border-hairline bg-paper px-4 py-3 text-sm text-ink outline-none " +
    "placeholder:text-slate/60 transition-all duration-200 " +
    "focus:border-petrol focus:ring-1 focus:ring-petrol/30 focus:bg-card " +
    "hover:border-slate/40";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 rounded-2xl border border-hairline bg-card p-6 md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.key} className={f.full ? "sm:col-span-2" : ""}>
            <label htmlFor={f.key} className="font-mono text-[11px] uppercase tracking-wider text-graphite">
              {f.label}
            </label>
            <input
              id={f.key}
              type={f.type ?? "text"}
              value={form[f.key]}
              onChange={(e) => update(f.key, e.target.value)}
              className={inputBase}
              aria-invalid={Boolean(errors[f.key])}
              aria-describedby={errors[f.key] ? `${f.key}-error` : undefined}
            />
            {errors[f.key] && (
              <p id={`${f.key}-error`} className="mt-1.5 text-xs text-amber-deep">
                {errors[f.key]}
              </p>
            )}
          </div>
        ))}
      </div>

      <div>
        <label htmlFor="message" className="font-mono text-[11px] uppercase tracking-wider text-graphite">
          Mensaje
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className={`${inputBase} resize-none`}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-amber-deep">
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button
          type="submit"
          className="group relative overflow-hidden rounded-full bg-amber px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-8px_rgba(255,77,45,0.4)]"
        >
          Enviar mensaje
          <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
        </button>

        {status === "sent" && (
          <motion.p
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-sm text-petrol"
          >
            Se abrió tu cliente de correo con el mensaje listo para enviar.
          </motion.p>
        )}
      </div>
    </form>
  );
}
