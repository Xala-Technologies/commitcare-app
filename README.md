# CommitCare

> A modern, responsive web application for home care services, built with cutting-edge web technologies to deliver exceptional user experience and accessibility.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Content Management](#content-management)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Code Quality](#code-quality)
- [Browser Support](#browser-support)
- [License](#license)

## 🎯 Overview

CommitCare is a comprehensive web platform designed for home care service providers. The application offers a modern, user-friendly interface for showcasing services, managing content, and facilitating client communication. Built with performance and accessibility in mind, it supports both English and Norwegian languages, making it suitable for international and local markets.

## ✨ Features

### Core Functionality
- **Multi-language Support**: English and Norwegian (Norsk) language support
- **Responsive Design**: Fully responsive layout optimized for all device sizes
- **SEO Optimized**: Comprehensive SEO implementation with meta tags, Open Graph, and Twitter Cards
- **Content Management**: MDX-based content system for easy content updates
- **Contact Forms**: Integrated contact form with validation and submission handling
- **Blog System**: Content management system for blog posts and articles
- **Service Showcase**: Detailed service pages with comprehensive information
- **Accessibility**: WCAG-compliant components and semantic HTML

### Technical Features
- **Type-Safe**: Full TypeScript implementation with strict mode
- **Fast Builds**: Vite-powered development and production builds
- **Component Library**: shadcn-ui components with Radix UI primitives
- **Modern Styling**: Tailwind CSS with custom design tokens
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: TanStack Query for server state management
- **Routing**: React Router v6 with client-side routing
- **Animations**: Framer Motion for smooth animations and transitions

## 🛠 Technology Stack

### Core Framework
- **React 18.3** - UI library
- **TypeScript 5.8** - Type-safe JavaScript
- **Vite 5.4** - Build tool and dev server

### UI & Styling
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **shadcn-ui** - High-quality component library
- **Radix UI** - Unstyled, accessible component primitives
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Routing & State
- **React Router DOM 6.30** - Client-side routing
- **TanStack Query 5.83** - Server state management

### Forms & Validation
- **React Hook Form 7.61** - Form state management
- **Zod 3.25** - Schema validation

### Content & SEO
- **MDX** - Markdown with JSX support
- **React Helmet Async** - Document head management
- **React Markdown** - Markdown rendering

### Development Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting rules
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git** (for version control)

### Verify Installation

```bash
node --version  # Should be v18.0.0 or higher
npm --version   # Should be v9.0.0 or higher
git --version   # Any recent version
```

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Xala-Technologies/commitcare-app.git
cd commitcare-app
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required dependencies as specified in `package.json`.

### 3. Environment Setup

Create a `.env` file in the root directory (if needed):

```bash
# Contact Form API (if using backend)
VITE_CONTACT_API_URL=/api/kontakt

# Add other environment variables as needed
```

### 4. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## 💻 Development

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The server runs on port `8080` by default. You can change this in `vite.config.ts`.

### Code Structure

- **Components**: Reusable UI components in `src/components/`
- **Pages**: Route components in `src/pages/`
- **Utilities**: Helper functions in `src/lib/`
- **Styles**: Global styles and tokens in `src/styles/`
- **Assets**: Images and static files in `src/assets/`

### TypeScript

The project uses TypeScript with strict mode enabled. All files should have proper type definitions. See `tsconfig.json` for configuration.

### Styling Guidelines

- Use Tailwind CSS utility classes for styling
- Custom design tokens are defined in `src/styles/tokens.css`
- Component-specific styles should be co-located with components
- Follow the design system guidelines in `DESIGN_TOKENS.md`

## 🏗 Building for Production

### Build Command

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

This serves the production build locally for testing.

### Build Output

The production build includes:
- Optimized JavaScript bundles
- Minified CSS
- Optimized images
- Source maps (for debugging)

## 📁 Project Structure

```
commitcare-app/
├── public/                 # Static public assets
│   ├── favicon.ico
│   ├── robots.txt
│   └── placeholder.svg
├── src/
│   ├── api/               # API integration files
│   │   └── kontakt.ts
│   ├── assets/            # Images and static assets
│   │   ├── images/
│   │   └── reference/
│   ├── components/        # React components
│   │   ├── sections/      # Page sections
│   │   ├── ui/            # UI components (shadcn-ui)
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Layout.tsx
│   │   ├── NavLink.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── SEO.tsx
│   ├── hooks/             # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/               # Utilities and helpers
│   │   ├── api/           # API utilities
│   │   ├── content.ts     # Content management
│   │   ├── publicSiteContent.ts
│   │   ├── site-config.ts # Site configuration
│   │   └── utils.ts       # General utilities
│   ├── pages/             # Page components
│   │   ├── Index.tsx      # Home page
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Blog.tsx
│   │   ├── Contact.tsx
│   │   ├── OmOss.tsx      # Norwegian pages
│   │   ├── Tjenester.tsx
│   │   ├── Kontakt.tsx
│   │   ├── TrygghetOgKvalitet.tsx
│   │   ├── Jobb.tsx
│   │   ├── Innsikt.tsx
│   │   ├── Sitemap.tsx
│   │   └── NotFound.tsx
│   ├── styles/            # Global styles
│   │   └── tokens.css     # Design tokens
│   ├── App.tsx            # Main app component
│   ├── App.css            # App-specific styles
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── content/               # MDX content files
│   ├── pages/             # Page content
│   ├── services/          # Service content
│   └── posts/             # Blog posts
├── docs/                  # Documentation
│   └── responsive-guidelines.md
├── dist/                  # Build output (generated)
├── node_modules/          # Dependencies (generated)
├── .gitignore
├── components.json        # shadcn-ui configuration
├── eslint.config.js      # ESLint configuration
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── tsconfig.app.json     # App-specific TypeScript config
├── tsconfig.node.json    # Node-specific TypeScript config
├── vercel.json           # Vercel deployment configuration
└── vite.config.ts        # Vite configuration
```

## ⚙️ Configuration

### Site Configuration

Site-wide settings are defined in `src/lib/site-config.ts`:

```typescript
export const siteConfig = {
  companyName: "Commit Care",
  phone: "+47 12 34 56 78",
  email: "kontakt@commitcare.no",
  // ... other settings
}
```

### Vite Configuration

Build and development settings are in `vite.config.ts`. Key configurations:
- Development server port: `8080`
- Path aliases: `@/` maps to `src/`
- React plugin with SWC for fast refresh

### Tailwind Configuration

Tailwind CSS is configured in `tailwind.config.ts` with:
- Custom color palette
- Typography plugin
- Animation utilities
- Custom design tokens

## 📝 Content Management

### MDX Content System

Content is managed through MDX files in the `content/` directory:

- **Pages**: `content/pages/` - Static page content
- **Services**: `content/services/` - Service descriptions
- **Posts**: `content/posts/` - Blog posts and articles

### Editing Content

1. Navigate to the appropriate directory in `content/`
2. Edit the MDX file with frontmatter:

```mdx
---
title: Page Title
description: Page description
slug: page-slug
---

# Content

Your markdown content here.
```

3. The content is loaded via `src/lib/content.ts`

For detailed content management instructions, see `content/README.md` and `INNHOLDSSYSTEM.md`.

## 🚢 Deployment

### Vercel Deployment

The project is configured for deployment on Vercel:

1. **Automatic Deployment**: Connected to GitHub repository
2. **Configuration**: See `vercel.json` for deployment settings
3. **Build Settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Framework Preset: Vite

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Other Platforms

The application can be deployed to any static hosting service:
- **Netlify**: Configure build command and output directory
- **AWS S3 + CloudFront**: Upload `dist/` directory
- **GitHub Pages**: Configure GitHub Actions workflow

## 🔐 Environment Variables

Create a `.env` file in the root directory for environment-specific variables:

```env
# API Configuration
VITE_CONTACT_API_URL=/api/kontakt

# Add other variables as needed
```

**Note**: Variables must be prefixed with `VITE_` to be accessible in the browser.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on `http://localhost:8080` |
| `npm run build` | Create optimized production build in `dist/` |
| `npm run build:dev` | Create development build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🔍 Code Quality

### Linting

The project uses ESLint for code quality:

```bash
npm run lint
```

### Type Checking

TypeScript provides compile-time type checking:

```bash
# Type checking is automatic during build
npm run build
```

### Code Style

- Follow TypeScript best practices
- Use functional components with hooks
- Maintain consistent naming conventions
- Write self-documenting code with clear variable names

## 🌐 Browser Support

The application supports all modern browsers:

- **Chrome** (latest)
- **Firefox** (latest)
- **Safari** (latest)
- **Edge** (latest)

For older browser support, consider adding polyfills for:
- ES6+ features
- CSS Grid and Flexbox
- Fetch API

## 📄 License

This is a private project. All rights reserved.

---

## 📞 Support

For questions or support, please contact:
- **Email**: kontakt@commitcare.no
- **Phone**: +47 12 34 56 78

---

**Built with ❤️ using modern web technologies**
