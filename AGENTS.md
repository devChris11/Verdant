## Stack-specific rules

- Next.js 16: `params` and `searchParams` are async — always `await props.params`
- Tailwind v4: Use `@theme` in globals.css for custom tokens. No tailwind.config.js. Use `bg-linear-to-r` not `bg-gradient-to-r`
- Motion (formerly Framer Motion): Import from `motion/react`, NOT `framer-motion`
- All client components using hooks or animations must have `"use client"` at the top
- Always use `next/image` for ImageKit URLs, never raw `<img>` tags
- Google Fonts loaded via `next/font/google` in layout.tsx, not via `<link>` tags
- No inline styles except for dynamic runtime values