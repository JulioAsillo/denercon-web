// ════════════════════════════════════════════════════════════════════
//  CERTIFICACIONES Y ESTÁNDARES
// ════════════════════════════════════════════════════════════════════
//  Se usan en dos lugares:
//   · TrustRibbon.astro        → marquee del INICIO (solo nombres)
//   · CertificationsBand.astro → franja encima del footer (logos)
//
//  CÓMO AGREGAR EL LOGO REAL:
//   1) Copia el archivo a  public/brand/certs/
//   2) Rellena el campo `logo` con la ruta:  "/brand/certs/certs_ul.svg"
//   · Si `logo` está vacío o ausente → se muestra una pastilla con el
//     nombre en texto (lo que hay hoy). El build nunca falla.
// ════════════════════════════════════════════════════════════════════

export type Certification = {
  name: string;
  /** Ruta pública del logo. Ej: "/brand/certs/certs_ul.svg". Opcional. */
  logo?: string;
  /** Texto alternativo del logo (accesibilidad). */
  alt?: string;
};

export const certificationList: Certification[] = [
  { name: "UL Listed",       logo: "/brand/certs/certs_ul.svg",       alt: "Logotipo UL Listed" },
  { name: "FM Approved",     logo: "/brand/certs/certs_fm.svg",       alt: "Logotipo FM Approved" },
  { name: "NFPA Compliance", logo: "/brand/certs/certs_nfpa.svg",     alt: "Logotipo NFPA" },
  { name: "Intertek Listed", logo: "/brand/certs/certs_intertek.svg", alt: "Logotipo Intertek" },
  { name: "ANSI",            logo: "/brand/certs/certs_ansi.svg",     alt: "Logotipo ANSI" },
  { name: "BHMA",            logo: "/brand/certs/certs_bhma.svg",     alt: "Logotipo BHMA" },
  { name: "ASTM",            logo: "/brand/certs/certs_astm.svg",     alt: "Logotipo ASTM International" },
  { name: "EN",              logo: "/brand/certs/certs_en.svg",       alt: "Logotipo Norma Europea EN" },
];

// Compatibilidad: TrustRibbon.astro consume solo los nombres.
export const certifications: string[] = certificationList.map((c) => c.name);
