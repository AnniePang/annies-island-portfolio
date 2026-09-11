# Annie's Island Portfolio

An **Animal Crossing–inspired restyle** of [annie-portfolio-website.vercel.app](https://annie-portfolio-website.vercel.app/).
Same content, island presentation. Built with Next.js 15, Tailwind CSS v4,
shadcn/ui and Framer Motion.

## Not affiliated with Nintendo

This is an unaffiliated, fan-styled personal site. It contains **no Nintendo
assets** — no game art, sprites, icons, fonts, or audio. Everything visual was
authored for this project, and the soundtrack is an original loop synthesised in
the browser at runtime. See [`ASSETS-LICENSE.md`](./ASSETS-LICENSE.md) for the
full record of every asset and its license.

"Animal Crossing" and "New Horizons" are trademarks of Nintendo.

## What the theming does

- Tailwind's `slate` ramp is remapped to a warm sand/driftwood palette, so the
  whole site reskins without rewriting the page markup.
- Wooden signpost section headings, pillowy bordered cards, leaf-pill badges,
  chunky pill buttons with a pressed-down bottom edge.
- A floating rounded nav bar; the mobile menu is a phone-style app grid.
- Island-sky hero with hand-drawn clouds, palms and a scalloped shoreline.
- Dark mode is reworked as a "night island" rather than dropped.
- A click-to-play speaker in the corner playing an original generative loop.

Fonts are **Baloo 2** and **Nunito**, both SIL Open Font License 1.1.

## Accessibility

The recolour was contrast-checked: every text/background pair used by the site
meets WCAG AA (≥4.5:1). The mid-ramp muted tones are re-pointed under `.dark`,
because one value cannot clear AA against both the light sand and dark soil
backgrounds. Motion respects `prefers-reduced-motion`, and no audio autoplays.

## Local development

```bash
npm install
npm run dev     # http://localhost:3000
```

```bash
npm run build   # production build
npm start       # serve the build
```

## Deployment

Deployed on Vercel, auto-deploying from `main`.
