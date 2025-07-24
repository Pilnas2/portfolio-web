<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Portfolio Project Instructions

This is a modern personal portfolio website built with React, TypeScript, and Tailwind CSS, optimized for GitHub Pages deployment.

## Project Structure
- **React 19** with TypeScript for type safety
- **Tailwind CSS** for styling with custom design system
- **Lucide React** for icons
- **Vite** as build tool for fast development
- **GitHub Pages** deployment ready

## Code Style Guidelines
- Use functional components with hooks
- Prefer TypeScript interfaces for props
- Use Tailwind classes with custom design tokens
- Follow Czech language for content (UI text in Czech)
- Implement responsive design mobile-first approach
- Use semantic HTML elements for accessibility

## Component Architecture
- Keep components in `/src/components/` directory
- Each component should be self-contained
- Use custom Tailwind classes defined in index.css
- Implement smooth scrolling and animations
- Ensure components are fully responsive

## Design System
- Primary color: Blue (#3B82F6 and variants)
- Typography: Inter font family
- Spacing: Tailwind default spacing scale
- Custom animations: fade-in, slide-up, bounce-subtle
- Consistent card hover effects and transitions

## Deployment
- Configured for GitHub Pages with `gh-pages` package
- Base path set to `/portfolio/` in vite.config.ts
- Use `npm run deploy` to deploy to GitHub Pages
- Ensure all assets use relative paths

## Development Best Practices
- Write semantic and accessible HTML
- Use TypeScript for all components
- Implement proper error handling
- Optimize images and assets
- Follow React best practices for state management
- Test components for responsiveness across devices
