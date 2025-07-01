# LiveMit Project Overview

This repository contains the codebase for LiveMit, a modern SaaS platform for project reviews and feedback.

## Frontend Progress (as of July 1, 2025)

- **Framework & Tooling:**

  - Built with React (Vite) for fast, modern development.
  - Tailwind CSS and shadcn/ui for utility-first, accessible, and beautiful UI components.
  - React Router DOM for SPA routing.

- **Theme & Design:**

  - Consistent black/blue gradient theme with white text and blue accents.
  - Responsive, mobile-friendly layouts.
  - Sticky, blurred navbar with modern glassmorphism effect.

- **Pages & Routing:**

  - Home: Hero, features, workflow, social proof, pricing, CTA, FAQ, and footer.
  - Features: Problem/solution, features grid, matching theme.
  - Pricing: Three plans (Free, Pro, Team), INR pricing, styled cards, CTA buttons link to signup.
  - Blog: Example posts, modern cards, blue accent, hover effects.
  - Login/SignUp: Auth forms, black/blue card, Google button, focus/hover states, links to each other.
  - Terms & Privacy: Generic, styled legal pages with clear sections.

- **Component Structure:**

  - Navbar: Responsive, sticky, blurred, with navigation and CTA buttons.
  - All UI components use Tailwind and shadcn/ui for consistency.

- **Other Improvements:**
  - All pricing now in Indian Rupees (₹).
  - All CTA buttons in pricing and hero sections link to /signup.
  - Accessibility and keyboard navigation considered.
  - README.md in frontend fully documents routes, structure, and setup.

## How to Run Frontend

1. `cd frontend`
2. `npm install`
3. `npm run dev`
4. Visit [http://localhost:5173](http://localhost:5173)

---

For more details, see `frontend/README.md`.
