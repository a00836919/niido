"use client";

import { useEffect, useRef, useState } from "react";
import { PLANES } from "@/lib/planes";

/**
 * El rodillo: la respuesta literal a "no hay nada que hacer".
 * Va pasando planes concretos, uno cada tres segundos, y se detiene
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
    }, 3400);

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [corriendo]);

  const plan = PLANES[i];

  return (
    <div className="w-full max-w-[26rem]">
      <div
        className="relative overflow-hidden rounded-[3px] bg-hueso text-tinta shadow-[0_28px_60px_-24px_rgba(0,0,0,0.85)]"
        style={{ borderTop: `8px solid ${plan.color}` }}
      >
        <div key={i} className="aparece p-6 pb-5">
          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-tinta/55">
            <span style={{ color: plan.color, filter: "brightness(0.72)" }}>
              {plan.categoria}
            </span>
            <span>{plan.zona}</span>
          </div>

          <h3 className="mt-3 font-display text-[1.6rem] leading-[1.1] font-semibold tracking-[-0.02em] text-balance">
            {plan.titulo}
          </h3>

          <p className="mt-2 text-[0.95rem] text-tinta/65">con {plan.anfitrion}</p>

          <div className="mt-6 flex items-end justify-between gap-4 border-t border-dashed border-tinta/25 pt-4 font-mono text-[13px]">
            <div>
              <span className="block text-[10px] uppercase tracking-[0.16em] text-tinta/45">
                Cuándo
              </span>
              {plan.cuando}
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-[0.16em] text-tinta/45">
                Cupo
              </span>
              {plan.cupo}
            </div>
            <div className="text-right">
              <span className="block text-[10px] uppercase tracking-[0.16em] text-tinta/45">
                Membresía
              </span>
              <span style={{ color: plan.color, filter: "brightness(0.72)" }}>
                {plan.precio}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
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
            className="h-6 grow cursor-pointer bg-transparent p-0"
          >
            <span
              className="block h-[3px] w-full transition-opacity"
              style={{ background: p.color, opacity: n === i ? 1 : 0.28 }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
