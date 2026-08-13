import Rodillo from "@/components/Rodillo";
import Lista from "@/components/Lista";
import Reveal from "@/components/Reveal";
import Chispa from "@/components/Chispa";
import { PLANES, CATEGORIAS } from "@/lib/planes";

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

const PARA_NEGOCIOS = [
  {
    titulo: "No pagás por publicar",
    texto:
      "Subir tus actividades es gratis. Cobramos membresía a quien reserva, no comisión de entrada a vos.",
  },
  {
    titulo: "Llenás los espacios vacíos",
    texto:
      "Ese martes en que solo llegan tres personas es justo el que a nosotros nos sirve llenar.",
  },
  {
    titulo: "El marketing lo ponemos nosotros",
    texto:
      "Vos das la clase. La foto, el catálogo, los recordatorios y la gente nueva corren por nuestra cuenta.",
  },
];

const FAQ = [
  {
    p: "¿Cuánto cuesta la membresía?",
    r: "El precio lo vamos a definir con la primera cohorte, que entra gratis. La idea: una cuota mensual fija que cubre un número de actividades al mes, y planes más caros con un aporte extra siempre visible antes de reservar.",
  },
  {
    p: "¿En qué ciudades funciona?",
    r: "Arrancamos en Ciudad de Guatemala y alrededores (incluyendo Antigua). Si hay suficiente gente apuntada en otra ciudad, esa es la siguiente.",
  },
  {
    p: "¿Qué tipo de actividades hay?",
    r: "Clases de baile, cerámica, cocina y asado, caminatas y volcanes, arte, café, fotografía… todo dado por gente local que sabe hacer algo y quiere compartirlo.",
  },
  {
    p: "Tengo un taller, ¿qué me toca hacer?",
    r: "Casi nada: apuntate como anfitrión y te buscamos. Si no querés armar el perfil vos, lo cargamos nosotros con tus fotos y horarios. Publicar no cuesta.",
  },
  {
    p: "¿Puedo ir con amigos?",
    r: "Sí. Al reservar elegís cuántas personas van. Y si vas solo, mejor todavía: la mitad del punto de Niido es conocer gente nueva.",
  },
];

