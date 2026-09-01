# Hovercraft University Project — Team Website Plan

## What we’re building
A bold, startup-style marketing website for a 5-person university team building a hovercraft. It will have a strong landing page plus four distinct content pages: Mission, Vision, Team, and Process. Each page will be its own SEO-friendly route so the site is shareable and SSR-ready.

## Site structure
```text
/                  Home / landing page
  ├── Hero         Project name, hovercraft tagline, CTA
  ├── Quick stats  5 team members, university, project phase, etc.
  └── Page links   Cards linking to Mission, Vision, Team, Process

/mission           What the team is building and why it matters
/vision            Long-term goals and impact of the hovercraft project
/team              All 5 team members with names, roles, and short bios
/process           How the hovercraft is being developed (phases, methods, tools)
```

## Design direction
- **Vibe:** Bold & startup, technical but approachable, engineering-forward.
- **Typography:** Space Grotesk for headings, DM Sans for body text.
- **Layout language:** Bento-grid style with mixed-size cards, generous whitespace, and clear visual hierarchy.
- **Color palette:** A custom hovercraft/engineering palette inspired by the “Bold & Startup” choice — deep navy/black surfaces, crisp white/gray text, and a single energetic accent (electric teal or orange) for CTAs and highlights. Colors will be defined as semantic tokens in `src/styles.css` using `oklch` so they work in light and dark mode.
- **Imagery/graphics:** We’ll generate a hero image or abstract hovercraft illustration to anchor the landing page. Team member cards will use avatars or placeholder initials.
- **Motion:** Subtle entrance animations (fade/slide up), hover lifts on cards, and smooth page transitions. No heavy animation libraries — keep it lightweight with CSS/Tailwind.

## Content plan (placeholder)
- **Home:** Project name placeholder, one-line value proposition, short teaser for each of the four sections.
- **Mission:** “Build a lightweight, efficient hovercraft for our university engineering challenge…” with 2–3 concise paragraphs and a supporting stat card.
- **Vision:** “Demonstrate accessible, low-friction transport concepts and showcase student engineering…” with future-state language.
- **Team:** 5 member cards, each with a placeholder role (e.g., Project Lead, Mechanical Engineer, Electrical Engineer, Software/Control, Documentation/Testing).
- **Process:** A 4-step process timeline (Research → Design → Prototype → Test/Iterate) with short descriptions and icons.

## Technical implementation
- **Framework:** TanStack Start (already in place).
- **Routes:** Create separate route files for each page so they have distinct URLs and metadata:
  - `src/routes/index.tsx`
  - `src/routes/mission.tsx`
  - `src/routes/vision.tsx`
  - `src/routes/team.tsx`
  - `src/routes/process.tsx`
- **Layout:** Shared navigation and footer in `src/routes/__root.tsx` around the `<Outlet />`. No hash-anchor single-page structure.
- **SEO metadata:** Each route gets a unique `head()` with title, description, og:title, og:description, og:type, and twitter:card. The home page may also include an og:image if we generate a hero visual.
- **Styling:** Extend `src/styles.css` with the custom hovercraft palette (semantic tokens). Use Tailwind v4 utility classes and avoid hardcoded hex values in components.
- **Components:** Reusable `PageHeader`, `BentoCard`, `TeamCard`, `ProcessStep`, and `Nav` components under `src/components/`.
- **Responsive:** Fully responsive; mobile-first navigation with a simple hamburger menu.

## Out of scope
- No backend, database, or auth required for this phase.
- No contact form or interactive data collection.

## Open question for the team
1. What is the project’s name? (I’ll use a placeholder like “Project Hover” unless you tell me otherwise.)
2. Do you want me to generate a hero image/illustration, or do you have a photo of the hovercraft/team to use?

If you approve this plan, I’ll build the site and generate the placeholder content so you can replace it with the real text later.
