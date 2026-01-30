# Luzardo Landing Page

Marketing website for Luzardo - AI-powered cattle weight estimation.

## Live Site

**URL**: https://luzardo.tech

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Hosting**: Railway (business-operations environment)
- **CDN/Security**: Cloudflare

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

## Deployment

Deployments are automatic via Railway when pushing to the `main` branch.

## Project Structure

```
src/
├── components/     # React components
│   ├── layout/     # Navbar, Footer
│   ├── sections/   # Page sections (Hero, Benefits, etc.)
│   └── ui/         # shadcn/ui components
├── pages/          # Route pages
├── hooks/          # Custom React hooks
├── lib/            # Utilities
└── assets/         # Images, fonts
```
