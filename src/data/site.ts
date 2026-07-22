// ============================================================
// Configuración global del sitio D'ENERCON
// Punto único de verdad: si cambia un teléfono/correo, se edita AQUÍ.
// ============================================================

export const site = {
  brand: "D'ENERCON",
  tagline: "Lo mejor para tu construcción",
  description:
    "D'ENERCON es una marca integradora de soluciones para el sector construcción: acabados de arquitectura de alta gama y sistemas certificados de protección contra incendios.",

  // Contacto
  phoneDisplay: "901 557 609",
  phoneIntl: "51901557609",
  emails: ["ventas@denercon.com", "dlozano@denercon.com"],
  address: "Av. Separadora Industrial N° 2258 - Piso 3, La Molina, Lima",

  // Coordenadas aproximadas de la sede (La Molina) para el mapa
  geo: { lat: -12.0464, lng: -76.956 },
} as const;

/** Construye un enlace de WhatsApp con mensaje prellenado. */
export function waLink(message: string): string {
  const base = `https://api.whatsapp.com/send?phone=${site.phoneIntl}`;
  return `${base}&text=${encodeURIComponent(message)}`;
}
