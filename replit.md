# SPIDXR NETWORK

## Overview

SPIDXR NETWORK is a full-stack growth operator website built as a full-stack TypeScript application. The site showcases unified business development solutions across three funnel layers (Top/Middle/Back). It features a premium light-themed UI with gold accents, glass morphism effects, and a luxury tech consultancy aesthetic. Key features include lead capture functionality, service breakdowns by funnel stage, pricing tiers (Strand/Web/Network), and a detailed implementation process.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for scroll reveals and transitions
- **Build Tool**: Vite with React plugin

The frontend follows a component-based architecture with:
- Pages in `client/src/pages/`
- Reusable components in `client/src/components/`
- UI primitives in `client/src/components/ui/`
- Custom hooks in `client/src/hooks/`

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with tsx for development
- **API Pattern**: RESTful endpoints under `/api/`
- **Validation**: Zod schemas shared between client and server

The backend uses a simple layered architecture:
- `server/routes.ts` - API endpoint definitions
- `server/storage.ts` - Data access layer (repository pattern)
- `server/db.ts` - Database connection

### Data Storage
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with drizzle-kit for migrations
- **Schema Location**: `shared/schema.ts` (shared between client/server)
- **Connection**: Uses `DATABASE_URL` environment variable

### Shared Code Pattern
The `shared/` directory contains code used by both frontend and backend:
- `schema.ts` - Database schema definitions and Zod validation schemas
- `routes.ts` - API route definitions with input/output types

This pattern ensures type safety across the full stack.

### Build System
- Development: Vite dev server with HMR, Express backend runs concurrently
- Production: Vite builds to `dist/public/`, esbuild bundles server to `dist/index.cjs`
- The build script (`script/build.ts`) handles both client and server bundling

## External Dependencies

### Database
- PostgreSQL via `pg` driver
- Connection managed through `DATABASE_URL` environment variable
- Session storage uses `connect-pg-simple`

### Third-Party Services
- **Calendly**: Embedded scheduling widget (loaded via external script in `index.html`)

### Key NPM Packages
- `@tanstack/react-query` - Data fetching and caching
- `drizzle-orm` / `drizzle-zod` - Database ORM and schema validation
- `framer-motion` - Animation library
- `react-hook-form` / `@hookform/resolvers` - Form handling
- `zod` - Runtime type validation
- Full shadcn/ui component suite (Radix UI based)

### Asset Hosting
- External images hosted on `cdn.abacus.ai`
- Local assets in `attached_assets/` directory

## Typography
- **Titles/Headings**: Orbitron (font-display) - futuristic, geometric style
- **Body Text**: Be Vietnam Pro (font-sans, font-accent) - clean, readable
- Logos excluded from Orbitron styling

## Recent Changes (January 2026)

### Homepage Redesign (Latest Update)
Major visual overhaul with centered hero layout and scroll effects:

#### Homepage Layout Changes
- **Hero Section**: Centered layout (was split left-to-right) with Framer Motion scroll parallax effect
- **Hero Image**: Using AMYGDALA_ACQUISITIONS_(1) brain visualization
- **Metrics Updated**: 60+ Businesses Impacted, $10M+ Client Portfolio, 100% Satisfaction Rate, $2.6M+ Generated in 2025
- **Testimonials Section REMOVED**: Will be added as separate "Client Success & Results" page later

#### Scroll Effects
- Hero section uses `useScroll` and `useTransform` from Framer Motion
- Hero image has parallax Y movement, scaling, and opacity transitions on scroll

### Services Page Redesign
- **Service Layers**: Black borders (border-2 border-charcoal) with rounded-3xl
- **Inner Boxes**: Darker gradient backgrounds (from-white to-cream/80)
- **Individual Cards**: Charcoal/20 borders for visual separation
- **Pricing Tiers**: Replaced with side-by-side cylinder-style design (rounded tops/bottoms)
- **Request Audit Section**: REMOVED

### Process Page (What We Do) Additions
- **3D Globe Visualization**: Using `react-globe.gl` library
- **Globe Features**: 6 phase points with gold markers, animated arc connections, auto-rotation
- **WebGL Fallback**: GlobeErrorBoundary catches WebGL errors and shows fallback grid of 6 phase cards
- **Lazy Loading**: Globe component lazy loaded with Suspense for performance
- **Phase Legend**: Always visible at bottom of globe container
- **Visual Timeline Mindmap**: Alternating left/right layout with central gold connecting line
  - Numbered nodes (1-6) on central timeline
  - Horizontal connectors to phase cards
  - Phase cards with border-2 border-charcoal styling
  - Responsive: vertical stack on mobile, alternating layout on desktop

#### New Components Created
- **LogoCarousel** (`client/src/components/LogoCarousel.tsx`): Infinite scrolling client logo marquee
- **TextReveal** (`client/src/components/TextReveal.tsx`): Premium word-by-word text reveal animation
- **FadeIn** (in TextReveal): Directional fade-in animation component
- **AnimatedCounter** (in Home.tsx): Counter animation for metrics section
- **GlobeErrorBoundary** (in WhatWeDo.tsx): Error boundary for WebGL fallback

#### Homepage Sections (in order)
1. **Hero Section**: Centered layout with hero image, single CTA button, scroll parallax effect
2. **Logo Carousel**: Infinite scrolling client logos with fade edges
3. **Problem Section**: "Your Growth Stack Is Bleeding Money" with fragmentation image
4. **Three Layers Bento Grid**: Stacked system infographic, Top/Middle funnel cards
5. **Infrastructure Card**: Full-width backend services with tags
6. **Metrics Section**: 4 animated counters with updated values
7. **Dashboard Section**: Integrated dashboard mockup image
8. **Process Timeline**: Simplified 4-step (Audit → Architect → Build → Scale)
9. **CTA Section**: Full-bleed portal image with dark gradient overlay

#### Data-testid Attributes
All elements have proper data-testid attributes for QA automation:
- Sections: `section-hero`, `section-metrics`, `section-globe`, `section-timeline`, etc.
- Service Layers: `section-service-layer-{i}`
- Pricing Tiers: `cylinder-tier-{i}`
- Globe: `globe-container`, `globe-fallback`, `phase-legend`
- Buttons: `button-hero-cta`, `button-cta-book-call`

### January 2026 Updates (Latest)
- **Logo Replacement**: "SPIDXR NETWORK" text replaced with inline logo (blue version) sized to match font, in Home.tsx metrics section and Footer.tsx copyright
- **Calendly Background**: Changed to solid khaki gold (#B8A04A) with subtle metallic gradient overlays for professional look
- **What Drives Us Section**: Core values pillars now have border-2 border-charcoal
- **Globe Initial View**: Changed to face America (lat: 39.8, lng: -98.5, altitude: 2.5)
- **6 Phases Grid**: Changed from horizontal flex wrap to responsive 3×2 grid (grid-cols-2 sm:grid-cols-3)
- **Dashboard Timeline**: Added horizontal timeline visual below dashboard features showing 4-step journey (Audit → Architect → Build → Scale)

### Performance Notes
- Large images (700KB+) in attached_assets should be optimized for production
- LogoCarousel is ready for real client logos via props: `<LogoCarousel logos={[{name: "Client", logoUrl: "/path/to/logo.png"}]} />`
- Globe component lazy loaded to reduce initial bundle size