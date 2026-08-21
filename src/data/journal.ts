/**
 * JOURNAL — Fuera de la oficina.
 * Tres hobbies de Jaime: familia, viajes y música.
 * Imágenes en /public/images/journal/ — mientras "image" sea null, se
 * muestra un placeholder que no rompe la página.
 */

export type JournalCategory = "Familia" | "Viajes" | "Música";

export type JournalEntry = {
  id: string;
  category: JournalCategory;
  title: string;
  excerpt: string;
  image: string | null;
};

export const journalEntries: JournalEntry[] = [
  {
    id: "familia",
    category: "Familia",
    title: "Tiempo en familia",
    excerpt:
      "Mi familia es lo que más quiero en la vida. No hay logro profesional que valga más que un abrazo al llegar a casa o una tarde entera con ellos. Ahí es donde de verdad estoy pleno.",
    image: "/images/journal/familia.jpeg",
  },
  {
    id: "viajes",
    category: "Viajes",
    title: "Conocer lugares nuevos",
    excerpt:
      "Me gusta salir de la rutina y descubrir sitios que no conozco, así sea un pueblo a dos horas o un país distinto. Cada viaje deja una anécdota y una lista más larga de lugares por visitar.",
    image: "/images/journal/viajes.jpeg",
  },
  {
    id: "musica",
    category: "Música",
    title: "Rock, en cualquier idioma",
    excerpt:
      "El rock es la música que más disfruto. Crecí escuchando a Green Day, enanitos verdes, rata blanca y sus canciones todavía me acompañan. Aunque realmente escucho de todo.",
    image: "/images/journal/musica.jpeg",
  },
];
