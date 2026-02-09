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
- **Font Stack**: Apple system font stack (-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif)
- **Rendering**: Antialiased, optimized legibility, smooth cubic-bezier transitions
- **Letter Spacing**: Headings -0.025em to -0.03em, body -0.01em
- **Weight Hierarchy**: h1 700, h2 600, body 400

## Recent Changes (February 2026)

### Homepage Major Redesign (Latest)
Complete layout overhaul following Apple-style design principles:

#### Hero Section - Split Layout
- **Layout**: Two-column grid (55% text left / 45% video right) on desktop, stacked on mobile
- **Left Column**: Gold pill badge, large headline, subtitle, single CTA button, social proof row with client logos
- **Right Column**: Video placeholder with play button overlay and "Meet the Founder" text
- **Animations**: Subtle fade-up reveals with Apple cubic-bezier easing, no floating orbs

#### Logo Carousel
- **Real Client Logos**: 16 logos from client_logos_isolated_v2 zip file (logo_1.png through logo_16.png)
- **Style**: Grayscale with opacity, color on hover, smooth infinite scroll
- **Replaces**: Previous placeholder text logos

#### Services - Bento Grid
- **Layout**: 1 full-width card (Top of Funnel) + 2 side-by-side cards (Middle Funnel + Back End)
- **Design**: Clean cream backgrounds, subtle borders, service tags as pills
- **Replaces**: Previous 3-equal-column layout with images

#### Video Testimonials Grid
- **Layout**: 3-column grid with video thumbnail placeholders
- **Features**: Play button overlay, click opens modal, quote + name + metric below each
- **Modal**: Dark backdrop with close button, "Video coming soon" placeholder
- **Testimonials**: Genflow (312% Revenue Growth), Faseeha Institute (700+ Leads), Nur Cafe (55% Revenue Growth)

#### Process Timeline
- **Desktop**: Horizontal timeline with gold numbered circles (1-4) connected by animated gold line
- **Mobile**: Vertical timeline with connecting lines
- **Steps**: Audit (Week 1-2) → Architect (Week 2-3) → Build (Week 3-8) → Scale (Week 8+)
- **Animation**: Line draws on scroll, circles appear sequentially

#### Pricing Preview
- **New section**: Brief pricing overview on homepage
- **Content**: "Starting from $3,000/month... to $20,000+/month"
- **CTA**: Links to /services for full pricing details

#### CTA Strategy (Reduced)
- **Hero**: Single "Book Strategy Call" button
- **After Testimonials**: "See All Client Results" link to /client-results
- **End**: Large CTA section with dark background image
- **Removed**: Duplicate mid-page CTAs, sticky mobile CTA bar

#### Effects Reduction (70% removed)
- **Removed**: Glass morphism (.glass), shimmer animations, card-3d hover effects, floating gradient orbs, 3D tilt, pulse animations on CTAs, excessive glow, parallax hero background
- **Kept**: FadeIn scroll reveals (fade-up only), smooth hover transitions (border color), number counting animations, logo carousel smooth scroll, Apple cubic-bezier easing
- **Added**: Subtle grain texture overlay (3% opacity, opt-in .grain class)

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

### Client Results Page (February 2026)
New page showcasing case studies with data visualizations:
- **Route**: `/client-results`
- **Navigation**: Added "Results" link to Navbar
- **Charts Library**: Recharts for data visualizations

#### Case Studies Featured:
1. **Genflow** - Sales Growth Consulting
   - Revenue growth from <$100K to $400K+ in Q4
   - 45% close rate, first $100K month achieved
   - Bar chart: Monthly revenue growth
   - Pie chart: Lead sources distribution

2. **Faseeha Institute** - Full Stack Build
   - 50% traffic increase, 700+ leads in 30 days
   - Complete website rebuild + AI automations
   - Area chart: Website traffic growth
   - Line chart: Sales performance over 3 months

3. **Nur Cafe** - Operations & Growth
   - £1.1M → £1.7M revenue (55% growth)
   - Profit margin: 2% → 8% (300% increase)
   - Expanded to 4 locations
   - Custom dashboard + loyalty app built
   - Bar chart: Revenue & profit trajectory

4. **Ad Campaign Performance** (Aggregate Data)
   - MBA, Playbook, Book-a-Call campaigns
   - 40.7% close rate, £74K total revenue
   - Bar chart: Campaign ROAS comparison
   - Pie chart: Call outcome distribution

#### Industries Served Section:
- Clinics, Dental Practices, Cafes & Restaurants
- SMMA Agencies, Law Firms, Marketing Agencies, Educational Institutes

#### Data-testid Attributes:
- `section-results-hero`, `section-genflow`, `section-faseeha`
- `section-nurcafe`, `section-ads`, `section-industries`
- `button-results-cta`

### Performance Notes
- Large images (700KB+) in attached_assets should be optimized for production
- LogoCarousel is ready for real client logos via props: `<LogoCarousel logos={[{name: "Client", logoUrl: "/path/to/logo.png"}]} />`
- Globe component lazy loaded to reduce initial bundle size
- Recharts lazy loads chart components for better performance