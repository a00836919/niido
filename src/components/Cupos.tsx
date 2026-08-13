"use client";

import { useState } from "react";

/**
 * El deslizador del anfitrión: mueve cuántos lugares se le quedan vacíos
 * por semana y ve cuánta gente nueva le puede mandar Niido al mes.
 * Estimación simple y honesta: cupos × 4 semanas × 70% de llenado.
 */
export default function Cupos() {
  const [cupos, setCupos] = useState(10);
  const personas = Math.round(cupos * 4 * 0.7);
  const pct = (cupos / 40) * 100;

  return (
    <div className="rounded-3xl bg-tinta p-8 text-blanco sm:p-10">
      <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <label htmlFor="cupos" className="font-display text-xl leading-snug font-bold tracking-[-0.02em] sm:text-2xl">
            ¿Cuántos lugares se te quedan vacíos por semana?
          </label>

          <div className="mt-8 flex items-center gap-5">
            <input
              id="cupos"
              type="range"
              min={0}
              max={40}
              step={1}
              value={cupos}
              onChange={(e) => setCupos(Number(e.target.value))}
              className="rango"
              style={{ "--pct": `${pct}%` } as React.CSSProperties}
              aria-valuetext={`${cupos} lugares vacíos por semana`}
            />
            <output
              htmlFor="cupos"
              className="w-14 shrink-0 text-right font-display text-3xl font-extrabold tabular-nums"
            >
              {cupos}
            </output>
          </div>

          <div className="mt-3 flex justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-blanco/40">
            <span>Todo lleno</span>
            <span>40 lugares</span>
          </div>
        </div>

        <div className="rounded-2xl border-2 border-lima/30 bg-lima/8 p-7 text-center" aria-live="polite">
          {cupos === 0 ? (
            <>
              <p className="font-display text-2xl font-extrabold text-lima">
                Qué envidia.
              </p>
              <p className="mt-2 text-blanco/70">
                Si llenás todo, Niido te sirve para lo que viene: más horarios, más
                grupos, caras nuevas.
              </p>
            </>
          ) : (
            <>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-blanco/50">
                Con Niido eso puede ser
              </p>
              <p className="mt-2 font-display text-[3.4rem] leading-none font-extrabold tracking-[-0.03em] text-lima tabular-nums">
                ≈{personas}
              </p>
              <p className="mt-2 text-blanco/75">
                personas nuevas al mes en tu espacio,
                <br />
                cada una pagada por asistencia
              </p>
            </>
          )}
          <p className="mt-4 font-mono text-[10px] text-blanco/35">
            Estimación con 70% de llenado y 4 semanas
          </p>
        </div>
      </div>
    </div>
  );
}
