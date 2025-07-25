<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Portfolio Project Instructions

This is a modern personal portfolio website built with React, TypeScript, and Tailwind CSS, optimized for GitHub Pages deployment with multi-language support.

## Project Structure
- **React 19** with TypeScript for type safety
- **Tailwind CSS** for styling with custom design system
- **Lucide React** for icons
- **Vite** as build tool for fast development
- **GitHub Pages** deployment ready
- **Multi-language support** with English and Czech translations

## Code Style Guidelines
- Use functional components with hooks
- Prefer TypeScript interfaces for props
- Use Tailwind classes with custom design tokens
- Support both English and Czech languages using translation context
- Implement responsive design mobile-first approach
- Use semantic HTML elements for accessibility

## Multi-Language Implementation
- All text content must use the `t()` function from `useLanguage` hook
- Add translations to `src/contexts/LanguageContext.tsx`
- Use translation keys in format: `section.subsection.key`
- Language switcher is available in header for both desktop and mobile
- Browser language detection with localStorage persistence

## Component Architecture
- Keep components in `/src/components/` directory
- Each component should be self-contained
- Use custom Tailwind classes defined in index.css
- Implement smooth scrolling and animations
- Ensure components are fully responsive
- Import and use `useLanguage` hook for translations

## Design System
- Primary color: Blue (#3B82F6 and variants)
- Typography: Inter font family
- Spacing: Tailwind default spacing scale
- Custom animations: fade-in, slide-up, bounce-subtle
- Consistent card hover effects and transitions

## Deployment
- Configured for GitHub Pages with `gh-pages` package
- Base path set to `/portfolio-web/` in vite.config.ts
- Use `npm run deploy` to deploy to GitHub Pages
- Ensure all assets use relative paths

## Development Best Practices
- Write semantic and accessible HTML
- Use TypeScript for all components
- Implement proper error handling
- Optimize images and assets
- Follow React best practices for state management
- Test components for responsiveness across devices
- Always use translations for user-facing text
