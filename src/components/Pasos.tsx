"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Recorrido interactivo de los tres pasos: la lista es un tablist y el panel
 * de la derecha muestra una mini-vista de la app en cada paso. Avanza solo
 * cada pocos segundos hasta que el visitante toma el control.
 */
const PASOS = [
  {
    verbo: "Entrás",
    texto:
      "Abrís Niido un martes sin plan y ves lo que hay esta semana cerca de vos, con fecha, zona y cupo real.",
  },
  {
    verbo: "Reservás",
    texto:
      "Apartás tu lugar en dos toques. La membresía cubre la actividad; no andás negociando el pago por WhatsApp.",
  },
  {
    verbo: "Vas",
    texto:
      "Llegás, probás algo que no habías hecho, conocés gente. El anfitrión recibe su pago por cada quien llegó.",
  },
];

const FEED = [
  { t: "Salsa desde cero", c: "Baile", m: "jue 19:00 · Zona 4" },
  { t: "Torno de cerámica", c: "Manos", m: "sáb 10:00 · Zona 15" },
  { t: "Amanecer en el Pacaya", c: "Afuera", m: "dom 04:00 · Escuintla" },
];

export default function Pasos() {
  const [paso, setPaso] = useState(0);
  const [auto, setAuto] = useState(true);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const quieto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (quieto || !auto) return;
    timer.current = setInterval(() => setPaso((p) => (p + 1) % PASOS.length), 4500);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [auto]);

  const elegir = (n: number) => {
    setAuto(false);
    setPaso(n);
  };

  return (
    <div className="mt-14 grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
      {/* Lista de pasos */}
      <div role="tablist" aria-label="Los tres pasos" className="grid gap-2">
        {PASOS.map((p, n) => {
          const activo = n === paso;
          return (
            <button
              key={p.verbo}
              role="tab"
              id={`paso-tab-${n}`}
              aria-selected={activo}
              aria-controls={`paso-panel-${n}`}
              onClick={() => elegir(n)}
              className={`grid grid-cols-[3rem_1fr] items-start gap-5 rounded-2xl p-5 text-left transition-colors duration-200 ${
                activo ? "bg-crema" : "hover:bg-crema/60"
              }`}
            >
              <span
                className={`flex size-12 items-center justify-center rounded-full font-display text-lg font-bold transition-colors duration-200 ${
                  activo ? "bg-tinta text-lima" : "bg-tinta/8 text-tinta/45"
                }`}
              >
                {n + 1}
              </span>
              <span>
                <span className={`font-display text-2xl font-bold tracking-[-0.02em] transition-colors duration-200 ${activo ? "text-tinta" : "text-tinta/45"}`}>
                  {p.verbo}
                </span>
                <span
                  className={`mt-2 grid overflow-hidden leading-relaxed text-tinta/65 transition-all duration-300 ${
                    activo ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <span className="min-h-0">{p.texto}</span>
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Mini-vista de la app */}
      <div className="mx-auto w-full max-w-[21rem]">
        <div
          className="rounded-[26px] border-2 border-tinta/10 bg-crema p-4 shadow-[0_24px_50px_-20px_rgba(34,18,51,0.25)]"
          role="tabpanel"
          id={`paso-panel-${paso}`}
          aria-labelledby={`paso-tab-${paso}`}
        >
          <div key={paso} className="grid gap-3" style={{ animation: "aparece-suave 450ms cubic-bezier(0.16,1,0.3,1)" }}>
            {paso === 0 && (
              <>
                <p className="px-1 font-mono text-[11px] uppercase tracking-[0.16em] text-tinta/45">
                  Esta semana · cerca de vos
                </p>
                {FEED.map((f) => (
                  <div key={f.t} className="rounded-xl bg-blanco p-4 shadow-[0_2px_8px_rgba(34,18,51,0.06)]">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-[0.95rem] font-bold">{f.t}</span>
                      <span className="rounded-full bg-lila-suave px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-lila-texto">
                        {f.c}
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-[11px] text-tinta/50">{f.m}</p>
                  </div>
                ))}
              </>
            )}

            {paso === 1 && (
              <>
                <div className="rounded-xl bg-blanco p-5 shadow-[0_2px_8px_rgba(34,18,51,0.06)]">
                  <span className="rounded-full bg-lila-suave px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-lila-texto">
                    Baile
                  </span>
                  <p className="mt-3 font-display text-lg leading-tight font-bold">Salsa desde cero</p>
                  <p className="mt-1 font-mono text-[11px] text-tinta/50">jue 19:00 · Zona 4 · quedan 8</p>
                  <div className="mt-4 rounded-full bg-lila py-3 text-center font-display font-bold text-tinta">
                    Reservar mi lugar
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-tinta p-4 text-blanco">
                  <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
                    <circle cx="11" cy="11" r="10" fill="var(--lima)" />
                    <path d="M6.5 11.5l3 3 6-6.5" stroke="var(--tinta)" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <p className="font-display text-[0.95rem] font-bold">Lugar apartado</p>
                    <p className="font-mono text-[11px] text-blanco/55">Cubierto por tu membresía</p>
                  </div>
                </div>
              </>
            )}

            {paso === 2 && (
              <div className="grid place-items-center gap-4 py-8">
                <svg width="72" height="72" viewBox="0 0 72 72" aria-hidden="true">
                  <circle cx="36" cy="36" r="34" fill="var(--tinta)" />
                  <path d="M22 37l10 10 19-21" stroke="var(--lima)" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="font-display text-xl font-bold">¡Llegaste!</p>
                <p className="max-w-[24ch] text-center font-mono text-[11px] leading-relaxed text-tinta/50">
                  jueves 19:04 · Estudio Malecón
                  <br />
                  13 personas más ya están adentro
                </p>
                <div className="flex gap-1.5">
                  {["Foto de grupo", "Repetir"].map((chip) => (
                    <span key={chip} className="rounded-full border-2 border-tinta/12 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-tinta/55">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Progreso */}
        <div className="mt-4 flex gap-1.5">
          {PASOS.map((p, n) => (
            <span
              key={p.verbo}
              className="block h-[4px] grow rounded-full transition-all duration-300"
              style={{ background: n === paso ? "var(--lila)" : "rgba(34,18,51,0.12)" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
