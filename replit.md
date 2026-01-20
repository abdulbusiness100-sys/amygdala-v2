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

## Recent Changes (January 2026)

### Homepage Redesign
Major visual overhaul implementing a premium design based on detailed requirements:

#### New Components Created
- **LogoCarousel** (`client/src/components/LogoCarousel.tsx`): Infinite scrolling client logo marquee with configurable logos, fade edge effects, and grayscale-to-color hover effect
- **TestimonialSection** (`client/src/components/TestimonialCard.tsx`): Testimonial cards with star ratings, client photos, quotes, and specific metrics
- **TextReveal** (`client/src/components/TextReveal.tsx`): Premium word-by-word text reveal animation using Framer Motion
- **FadeIn** (in TextReveal): Directional fade-in animation component (supports up/down/left/right)
- **AnimatedCounter** (in Home.tsx): Counter animation for metrics section

#### Homepage Sections (in order)
1. **Hero Section**: Split layout with hero image on right, single CTA button, social proof badges (50+ companies avatar row), floating ROI badge
2. **Logo Carousel**: Infinite scrolling client logos with fade edges
3. **Problem Section**: "Your Growth Stack Is Bleeding Money" with fragmentation image and problem cards
4. **Three Layers Bento Grid**: Stacked system infographic, Top/Middle funnel cards with images
5. **Infrastructure Card**: Full-width backend services with tags
6. **Testimonials**: 3 client testimonial cards with star ratings and metrics
7. **Metrics Section**: 4 animated counters (50+ clients, $12M+ revenue, 847% ROI, 89% retention)
8. **Dashboard Section**: Integrated dashboard mockup image
9. **Process Timeline**: Simplified 4-step (Audit → Architect → Build → Scale)
10. **CTA Section**: Full-bleed portal image with dark gradient overlay

#### Custom Images Integrated
Located in `attached_assets/`:
- Hero network visualization
- Fragmentation problem illustration
- Stacked layers system infographic
- Acquisition funnel visual
- Conversion pipeline visual
- Infrastructure illustration
- Metrics cards visual
- Dashboard mockup
- Process timeline visual
- CTA portal concept

#### Data-testid Attributes
All interactive and display elements have proper data-testid attributes for QA automation:
- Section: `section-hero`, `section-problem`, `section-three-layers`, etc.
- Cards: `card-testimonial-{i}`, `card-metric-{i}`, `card-process-{i}`
- Text: `text-testimonial-quote-{i}`, `text-metric-value-{i}`, etc.
- Buttons: `button-hero-cta`, `button-cta-book-call`

### Performance Notes
- Large images (700KB+) in attached_assets should be optimized for production
- LogoCarousel is ready for real client logos via props: `<LogoCarousel logos={[{name: "Client", logoUrl: "/path/to/logo.png"}]} />`