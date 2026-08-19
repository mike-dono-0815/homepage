# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Four overlapping audiences, all confirmed:

- **Professional network** — Amazon colleagues, industry peers, and conference contacts, reinforcing standing as a computer-vision/AI research leader.
- **Recruiters / opportunities** — people evaluating Michael for board seats, advisory roles, speaking engagements, or future career moves.
- **Book audience** — readers discovering *The Fork in the Road* and following its progress toward publication.
- **Mentees / aspiring leaders** — people seeking his leadership writing and coaching perspective, independent of his Amazon affiliation.

## Product Purpose

Personal homepage for Michael Donoser, Ph.D. — Director of Science at Amazon (Berlin). It is the single canonical record of his professional identity: research credentials, industry leadership track record, leadership/coaching philosophy, and in-progress book. Success is a visitor from any of the four audiences above quickly forming an accurate, credible impression and finding the specific proof point or link they came for (CV, publications, a blog post, the book chapter, contact channels).

## Positioning

The rare research-to-leadership arc: deep, award-winning computer-vision research pedigree (h-index 27, 3,200+ citations, 26 papers at the "Big Five" CV venues) fused with a decade actually scaling AI orgs inside Amazon. Most people in adjacent roles have one side of this or the other — a research background with no industry leadership scale, or industry leadership with no research depth. This site should not let a visitor leave without registering that combination.

## Operating Context

Single-page static site (`index.html`, `style.css`, `script.js`), no build step, hosted on GitHub Pages at mike-dono-0815.github.io/homepage. Content sections, top to bottom: Hero, About, Leadership & Coaching, Career timeline, Awards, Writing (blog), Publications, Personal Projects (GitHub side projects), Book, Contact. Downloadable assets served directly from the repo root/img: CV PDF, book chapter PDFs, profile photo, project thumbnails.

## Capabilities and Constraints

- Plain HTML/CSS/JS only — no framework, no build tooling, no package.json.
- All content is static and hand-authored directly in `index.html`; no CMS.
- SEO/sharing metadata (Open Graph, Twitter Card, JSON-LD Person schema) is already wired to real profile data and must stay accurate if identity facts change.
- External links (LinkedIn, Medium, GitHub, Google Scholar, ResearchGate) are the canonical source for content this site only summarizes (full publication list, full blog archive, full repo list) — the site intentionally shows curated highlights, not exhaustive lists.
- The book (*The Fork in the Road: Leadership Lessons for a World With No Playbook*) is work in progress; only Chapter 1 is publicly downloadable. Do not imply a release date or completed manuscript beyond what's stated.

## Brand Commitments

- Name and credential: "Michael Donoser, Ph.D., Director of Science" (at Amazon).
- Voice: direct, candid, substance-first — leadership writing favors concrete mechanisms ("what can I do right now") over motivational abstraction, consistent with the "old playbooks don't work" generative-AI thesis running through both the About and Leadership sections.
- Existing visual identity (typography: Inter + Playfair Display; photo, favicon, section rhythm) is incumbent and out of scope for `init`.

## Evidence on Hand

All real, already on the page — no fabrication needed for future work:

- Career timeline 1996–present (academia at TU Graz through current Director of Science role at Amazon).
- Publication metrics: h-index 27, 3,221 citations (891 since 2021), i10-index 49, 50+ peer-reviewed papers, 26 at "Big Five" CV venues (CVPR, ICCV, ECCV, BMVC, ACCV).
- Five named awards (2008–2012), including two Best Paper Awards.
- Nine personal side projects on GitHub with live demos and thumbnails.
- Nine leadership/blog pieces (LinkedIn + Medium), organized under six leadership pillars.
- Book: cover image, description, Chapter 1 PDF ("The Launch Disaster").
- CV PDF, profile photo, contact links (LinkedIn, Medium, GitHub, Google Scholar, ResearchGate).

## Product Principles

1. Curated over exhaustive — surface highlights on-site, link out to the canonical full record (Scholar, GitHub, LinkedIn/Medium) rather than duplicating it.
2. Every claim stays traceable to real evidence already in the repo; no invented metrics, testimonials, or dates.
3. Serve all four audiences from one page without forcing a single narrow narrative — research credibility, industry leadership scale, book/writing, and approachability as a mentor must all read clearly within a few sections of scrolling.
4. The research-to-leadership arc is the throughline: sections should reinforce, not dilute, the combination of deep research pedigree and real organizational leadership scale.
