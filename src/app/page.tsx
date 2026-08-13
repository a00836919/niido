import Rodillo from "@/components/Rodillo";
import Lista from "@/components/Lista";

const PASOS = [
  {
    verbo: "Entrás",
    color: "var(--marigold)",
    texto:
      "Abrís Niido un martes sin plan y ves lo que hay esta semana cerca de vos, con fecha, zona y cupo real.",
  },
  {
    verbo: "Reservás",
    color: "var(--chicle)",
    texto:
      "Apartás tu lugar en dos toques. La membresía cubre la actividad; no andás negociando el pago por WhatsApp.",
  },
  {
    verbo: "Vas",
    color: "var(--jade)",
    texto:
      "Llegás, hacés algo que no habías hecho, conocés gente. El anfitrión recibe su pago por cada quien llegó.",
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

export default function Home() {
  return (
    <>
      <div className="telar telar-anima" />

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="font-display text-2xl font-extrabold tracking-[-0.04em]">
          niido
        </span>
        <a
          href="#lista"
          className="font-mono text-[12px] uppercase tracking-[0.14em] text-hueso/70 underline decoration-marigold decoration-2 underline-offset-[6px] hover:text-hueso"
        >
          Lista de espera
        </a>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pt-10 pb-24 md:pt-20">
          <div className="grid items-center gap-16 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-marigold">
                Guatemala · abrimos pronto
              </p>

              <h1 className="mt-6 font-display text-[clamp(2.8rem,7.5vw,5rem)] leading-[0.94] font-extrabold tracking-[-0.045em] text-balance">
                «No hay nada
                <br />
                que hacer»
                <br />
                <span className="text-marigold">es mentira.</span>
              </h1>

              <p className="mt-8 max-w-[38ch] text-[1.15rem] leading-relaxed text-hueso/75">
                Hay clases de baile, talleres de barro, asados y caminatas por toda
                Guatemala. Están enterrados en stories que no viste. Niido los junta
                en un solo lugar y te los abre con una membresía.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-5">
                <a
                  href="#lista"
                  className="bg-marigold px-7 py-4 font-display text-lg font-bold tracking-[-0.01em] text-tinta transition-transform hover:-translate-y-[2px]"
                >
                  Quiero entrar
                </a>
                <a
                  href="#negocios"
                  className="font-mono text-[12px] uppercase tracking-[0.14em] text-hueso/70 underline decoration-hueso/30 decoration-2 underline-offset-[6px] hover:text-hueso hover:decoration-marigold"
                >
                  Ofrezco actividades
                </a>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <Rodillo />
            </div>
          </div>
        </section>

        <div className="telar telar-fina" />

        {/* Cómo funciona */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="font-display text-[clamp(2rem,4.5vw,3rem)] leading-[1] font-bold tracking-[-0.035em]">
            Tres pasos y ya estás afuera de tu casa
          </h2>

          <ol className="mt-14 grid gap-12 md:grid-cols-3">
            {PASOS.map((paso) => (
              <li key={paso.verbo} className="pl-6" style={{ borderLeft: `4px solid ${paso.color}` }}>
                <h3 className="font-display text-2xl font-bold tracking-[-0.02em]">
                  {paso.verbo}
                </h3>
                <p className="mt-3 text-hueso/70 leading-relaxed">{paso.texto}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Membresía */}
        <section className="border-y border-hueso/12 bg-noche-2/40">
          <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-cielo">
                La membresía
              </p>
              <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3rem)] leading-[1.02] font-bold tracking-[-0.035em] text-balance">
                Una cuota al mes en vez de decidir cada vez si vale la pena
              </h2>
            </div>

            <div className="grid gap-8">
              <p className="text-[1.1rem] leading-relaxed text-hueso/75">
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
                  <div key={k} className="flex gap-6 border-t border-hueso/12 pt-4">
                    <dt className="w-24 shrink-0 uppercase tracking-[0.14em] text-hueso/45">
                      {k}
                    </dt>
                    <dd className="text-hueso/85">{v}</dd>
                  </div>
                ))}
              </dl>

              <p className="border-l-4 border-marigold pl-5 text-hueso/70">
                Los primeros que se apunten entran gratis mientras armamos el catálogo.
                A cambio queremos oír qué les pareció.
              </p>
            </div>
          </div>
        </section>

        {/* Para negocios */}
        <section id="negocios" className="bg-hueso text-tinta">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-chicle">
              Para quien enseña, cocina, guía o presta su taller
            </p>
            <h2 className="mt-5 max-w-[20ch] font-display text-[clamp(2rem,5vw,3.4rem)] leading-[0.98] font-extrabold tracking-[-0.04em] text-balance">
              Tenés el espacio y la clase. Te falta la gente.
            </h2>

            <div className="mt-14 grid gap-10 md:grid-cols-3">
              {PARA_NEGOCIOS.map((item) => (
                <div key={item.titulo}>
                  <div className="telar telar-fina mb-5 max-w-[88px]" />
                  <h3 className="font-display text-xl font-bold tracking-[-0.02em]">
                    {item.titulo}
                  </h3>
                  <p className="mt-3 leading-relaxed text-tinta/70">{item.texto}</p>
                </div>
              ))}
            </div>

            <p className="mt-14 max-w-[52ch] text-tinta/70">
              Si no querés armar el perfil vos mismo, lo cargamos nosotros con tus fotos
              y tus horarios. Apuntate abajo y te buscamos.
            </p>
          </div>
        </section>

        {/* Lista de espera */}
        <section id="lista" className="mx-auto max-w-6xl scroll-mt-8 px-6 py-24">
          <div className="grid gap-16 md:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="font-display text-[clamp(2rem,5vw,3.2rem)] leading-[1] font-extrabold tracking-[-0.04em] text-balance">
                Apuntate y te avisamos cuando abra
              </h2>
              <p className="mt-6 max-w-[38ch] text-[1.1rem] leading-relaxed text-hueso/70">
                Estamos armando el catálogo de la primera ciudad. Decinos de qué lado
                venís: buscando plan, o con algo que ofrecer.
              </p>
              <div className="telar telar-fina mt-10 max-w-[160px]" />
            </div>

            <Lista />
          </div>
        </section>
      </main>

      <footer className="border-t border-hueso/12">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 font-mono text-[12px] text-hueso/45 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-display text-lg font-extrabold tracking-[-0.04em] text-hueso/80">
            niido
          </span>
          <span>Hecho en Guatemala · {new Date().getFullYear()}</span>
        </div>
      </footer>
    </>
  );
}
