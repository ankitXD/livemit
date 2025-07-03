# LiveMit Project Overview

This repository contains the codebase for LiveMit, a modern SaaS platform for project reviews and feedback.

## Frontend Progress (as of July 3, 2025)

- **Framework & Tooling:**

  - Built with React (Vite) for fast, modern development.
  - Tailwind CSS and shadcn/ui for utility-first, accessible, and beautiful UI components.
  - React Router DOM for SPA routing.
  - framer-motion for scroll/hover animations throughout the UI.

- **Theme & Design:**

  - Consistent black/blue gradient theme with white text and blue accents.
  - Responsive, mobile-friendly layouts.
  - Sticky, blurred navbar with modern glassmorphism effect.
  - Animated cards and sections (scroll-in, hover, and button effects).

- **Pages & Routing:**

  - Home: Hero, features, workflow, social proof, pricing, CTA, FAQ, and footer. All sections animated.
  - Features: Problem/solution, features grid, matching theme, animated cards/sections.
  - Pricing: Three plans (Free, Pro, Team), INR pricing, styled cards, CTA buttons link to signup, animated cards.
  - Blog: Example posts, modern cards, blue accent, hover and scroll-in effects.
  - Login/SignUp/ForgotPassword: Auth forms, black/blue card, Google button, focus/hover states, links to each other. Navbar hidden on these routes.
  - Terms & Privacy: Generic, styled legal pages with clear sections.
  - Profile/UpdateProfile: User info, change password, update and logout actions.
  - Dashboard: Quick stats, list of sessions, "Create New Session" button, all styled and responsive.

- **Component Structure:**

  - Navbar: Responsive, sticky, blurred, with navigation and CTA buttons. Hidden on auth routes.
  - All UI components use Tailwind, shadcn/ui, and framer-motion for consistency and animation.

- **Other Improvements:**
  - All pricing now in Indian Rupees (₹).
  - All CTA buttons in pricing and hero sections link to /signup.
  - Accessibility and keyboard navigation considered.
  - Scroll position resets to top on every route change.
  - README.md in frontend fully documents routes, structure, and setup.

## How to Run Frontend

1. `cd frontend`
2. `npm install`
3. `npm run dev`
4. Visit [http://localhost:5173](http://localhost:5173)

---

For more details, see `frontend/README.md`.
