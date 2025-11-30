# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Webmoov company website built with Astro 5, deployed on Vercel with server-side rendering (SSR). The site is in Dutch and showcases web development services, portfolio projects, and blog content.

## Development Commands

```bash
npm run dev          # Start dev server at localhost:4321
npm run build        # Build for production to ./dist/
npm run preview      # Preview production build locally
npm run astro        # Run Astro CLI commands
npm run astro check  # Type-check Astro files
```

## Architecture

### Astro Configuration
- **Output mode**: Server (SSR enabled via Vercel adapter)
- **Site URL**: https://www.webmoov.be
- **Integrations**: React (for interactive components), Sitemap
- **Redirects**: Configured in `astro.config.mjs` for legacy /en and /nl routes

### Content Collections
The site uses Astro's type-safe content collections system (defined in `src/content/config.ts`):

- **blog**: Blog posts with featured flag, SEO metadata (65 char title max, 160 char description max), uses glob loader pattern
- **projects**: Portfolio projects with type enum (onepager/premium/ecommerce), tech stack, client info, gallery, and results
- **products**: Service offerings with pricing and features
- **testimonials**: Client testimonials linked to projects
- **images**: Image gallery items

All collections use Zod schemas for validation. Access via `getCollection()` and `getEntryBySlug()` for type safety.

### Routing Structure
- **Static pages**: `/`, `/over-ons`, `/ons-werk`, `/contact`, `/algemene-voorwaarden`
- **Product pages**: `/one-pager-website`, `/premium-website`, `/ecommerce-website`
- **Dynamic routes**:
  - `/projects/[project]` - Individual project pages
  - `/blog/[page]` or `/blog/[...page]` - Paginated blog listing

### React Integration
React is used sparingly for interactive components:
- `ContactForm.tsx` - Contact form with react-hook-form and Zod validation
- Email templates in `src/emails/` using @react-email components

Use appropriate client directives:
- `client:load` for immediately interactive components
- `client:visible` for deferred hydration
- `client:idle` for non-critical components

### Email System
- API endpoint: `src/pages/api/sendEmail.json.ts`
- Uses Resend API (key in .env as RESEND_API_KEY)
- Email templates built with React Email in `src/emails/`
- Renders both HTML and plain text versions

### Styling
- Global styles in `src/styles/global.css`
- Fontsource imports: Fira Sans, EB Garamond (variable), DM Serif Display
- Component-scoped styles in Astro components
- No CSS framework - custom CSS only

### SEO & Analytics
- Sitemap auto-generated via integration
- Open Graph and Twitter meta tags in Layout.astro
- Vercel Analytics integrated
- Default meta description: "Maatwerk websites"
- Language: Dutch (nl)

## Code Standards

### Astro-Specific (from .cursor/rules)
- Use content collections with Zod schemas for type-safe content queries
- Implement appropriate island hydration strategies (avoid `client:load` when `client:visible` suffices)
- Use Image/Picture components for optimization (prefer avif/webp formats)
- Handle API endpoints in `src/pages/api/` with Response objects
- Use dynamic routes with `[param].astro` or `[...spread].astro` patterns
- Never skip Astro image optimization

### TypeScript
- Strict mode enabled
- JSX configured for React (`react-jsx`)
- Skip lib check enabled

### Code Quality
- ESLint configured with TypeScript, Astro, and JSX a11y plugins
- Prettier formatting (100 char print width, tabs, Astro plugin)
- Accessibility rules enforced via eslint-plugin-jsx-a11y
- `no-undef` disabled for Astro-specific globals like ImageMetadata
- `@typescript-eslint/no-explicit-any` disabled

### File Organization
```
src/
├── assets/          # Static images and assets
├── components/      # Astro and React components
│   ├── ui/         # Reusable UI components
│   └── blog/       # Blog-specific components
├── content/         # Content collections (blog, projects, etc.)
├── emails/          # React Email templates
├── layouts/         # Page layouts (Layout.astro)
├── lib/            # Utility functions
├── pages/          # File-based routing
│   └── api/        # API endpoints
└── styles/         # Global CSS
```

## Key Patterns

### Content Query Pattern
```typescript
import { getCollection, getEntryBySlug } from 'astro:content';

// Get all entries
const projects = await getCollection('projects');

// Filter by type
const premiumProjects = await getCollection('projects', ({ data }) => {
  return data.type === 'premium';
});

// Get single entry
const project = await getEntryBySlug('projects', 'slug-name');
```

### API Route Pattern
API routes must return Response objects:
```typescript
export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();

  return new Response(JSON.stringify({ data }), {
    status: 200,
    statusText: "OK"
  });
};
```

### Layout Usage
The main Layout.astro accepts props: `title`, `description`, `image` for SEO. All pages should use this layout with appropriate metadata.

## Deployment

- Platform: Vercel
- Adapter: @astrojs/vercel
- Build command: `npm run build`
- Output directory: `dist/`
- Environment variables: RESEND_API_KEY (for email functionality)

## Important Notes

- Site language is Dutch - all content and UI text should be in Dutch
- Images should be optimized through Astro's Image component
- Never commit API keys - use environment variables
- The blog collection uses a glob loader pattern for automatic discovery
- Project types are strictly typed as enum: "onepager" | "premium" | "ecommerce"
