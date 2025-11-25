# Joseph Maruria Portfolio - Project Overview

## Overview

This is a personal portfolio website for Joseph Maruria, a software developer specializing in ERP systems, front-end and backend development. The application is a single-page application (SPA) showcasing professional work, skills, and contact information through a modern, Material Design-inspired interface.

The portfolio features:
- Hero section with professional imagery and call-to-action
- About section with profile information and skills display
- Projects showcase with thumbnail images and links
- Skills categorization (Frontend, Backend, Tools)
- Contact form with social media links
- Fully responsive design optimized for mobile and desktop

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Tooling:**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, providing fast HMR (Hot Module Replacement)
- **Wouter** for client-side routing (lightweight alternative to React Router)
- **TanStack Query v5** for server state management and data fetching

**UI Component System:**
- **shadcn/ui** component library (New York style variant) built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- CSS variables for theming, supporting customizable color palettes and spacing systems
- Material Design principles with modern web aesthetics

**Design System:**
- Typography: Inter font family from Google Fonts
- Color palette with HSL-based theme variables for light mode
- Consistent spacing using Tailwind's scale (4, 6, 8, 12, 16)
- Custom elevation system with `hover-elevate` and `active-elevate` utilities
- Responsive breakpoints with mobile-first approach

**State Management:**
- React hooks for local component state
- TanStack Query for async server state
- Toast notifications via custom hook system

### Backend Architecture

**Server Framework:**
- **Express.js** running on Node.js with ESM modules
- TypeScript for type safety across the entire stack
- Middleware for JSON parsing with raw body preservation for webhook support
- Custom request logging middleware for API routes

**Development Setup:**
- Hot reload via `tsx` for TypeScript execution in development
- Vite middleware integration for seamless dev server experience
- Production build uses `esbuild` for server bundling

**Storage Layer:**
- **In-memory storage** implementation (`MemStorage`) as the default storage interface
- Abstracted storage interface (`IStorage`) allowing easy swapping of storage backends
- Prepared for database integration via Drizzle ORM

**API Structure:**
- RESTful API routes with `/api` prefix convention
- Route registration pattern through `registerRoutes` function
- HTTP server created via Node's `http` module for WebSocket capability if needed

### Data Storage Solutions

**Database Schema (Prepared):**
- **Drizzle ORM** configured for PostgreSQL database
- Schema defined in `shared/schema.ts` for type-safe database operations
- Zod integration for runtime validation via `drizzle-zod`
- Migration system configured with `drizzle-kit`

**Current Implementation:**
- In-memory storage for user data (UUID-based IDs)
- User schema includes: id, username, password fields
- Prepared for Neon serverless PostgreSQL integration (dependency installed)

**Design Decision:**
The application uses in-memory storage by default to avoid requiring database setup during initial development. The storage interface abstraction allows switching to a database (PostgreSQL via Drizzle) without changing business logic. This provides flexibility for development and easy migration to production persistence.

### Authentication and Authorization

**Current State:**
- User schema defined with username/password fields
- No active authentication implementation in the codebase
- Storage methods include `createUser`, `getUserByUsername`, `getUser`

**Prepared Infrastructure:**
- Session management dependencies installed (`connect-pg-simple` for PostgreSQL session store)
- Cookie-based session architecture ready to implement
- Password hashing would need to be implemented (bcrypt or similar not yet added)

### External Dependencies

**UI Component Libraries:**
- `@radix-ui/*` - Unstyled, accessible component primitives (accordion, dialog, dropdown, etc.)
- `cmdk` - Command menu component
- `embla-carousel-react` - Carousel/slider functionality
- `lucide-react` - Icon library
- `react-icons` - Additional icon sets (specifically used for tech stack icons like `SiReact`, `SiTypescript`, `SiNodedotjs`)
- `class-variance-authority` - Variant-based component styling
- `tailwind-merge` - Utility for merging Tailwind classes

**Form Handling:**
- `react-hook-form` - Form state management
- `@hookform/resolvers` - Validation resolver integration
- `zod` - Schema validation

**Data Fetching:**
- `@tanstack/react-query` - Server state management and caching

**Database & ORM:**
- `drizzle-orm` - TypeScript ORM for SQL databases
- `@neondatabase/serverless` - Serverless PostgreSQL driver
- `drizzle-kit` - Database migrations and schema management
- `drizzle-zod` - Zod schema generation from Drizzle schemas

**Build & Development Tools:**
- `vite` - Frontend build tool and dev server
- `@vitejs/plugin-react` - React support for Vite
- `esbuild` - JavaScript bundler for production server code
- `tsx` - TypeScript execution for development
- `@replit/*` plugins - Replit-specific development tooling (error overlay, cartographer, dev banner)

**Utilities:**
- `date-fns` - Date manipulation and formatting
- `clsx` - Conditional className utility
- `nanoid` - Unique ID generation

**Asset Management:**
- Images stored in `attached_assets/generated_images/` directory
- Vite alias `@assets` for easy import of assets
- Professional images for hero, profile, and project thumbnails

### Deployment Considerations

**Production Build Process:**
1. Frontend: `vite build` outputs to `dist/public`
2. Backend: `esbuild` bundles server code to `dist/index.js`
3. Static assets served from compiled frontend bundle

**Environment Variables:**
- `DATABASE_URL` - PostgreSQL connection string (required when using database)
- `NODE_ENV` - Development/production environment flag

**Hosting Requirements:**
- Node.js runtime environment
- PostgreSQL database (when transitioning from in-memory storage)
- Static file serving capability for frontend assets