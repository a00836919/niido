/**
 * Planes de muestra para la landing. Son ejemplos del tipo de actividad que
 * queremos en el catálogo, no oferta real todavía.
 */
export type Plan = {
  titulo: string;
  anfitrion: string;
  categoria: string;
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
    cuando: "jue 19:00",
    zona: "Zona 4",
    precio: "incluida",
    cupo: "6 de 14",
  },
  {
    titulo: "Torno de cerámica, primera pieza",
    anfitrion: "Taller Barro Vivo",
    categoria: "Manos",
    cuando: "sáb 10:00",
    zona: "Zona 15",
    precio: "incluida",
    cupo: "3 de 8",
  },
  {
    titulo: "Asado con fuego abierto y todo el humo",
    anfitrion: "Fuego Lento",
    categoria: "Cocina",
    cuando: "vie 17:30",
    zona: "Carr. El Salvador",
    precio: "+Q90",
    cupo: "11 de 20",
  },
  {
    titulo: "Amanecer en el Pacaya, con desayuno arriba",
    anfitrion: "Ruta Norte",
    categoria: "Afuera",
    cuando: "dom 04:00",
    zona: "Escuintla",
    precio: "+Q150",
    cupo: "9 de 16",
  },
  {
    titulo: "Retrato al carboncillo sin saber dibujar",
    anfitrion: "Casa Tinta",
    categoria: "Arte",
    cuando: "mié 18:30",
    zona: "Zona 1",
    precio: "incluida",
    cupo: "5 de 12",
  },
  {
    titulo: "Café de la finca a la taza, con catación",
    anfitrion: "Trece Granos",
    categoria: "Cocina",
    cuando: "sáb 15:00",
    zona: "Antigua",
    precio: "incluida",
    cupo: "7 de 10",
  },
];

export const CATEGORIAS = [
  "Baile",
  "Cerámica",
  "Cocina",
  "Volcanes",
  "Arte",
  "Café",
  "Fotografía",
  "Escalada",
  "Teatro",
];
