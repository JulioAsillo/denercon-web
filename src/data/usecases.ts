import type { ImageMetadata } from "astro";

// ════════════════════════════════════════════════════════════════════
//  CASOS DE USO  ·  carrusel full-width de /pisos
// ════════════════════════════════════════════════════════════════════
//  1) Copia el archivo a  src/assets/images/floors/casos-uso/
//  2) Impórtalo abajo:
//       import casoTerraza from "@assets/images/floors/casos-uso/caso-terraza.png";
//  3) Agrégalo al array:
//       { image: casoTerraza, label: "Uso en terraza", alt: "…" }
//
//  · Si el array está vacío → la sección NO se renderiza (el build no falla).
//  · `label` sale en mayúsculas sobre un degradado en la parte baja.
// ════════════════════════════════════════════════════════════════════

export type UseCase = {
  image: ImageMetadata;
  /** Etiqueta del caso de uso. Ej: "Uso en terraza", "Uso en lobby". */
  label: string;
  alt: string;
  /** Línea secundaria opcional. Ej: "Piso SPC — Roble Natural". */
  caption?: string;
};

export const useCases: UseCase[] = [
  // ── EJEMPLO (descomentar cuando lleguen las imágenes) ──────────────
  // {
  //   image: casoTerraza,
  //   label: "Uso en terraza",
  //   caption: "Piso SPC — 100% resistente al agua",
  //   alt: "Terraza exterior con deck SPC tono madera cálida.",
  // },
];
