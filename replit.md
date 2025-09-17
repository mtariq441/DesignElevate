# Muhammad Irshad Khan - Portfolio Website

## Overview

This is a premium portfolio website for Muhammad Irshad Khan, a Web Security & Development Specialist. The application showcases expertise across five key areas: Web Security, Web Development, SEO, Marketing Automation, and Copywriting. Built as a modern full-stack application, it features a React frontend with TypeScript, Express backend, and PostgreSQL database using Drizzle ORM. The design follows premium portfolio aesthetics inspired by Linear, Stripe, and Vercel, emphasizing sophisticated minimalism with strategic color usage.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing with support for dynamic routes and parameter extraction
- **Styling**: Tailwind CSS with custom design system implementing premium color palette (Dark Navy #0A192F, Teal Accent #00BFA6, Off-White #F9F9F9)
- **UI Components**: Radix UI primitives with shadcn/ui component library for accessibility and consistency
- **State Management**: TanStack Query for server state management and API data fetching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for API endpoints
- **Language**: TypeScript for full-stack type safety
- **Database ORM**: Drizzle ORM with PostgreSQL for type-safe database operations
- **Session Management**: Express sessions with PostgreSQL session store
- **Development**: Hot reload with Vite integration for seamless full-stack development

### Data Storage Solutions
- **Primary Database**: PostgreSQL with Neon serverless hosting for production scalability
- **ORM Layer**: Drizzle with schema-first approach and automatic TypeScript type generation
- **Migrations**: Drizzle Kit for database schema migrations and version control
- **Session Storage**: PostgreSQL-backed session store for user authentication state

### Component Design System
- **Design Language**: Premium minimalism with consistent spacing units (8px base system)
- **Typography**: Inter font family with weight hierarchy (400-700) and optimized line heights
- **Color System**: CSS custom properties with light/dark mode support
- **Interactive Elements**: Hover states with elevation effects and blur backdrops
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

### Page Architecture
The application follows a content-focused architecture with these main sections:
- **Hero Section**: Full-height viewport with gradient backgrounds and professional imagery
- **Expertise Hub**: Modular showcase of five specialization areas with dedicated detail pages
- **Blog System**: Content marketing platform with category filtering and SEO optimization
- **Contact Integration**: Multi-step contact form with service selection and response workflow
- **Educational Timeline**: Interactive timeline component for credentials and certifications

### SEO and Performance Optimization
- **Meta Management**: Dynamic SEO utilities for page-specific meta tags and Open Graph data
- **Core Web Vitals**: Optimized loading strategies with image optimization and lazy loading
- **Structured Data**: Schema markup implementation for better search engine understanding
- **Performance**: Code splitting, tree shaking, and optimized asset delivery

## External Dependencies

### Database and Hosting
- **Neon Database**: Serverless PostgreSQL hosting with automatic scaling and branching
- **Replit**: Development and deployment platform with integrated database provisioning

### UI and Component Libraries
- **Radix UI**: Headless UI primitives providing accessibility and keyboard navigation
- **shadcn/ui**: Pre-built component library with customizable design tokens
- **Lucide React**: Icon system with consistent styling and semantic meaning
- **Embla Carousel**: Touch-friendly carousel implementation for content showcases

### Development and Build Tools
- **Vite**: Build tool with HMR, TypeScript support, and optimized production builds
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer
- **ESBuild**: Fast JavaScript bundling for server-side code compilation

### Form and Validation
- **React Hook Form**: Performance-focused form management with minimal re-renders
- **Zod**: Runtime type validation with TypeScript integration for form schemas
- **Hookform Resolvers**: Bridge between React Hook Form and Zod validation

### Utility Libraries
- **Class Variance Authority**: Type-safe variant API for component styling
- **clsx & Tailwind Merge**: Conditional class name composition and conflict resolution
- **date-fns**: Date manipulation and formatting utilities
- **Nanoid**: URL-safe unique ID generation for client-side operations