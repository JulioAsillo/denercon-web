import type { ImageMetadata } from "astro";

// Fotos (optimizadas por astro:assets → WebP/AVIF, responsive hasta 4K)
import spcMacro from "@assets/images/floors/spc-macro-agua.png";
import spcEspina from "@assets/images/floors/spc-patron-espina.png";
import laminado from "@assets/images/floors/laminado-pasillo-transito.png";
import wallpanel from "@assets/images/floors/wallpanel-wpc-ranurado.png";
import puertaNucleo from "@assets/images/fire/puerta-cf-nucleo-tecnico.png";
import barra from "@assets/images/fire/barra-antipanico-macro.png";
import herrajes from "@assets/images/fire/herrajes-flatlay.png";

export type Feature = { icon: string; text: string };
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
};

// ---------- Línea PISOS Y REVESTIMIENTOS ----------
export const floorProducts: Product[] = [
  {
    id: "spc",
    title: "Pisos Vinílicos SPC",
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
    waMessage: "Hola, quiero cotizar Pisos Vinílicos SPC.",
    ctaLabel: "Cotizar SPC por WhatsApp",
  },
  {
    id: "laminado",
    title: "Pisos Laminados",
    subtitle: "Alta resistencia comercial",
    image: laminado,
    alt: "Pasillo corporativo con piso laminado tono madera cálido, alto tránsito.",
    features: [
      { icon: "groups", text: "Diseñados para alto tránsito" },
      { icon: "view_in_ar", text: "Núcleo HDF de alta densidad" },
      { icon: "shield", text: "Superficie resistente a rayaduras" },
      { icon: "cleaning_services", text: "Fácil mantenimiento y limpieza" },
    ],
    waMessage: "Hola, quiero cotizar Pisos Laminados.",
    ctaLabel: "Cotizar Laminados",
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
      { icon: "architecture", text: "Diseño arquitectónico moderno" },
      { icon: "qr_code_2", text: "Códigos: 001, 002, 003, 006" },
    ],
    waMessage: "Hola, quiero consultar códigos y modelos de Wall Panels WPC.",
    ctaLabel: "Consultar códigos disponibles",
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
    ctaLabel: "Solicitar ficha y cotización",
  },
  {
    id: "barras",
    title: "Barras Antipánico",
    subtitle: "Vías de evacuación",
    image: barra,
    alt: "Barra antipánico DT-F1200 en acero inoxidable pulido sobre puerta grafito.",
    features: [
      { icon: "swap_horiz", text: "Modelos DT-F1200 horizontal" },
      { icon: "swap_vert", text: "Modelos DT-F1200 vertical" },
      { icon: "verified", text: "Certificación UL-CE" },
      { icon: "exit_to_app", text: "Evacuación segura garantizada" },
    ],
    waMessage: "Hola, quiero cotizar Barras Antipánico DT-F1200.",
    ctaLabel: "Cotizar barras DT-F1200",
  },
  {
    id: "herrajes",
    title: "Herrajes y Accesorios",
    subtitle: "Complementos certificados",
    image: herrajes,
    alt: "Flat-lay de herrajes premium: cerraduras ANSI, cierrapuertas F8500, cinta intumescente.",
    features: [
      { icon: "lock", text: "Manijas Dortec y cerraduras ANSI Grado 2" },
      { icon: "door_back", text: "Cierrapuertas F8500 / F8900" },
      { icon: "local_fire_department", text: "Cinta intumescente italiana" },
      { icon: "border_bottom", text: "Sellos barredores y perimetrales" },
    ],
    waMessage: "Hola, quiero cotizar herrajes y accesorios certificados.",
    ctaLabel: "Cotizar accesorios certificados",
  },
];

// Uso adicional en otras vistas
export { spcEspina };
