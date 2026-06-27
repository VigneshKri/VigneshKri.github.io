# Vignesh R Krishnan — Technical Product Manager Portfolio

A world-class portfolio website built to communicate product thinking, decision making, customer obsession, business impact, and technical depth.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Deployment:** GitHub Pages (static export)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── page.tsx                           # Homepage
│   ├── layout.tsx                         # Root layout (navbar, footer, theme)
│   ├── not-found.tsx                      # 404 page
│   ├── about/                             # About page
│   ├── contact/                           # Contact page
│   ├── writing/                           # Writing / knowledge base
│   └── case-studies/
│       ├── page.tsx                        # Case study index
│       ├── biometric-authentication/       # Case Study 1
│       ├── ai-semantic-search/             # Case Study 2
│       └── mobile-release-platform/        # Case Study 3
├── components/
│   ├── navbar.tsx                          # Persistent navigation
│   ├── footer.tsx                          # Persistent footer
│   ├── theme-provider.tsx                  # Dark mode context
│   ├── fade-in.tsx                         # Scroll-triggered animations
│   ├── section-container.tsx               # Reusable section layout
│   ├── metric-card.tsx                     # Key metric display
│   ├── case-study-card.tsx                 # Case study preview card
│   ├── case-study-layout.tsx               # Case study page components
│   ├── writing-card.tsx                    # Article preview card
│   ├── timeline.tsx                        # Experience timeline
│   ├── cta-section.tsx                     # Call-to-action section
│   └── skill-chip.tsx                      # Skill/tag chip
```

## Deployment

### GitHub Pages

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys to GitHub Pages on push to `main`.

1. Push the repository to GitHub
2. Go to Settings → Pages → Source → GitHub Actions
3. The workflow will deploy automatically on push to `main`

### Custom Domain

To use a custom domain, add a `CNAME` file to the `public/` directory with your domain name.

## Customization

### Placeholder Content

Search for `[TODO:` across the codebase to find all placeholder items that need real content:

- Resume link
- GitHub URL
- LinkedIn URL
- Email address
- Screenshots and diagrams in case studies

### Design System

Colors, typography, and spacing are defined in `src/app/globals.css` using Tailwind CSS theme variables.

## License

Private — All rights reserved.
