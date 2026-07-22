import type { ImageMetadata } from "astro";

// Fotos (optimizadas por astro:assets → WebP/AVIF, responsive hasta 4K)
import spcMacro from "@assets/images/floors/spc-macro-agua.png";
import spcEspina from "@assets/images/floors/spc-patron-espina.png";
import laminado from "@assets/images/floors/laminado-pasillo-transito.png";
import wallpanel from "@assets/images/floors/wallpanel-wpc-ranurado.png";
import puertaNucleo from "@assets/images/fire/puerta-cf-nucleo-tecnico.png";
import barra from "@assets/images/fire/barra-antipanico-macro.png";
import herrajes from "@assets/images/fire/herrajes-flatlay.png";

// ════════════════════════════════════════════════════════════════════
//  GALERÍAS DE COLOR  ·  CÓMO AGREGAR IMÁGENES
// ════════════════════════════════════════════════════════════════════
//  1) Copia el archivo a  src/assets/images/floors/gallery/<producto>/
//  2) Impórtalo arriba:
//       import spcRobleNatural from "@assets/images/floors/gallery/spc/spc-roble-natural.png";
//  3) Agrégalo al array `gallery` del producto:
//       { image: spcRobleNatural, label: "Roble Natural", alt: "…" }
//
//  · Si `gallery` está vacío o ausente → la card muestra la foto única
//    (`image`) y NO renderiza carrusel. El build nunca se rompe.
//  · No hay límite de imágenes: agrega tantas líneas como colores existan.
//  · `label` = nombre comercial del color (se muestra como etiqueta).
// ════════════════════════════════════════════════════════════════════

export type Feature = { icon: string; text: string };

/** Una diapositiva del carrusel de colores dentro de una card. */
export type GalleryItem = {
  image: ImageMetadata;
  /** Nombre comercial del color / acabado. Se muestra como etiqueta. */
  label: string;
  alt: string;
};

export type Product = {
  id: string;
  title: string;
  subtitle?: string;
  image: ImageMetadata;
  alt: string;
  badge?: string;
  features: Feature[];
  waMessage: string;
  ctaLabel: string;
  /** Carrusel de colores. Opcional: si está vacío, se usa `image`. */
  gallery?: GalleryItem[];
};

// ---------- Línea PISOS Y REVESTIMIENTOS ----------
export const floorProducts: Product[] = [
  {
    id: "spc",
    title: "Pisos SPC",
    subtitle: "Stone Plastic Composite",
    image: spcMacro,
    alt: "Macro de tabla SPC con gota de agua perlada sobre la veta de madera.",
    badge: "100% Resistente al agua",
    features: [
      { icon: "water_drop", text: "100% resistente al agua" },
      { icon: "layers", text: "40% polvo de piedra — núcleo rígido" },
      { icon: "view_module", text: "Sistema click de instalación rápida" },
      { icon: "straighten", text: "Formato: 122 x 18 cm" },
    ],
    waMessage: "Hola, quiero cotizar Pisos SPC.",
    ctaLabel: "Solicitar cotización",
    // TODO diseño: colores de catálogo SPC
    gallery: [],
  },
  {
    id: "laminado",
    title: "Pisos Laminados",
    subtitle: "Alta resistencia comercial",
    image: laminado,
    alt: "Pasillo corporativo con piso laminado tono madera cálido, alto tránsito.",
    features: [
      { icon: "verified", text: "Durabilidad con certificación AC4 y AC5" },
      { icon: "groups", text: "Diseñados para alto tránsito" },
      { icon: "view_in_ar", text: "Núcleo HDF de alta densidad" },
      { icon: "shield", text: "Superficie resistente a rayaduras" },
    ],
    waMessage: "Hola, quiero cotizar Pisos Laminados.",
    ctaLabel: "Solicitar cotización",
    // TODO diseño: colores de catálogo Laminado
    gallery: [],
  },
  {
    id: "wpc",
    title: "Wall Panels (WPC)",
    subtitle: "Revestimiento decorativo",
    image: wallpanel,
    alt: "Panel de pared WPC ranurado vertical con luz indirecta rasante.",
    features: [
      { icon: "straighten", text: "Listones de 2400 x 160 x 24 mm" },
      { icon: "volume_off", text: "Propiedades acústicas integradas" },
      { icon: "architecture", text: "Diseño moderno de alta gama" },
      { icon: "qr_code_2", text: "Códigos: 001, 002, 003, 006" },
    ],
    waMessage: "Hola, quiero consultar códigos y modelos de Wall Panels WPC.",
    ctaLabel: "Solicitar cotización",
    // TODO diseño: colores de catálogo Wall Panels
    gallery: [],
  },
];

// ---------- Línea SEGURIDAD CORTAFUEGO ----------
export const fireProducts: Product[] = [
  {
    id: "puertas",
    title: "Puertas y Portones Cortafuego",
    subtitle: "Seguridad pasiva certificada",
    image: puertaNucleo,
    alt: "Puerta de acero entreabierta mostrando el núcleo de lana de roca / honeycomb.",
    badge: "Resistencia al Fuego: 3 Horas",
    features: [
      { icon: "shield", text: "Pieles de acero galvanizado 16GA" },
      { icon: "layers", text: "Núcleo lana de roca / honeycomb" },
      { icon: "meeting_room", text: "Configuración de una o dos hojas" },
      { icon: "local_fire_department", text: "Resistencia al fuego de 1 a 3 horas" },
    ],
    waMessage: "Hola, quiero solicitar ficha y cotización de Puertas Cortafuego.",
    ctaLabel: "Solicitar cotización",
    gallery: [],
  },
  {
    id: "barras",
    title: "Barras Antipánico",
    subtitle: "Vías de evacuación",
    image: barra,
    alt: "Barra antipánico en acero inoxidable pulido sobre puerta grafito.",
    features: [
      { icon: "policy", text: "Cumplimiento de normativas de seguridad" },
      { icon: "shield", text: "Alta resistencia y durabilidad" },
      { icon: "verified", text: "Certificación UL" },
      { icon: "exit_to_app", text: "Evacuación segura garantizada" },
    ],
    waMessage: "Hola, quiero cotizar Barras Antipánico.",
    ctaLabel: "Solicitar cotización",
    gallery: [],
  },
  {
    id: "herrajes",
    title: "Herrajes y Accesorios",
    subtitle: "Complementos certificados",
    image: herrajes,
    alt: "Flat-lay de herrajes premium: cerraduras, cierrapuertas y cinta intumescente.",
    features: [
      { icon: "lock", text: "Manijas y cerraduras ANSI Grado 2" },
      { icon: "door_back", text: "Cierrapuertas UL" },
      { icon: "local_fire_department", text: "Cinta intumescente" },
      { icon: "border_bottom", text: "Sellos barredores y perimetrales" },
    ],
    waMessage: "Hola, quiero cotizar herrajes y accesorios certificados.",
    ctaLabel: "Solicitar cotización",
    gallery: [],
  },
];

// Uso adicional en otras vistas
export { spcEspina };
