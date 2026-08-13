"use client";

import { useActionState, useState } from "react";
import { apuntarse, type EstadoLista } from "@/app/actions";

const LADOS = [
  { valor: "persona", etiqueta: "Busco qué hacer" },
  { valor: "anfitrion", etiqueta: "Ofrezco actividades" },
] as const;

export default function Lista({ inicial = "persona" }: { inicial?: string }) {
  const [lado, setLado] = useState<string>(inicial);
  const [estado, accion, enviando] = useActionState<EstadoLista | null, FormData>(
    apuntarse,
    null,
  );

  if (estado?.ok) {
    return (
      <div className="rounded-2xl border-2 border-lila/40 bg-lila-suave/60 p-7">
        <p className="font-display text-xl font-bold text-lila-texto">
          Ya quedaste apuntado.
        </p>
        <p className="mt-1 text-tinta/70">{estado.mensaje}</p>
      </div>
    );
  }

  return (
    <form action={accion} className="grid gap-5">
      <input type="hidden" name="lado" value={lado} />

      <fieldset className="grid grid-cols-2 overflow-hidden rounded-full border-2 border-tinta/15 bg-blanco p-1">
        <legend className="sr-only">¿De qué lado venís?</legend>
        {LADOS.map((op) => (
          <button
            key={op.valor}
            type="button"
            onClick={() => setLado(op.valor)}
            aria-pressed={lado === op.valor}
            className={`rounded-full px-4 py-2.5 font-mono text-[12px] uppercase tracking-[0.12em] transition-colors duration-200 ${
              lado === op.valor
                ? "bg-tinta text-blanco"
                : "bg-transparent text-tinta/55 hover:text-tinta"
            }`}
          >
            {op.etiqueta}
          </button>
        ))}
      </fieldset>

      <label className="grid gap-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-tinta/50">
          Correo
        </span>
        <input
          type="email"
          name="correo"
          required
          autoComplete="email"
          placeholder="vos@correo.com"
          className="rounded-xl border-2 border-tinta/15 bg-blanco px-5 py-3.5 text-tinta transition-colors placeholder:text-tinta/30 focus:border-lila"
        />
      </label>

      <label className="grid gap-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-tinta/50">
          {lado === "persona"
            ? "¿Qué te gustaría probar? (opcional)"
            : "¿Qué actividad ofrecés? (opcional)"}
        </span>
        <textarea
          name="nota"
          rows={3}
          maxLength={500}
          placeholder={
            lado === "persona"
              ? "Cerámica, algo de montaña, cualquier cosa un jueves…"
              : "Clases de baile los martes y jueves en Zona 4, grupos de 12."
          }
          className="resize-y rounded-xl border-2 border-tinta/15 bg-blanco px-5 py-3.5 text-tinta transition-colors placeholder:text-tinta/30 focus:border-lila"
        />
      </label>

      {estado && !estado.ok && (
        <p role="alert" className="text-[0.95rem] font-medium text-[#c22030]">
          {estado.mensaje}
        </p>
      )}

      <button
        type="submit"
        disabled={enviando}
        className="rounded-full bg-lila px-8 py-4 font-display text-lg font-bold tracking-[-0.01em] text-tinta shadow-[0_10px_30px_-10px_rgba(186,86,252,0.7)] transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_16px_36px_-10px_rgba(186,86,252,0.8)] disabled:translate-y-0 disabled:opacity-60"
      >
        {enviando ? "Apuntando…" : "Apuntarme"}
      </button>

      <p className="font-mono text-[11px] leading-relaxed text-tinta/40">
        Solo te escribimos cuando abramos. Ni spam ni listas vendidas.
      </p>
    </form>
  );
}
