# Shroud of Turin exhibit site

Vite + React + TypeScript. Deploys to Vercel with no configuration.

## Run it on your computer
```
npm install
npm run dev
```

## Where to edit things
- `src/content.ts`  -> every title, link, description, and Station. Edit this one file.
- `public/images/shroud/`   -> close-up photos (see list below)
- `public/images/stations/` -> 14 Station images named 01.jpg ... 14.jpg

Missing images show a labeled placeholder, so the site never looks broken.

## Pages
`/` home, `/close-ups`, `/watch`, `/read`, `/stations`, and `/stations/1` ... `/stations/14`.
`vercel.json` sends every path to `index.html` so these links work when opened directly.
Station meditations and prayers are from St. Alphonsus Liguori's *Way of the Cross* (public domain).

## Shroud images (public/images/shroud/)
face.jpg, negative.jpg, hands.jpg, side.jpg, back.jpg, weave.jpg, fire.jpg

## Image rights
Only use public-domain or properly licensed images (for example from Wikimedia Commons).
Keep a note of each image's source and license, and check with your supervisor.
