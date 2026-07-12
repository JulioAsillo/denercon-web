# D'ENERCON — Sitio informativo

Sitio corporativo de **D'ENERCON** ("Lo mejor para tu construcción"): acabados
arquitectónicos de alta gama + sistemas certificados de protección contra incendios.
Construido en **Astro 7** + **Tailwind CSS v4**. Estático, informativo, con captación
de leads vía WhatsApp.

## Requisitos
- **Node.js 22.12+** (ver `.nvmrc`). Si usas nvm: `nvm use`.

## Puesta en marcha
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # genera /dist (estático, listo para desplegar)
npm run preview    # sirve /dist localmente
```

## Reemplazar las imágenes (IMPORTANTE)
El proyecto trae **placeholders** en `src/assets/images/` para que compile de una vez.
Cuando el equipo de diseño entregue los masters, **sobrescribe cada archivo respetando
exactamente el mismo nombre y ruta** (ver `GyD_Solicitud_Imagenes.xlsx`):

```
src/assets/images/
├── floors/    spc-ambiente-interior · spc-macro-agua · spc-patron-espina
│              laminado-pasillo-transito · wallpanel-wpc-ranurado
├── fire/      puerta-cf-corredor-rojo · puerta-cf-nucleo-tecnico
│              puerta-cf-almacen-fondo · barra-antipanico-macro · herrajes-flatlay
└── corporate/ nosotros-hero-showroom · nosotros-area-reunion
```
Entregar **un master por imagen** en PNG/JPG alta calidad. **No** hace falta WebP ni
múltiples tamaños: Astro genera automáticamente WebP/AVIF y las variantes responsive
(hasta 4K) vía `<Image>`.

## Logos
Los logos oficiales ya están en `public/brand/`:
- `denercon-logo.png` (transparente, texto oscuro) → header
- `denercon-logo-fondo.png` (fondo navy) → footer

## Dónde tocar el contenido
- **Contacto / teléfono / correos / dirección** → `src/data/site.ts` (punto único).
- **Catálogo de productos** → `src/data/products.ts`.
- **Certificaciones** → `src/data/certifications.ts`.
- **Paleta / tipografía** → `src/styles/global.css` (bloque `@theme`).

## Paleta de marca (Brandbook)
| Token | HEX | Uso |
|-------|-----|-----|
| navy | `#0B1F2E` | textos, header, footer |
| blue | `#3153A0` | acento principal, enlaces |
| sky | `#C1DAE5` | fondos suaves, badges |
| surface | `#F4F4F4` | fondo de página |
| fire | `#C1121F` | señalética cortafuego |

Tipografía: **Inter Tight** (Google Fonts).

## Pendientes marcados con TODO
- Confirmar dominio de correos (`@gydimportaciones.com` → ¿`@denercon.com`?) en `site.ts`.
- Enlazar el "Dossier PDF" real en `cortafuego.astro`.
- Reemplazar el embed de mapa por uno con pin exacto si se desea (`GoogleMap.astro`).
