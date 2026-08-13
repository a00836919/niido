"use client";

import { useEffect, useRef, useState } from "react";
import { PLANES } from "@/lib/planes";

/**
 * El boleto del hero: la respuesta literal a "no hay nada que hacer".
 * Va pasando planes concretos, uno cada pocos segundos, y se detiene
 * cuando el visitante toma el control o si pidió menos movimiento.
 */
export default function Rodillo() {
  const [i, setI] = useState(0);
  const [corriendo, setCorriendo] = useState(true);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const quieto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (quieto || !corriendo) return;

    timer.current = setInterval(() => {
      setI((n) => (n + 1) % PLANES.length);
    }, 3600);

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [corriendo]);

  const plan = PLANES[i];

  return (
    <div className="w-full max-w-[26rem]">
      <div className="boleto flota overflow-hidden">
        <div key={i} className="p-7 pb-5" style={{ animation: "aparece-suave 500ms cubic-bezier(0.16,1,0.3,1)" }}>
          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em]">
            <span className="rounded-full bg-lila-suave px-3 py-1 text-lila-texto">
              {plan.categoria}
            </span>
            <span className="text-tinta/45">{plan.zona}</span>
          </div>

          <h3 className="mt-4 font-display text-[1.65rem] leading-[1.08] font-bold tracking-[-0.025em] text-balance">
            {plan.titulo}
          </h3>

          <p className="mt-2 text-[0.95rem] text-tinta/60">con {plan.anfitrion}</p>
        </div>

        <div className="boleto-corte mx-7 mb-0" aria-hidden="true" />

        <div key={`m-${i}`} className="flex items-end justify-between gap-4 p-7 pt-4 font-mono text-[13px]">
          <div>
            <span className="block text-[10px] uppercase tracking-[0.16em] text-tinta/40">
              Cuándo
            </span>
            {plan.cuando}
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-[0.16em] text-tinta/40">
              Cupo
            </span>
            {plan.cupo}
          </div>
          <div className="text-right">
            <span className="block text-[10px] uppercase tracking-[0.16em] text-tinta/40">
              Membresía
            </span>
            <span className="font-medium text-lila-texto">{plan.precio}</span>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-1.5">
        {PLANES.map((p, n) => (
          <button
            key={p.titulo}
            type="button"
            aria-label={`Ver plan ${n + 1}: ${p.titulo}`}
            aria-current={n === i}
            onClick={() => {
              setCorriendo(false);
              setI(n);
            }}
            className="h-8 grow bg-transparent p-0"
          >
            <span
              className="block h-[4px] w-full rounded-full transition-all duration-300"
              style={{
                background: n === i ? "var(--lila)" : "rgba(34,18,51,0.15)",
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