export default function Home() {
  return (
    <>
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="hero-suave font-display text-[1.7rem] font-extrabold tracking-[-0.04em]" style={{ "--d": "100ms" } as React.CSSProperties}>
          niido<span className="text-lila">.</span>
        </span>
        <a
          href="#lista"
          className="hero-suave rounded-full border-2 border-tinta/15 px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.12em] text-tinta/70 transition-colors duration-200 hover:border-lila hover:text-lila-texto"
          style={{ "--d": "200ms" } as React.CSSProperties}
        >
          Lista de espera
        </a>
      </header>

      <main>
        {/* ————— Hero ————— */}
        <section className="mx-auto max-w-6xl px-6 pt-10 pb-24 md:pt-16">
          <div className="grid items-center gap-16 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="hero-suave font-mono text-[12px] uppercase tracking-[0.2em] text-lila-texto" style={{ "--d": "150ms" } as React.CSSProperties}>
                Guatemala · abrimos pronto
              </p>

              <h1 className="mt-6 font-display text-[clamp(2.9rem,7.5vw,5.2rem)] leading-[0.96] font-extrabold tracking-[-0.045em]">
                <span className="velo"><span style={{ "--d": "250ms" } as React.CSSProperties}>«No hay nada</span></span>
                <span className="velo"><span style={{ "--d": "350ms" } as React.CSSProperties}>que hacer»</span></span>
                <span className="velo"><span style={{ "--d": "450ms" } as React.CSSProperties}>
                  <Chispa delay="1100ms">es mentira.</Chispa>
                </span></span>
              </h1>

              <p className="hero-suave mt-8 max-w-[40ch] text-[1.15rem] leading-relaxed text-tinta/70" style={{ "--d": "650ms" } as React.CSSProperties}>
                Hay clases de baile, talleres de barro, asados y caminatas por toda
                Guatemala, enterrados en stories que no viste. Niido los junta en un
                solo lugar y te los abre con una membresía.
              </p>

              <div className="hero-suave mt-10 flex flex-wrap items-center gap-4" style={{ "--d": "800ms" } as React.CSSProperties}>
                <a
                  href="#lista"
                  className="rounded-full bg-lila px-8 py-4 font-display text-lg font-bold tracking-[-0.01em] text-tinta shadow-[0_10px_30px_-10px_rgba(186,86,252,0.7)] transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_16px_36px_-10px_rgba(186,86,252,0.8)]"
                >
                  Quiero entrar
                </a>
                <a
                  href="#anfitriones"
                  className="rounded-full border-2 border-tinta/15 px-7 py-[0.9rem] font-display text-lg font-semibold tracking-[-0.01em] text-tinta/75 transition-colors duration-200 hover:border-lila hover:text-lila-texto"
                >
                  Ofrezco actividades
                </a>
              </div>
            </div>

            <div className="hero-suave flex justify-center md:justify-end" style={{ "--d": "500ms" } as React.CSSProperties}>
              <Rodillo />
            </div>
          </div>
        </section>

        {/* ————— Marquee de categorías ————— */}
        <div className="bg-tinta py-5 text-lima" aria-hidden="true">
          <div className="marquee font-display text-[1.4rem] font-bold tracking-[-0.02em]">
            {[0, 1].map((copia) => (
              <div className="marquee-pista" key={copia}>
                {CATEGORIAS.map((cat) => (
                  <span key={cat} className="flex items-center gap-[clamp(1.5rem,4vw,3rem)]">
                    {cat}
                    <svg width="10" height="10" viewBox="0 0 10 10" className="shrink-0 opacity-70">
                      <circle cx="5" cy="5" r="4" fill="currentColor" />
                    </svg>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ————— Manifiesto ————— */}
        <Reveal as="section" className="mx-auto max-w-4xl px-6 py-28 text-center">
          <p className="revela font-mono text-[12px] uppercase tracking-[0.2em] text-lila-texto">
            Por qué existe Niido
          </p>
          <p className="revela mt-8 font-display text-[clamp(1.7rem,4vw,2.6rem)] leading-[1.25] font-bold tracking-[-0.03em] text-balance" style={{ "--d": "120ms" } as React.CSSProperties}>
            Nadie se muda de país para conocer gente: aprende a hacer tortillas, se
            mete a una clase de salsa, sube un volcán. Lo nuevo pasa{" "}
            <span className="text-lila-texto">haciendo cosas</span>. Niido existe
            para que probar algo nuevo sea tan fácil como pedir comida.
          </p>
        </Reveal>

        {/* ————— Catálogo de muestra ————— */}
        <Reveal as="section" className="mx-auto max-w-6xl px-6 pb-28">
          <div className="revela flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-[clamp(2rem,4.5vw,3rem)] leading-[1] font-extrabold tracking-[-0.035em]">
              Así se ve una semana con Niido
            </h2>
            <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-tinta/45">
              Muestra del catálogo
            </p>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PLANES.map((plan, n) => (
              <li key={plan.titulo} className="revela" style={{ "--d": `${n * 90}ms` } as React.CSSProperties}>
                <article className="boleto flex h-full flex-col overflow-hidden">
                  <div className="flex-1 p-6 pb-4">
                    <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em]">
                      <span className="rounded-full bg-lila-suave px-3 py-1 text-lila-texto">
                        {plan.categoria}
                      </span>
                      <span className="text-tinta/40">{plan.zona}</span>
                    </div>
                    <h3 className="mt-4 font-display text-[1.3rem] leading-[1.12] font-bold tracking-[-0.02em] text-balance">
                      {plan.titulo}
                    </h3>
                    <p className="mt-2 text-[0.9rem] text-tinta/55">con {plan.anfitrion}</p>
                  </div>
                  <div className="boleto-corte mx-6" aria-hidden="true" />
                  <div className="flex items-center justify-between p-6 pt-4 font-mono text-[12px] text-tinta/70">
                    <span>{plan.cuando}</span>
                    <span>{plan.cupo}</span>
                    <span className="font-medium text-lila-texto">{plan.precio}</span>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* ————— Cómo funciona ————— */}
        <Reveal as="section" className="border-y-2 border-tinta/8 bg-blanco">
          <div className="mx-auto max-w-6xl px-6 py-28">
            <h2 className="revela font-display text-[clamp(2rem,4.5vw,3rem)] leading-[1] font-extrabold tracking-[-0.035em]">
              Tres pasos y ya estás afuera de tu casa
            </h2>
            <ol className="mt-16 grid gap-12 md:grid-cols-3">
              {PASOS.map((paso, n) => (
                <li key={paso.verbo} className="revela" style={{ "--d": `${n * 130}ms` } as React.CSSProperties}>
                  <span className="flex size-12 items-center justify-center rounded-full bg-tinta font-display text-lg font-bold text-lima">
                    {n + 1}
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold tracking-[-0.02em]">
                    {paso.verbo}
                  </h3>
                  <p className="mt-3 leading-relaxed text-tinta/65">{paso.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        {/* ————— Membresía ————— */}
        <Reveal as="section" className="bg-uva text-blanco">
          <div className="mx-auto grid max-w-6xl gap-14 px-6 py-28 md:grid-cols-[0.9fr_1.1fr]">
            <div className="revela">
              <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-lima">
                La membresía
              </p>
              <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3rem)] leading-[1.04] font-extrabold tracking-[-0.035em] text-balance">
                Una cuota al mes en vez de decidir cada vez si vale la pena
              </h2>
            </div>

            <div className="revela grid gap-8" style={{ "--d": "150ms" } as React.CSSProperties}>
              <p className="text-[1.1rem] leading-relaxed text-blanco/75">
                Pagar clase por clase hace que uno lo piense mucho y termine sin ir a
                ninguna. Con la membresía ya está pagado: probás cerámica un sábado,
                salsa el jueves siguiente, y si algo no te gustó, cambiás.
              </p>

              <dl className="grid gap-5 font-mono text-[13px]">
                {[
                  ["Incluido", "Un número fijo de actividades al mes"],
                  ["Extra", "Planes más caros con un aporte encima, siempre visible"],
                  ["Precio", "Lo definimos con la primera cohorte"],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-6 border-t border-blanco/15 pt-4">
                    <dt className="w-24 shrink-0 uppercase tracking-[0.14em] text-blanco/40">
                      {k}
                    </dt>
                    <dd className="text-blanco/85">{v}</dd>
                  </div>
                ))}
              </dl>

              <p className="rounded-2xl border-2 border-lima/35 bg-lima/8 p-5 text-blanco/80">
                Los primeros que se apunten <span className="font-bold text-lima">entran gratis</span>{" "}
                mientras armamos el catálogo. A cambio queremos oír qué les pareció.
              </p>
            </div>
          </div>
        </Reveal>

        {/* ————— Anfitriones ————— */}
        <Reveal as="section" className="mx-auto max-w-6xl scroll-mt-8 px-6 py-28">
          <div id="anfitriones" className="revela">
            <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-lila-texto">
              Para quien enseña, cocina, guía o presta su taller
            </p>
            <h2 className="mt-5 max-w-[22ch] font-display text-[clamp(2rem,5vw,3.4rem)] leading-[1] font-extrabold tracking-[-0.04em] text-balance">
              Tenés el espacio y la clase. Te falta la gente.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {PARA_NEGOCIOS.map((item, n) => (
              <div key={item.titulo} className="revela rounded-2xl border-2 border-tinta/10 bg-blanco p-7 transition-colors duration-200 hover:border-lila/40" style={{ "--d": `${n * 110}ms` } as React.CSSProperties}>
                <h3 className="font-display text-xl font-bold tracking-[-0.02em]">
                  {item.titulo}
                </h3>
                <p className="mt-3 leading-relaxed text-tinta/65">{item.texto}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ————— FAQ ————— */}
        <Reveal as="section" className="mx-auto max-w-3xl px-6 pb-28">
          <h2 className="revela font-display text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold tracking-[-0.035em]">
            Preguntas que nos hacen
          </h2>
          <div className="mt-10 grid gap-3">
            {FAQ.map((item, n) => (
              <details key={item.p} className="revela group rounded-2xl border-2 border-tinta/10 bg-blanco open:border-lila/40" style={{ "--d": `${n * 70}ms` } as React.CSSProperties}>
                <summary className="flex items-center justify-between gap-4 p-5 font-display text-[1.05rem] font-bold tracking-[-0.01em] [&::-webkit-details-marker]:hidden">
                  {item.p}
                  <svg width="14" height="14" viewBox="0 0 14 14" className="shrink-0 text-lila-texto transition-transform duration-200 group-open:rotate-45" aria-hidden="true">
                    <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                  </svg>
                </summary>
                <p className="px-5 pb-5 leading-relaxed text-tinta/65">{item.r}</p>
              </details>
            ))}
          </div>
        </Reveal>

        {/* ————— Lista de espera ————— */}
        <Reveal as="section" className="bg-tinta text-blanco">
          <div id="lista" className="mx-auto grid max-w-6xl scroll-mt-8 gap-16 px-6 py-28 md:grid-cols-2">
            <div className="revela">
              <h2 className="font-display text-[clamp(2rem,5vw,3.2rem)] leading-[1] font-extrabold tracking-[-0.04em] text-balance">
                Apuntate y te avisamos{" "}
                <span className="text-lima">cuando abra</span>
              </h2>
              <p className="mt-6 max-w-[38ch] text-[1.1rem] leading-relaxed text-blanco/65">
                Estamos armando el catálogo de la primera ciudad. Decinos de qué lado
                venís: buscando plan, o con algo que ofrecer.
              </p>
            </div>
            <div className="revela [&_input]:!bg-blanco [&_textarea]:!bg-blanco" style={{ "--d": "150ms" } as React.CSSProperties}>
              <Lista />
            </div>
          </div>
        </Reveal>
      </main>

      <footer className="bg-tinta">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-blanco/12 px-6 py-10 font-mono text-[12px] text-blanco/40 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-display text-lg font-extrabold tracking-[-0.04em] text-blanco/85">
            niido<span className="text-lila">.</span>
          </span>
          <span>Hecho en Guatemala · {new Date().getFullYear()}</span>
        </div>
      </footer>
    </>
  );
}
