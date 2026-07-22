// ════════════════════════════════════════════════════════════════════
//  CERTIFICACIONES Y ESTÁNDARES
// ════════════════════════════════════════════════════════════════════
//  Se usan en dos lugares:
//   · TrustRibbon.astro        → marquee del INICIO (solo nombres)
//   · CertificationsBand.astro → franja encima del footer (logos)
//
//  CÓMO AGREGAR EL LOGO REAL:
//   1) Copia el archivo a  public/brand/certs/
//   2) Rellena el campo `logo` con la ruta:  "/brand/certs/ul.svg"
//   · Si `logo` está vacío o ausente → se muestra una pastilla con el
//     nombre en texto (lo que hay hoy). El build nunca falla.
// ════════════════════════════════════════════════════════════════════

export type Certification = {
  name: string;
  /** Ruta pública del logo. Ej: "/brand/certs/ul.svg". Opcional. */
  logo?: string;
  /** Texto alternativo del logo (accesibilidad). */
  alt?: string;
};

export const certificationList: Certification[] = [
  { name: "UL Listed",       logo: "", alt: "Logotipo UL Listed" },
  { name: "FM Approved",     logo: "", alt: "Logotipo FM Approved" },
  { name: "NFPA Compliance", logo: "", alt: "Logotipo NFPA" },
  { name: "Intertek Listed", logo: "", alt: "Logotipo Intertek" },
  { name: "ANSI/BHMA",       logo: "", alt: "Logotipo ANSI/BHMA" },
  { name: "ASTM",            logo: "", alt: "Logotipo ASTM International" },
  { name: "EN",              logo: "", alt: "Logotipo Norma Europea EN" },
];

// Compatibilidad: TrustRibbon.astro consume solo los nombres.
export const certifications: string[] = certificationList.map((c) => c.name);
