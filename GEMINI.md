# Project Overview

This is a React web application built with Vite. It uses React Router for routing, Tailwind CSS for styling, and Leaflet for map functionality. The project is configured for server-side rendering (SSR).

# Building and Running

To get started with this project, you'll need to install the dependencies and then use the provided scripts to run the development server or build the application.

**Install Dependencies:**
```bash
npm install
```

**Run the development server:**
```bash
npm run dev
```

**Build the application:**
```bash
npm run build
```

**Start the production server:**
```bash
npm run start
```

**Typecheck the application:**
```bash
npm run typecheck
```

**Lint the application:**
```bash
npm run lint
```

# Development Conventions

*   **Routing:** The application uses file-based routing provided by React Router. The routes are defined in the `app/routes.ts` file.
*   **Styling:** The project uses Tailwind CSS for styling. The main CSS file is `app/app.css`.
*   **Type Checking:** The project uses TypeScript for static type checking. You can run the type checker with `npm run typecheck`.
*   **Linting:** The project uses `oxlint` for linting. You can run the linter with `npm run lint`.
