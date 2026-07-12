// ============================================================
// Configuración global del sitio D'ENERCON
// Punto único de verdad: si cambia un teléfono/correo, se edita AQUÍ.
// ============================================================

export const site = {
  brand: "D'ENERCON",
  tagline: "Lo mejor para tu construcción",
  description:
    "D'ENERCON es una marca integradora de soluciones para el sector construcción: acabados arquitectónicos de alta gama y sistemas certificados de protección contra incendios.",

  // Contacto  — TODO: confirmar si migran a dominio @denercon.com
  phoneDisplay: "901 557 609",
  phoneIntl: "51901557609",
  emails: [
    "ventas01@gydimportaciones.com",
    "Dlozano@gydimportaciones.com",
  ],
  address: "Av. Separadora Industrial N° 2258 - Piso 3, La Molina, Lima",

  // Coordenadas aproximadas de la sede (La Molina) para el mapa
  geo: { lat: -12.0464, lng: -76.9560 },
} as const;

/** Construye un enlace de WhatsApp con mensaje prellenado. */
export function waLink(message: string): string {
  const base = `https://api.whatsapp.com/send?phone=${site.phoneIntl}`;
  return `${base}&text=${encodeURIComponent(message)}`;
}
