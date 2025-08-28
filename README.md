# Break & Breathe — MVP v2

Adds **Work Hours + Break Reminders + Stretch Prompt + Voice/Chime** to the original MVP.

## Quick Start
Open `index.html` locally or deploy to GitHub Pages (Settings → Pages → Deploy from a branch → `main` / root).

## How to Use
1) Set your **work hours** and **break cadence**.  
2) Choose **Reminder style** (Voice, Chime, or Both).  
3) Click **Start Workday** and keep the tab open.  
4) At stretch time you’ll hear “Time to stand and stretch.”  
5) At break time you’ll hear “Break time. Stand, stretch, then begin your breathing practice.”

## Notes
- Voice uses the **Web Speech API**; chime uses **WebAudio**. Some browsers require a user gesture (click Start Workday) before audio plays.
- Settings persist in localStorage.
- PWA files included for offline support.
