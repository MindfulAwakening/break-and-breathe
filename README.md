# Break & Breathe — Timed Meditation Breaks

A tiny, elegant web app that guides **10–30 minute** meditation breaks with **Yogananda-inspired Hong–Sau** breathing, posture reminders, optional chimes, and a soothing breath pacer. Fully client-side, no dependencies.

## Features
- 10–30 minute session timer (slider)
- Breathing modes: **Hong–Sau**, **Equal**, **Box 4–4–4–4**, **4–7–8**
- Visual breath pacer + mantra overlay
- Optional sound chimes (WebAudio)
- Posture checklist (saved in local storage)
- Basic stats (sessions, total minutes)
- Installable PWA + offline (service worker)

## Quick Start (local)
Just open `index.html` in your browser. No build step.

## Deploy to GitHub Pages
1. Create a repo on GitHub, e.g. `break-and-breathe`.
2. Add these files to the repo:
   - `index.html`
   - `manifest.webmanifest`
   - `service-worker.js`
   - `LICENSE`
   - `README.md`
3. Commit & push to `main`.
4. Repo **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main` (root). Save.
5. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

## License
MIT
