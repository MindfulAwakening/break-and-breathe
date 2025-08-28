# Break & Breathe — v2.6

### Fixes
- **Clicks blocked**: pacer area is now `pointer-events: none`, so header/controls are always clickable.
- **Chrome voices silent**: added explicit **Unlock Audio** button, improved voice loading/polling, removed over-aggressive cancel, and added **Use Default Voice** fallback.
- **Voice status**: shows how many voices were loaded.

### Keep
- Voice picker + quick female/male pick
- Voice controls: Rate, Pitch, Volume (persisted)
- Guided Voice cues and “It is time to take a break.” reminders
- Work Hours, recurring breaks, stretch pre-alert
- PWA offline support
