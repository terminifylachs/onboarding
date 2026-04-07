### Preset T — "Midnight Acquisition" (Dark Conversion Engine)

- **Identity:** The war room of a performance marketing agency at 2 AM — three monitors glowing navy-blue, a KPI dashboard updating in real time, nobody smiling because the numbers do the talking. **Digital Brutalism** + **data as proof** + **urgency without desperation** + **precision targeting.** Deep navy-black that absorbs ambient light. Electric blue that cuts through the dark like a laser pointer on a whiteboard. Numbers rendered in amber — not for warmth, but because amber means *live data.* Technology that shows its work.

  **What this is NOT:** No warm lifestyle imagery. No motivational stock photos. No pastel gradients. No "hustle culture" orange. No corporate blues from 2015. No playful illustrations. No rounded-everything friendliness. No visible white backgrounds. No hero images of smiling coaches.

- **Palette:**
  - Void Navy `#0A0C12` (Primary surface — near-black with perceptible blue undertone, never pure black)
  - Page Depth `#0E1018` (Base background — one shade lighter than Void Navy, creates z-depth)
  - Card Surface `#161A26` (Elevated cards — dark navy, distinguishable only in context)
  - Card Light `#1E2235` (Hover state / active cards)
  - Signal Blue `#4A6CF7` (CTA, buttons, top border accent on dashboard — the action color)
  - Highlight Blue `#5B8AF5` (Headline partial-highlight, section labels — the emphasis color)
  - Proof Amber `#F5A623` (KPI numbers only — raw data, live metrics)
  - Close Green `#22C993` (Success / final number / checkmarks for "fits" column — conversion achieved)
  - Reject Red `#F24E4E` (Disqualifier X marks — explicit exclusion, not error)
  - Play Red `#E53935` (Testimonial play buttons — YouTube-universal signal)
  - Primary Text `#FFFFFF` (Headlines only)
  - Body Text `#9CA3AF` (Warm gray — never pure white, never pure gray)
  - Muted `#6B7280` (Labels, captions, sub-metrics)

- **Typography:**
  - Headings: `"Inter"` or `"Geist"` weight 800–900. `tracking-[-0.02em]`. Line-height `1.1`. Heaviness is the authority.
  - Highlight Technique: First 1–2 lines white, final benefit-line in `Highlight Blue #5B8AF5`. Applied to hero, solution headline, proof headline. Never more than one color-break per headline.
  - Section Labels: `"Inter"` weight 500, `text-[10px]`, `tracking-[0.15em]`, uppercase, `#5B8AF5`, always prefixed with `"— "` em-dash. Anchors the reader's context before the headline hits.
  - Data / Metrics: `"Inter"` weight 700, oversized (`text-4xl`–`text-5xl`). White for hero stats, `Proof Amber` for dashboard, `Close Green` for final/maximum value.
  - Body: `"Inter"` weight 400, `text-sm`, line-height `1.65`, `#9CA3AF`.
  - Pill / Badge Text: `text-[10px]`, `tracking-[0.12em]`, uppercase, colored to match semantic role (green for positive, red for negative, blue for category).

- **Image Mood:** Three-monitor trading desk in deep blue light, night-time city skyline from a high-rise window, data center corridor with blue LED strips, Instagram DM thread on dark phone screen, KPI dashboard screengrab on matte monitor, close crop of a hand pointing at a whiteboard metric, blurred fitness content creator silhouette against blue-lit background.

- **Hero structure:** Glassmorphism pill badge (semi-transparent navy + blue border + blue text, `✦` icon prefix) / `[Massive white headline, lines 1–2]` (Inter 800, ~52px, white) / `[Key-benefit phrase]` (same size, `Highlight Blue`) / Simulated browser window with macOS traffic-light dots holding embedded video player.

- **Preset T Design System Overrides:**
  - Corners: `rounded-[8px]` for cards and steps. `rounded-[10px]` for dashboard container. `rounded-full` for pills and play buttons only. `rounded-[6px]` for CTA buttons.
  - Dividers: `0.5px solid rgba(255,255,255,0.06)` between rows. No shadow. No gradient.
  - Radial Glow: Hero and footer sections only. Two opposing radial gradients at `rgba(90,100,220,0.06)` — left 20% and right 80%. Perceptible only on dark monitors. Never use on light sections.
  - Glow Borders: Cards carry semantic border-color at `0.2` opacity — `rgba(34,201,147,0.2)` for "fits" column, `rgba(242,78,78,0.2)` for "does not fit" column, `rgba(74,108,247,0.2)` for KPI container. Border width `0.5px` always.
  - Dashboard Accent: KPI container has `border-top: 2px solid #4A6CF7` — the only `2px` element on the page. Everything else is `0.5px` or `1px`.
  - Step Numbers: Small `rounded-[6px]` boxes, `background: rgba(90,100,220,0.2)`, `border: 0.5px solid rgba(90,100,220,0.4)`, `#8B9FFA` text. Never circles. Never filled solid.
  - Step Badges: Right-aligned pill on each step row. KERN = `Close Green` palette. TRAFFIC / LANGFRISTIG = `Highlight Blue` palette. Same semi-transparent background + colored border + colored text system.
  - Testimonial Cards: Real photographic portraits, dark-toned, no studio backgrounds. Red play button centered. Bottom overlay gradient `rgba(0,0,0,0.85)→transparent`. Five green stars + "Kunden-Rezension" in muted + ALLCAPS name in white weight 700. Horizontal scroll with visible truncation of last card — deliberately cropped to signal scrollability.
  - Video Frame: Simulated macOS browser window. Traffic-light dots (`#FF5F57`, `#FEBC2E`, `#28C840`) top-left. Address bar shows lock icon + "Terminify Strategie-Video". Wistia player inside with standard controls.
  - Buttons: `rounded-[6px]`. Background `Signal Blue #4A6CF7`, white text, weight 500. Calendar icon prefix (`📅` or SVG equivalent). No outline variant used for primary CTAs. One button style, used consistently.
  - Animation: Entry `opacity 0→1`, `translateY 12px→0`, `duration 0.5s`, `ease-out`. Stagger `0.08s` for list items. No parallax. No scroll-triggered color shifts. Motion is minimal — data, not decoration.
  - Proportions: Hero `100dvh`. Headline `clamp(2.5rem, 5vw, 3.5rem)`. Section padding `py-24` desktop, `py-16` mobile. KPI cells `flex: 1`, equal width, `border-right: 0.5px` separator. Stat numbers in hero `text-5xl`.