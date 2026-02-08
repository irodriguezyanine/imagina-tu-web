# IMAGINATUWEB.CL

Landing page para la agencia de diseño web **ImaginaTuWeb**. Diseño humano, pago único, sin cuotas mensuales.

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React**

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Estructura

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── LivePreviews.tsx
│   ├── BrowserMockup.tsx
│   ├── Services.tsx
│   ├── Comparison.tsx
│   ├── Pricing.tsx
│   ├── Footer.tsx
│   └── WhatsAppFloat.tsx
├── data/
│   └── portfolio.ts    # Añade aquí tus proyectos y screenshots
└── lib/
    └── utils.ts
```

## Personalización

1. **WhatsApp**: En `src/lib/constants.ts` está configurado el número `56976488856` y el mensaje por defecto "quiero crear mi página!". Puedes editarlos si necesitas otro número o texto.

2. **Portafolio**: Edita `src/data/portfolio.ts` para añadir proyectos. Coloca screenshots en `public/portfolio/` (ej: `despedida-biotti.png`).

3. **Foto del fundador**: La sección "Conoce al Fundador" usa la imagen `public/team/ignacio-rodriguez.png`. Sustituye ese archivo por la foto de Ignacio Rodríguez Yanine si aún no lo has hecho.

4. **Redes sociales**: Actualiza los enlaces en `Footer.tsx`.

## Deploy en Vercel

Conecta el repo a Vercel y deploya en un clic. No requiere variables de entorno para el funcionamiento básico.
