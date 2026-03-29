# Verdant — Open-Source Data Platform Marketing Site

A production-grade marketing site built with Next.js 16, Sanity CMS, and Storybook. 
Verdant is a fictional open-source data platform (Kafka, PostgreSQL, Redis) — 
built as a showcase for modern headless CMS architecture, content modeling, 
and component-driven frontend development.

**Live site:** https://verdant-data.vercel.app  
**Component library:** https://69c997d51f4c65fb3df56f84-eqxuznohqp.chromatic.com/
**Studio:** https://verdant-data.vercel.app/studio

---

## What this demonstrates

### Content modeling with Sanity
Three document schemas designed around editorial self-service — content editors 
can manage testimonials, pricing plans, and blog posts entirely from the live 
Studio without touching code. Schema decisions include descriptive field naming 
conventions to avoid GROQ ambiguity, explicit `preview` configurations for 
editor clarity, `initialValue` defaults to reduce friction, and field-level 
`description` hints that make the editor experience self-explanatory.

### Next.js App Router architecture
`page.tsx` is a pure Server Component that fetches all three content types in 
parallel with `Promise.all`. A `ModalProvider` client boundary owns interactive 
state. Data flows server → client as props — no client-side data fetching, 
no useEffect, no loading states.

### Type-safe content with Sanity TypeGen
GROQ queries use `groq` tagged template literals. TypeGen generates 
`sanity.types.ts` automatically from schemas and query projections. 
No manual interfaces — types stay in sync with the content model.

### Visual resilience
Each content-driven organism has a hardcoded fallback array. If the CMS 
returns empty (unpublished content, API unavailability) the section renders 
with fallback content instead of going blank.

### Component library with Storybook
23 components across atoms, molecules, and organisms. Stories are colocated 
with components. Each organism has a `Default` story (empty array → fallback) 
and a `FromSanity` story (mock data matching the GROQ result shape).

---

## Tech stack

| | |
|---|---|
| Framework | Next.js 16.2.1 (App Router) |
| Language | TypeScript 5.9.3 |
| Styling | Tailwind CSS 4.2.2 |
| Animations | Motion 12.38.0 (`motion/react`) |
| CMS | Sanity 5.18.0 + next-sanity 11.6.12 |
| Component library | Storybook 10.3.3 |
| Icons | lucide-react 1.7.0 |
| Images | next/image with Sanity CDN |
| Deploy | Vercel (site) + Chromatic (Storybook) |

---

## Content types

### Testimonial
`quote` · `fullName` · `jobTitle` · `avatar` (image with hotspot)

### Pricing Plan
`priceHeading` · `chipText` · `price` · `features` (array of strings) · 
`ctaLabel` · `isPopular` (boolean)

### Blog Post
`blogTitle` · `blogSlug` (auto-generated from title) · `coverImage` · 
`tag` · `publishedAt` (datetime) · `readTime`

---

## Architecture
```
app/page.tsx (Server Component)
  └── fetches all content in parallel via Promise.all
  └── passes typed data as props to ↓

components/providers/ModalProvider.tsx ("use client")
  └── owns modal useState
  └── renders all organisms with data + openModal props

components/organisms/
  ├── TestimonialsSection  ← TESTIMONIALS_QUERY_RESULT
  ├── PricingSection       ← PRICING_PLANS_QUERY_RESULT
  └── BlogSection          ← BLOG_POSTS_QUERY_RESULT
```

Each organism uses a type guard + adapter pattern to map Sanity's field 
names to component prop interfaces, with null coalescing for `string | null` 
generated types.

---

## Running locally
```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, SANITY_API_TOKEN

# Start dev server (site + Studio at /studio)
npm run dev

# Run Storybook
npm run storybook

# Regenerate TypeGen types after schema changes
npm run typegen
```

---

## Project structure
```
├── app/
│   ├── page.tsx                      # Server Component — data fetching
│   └── studio/[[...tool]]/page.tsx   # Embedded Sanity Studio
├── components/
│   ├── providers/ModalProvider.tsx   # Client boundary + modal state
│   ├── atoms/
│   ├── molecules/
│   └── organisms/                    # Each: Component + stories + index
├── sanity/
│   ├── schemaTypes/                  # testimonial, pricingPlan, blogPost
│   └── lib/                          # client.ts, image.ts
├── sanity.types.ts                   # TypeGen output — do not edit manually
└── next.config.ts                    # remotePatterns for Sanity CDN
```
