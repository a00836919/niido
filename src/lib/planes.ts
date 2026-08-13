/**
 * Planes de muestra para la landing. Son ejemplos del tipo de actividad que
 * queremos en el catálogo, no oferta real todavía.
 */
export type Plan = {
  titulo: string;
  anfitrion: string;
  categoria: string;
  color: string;
  cuando: string;
  zona: string;
  precio: string;
  cupo: string;
};

export const PLANES: Plan[] = [
  {
    titulo: "Salsa para los que dicen que no bailan",
    anfitrion: "Estudio Malecón",
    categoria: "Baile",
    color: "var(--chicle)",
    cuando: "jue 19:00",
    zona: "Zona 4",
    precio: "incluida",
    cupo: "6 de 14",
  },
  {
    titulo: "Torno de cerámica, primera pieza",
    anfitrion: "Taller Barro Vivo",
    categoria: "Manos",
    color: "var(--marigold)",
    cuando: "sáb 10:00",
    zona: "Zona 15",
    precio: "incluida",
    cupo: "3 de 8",
  },
  {
    titulo: "Asado con fuego abierto y todo el humo",
    anfitrion: "Fuego Lento",
    categoria: "Cocina",
    color: "var(--jade)",
    cuando: "vie 17:30",
    zona: "Carretera a El Salvador",
    precio: "+Q90",
    cupo: "11 de 20",
  },
  {
    titulo: "Amanecer en el Pacaya, con desayuno arriba",
    anfitrion: "Ruta Norte",
    categoria: "Afuera",
    color: "var(--cielo)",
    cuando: "dom 04:00",
    zona: "Escuintla",
    precio: "+Q150",
    cupo: "9 de 16",
  },
  {
    titulo: "Retrato al carboncillo sin saber dibujar",
    anfitrion: "Casa Tinta",
    categoria: "Arte",
    color: "var(--chicle)",
    cuando: "mié 18:30",
    zona: "Zona 1",
    precio: "incluida",
    cupo: "5 de 12",
  },
  {
    titulo: "Cerámica en frío: pinta tu propia taza",
    anfitrion: "Estudio Once",
    categoria: "Manos",
    color: "var(--marigold)",
    cuando: "sáb 15:00",
    zona: "Antigua",
    precio: "incluida",
    cupo: "7 de 10",
  },
];
