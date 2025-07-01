# LiveMit Frontend

This is the frontend for the LiveMit SaaS platform, built with React (Vite), Tailwind CSS, and shadcn/ui. It features a modern, responsive, and accessible UI with a black/blue theme.

## Project Structure

```
frontend/
  ├── public/
  ├── src/
  │   ├── components/
  │   │   ├── Navbar.jsx
  │   │   ├── Login.jsx
  │   │   ├── SignUp.jsx
  │   ├── pages/
  │   │   ├── Home.jsx
  │   │   ├── Features.jsx
  │   │   ├── Pricing.jsx
  │   │   ├── Blog.jsx
  │   │   ├── Terms.jsx
  │   │   ├── Privacy.jsx
  │   │   └── ...
  │   ├── App.jsx
  │   ├── main.jsx
  │   └── index.css
  ├── package.json
  ├── vite.config.js
  └── README.md
```

## Routing Overview

Routing is handled by **React Router DOM**. The main routes are defined in `App.jsx` and correspond to the following pages:

| Path        | Component | Description                               |
| ----------- | --------- | ----------------------------------------- |
| `/`         | Home      | Landing page with hero, features, pricing |
| `/features` | Features  | Key features and benefits                 |
| `/pricing`  | Pricing   | Pricing plans (in INR)                    |
| `/blog`     | Blog      | Blog posts and updates                    |
| `/login`    | Login     | User login form                           |
| `/signup`   | SignUp    | User registration form                    |
| `/terms`    | Terms     | Terms of Service                          |
| `/privacy`  | Privacy   | Privacy Policy                            |

All navigation is handled via the `Navbar` component, which is sticky, blurred, and responsive.

## Styling

- **Tailwind CSS** is used for utility-first styling and responsive design.
- **shadcn/ui** provides accessible, modern UI components.
- The theme uses a black/blue gradient background, blue accents, and white text for a professional SaaS look.

## Getting Started

1. Install dependencies:
   ```sh
   cd frontend
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Customization

- Update routes or add new pages in `src/pages/` and register them in `App.jsx`.
- Edit the `Navbar.jsx` for navigation changes.
- Adjust theme and styles in `index.css` or Tailwind config.

## License

MIT
