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
      <div className="rounded-[3px] border border-jade/45 bg-jade/10 p-6">
        <p className="font-display text-xl font-semibold text-jade">
          Ya quedaste apuntado.
        </p>
        <p className="mt-1 text-hueso/75">{estado.mensaje}</p>
      </div>
    );
  }

  return (
    <form action={accion} className="grid gap-4">
      <input type="hidden" name="lado" value={lado} />

      <fieldset className="grid grid-cols-2 gap-0 border border-hueso/25">
        <legend className="sr-only">¿De qué lado venís?</legend>
        {LADOS.map((op) => (
          <button
            key={op.valor}
            type="button"
            onClick={() => setLado(op.valor)}
            aria-pressed={lado === op.valor}
            className={`cursor-pointer px-4 py-3 font-mono text-[12px] uppercase tracking-[0.14em] transition-colors ${
              lado === op.valor
                ? "bg-marigold text-tinta"
                : "bg-transparent text-hueso/60 hover:text-hueso"
            }`}
          >
            {op.etiqueta}
          </button>
        ))}
      </fieldset>

      <label className="grid gap-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-hueso/55">
          Correo
        </span>
        <input
          type="email"
          name="correo"
          required
          autoComplete="email"
          placeholder="vos@correo.com"
          className="border border-hueso/25 bg-noche-2/60 px-4 py-3 text-hueso placeholder:text-hueso/30"
        />
      </label>

      <label className="grid gap-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-hueso/55">
          {lado === "persona"
            ? "¿Qué te gustaría hacer? (opcional)"
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
          className="resize-y border border-hueso/25 bg-noche-2/60 px-4 py-3 text-hueso placeholder:text-hueso/30"
        />
      </label>

      {estado && !estado.ok && (
        <p role="alert" className="text-[0.95rem] text-chicle">
          {estado.mensaje}
        </p>
      )}

      <button
        type="submit"
        disabled={enviando}
        className="cursor-pointer bg-marigold px-6 py-4 font-display text-lg font-bold tracking-[-0.01em] text-tinta transition-transform hover:-translate-y-[2px] disabled:translate-y-0 disabled:opacity-60"
      >
        {enviando ? "Apuntando…" : "Apuntarme"}
      </button>

      <p className="font-mono text-[11px] leading-relaxed text-hueso/40">
        Solo te escribimos cuando abramos. Ni spam ni listas vendidas.
      </p>
    </form>
  );
}
