"use client";

import { useState, type ReactNode } from "react";

/**
 * Los tres argumentos para anfitriones como naipes que se voltean:
 * al frente la promesa, al dorso el detalle. Giran con hover en escritorio
 * y con un toque en pantalla táctil; el naipe entero es un botón.
 */
type Naipe = {
  titulo: string;
  dorso: string;
  icono: ReactNode;
};

const trazo = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const NAIPES: Naipe[] = [
  {
    titulo: "No pagás por publicar",
    dorso:
      "Subir tus actividades es gratis: sin comisión de entrada, sin mensualidad. Cobramos membresía a quien reserva, no a vos.",
    icono: (
      <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
        <path d="M4 11h22v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" {...trazo} />
        <path d="M4 11l3-6h16l3 6M15 5v6M11 18h8" {...trazo} />
      </svg>
    ),
  },
  {
    titulo: "Llenás los espacios vacíos",
    dorso:
      "Ese martes en que solo llegan tres personas es justo el que nos sirve llenar: un miembro de Niido prueba algo nuevo cada semana.",
    icono: (
      <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
        <rect x="4" y="6" width="22" height="20" rx="2" {...trazo} />
        <path d="M4 12h22M10 3v5M20 3v5M9 17.5h3M14 17.5h3M19 17.5h3M9 21.5h3M14 21.5h3" {...trazo} />
      </svg>
    ),
  },
  {
    titulo: "El marketing lo ponemos nosotros",
    dorso:
      "Vos das la clase. La foto, el catálogo, los recordatorios y la gente nueva corren por nuestra cuenta.",
    icono: (
      <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
        <path d="M4 12v6l4 1V11zM8 11l14-6v20l-14-5" {...trazo} />
        <path d="M10 19.5l1.5 6 4 -1-1.8-5" {...trazo} />
      </svg>
    ),
  },
];

export default function Naipes() {
  const [volteados, setVolteados] = useState<boolean[]>(NAIPES.map(() => false));

  const voltear = (n: number) =>
    setVolteados((v) => v.map((x, i) => (i === n ? !x : x)));

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {NAIPES.map((naipe, n) => (
        <button
          key={naipe.titulo}
          type="button"
          aria-pressed={volteados[n]}
          onClick={() => voltear(n)}
          className={`naipe text-left ${volteados[n] ? "es-volteado" : ""}`}
        >
          <span className="naipe-giro">
            {/* Frente */}
            <span className="naipe-cara flex-col items-start justify-between gap-8 rounded-2xl border-2 border-tinta/10 bg-blanco p-7">
              <span className="flex size-14 items-center justify-center rounded-full bg-lila-suave text-lila-texto">
                {naipe.icono}
              </span>
              <span>
                <span className="block font-display text-[1.35rem] leading-[1.15] font-bold tracking-[-0.02em]">
                  {naipe.titulo}
                </span>
                <span className="mt-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-tinta/40">
                  Dale vuelta
                  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                    <path d="M2 7a5 5 0 0 1 9-3M12 7a5 5 0 0 1-9 3" {...trazo} strokeWidth={1.8} />
                    <path d="M11 1v3h-3M3 13v-3h3" {...trazo} strokeWidth={1.8} />
                  </svg>
                </span>
              </span>
            </span>

            {/* Dorso */}
            <span className="naipe-cara naipe-dorso flex-col items-start justify-between gap-6 rounded-2xl bg-tinta p-7 text-blanco">
              <svg width="26" height="14" viewBox="0 0 26 14" aria-hidden="true" className="text-lima">
                <path d="M2 11C7 3 12 12 17 6s7-2 7-2" {...trazo} />
              </svg>
              <span className="leading-relaxed text-blanco/85">{naipe.dorso}</span>
            </span>
          </span>
        </button>
      ))}
    </div>
  );
}
